#!/usr/bin/env bash
# Starts a new client site from one of the 10 templates.
#
#   tools/new-client.sh <template 1-10> <client-slug> [--public] [--local]
#
#   tools/new-client.sh 4 jane-doe-hair
#
# What it does:
#   1. Copies the latest Template-<n> from GitHub into ../<client-slug>
#      (next to this repo, or into $CLIENTS_DIR if set)
#   2. Renames the project and points site.url at https://<client-slug>.netlify.app
#   3. Creates a GitHub repo <your-account>/<client-slug> (private unless
#      --public) and pushes the first commit. --local skips this step.
#
# Then follow NEW-CLIENT.md: fill in the content, connect the repo to Netlify,
# switch off the badge and point the form emails at the client.
set -euo pipefail

die() { echo "Error: $*" >&2; exit 1; }

TEMPLATE="${1:-}"
SLUG="${2:-}"
VISIBILITY="--private"
LOCAL_ONLY=0
for arg in "${@:3}"; do
  case "$arg" in
    --public) VISIBILITY="--public" ;;
    --local) LOCAL_ONLY=1 ;;
    *) die "unknown option: $arg" ;;
  esac
done

[[ "$TEMPLATE" =~ ^([1-9]|10)$ ]] || die "first argument must be a template number from 1 to 10"
[[ "$SLUG" =~ ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$ ]] || die "client slug must be lowercase letters, numbers and dashes, e.g. jane-doe-hair"
command -v gh >/dev/null || die "GitHub CLI (gh) is not installed: https://cli.github.com"
gh auth status >/dev/null 2>&1 || die "run 'gh auth login' first"

OWNER="${GITHUB_OWNER:-$(gh api user -q .login)}"
CLIENTS_DIR="${CLIENTS_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"
DEST="$CLIENTS_DIR/$SLUG"
URL="https://$SLUG.netlify.app"

[[ -e "$DEST" ]] && die "$DEST already exists"
if [[ $LOCAL_ONLY -eq 0 ]] && gh repo view "$OWNER/$SLUG" >/dev/null 2>&1; then
  die "GitHub repo $OWNER/$SLUG already exists"
fi

echo "→ Copying Template-$TEMPLATE into $DEST"
gh repo clone "$OWNER/Template-$TEMPLATE" "$DEST" -- --depth 1 --quiet
rm -rf "$DEST/.git" "$DEST/.claude"
cd "$DEST"

echo "→ Naming the project $SLUG and setting the site URL to $URL"
SLUG="$SLUG" URL="$URL" node -e '
  const fs = require("fs");
  const { SLUG, URL } = process.env;
  const q = String.fromCharCode(39);
  const json = (file, edit) => {
    if (!fs.existsSync(file)) return;
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    edit(data);
    fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  };
  json("package.json", (pkg) => { pkg.name = SLUG; });
  json("package-lock.json", (lock) => {
    lock.name = SLUG;
    if (lock.packages?.[""]) lock.packages[""].name = SLUG;
  });
  const file = "src/config/content.js";
  const content = fs.readFileSync(file, "utf8");
  const updated = content.replace(
    /^(\s*)url: .*hairstylist-template-\d+\.netlify\.app.*$/m,
    (_, indent) => `${indent}url: ${q}${URL}${q}, // switch to their own domain once it is connected`,
  );
  if (updated === content) throw new Error("could not find site.url in " + file);
  fs.writeFileSync(file, updated);
'

git init --quiet -b main
git add -A
git commit --quiet -m "Start $SLUG from Template $TEMPLATE"

if [[ $LOCAL_ONLY -eq 1 ]]; then
  echo "→ Skipped GitHub (--local)"
else
  echo "→ Creating GitHub repo $OWNER/$SLUG (${VISIBILITY#--})"
  gh repo create "$OWNER/$SLUG" "$VISIBILITY" --source . --push >/dev/null
fi

cat <<NEXT

Done. The new site is in:
  $DEST

Next (details in NEW-CLIENT.md):
  1. Fill in src/config/content.js from the client's checklist, add their photos
     to public/images/, then check nothing is left:  grep -rn TODO src/config
  2. Preview it:  cd "$DEST" && npm install && npm run dev
  3. Push:  git add -A && git commit -m "Add client content" && git push
  4. In Netlify: import the repo, rename the project to $SLUG, switch off the
     badge, and add a form email notification to the client's address.
NEXT

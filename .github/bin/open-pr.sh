#!/usr/bin/env bash

if [ -z "$HEAD" ]; then
  echo "A head branch name to create must be provided."
  exit 2
fi

if [ -z "$BASE" ]; then
  echo "A base branch name to merge into must be provided."
  exit 2
fi

if [ -z "$TITLE" ]; then
  echo "A title for the pull request must be provided."
  exit 2
fi

if [ -z "$BODY" ]; then
  echo "A body message for the pull request must be provided."
  exit 2
fi

gh pr create \
  --label "${LABELS:=''}" \
  --body "$BODY" \
  --title "$TITLE" \
  --base "$BASE" \
  --head "$HEAD"

if [[ "$AUTO_MERGE" = "true" ]]; then
  gh pr merge --auto --squash
fi

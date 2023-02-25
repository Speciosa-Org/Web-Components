#!/usr/bin/env bash
# shellcheck disable=SC2086
# Ignore 2086 since we explicitly want to have word splitting
# for the location to check which could be multiple areas.

if [ -z "$CHECK_LOCATION" ]; then
  echo "CHECK_LOCATION must be provided to the environment."
  echo "If you want to check everything, use a period"
  exit 2
fi

if [ -z "$HEAD" ]; then
  echo "A head branch name to create must be provided to HEAD in the environment."
  exit 2
fi

if [ -z "$COMMIT_MESSAGE" ]; then
  echo "A commit message must be provided to COMMIT_MESSAGE in the environment."
  exit 2
fi

# We never want to run commit hooks in CI.
# It could lead to needing user input that can't be given.
export HUSKY=0

echo "branchHasChanges=false" >> "$GITHUB_OUTPUT"

if [[ \
  $(git diff --exit-code -- $CHECK_LOCATION) || \
  $(git ls-files --other --directory --exclude-standard $CHECK_LOCATION) \
]]; then
  git checkout -B "$HEAD"
  git config user.name ${GIT_USERNAME:="GitHub"}
  git config user.email ${GIT_EMAIL:="noreply@github.com"}
  git add $CHECK_LOCATION
  git commit --no-verify -m "$COMMIT_MESSAGE"
  git push origin -u -f "$HEAD"
  echo "branchHasChanges=true" >> "$GITHUB_OUTPUT"
fi

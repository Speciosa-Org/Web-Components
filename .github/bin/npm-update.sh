#!/usr/bin/env bash

if updatedDeps=$(npx --no-install npm-check-updates --configFileName=config.yml --configFilePath=etc/npm-check-updates/ --errorLevel=2); then
  {
    echo "# Nothing to update"
    echo ""
    echo "No dependencies were found to have an update."
  } > "$GITHUB_STEP_SUMMARY"

  exit 0
fi

export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=true
npm install

{
  echo "# Dependencies Updated"
  echo ""
  echo "Some dependencies had an update."
  echo ""
  echo ""
  echo "<details>"
  echo "<summary>Updated Dependency List</summary>"
  echo ""
  echo "\`\`\`"
  echo "$updatedDeps"
  echo "\`\`\`"
  echo ""
  echo "</details>"
  echo ""
} > "$GITHUB_STEP_SUMMARY"

# Multiline strings need to be handled specially with GH.
# So we can't condense the submissions to output.
# shellcheck disable=SC2129
echo "outdated=true" >> "$GITHUB_OUTPUT"
echo "updatedDeps<<EOF" >> "$GITHUB_OUTPUT"
echo "$updatedDeps" >> "$GITHUB_OUTPUT"
echo "EOF" >> "$GITHUB_OUTPUT"

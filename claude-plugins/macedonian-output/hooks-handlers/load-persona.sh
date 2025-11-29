#!/bin/bash
# Load Macedonian restaurant persona for Claude Code
# Only activates for users with "yaakov" in their name with 50% probability

# Check username - activate for any user containing "yaakov" (case-insensitive)
shopt -s nocasematch
if [[ ! "$(whoami)" =~ yaakov ]]; then
    exit 0  # Silent exit for other users
fi

# Random 50% activation chance
# $RANDOM generates 0-32767, modulo 2 gives 0-1
# Trigger only when result is 0 (50% probability)
if [ $((RANDOM % 2)) -ne 0 ]; then
    exit 0  # Silent exit 50% of the time
fi

# Both conditions met - load the persona!
# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Load the persona prompt (one directory up from hooks-handlers/)
cat "$SCRIPT_DIR/../persona-prompt.md"

#!/bin/bash
# ============================================================
# Nila Herbals — Local Preview Server
# Run this anytime inside GitHub Codespaces to preview the
# website before pushing to GitHub / deploying on Netlify.
#
# USAGE:
#   ./preview.sh
#
# Then click the popup "Open in Browser" notification,
# or go to the PORTS tab in Codespaces and open port 8080.
#
# Press Ctrl+C to stop the server when you're done.
# ============================================================

PORT=8080

echo "============================================"
echo "  Nila Herbals — Local Preview Server"
echo "============================================"
echo "Starting server on port $PORT ..."
echo "Once running, open the PORTS tab in Codespaces"
echo "and click the globe icon next to port $PORT."
echo "Press Ctrl+C to stop."
echo "============================================"

python3 -m http.server $PORT

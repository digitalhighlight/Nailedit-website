#!/usr/bin/env bash
# Run this script LOCALLY (not in CI) to download Figma assets into ./assets/
# These URLs expire after 7 days — re-export from Figma if they stop working.
set -e
mkdir -p assets

download() { echo "Downloading $2..."; curl -sSL "$1" -o "assets/$2"; }

# Logo
download "https://www.figma.com/api/mcp/asset/d2e2b7a8-abb8-4524-a64f-20548f22e524" "logo.png"

# Hero images (4 color variants)
download "https://www.figma.com/api/mcp/asset/ffac4fe0-1b4b-4c2a-91a3-577d6e10d062" "hero-green.jpg"
download "https://www.figma.com/api/mcp/asset/5713bf7d-479f-4797-9455-9d2eda2797f0" "hero-blue.jpg"
download "https://www.figma.com/api/mcp/asset/d03bdad5-0efc-4a21-915e-25a5bf7934cc" "hero-dark.jpg"
download "https://www.figma.com/api/mcp/asset/1855386a-a904-4751-8724-6bf75a02ad08" "hero-red.jpg"

# Nail shape icons
download "https://www.figma.com/api/mcp/asset/a2f85cbc-621d-46ef-937e-82a34ecd8805" "nail-1.svg"
download "https://www.figma.com/api/mcp/asset/5021a749-66ec-4334-8500-fbf65d3ca1d3" "nail-2.svg"
download "https://www.figma.com/api/mcp/asset/e83da6b8-fb28-44fe-b731-6ae128836117" "nail-3.svg"
download "https://www.figma.com/api/mcp/asset/e0a4f42c-c300-4006-b11a-44d8864c6565" "nail-4.svg"
download "https://www.figma.com/api/mcp/asset/e674bb84-81b5-4a56-954e-c356db62c6e9" "nail-5.svg"

# Problems section cards
download "https://www.figma.com/api/mcp/asset/593ab681-f9f4-4326-ba24-08fce2826edd" "card-blue.jpg"
download "https://www.figma.com/api/mcp/asset/17ccc829-eee9-4e7c-a9ae-881b3fb78f5c" "card-dark.jpg"
download "https://www.figma.com/api/mcp/asset/4235ab15-cab7-4483-9932-0e497448cfe5" "card-red.jpg"

# How it works phone mockup
download "https://www.figma.com/api/mcp/asset/30200de4-7a52-4c11-8805-34c16d47d91e" "phone-mockup.png"

# Benefits section cards
download "https://www.figma.com/api/mcp/asset/63fca0ff-3d4e-418a-b38f-392ba38ea2c9" "benefit-1.jpg"
download "https://www.figma.com/api/mcp/asset/efc60a15-93be-489b-9711-c6450c035d54" "benefit-2.jpg"
download "https://www.figma.com/api/mcp/asset/155cbfab-2589-41b0-9cd8-0448dafa9fe6" "benefit-3.jpg"

# Map section
download "https://www.figma.com/api/mcp/asset/ab3116c4-3b24-494a-a051-0b62d399b1a8" "map.jpg"
download "https://www.figma.com/api/mcp/asset/d4ce98a7-a5bb-46a5-96f5-6b14b1bf74ff" "stylist.jpg"

# Footer
download "https://www.figma.com/api/mcp/asset/e01496f9-7f8f-4b0f-a7af-84e3b76f0aa8" "footer-logo.png"

echo ""
echo "✅ All assets downloaded to ./assets/"
echo ""
echo "Next: update index.html to reference local paths (e.g. /assets/hero-green.jpg)"
echo "Then commit and push: git add assets/ && git commit -m 'add local assets' && git push"

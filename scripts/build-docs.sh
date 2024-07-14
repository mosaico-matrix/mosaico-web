echo "Building docs"
cd public/mosaico-docs
git fetch --all
git remote set-head origin main
cd ../..
git submodule update --remote public/mosaico-docs
if [ $? -ne 0 ]; then
    echo "Error pulling mosaico-docs"
    exit 1
fi


# Create venv and install dependencies
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Build the docs
mkdocs build

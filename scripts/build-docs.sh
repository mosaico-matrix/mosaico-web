echo "Building docs"
cd public
rm -rf mosaico-docs
git clone  --depth 1 https://github.com/mosaico-matrix/mosaico-docs
cd mosaico-docs

# Create venv and install dependencies
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Build the docs
mkdocs build

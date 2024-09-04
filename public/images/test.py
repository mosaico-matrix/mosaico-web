from mosaico import widget, config

# Create a simple text
text = widget.createText()
text.setText("Hello World")

# Set a nice color ^_^
text.setHexColor("#ff00ff")

# Custom font
text.setFont("10x20")

# Place where we want
text.moveTo(2,30)

def loop():
    # Called once each frame
    pass

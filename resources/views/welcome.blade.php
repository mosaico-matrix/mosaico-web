<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LED Matrix Background</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: black;
        }

        #led-matrix {
            display: grid;
            grid-template-columns: repeat(auto-fill, 20px);
            grid-template-rows: repeat(auto-fill, 20px);
            width: 100%;
            height: 100%;
        }

        .led {
            width: 20px;
            height: 20px;
            /*box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);*/
            transition: background-color 0.3s;
        }

    </style>
</head>
<body>
<div id="led-matrix"></div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ledMatrix = document.getElementById('led-matrix');
        const numLEDs = Math.floor(window.innerWidth / 20) * Math.floor(window.innerHeight / 20);

        for (let i = 0; i < numLEDs; i++) {
            const led = document.createElement('div');
            led.classList.add('led');
            ledMatrix.appendChild(led);
        }

        const leds = document.querySelectorAll('.led');

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function randomizeLEDs() {
            leds.forEach(led => {
                if (Math.random() > 0.7) { // 30% chance to be on
                    led.style.backgroundColor = getRandomColor();
                } else {
                    led.style.backgroundColor = 'black';
                }
            });
        }

        function randomizeSingleLED() {
            const led = leds[Math.floor(Math.random() * leds.length)];
            led.style.backgroundColor = getRandomColor();
        }

        randomizeLEDs();
        setInterval(randomizeSingleLED, 200);
    });

</script>
</body>
</html>

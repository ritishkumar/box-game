
        const playbtn = document.getElementById('play-btn')
        const stopbtn = document.getElementById('stop-btn')
        const clearbtn = document.getElementById('clear-btn')
        const gamecontainer = document.getElementById('game-container')


        const colors = ['#0000ff','#ff0000','#008000','#ffff00']
        const colorsname = {'#0000ff':'Blue','#ff0000':'Red','#008000':'Green','#ffff00':'Yellow'}
        let intervald;
        let boxCount = {'#0000ff':0 ,'#ff0000':0 ,'#008000':0 ,'#ffff00':0}

        function getRandomColor(){
            return colors[Math.floor(Math.random()*colors.length)]
        }

        function createBox(){
            const box = document.createElement('div');
            const colors= getRandomColor();
            box.classList.add('box')
            box.style.backgroundColor = colors ;
            box.style.top = `${Math.random()*(gamecontainer.offsetHeight-20)}px`;
            box.style.left = `${Math.random()*(gamecontainer.offsetWidth-20)}px`;
            gamecontainer.appendChild(box)
            boxCount[colors]++;
        }

        function startGame(){
        let boxCount = {'#0000ff':0 ,'#ff0000':0 ,'#008000':0 ,'#ffff00':0}
            intervalId = setInterval(()=>{
                createBox()
            },500)
        }

        function stopGame(){
            clearInterval(intervalId)
            let maxColor = null
            let maxCount = 0
            for (let colors in boxCount) {
                if (boxCount[colors]>maxCount){
                    maxCount=boxCount[colors]
                    maxColor=colors
                    }
                }
                console.log(maxColor)
            alert(`Blue:${boxCount['#0000ff']}\nRed:${boxCount['#ff0000']}\nGreen:${boxCount['#008000']}\nYellow:${boxCount['#ffff00']}\n\nThe winner is :${colorsname[maxColor]}`)

            const msg = new SpeechSynthesisUtterance(`The winner is ${colorsname[maxColor]}`)
            window.speechSynthesis.speak(msg)
        }
        function refresh(){
            gamecontainer.innerHTML = ''
            
        }
        playbtn.addEventListener('click',startGame)
        stopbtn.addEventListener('click',stopGame)
        clearbtn.addEventListener('click',refresh)

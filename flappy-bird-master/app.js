//the reason that i choose to do this website is beacuse this is such a classic game couple years ago. Althought it looks very simple but after i learn about js and coding. I learn that coding this is actually pretty hard. I want to spent some time following this process of creating this game on the youtube and understand the each line of this js. 

//link to the video: https://www.youtube.com/watch?v=8xPsg6yv7TU&t=114s
//there are also github link in her comments


document.addEventListener('DOMContentLoaded' , () => {
    // only load while all the html beening wrote 
    const bird = document.querySelector('.bird')
    //use querySelector to pick up elements from the html
    //save as const bird; so we can use it agian and again
    const gameDisplay = document.querySelector('.game-container')
    //use querySelector to pick up elements from html
    const ground = document.querySelector('.ground-moving')
    //use querySelector to pick up elements from html

    //add space to the left of the bird 
    let birdLeft = 220
     //add space to the bottom of the bird 
    let birdBottom = 100
     // create gravity for the bird; bird drop
    let gravity = 3
    //define the game is over/ if it is true; then we can play the game
    console.log('play')
    let isGameOver = false
    let gap = 430


    function startGame() {
    //add function
        birdBottom -= gravity
    //birdBotton add - gravity to it
        bird.style.bottom = birdBottom + 'px'
    //bird. is grab bird element 
        bird.style.left = birdLeft + 'px'
    }
    //evoke every 20 mili-second for the gravity
    let gameTimerId = setInterval(startGame, 20)

    //add a function of jump
    //e = event
    function control(e) {
        //if e (keyCode is a js method) (=== 32 is the keycode for the space bar)
        //if press the keycode === 32/ which is the space bar; then we jump
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        // before start of jump function; add 50px to the bird bottom; set the bird not over < 500px;can only jump only below 500 to keep bird in the window
        if (birdBottom < 500) birdBottom += 50
        //adding sapce to the bottom for the bird
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    //event: keyup; everytime finger leave the keyborad; evokes function
    document.addEventListener('keyup', control)
    // document.addEventListener('keyup', jump) 
    //change the jump to control since the control(e) is the control of the game now; only jump while press space but not any other keys

    //function to create obstacles
    function generateObstacle() {
        //add space to the obstacle
        let obstacleLeft = 500
        // generate random height for the obsticles
        //js method of Math.random() * # (multiplt any # with the #)
        let randomHeight = Math.random() * 60

       
        let obstacleBottom = randomHeight
        //js method create element; createElement to create div
        // const obstacle can be use in future
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
        //appendChild; grabbing elements from the html page; in this case 'sky' and 'ground' and putting them inside the parent div
        //(the child of the div)
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)

        //add space to the obstacle left
        obstacle.style.left = obstacleLeft + 'px'
        //add sapce to the left
        topObstacle.style.left = obstacleLeft + 'px'
         //add sapce to the bottom 
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        //move obsticle by 2 visually everytime obstacle is evoke
        function moveObstacle() {
            obstacleLeft -=2
            //reassign left of the obstacles left 
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            // let obstacles disapper after touch the -60px; after outside the views
            if (obstacleLeft === -60) {
                //stope the interval from the timmer
                clearInterval(timerId)
                //remove the passed and disapperard obstacles
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }
            if (
                //bigger than 200 and smaller than 280; then we have game over
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -180)||
                //the bird hits the bottom === 0
                birdBottom === 0 
                ) {
                gameOver()
                clearInterval(timerId)
            }
        }
        //put it in timer; keep evoking till we need it stop; not just once; keep evoke every mili-seconds
        let timerId = setInterval(moveObstacle, 20) 
        //js function; paused through function and here paused time; 3000 mili-seconds = 3 seconds
        //if this (!isGameOver) is false
        if (!isGameOver) setTimeout(generateObstacle, 3000)

    }
    generateObstacle()

    //function for game over
    function gameOver() {
        //stop game function from running
        clearInterval(gameTimerId)
        console.log('game over')
        isGameOver = true
        document.removeEventListener('keyup', control)
        ground.classList.add('ground')
        ground.classList.remove('ground-moving')
    }


})

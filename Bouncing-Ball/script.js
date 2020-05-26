const ball = document.getElementById("ball")
const shadow = document.getElementById("ball-shadow")
const animateButton = document.getElementById('animate-button')

//create function to begin & end animation on button click
let animated = false

const animateBall = () => {
    if(!animated){
        ball.classList.add("ball-animated")
        shadow.classList.add("ball-shadow-animated")
        animateButton.innerHTML = "Click To End Animation"
        animated = true
    } else if (animated){
        ball.classList.remove("ball-animated")
        shadow.classList.remove("ball-shadow-animated")
        animateButton.innerHTML = "Click To Start Animation"
        animated = false
    }
}

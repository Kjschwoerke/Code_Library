const animate = document.getElementById('animated-btn')

const triggerAnimation = () => {
    document.getElementById('animated').className = "animated-div"
}

$('#animated').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', 
function() {
    window.location.href = "https://kjschwoerke.com/"
});
const animate = document.getElementById('animated-btn')

const triggerAnimation = () => {
    document.getElementById('animated').className = "animated-div"
}

$('#animated').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', 
function() {
    //window.open("https://kjschwoerke.com/")
    window.location.href = "https://kjschwoerke.com/" 
});

//window.open('url') (opens url in new window)
//window.location.href = "url" (opens url in same window)
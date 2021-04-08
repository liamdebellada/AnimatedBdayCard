window.onload = function() {
    console.log("loaded.")
    setInterval(() => {
        createHeart()
    }, 300)
}

const createHeart = () => {
    let randomXpos = Math.floor(Math.random() * window.innerWidth)
    let size = Math.floor(Math.random() * 3) + 1
    let fallingDuration = Math.floor(Math.random() * 5)
    let heart = document.createElement('div')
    heart.style.cssText = `
        animation: fall ${fallingDuration}s linear forwards;
        left: ${randomXpos}px;
        top: -10px;
        height: ${size}rem;
    `
    document.body.appendChild(heart)
    heart.className = "heart"
    heart.addEventListener('animationend', (e) => {
        document.body.removeChild(e.originalTarget)
    })
}
// get container class
var container = document.getElementsByClassName('container')[0];
// get img tag in container
var img = container.getElementsByTagName('img')[0];
// get first button in container
var button = container.getElementsByTagName('button')[0];
// get second button in container
var button2 = container.getElementsByTagName('button')[1];
const index = img.src.split("/").indexOf("1.png")

// addEventListener to button
button.addEventListener('click', function() {
    console.log(index)
    let currentSrc = parseInt(img.src.split("/")[index].replace(".png", ""))
    console.log(currentSrc)
    if (currentSrc == 1) {
        currentSrc = 7
        img.src = `images/${currentSrc-1}.png`
    } else {
        img.src = `images/${currentSrc-1}.png`
    }
})

// addEventListener to button2
button2.addEventListener('click', function() {
    let currentSrc = parseInt(img.src.split("/")[index].replace(".png", ""))
    if (currentSrc == 6) {
        currentSrc = 0
        img.src = `images/${currentSrc+1}.png`
    } else {
        img.src = `images/${currentSrc+1}.png`
    }
})
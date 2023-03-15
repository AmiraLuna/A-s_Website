
console.log("THIS IS A TEST")


const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')


console.log("Hello")
let int = setInterval(blurring, 30)

let numb = 0
function blurring() {
    numb++
    loadingText.innerHTML = ` ${numb}% `

    if (numb == 100) {
        clearInterval(int)
    }

    loadingText.style.opacity = ` ${1 - 0.01*numb} `

    bg.style.filter = ` blur(${30 - 0.3*numb}px) `
}

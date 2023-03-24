const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'The Fitness Gram Pacer Test is a multistage aerobic-capacityghgvggkjkgkhgkgfkfgfhgkffddtdkyhbjuiwannauftyftgyghkms'
let idx = 1
let speed = 300 / speedEl.val

writeText()

function writeText() {
    textEl.innerText = text.slice(0,idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}
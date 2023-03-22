const prev = document.getElementById('back')
const next = document.getElementById('next')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > 5) {
        currentActive = 5
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    

    update()
})

function update() {
    if(currentActive == 1) {
        prev.disabled = true
    }
    else if(currentActive == 5){
        next.disabled = true
    }
    else
    {
        prev.disabled = false
        next.disabled = false
    }
}
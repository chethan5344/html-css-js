setInterval(setClock, 1000)

const hrh = document.querySelector('[data-hour-hand]')
const mh = document.querySelector('[data-minute-hand]')
const sh = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotations(secondRatio, sh)
    setRotations(minuteRatio, mh)
    setRotations(hourRatio, hrh)
}

function setRotations(ratio, hand) {
    hand.style.setProperty('--rotate', ratio * 360)
}
setClock()
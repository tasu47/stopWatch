let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mili = document.getElementById("mili");
let milis = 0;
let secs = 0;
let mins = 0;
let hours = 0;
let myInterval;
const appendZero = (no) => {
    if (no < 10) {
        return `0${no}`;
    }
    return no;

}
function startbtn() {
    myInterval = setInterval(update, 1)

};

function update() {
    mili.textContent = appendZero(milis);
    sec.textContent = appendZero(secs);
    min.textContent = appendZero(mins);
    hour.textContent = appendZero(hours);


    milis++
    if (milis > 100) {
        milis = 0
        secs++;
        if (secs > 59) {
            secs = 0;
            mins++;
            if (mins > 59) {
                mins = 0;
                hours++;
            }
        }
    }
}
function stop() {
    clearInterval(myInterval)

};
function reset() {
    milis = 0;
    secs = 0;
    mins = 0;
    hours = 0;
    clearInterval(myInterval)

    update()

};
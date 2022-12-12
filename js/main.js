function createBoxHours(hour){
    if(hour < 10) {hour = "0" + hour}
    return `
        <div class="box">
            <span class="hour">${hour}</span>
            <span>horas</p>
        </div>
    `
}

function createBoxMinutes(minutes){
    if(minutes < 10) {minutes = "0" + minutes}
    return `
        <div class="box">
            <span class="minutes">${minutes}</span>
            <span>minutos</p>
        </div>
    `
}

function createBoxSeconds(seconds){

    if(seconds < 10) {seconds = "0" + seconds}
    return `
        <div class="box">
            <span class="seconds">${seconds}</span>
            <span>segundos</p>
        </div>
    `
}


setInterval(function time(){

    document.querySelector(".modal").innerHTML =
    createBoxHours(new Date().getHours()) +
    createBoxMinutes(new Date().getMinutes()) + 
    createBoxSeconds(new Date().getSeconds())
})

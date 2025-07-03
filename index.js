let hScore = document.getElementById("homeScore")
let hCount = 0

let gScore = document.getElementById("guestScore")
let gCount = 0

function hPlusOne(){
    hCount += 1
    hScore.textContent = hCount
}

function hPlusTwo(){
    hCount += 2
    hScore.textContent = hCount
}

function hPlusThree(){
    hCount += 3
    hScore.textContent = hCount
}

function gPlusOne(){
    gCount += 1
    gScore.textContent = gCount
}

function gPlusTwo(){
    gCount += 2
    gScore.textContent = gCount
}

function gPlusThree(){
    gCount += 3
    gScore.textContent = gCount
}
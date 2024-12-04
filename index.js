let home_cnt = 0
let guest_cnt = 0

let score_home = document.getElementById('score')
let score_guest = document.getElementById('score2')


function add1_home(){
    home_cnt++
    score_home.textContent = home_cnt 
}

function add2_home(){
    home_cnt += 2
    score_home.textContent = home_cnt 
}

function add3_home(){
    home_cnt += 3
    score_home.textContent = home_cnt 
}

function add1_away(){
    guest_cnt++
    score_guest.textContent = guest_cnt
}

function add2_away(){
    guest_cnt += 2
    score_guest.textContent = guest_cnt
}

function add3_away(){
    guest_cnt += 3
    score_guest.textContent = guest_cnt
}

function reset(){
    home_cnt = 0
    guest_cnt = 0
    score_home.textContent = home_cnt
    score_guest.textContent = guest_cnt
}
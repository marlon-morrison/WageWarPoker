let pdice1 = 0;
let pdice2 = 0;
let ppoints = 0
let pmoney = 0;
let pchoice = 0;
let ptp = 0;
let ptm = 0;

let cpudice1 = 0;
let cpudice2 = 0;
let cpupoints = 0;
let cmoney = 0;
let cpuchoice = 0;
let cputp = 0;
let cputm = 0;

let again = true;

function round(params) {
    pmoney = prompt("How much will you like to bet?");
    pmoney = parseInt(pmoney)
    game();
}
function game(params) {
    cpuchoice = Math.floor(Math.random() * 3) + 1;
    if (cpuchoice == 1) {
        alert("The CPU desides to fold for this round.")
        ptm = ptm + pmoney;
        document.getElementById("playerm").innerText = ptm;
    } else if (cpuchoice == 2) {
        alert("The CPU desides to raise the bet for this round.")
        cmoney = pmoney + pmoney;
        pchoice = prompt("Will you 1)Raise, 2)Fold, or 3)Match the bet? (Enter 1,2, or 3 for your answer.)")
        if (pchoice == 1) {
            pmoney = cmoney + cmoney;
            game();
        } else if (pchoice == 2) {
            alert("You deside to fold for this round.");
            cputm = cputm + cmoney + pmoney;
            document.getElementById("cpum").innerText = cputm;
        } else if (pchoice == 3) {
            pmoney = cmoney;
            points();
        }
    } else if (cpuchoice == 3) {
        alert("The CPU desides to match your bet for this round.")
        cmoney = pmoney;
        points();
    }
}
function roll() {
    return Math.floor(Math.random() * 6) + 1;
}
function points() {
    pdice1 = roll();
    pdice2 = roll();
    cpudice1 = roll();
    cpudice2 = roll();
    ppoints = pdice1 + pdice2;
    cpupoints = cpudice1 + cpudice2;

    if (ppoints > cpupoints) {
        if (pdice1 == pdice2) {
            ppoints = ppoints + ppoints;
        }
        cputp = cputp + cpupoints;
        ptp = ptp + ppoints;
        ptm = ptm + pmoney;
    } else if (ppoints < cpupoints) {
        if (cpudice1 == cpudice2) {
            cpupoints = cpupoints + cpupoints;
        };
        ptp = ptp + ppoints;
        cputp = cputp + cpupoints;
        cputm = cputm + cmoney;
    } else {
        alert("You and the CPU rolled the same number. So you both get noting. ")
        ppoints = 0;
        cpupoints = 0;
    };

    console.log(ptp);
    console.log(ptm);
    console.log(cputp);
    console.log(cputm);
    document.getElementById("playerp").innerText = ptp;
    document.getElementById("playerm").innerText = ptm;
    document.getElementById("cpup").innerText = cputp;
    document.getElementById("cpum").innerText = cputm;

    if (ptp == 50) {
        document.getElementById("win").innerText = "You are the winner!";
    } else if (cputp == 50) {
        document.getElementById("win").innerText = "The CPU is the winner!";
    }
}

function stop(params) {
    if (ptp > cputp) {
        document.getElementById("win").innerText = "You are the winner!";
    } else if (ptp < cputp) {
        document.getElementById("win").innerText = "The CPU is the winner!";
    }
}
function restart(params) {
    window.location.reload();
}
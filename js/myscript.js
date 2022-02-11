
let pourcentage = 0;

const btn = document.getElementById('btn_Increment');
const showPour = document.getElementById('showPour');
showPour.innerText = pourcentage;

function Increment() {
    if (pourcentage === 99) {
        window.location.href ='fail.html'
    } else {
        pourcentage = pourcentage + 1;
    }
    showPour.innerText = pourcentage;
}

testme = setInterval(Increment, 150);



const km = document.querySelector('.p_km');
const gr = document.querySelector('.p_gr');
const wil = document.querySelector('.p_wid');
const upKm = document.querySelector('#speed .up');
const upGr = document.querySelector('#temperature .up');
const upWil = document.querySelector('#wheels .up');
const downKm = document.querySelector('#speed .down');
const downGr = document.querySelector('#temperature .down');
const downWil = document.querySelector('#wheels .down');
const range = document.querySelector('.range h2');
const price = document.querySelector('.price h2');
const prices = document.querySelector('#price');

const climateControl = document.querySelector('#climateControl');
const airConditioner = document.querySelector('#airConditioner');
const longRange = document.querySelector('#longRange');
const carType = document.querySelector('#carType');
const autopilot = document.querySelector('#autopilot');
const parameters = document.querySelector('.parameters');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const beige = document.querySelector('.beige');
const img = document.querySelector('.interior-image');
const imageBlack = './img/imageBlack.png';
const imageWhite = './img/imageWhite.png';
const imageBeige = './img/imageBeige.png';

upKm.onclick = () => {
    let count = parseFloat(km.innerHTML);
    let rangead = parseFloat(range.innerHTML);
    let pricead = parseFloat(price.innerHTML);
    km.innerHTML = (count + 5).toFixed(1);
    range.innerHTML = (rangead - 5).toFixed(1);
    price.innerHTML = (pricead + 500).toFixed(1);
};

downKm.onclick = () => {
    let count = parseFloat(km.innerHTML);
    let rangead = parseFloat(range.innerHTML);
    let pricead = parseFloat(price.innerHTML);
    if (count <= 0) {
        km.innerHTML = '0';
    } else {
        km.innerHTML = (count - 5).toFixed(1);
        range.innerHTML = (rangead + 5).toFixed(1);
        price.innerHTML = (pricead - 50).toFixed(1);
    }
};

upGr.onclick = () => {
    let count = parseFloat(gr.innerHTML);
    let rangead = parseFloat(range.innerHTML);
    let pricead = parseFloat(price.innerHTML);
    gr.innerHTML = (count + 1).toFixed(1);
    range.innerHTML = (rangead - 5).toFixed(1);
    price.innerHTML = (pricead + 200).toFixed(1);
};

downGr.onclick = () => {
    let count = parseFloat(gr.innerHTML);
    let rangead = parseFloat(range.innerHTML);
    let pricead = parseFloat(price.innerHTML);
    if (count <= 0) {
        gr.innerHTML = '0';
    } else {
        gr.innerHTML = (count - 1).toFixed(1);
        range.innerHTML = (rangead + 5).toFixed(1);
        price.innerHTML = (pricead - 50).toFixed(1);
    }
};

upWil.onclick = () => {
    let count = parseFloat(wil.innerHTML);
    let pricead = parseFloat(price.innerHTML);
    wil.innerHTML = (count + 2).toFixed(1);
    price.innerHTML = (pricead + 300).toFixed(1);
};

downWil.onclick = () => {
    let count = parseFloat(wil.innerHTML);
    let pricead = parseFloat(price.innerHTML);
    if (count <= 0) {
        wil.innerHTML = '0';
    } else {
        wil.innerHTML = (count - 2).toFixed(1);
        price.innerHTML = (pricead - 200).toFixed(1);
    }
};

climateControl.onchange = () => {
    let pricead = parseFloat(price.innerHTML);
    let rangead = parseFloat(range.innerHTML);
    if (climateControl.checked) {
        price.innerHTML = (pricead + 300).toFixed(1);
        range.innerHTML = (rangead - 5).toFixed(1);
    } else {
        price.innerHTML = (pricead - 300).toFixed(1);
        range.innerHTML = (rangead + 5).toFixed(1);
    }
};

airConditioner.onchange = () => {
    let pricead = parseFloat(price.innerHTML);
    let rangead = parseFloat(range.innerHTML);
    if (airConditioner.checked) {
        price.innerHTML = (pricead + 250).toFixed(1);
        range.innerHTML = (rangead - 5).toFixed(1);
    } else {
        price.innerHTML = (pricead - 250).toFixed(1);
        range.innerHTML = (rangead + 10).toFixed(1);
    }
};

longRange.onchange = () => {
    let pricead = parseFloat(price.innerHTML);
    let rangead = parseFloat(range.innerHTML);
    if (longRange.checked) {
        price.innerHTML = (pricead + 100).toFixed(1);
        range.innerHTML = (rangead - 3).toFixed(1);
    } else {
        price.innerHTML = (pricead - 100).toFixed(1);
        range.innerHTML = (rangead + 3).toFixed(1);
    }
};

carType.onchange = () => {
    parameters.style.display = carType.checked ? 'flex' : 'none';
};

autopilot.onchange = () => {
    let pricead = parseFloat(prices.innerHTML);
    prices.innerHTML = (pricead + (autopilot.checked ? 1000 : -1000)).toFixed(1);
};

black.onclick = () => {
    img.src = imageBlack;
};

white.onclick = () => {
    img.src = imageWhite;
};

beige.onclick = () => {
    img.src = imageBeige;
};

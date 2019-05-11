//fenceCalulator input query selectors 

const fenceInputLength = document.querySelector('#fenceInputLength');
const fenceInputAreas = document.querySelector('#fenceInputAreas');
const fenceCalculator = document.querySelector('#fenceCalculator');
const fenceButton = document.querySelector('#fenceButton');

//fenceCalculator output query selectors

const fenceOutputAreas = document.querySelector('#fenceOutputAreas');
const fenceOutputX = document.querySelector('#fenceOutputX');
const fenceOutputY = document.querySelector('#fenceOutputY');
const fenceOutputMax = document.querySelector('#fenceOutputMax');

//fenceCalculator main function

fenceButton.addEventListener('click', () => {
    let b = fenceInputLength.value;
    let a = fenceInputAreas.value;
    let c = 2 * a;
    let x = b / c;
    let d = a * x;
    let y = b - d;
    let max = x * y;
    
});






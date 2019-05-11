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
    let a = fenceInputAreas.value - -1;
    let x = b / (2 * a);
    let y = b - (3 * x);
    let max = x * y;
});

//Unfinished output operands:

fenceOutputAreas.nodeValue = a;
fenceOutputX.nodeValue = x;
fenceOutputY.nodeValue = y;
fenceOutputMax.nodeValue = max; 






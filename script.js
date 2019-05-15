//fenceCalulator input query selectors

const fenceForm = document.querySelector('#fenceForm');
const fenceInputLength = document.querySelector('#fenceInputLength');
const fenceInputAreas = document.querySelector('#fenceInputAreas');
const fenceCalculator = document.querySelector('#fenceCalculator');
const fenceButton = document.querySelector('#fenceButton');

//fenceCalculator output query selectors

const fenceOutputX = document.querySelector('#fenceOutputX');
const fenceOutputY = document.querySelector('#fenceOutputY');
const fenceOutputMax = document.querySelector('#fenceOutputMax');

//fenceCalculator main function

fenceButton.addEventListener('click', () => {
    let b = fenceInputLength.value;
    let a = fenceInputAreas.value- -1;
    let x = b / (2 * a);
    let y = b - (a * x);
    let max = x * y;
    let r = a % 1;

    //only runs output if values are within real parameters
    
    if (b > -0.999999999 && a > 1 && r == 0) {
        fenceOutputX.textContent = x;
        fenceOutputY.textContent = y;
        fenceOutputMax.textContent = max; 
    } else {
        alert("Please enter a valid number.");
    };
});

//prevents page from refreshing upon calculation

fenceForm.addEventListener('submit', function(fenceForm){fenceForm.preventDefault();});



//revenueCalculator input query selectors

const revenueForm = document.querySelector('#revenueForm');
const revenueInputCost = document.querySelector('#revenueInputCost');
const revenueInputAdmin = document.querySelector('#revenueInputAdmin');
const revenueMarketCost = document.querySelector('#revenueMarketCost');
const revenueMarketAdmin = document.querySelector('#revenueMarketAdmin');
const revenueCalculator = document.querySelector('#revenueCalculator');
const revenueButton = document.querySelector('#revenueButton');

//revenueCalculator output query selectors

const revenueOutputCost = document.querySelector('#revenueOutputCost');
const revenueOutputAdmin = document.querySelector('#revenueOutputAdmin');
const revenueOutputMax = document.querySelector('#revenueOutputMax');

//revenueCalculator main function

revenueButton.addEventListener('click', () => {
    let k = revenueInputCost.value;
    let z = revenueInputAdmin.value;
    let q = revenueMarketCost.value;
    let p = revenueMarketAdmin.value;
    let a = q * p;
    let b = (q * z) + (k * p);
    let c = k * z;
    let d = b / (2 * a);
    let e = c - ((b * b) / (4 * a));
    let f = e / d;
    
});

//prevents page from refreshing upon calculation

revenueForm.addEventListener('submit', function(revenueForm){revenueForm.preventDefault();});




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




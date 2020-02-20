
import './styles.css';
import { ready } from './utils';

const dollarAmount = document.getElementById('dollarAmount') as HTMLInputElement;
const tenPercentTip = document.getElementById('tenPercentTip') as HTMLButtonElement;
const fifteenPercentTip = document.getElementById('fifteenPercentTip') as HTMLButtonElement;
const twentyPercentTip = document.getElementById('twentyPercentTip') as HTMLButtonElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPercentage = document.getElementById('tipPercentage') as HTMLSpanElement;
const amountOfTip = document.getElementById('amountOfTip') as HTMLSpanElement;
const totalToBePaid = document.getElementById('totalToBePaid') as HTMLSpanElement;
const tipPercentAmount = document.getElementById('tipPercentAmount') as HTMLSpanElement;

// Default tip percent to 10
let tipPercent = .10;
tipPercentage.innerText = '10%';
tenPercentTip.disabled = true;
fifteenPercentTip.disabled = false;
twentyPercentTip.disabled = false;

ready(runTipCalcApp);

function runTipCalcApp() {

    dollarAmount.addEventListener('keyup', () => {
        calcTip();
    });

    tenPercentTip.addEventListener('click', () => {
        tipPercent = .10;
        calcTip();
        tenPercentTip.disabled = true;
        fifteenPercentTip.disabled = false;
        twentyPercentTip.disabled = false;
        tipPercentAmount.innerText = '10%';
        tipPercentage.innerText = '10%';
    });

    fifteenPercentTip.addEventListener('click', () => {
        tipPercent = .15;
        calcTip();
        tenPercentTip.disabled = false;
        fifteenPercentTip.disabled = true;
        twentyPercentTip.disabled = false;
        tipPercentAmount.innerText = '15%';
        tipPercentage.innerText = '15%';
    });

    twentyPercentTip.addEventListener('click', () => {
        tipPercent = .20;
        calcTip();
        tenPercentTip.disabled = false;
        fifteenPercentTip.disabled = false;
        twentyPercentTip.disabled = true;
        tipPercentAmount.innerText = '20%';
        tipPercentage.innerText = '20%';
    });


}



function calcTip() {
    if (dollarAmount.valueAsNumber < 0) {
        dollarAmount.classList.add('invalidValue');
        amountOfTip.innerText = 'Oops... Looks like an invalid value was added. Please try again!';
    } else {
        let tip = (Math.round((dollarAmount.valueAsNumber * tipPercent) * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);
        tip = isNaN(parseFloat(tip)) ? '0' : tip;
        amountOfTip.innerText = '$' + tip.toString();

        dollarAmount.classList.remove('invalidValue');
        billAmount.innerText = '$' + (isNaN(parseFloat(dollarAmount.value)) ? '0' : (dollarAmount.valueAsNumber.toFixed(2)));

        totalToBePaid.innerText = (dollarAmount.valueAsNumber * tipPercent + dollarAmount.valueAsNumber).toFixed(2).toString();
        totalToBePaid.innerText = '$' + (isNaN(parseFloat(totalToBePaid.innerText)) ? '0' : totalToBePaid.innerText);
    }
}


console.log('Ready to Party With Some TypeScript!');

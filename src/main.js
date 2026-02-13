import './style.css'

const celsiusInput = document.querySelector('#celsius');
const resultDiv = document.querySelector('#result');

//Fonction de conversion à tester dans les tests unitaires
window.convertir = () => {
    const c = parseFloat(celsiusInput.value);
    if (!isNaN(c)) {
        const f = (c * 9/5) + 32;
        resultDiv.innerText = `${c}°C est égal à ${f.toFixed(2)}°F`;
    }
};
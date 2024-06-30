const button = document.getElementById("newAdvice");
button.addEventListener("click", goToWork);

async function goToWork () {

    const URL = 'https://api.adviceslip.com/advice';
    
    try {
        const response = await fetch(URL);
        const result = await response.json();

        document.getElementById("header").textContent = `advice #${result.slip.id}`;
        document.getElementById("advice").textContent = `"${result.slip.advice}"`

    } catch(error) {
        console.log(error.message);
    };
};
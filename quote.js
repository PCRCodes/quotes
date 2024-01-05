const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');

async function fetchQuote() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '013b74bbd7msh842254423905caap1f7bdcjsna4510a1c4d89',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
         console.log(data);   
        quoteElement.textContent = data.content;
        authorElement.textContent = data.originator.name;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

fetchQuote();
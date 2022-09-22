const form = document.getElementById('form');
const btn = document.getElementById('get-btn');
const quoteDiv = document.querySelector('.quote-div');
form.appendChild(btn);

form.addEventListener('submit', (e) => {
        e.preventDefault();
        newQuote();
})


//   1642 quotes total


const newQuote = async () => {
        const result = await axios.get("https://type.fit/api/quotes");
        const randomQuote = Math.floor(Math.random() * 1642);
        const quote = result.data[randomQuote].text;
        const attribution = result.data[randomQuote].author;
        const quotePara = document.querySelector('.quote');
        quotePara.textContent = quote;
        const attributionPara = document.querySelector('.attribution');
        attributionPara.textContent = `\t -${attribution}`;
}



const container = document.querySelector("#container");
const form = document.getElementById("form");
const btn = document.getElementById("get-btn");
let quoteDiv;
let newBtn;
form.appendChild(btn);
container.appendChild(form);

const newQuote = async () => {
	const result = await axios.get("https://type.fit/api/quotes");
	const randomQuote = Math.floor(Math.random() * 1642);
	const quote = result.data[randomQuote].text;
	const attribution = result.data[randomQuote].author;
	quoteDiv = document.createElement("div");
	const quotePara = document.createElement("p");
	const attributionPara = document.createElement("p");
	quotePara.textContent = quote;
	attributionPara.textContent = `- ${attribution}`;
	quoteDiv.classList.add("quote-div");
	quotePara.classList.add(".quote-para");
	attributionPara.classList.add(".attribution-para");
	quoteDiv.appendChild(quotePara);
	quoteDiv.appendChild(attributionPara);
	container.appendChild(quoteDiv);
};

const clear = () => {
	container.removeChild(quoteDiv);
};


form.addEventListener("submit", (e) => {
	e.preventDefault();
	
});


btn.addEventListener('click', async () => {
       await newQuote();
        form.removeChild(btn);
        newBtn = document.createElement('button');
        newBtn.innerText = "Get Another Quote";
        form.appendChild(newBtn);

        newBtn.addEventListener('click', () => {
                clear();
                newQuote();
        })
})







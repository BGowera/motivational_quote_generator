const container = document.querySelector("#container");
const welcomeSection = document.getElementById("welcome-section");
const quoteSection = document.getElementById("quote-section");
const form = document.getElementById("form");
const btn = document.getElementById("get-btn");
let quoteDiv;
let quotePara;
let attributionPara;
let newBtn;
let result;
form.appendChild(btn);
quoteSection.appendChild(form);
container.appendChild(welcomeSection);
container.appendChild(quoteSection);

const images = [];

for (let i = 1; i <= 12; i++) {
	images.push(`${i}.jpg`);
}
function bgRandomize() {
	const randPic = Math.floor(Math.random() * images.length) + 1;
	return randPic;
}

function domManip() {
	const randomQuote = Math.floor(Math.random() * 1642);
	const quote = result.data[randomQuote].text;
	const attribution = result.data[randomQuote].author;
	quoteDiv = document.createElement("div");
	quotePara = document.createElement("p");
	attributionPara = document.createElement("p");
	quotePara.textContent = quote;

	result.data[randomQuote].author == null
		? (attributionPara.textContent = "- Anonymous")
		: (attributionPara.textContent = `- ${attribution}`);

	quoteDiv.classList.add("quote-div");
	quoteDiv.style.backgroundImage = `url(./img/${bgRandomize()}.jpg)`;
	quotePara.classList.add("quote-para");
	attributionPara.classList.add("attribution-para");
	quoteDiv.appendChild(quotePara);
	quoteDiv.appendChild(attributionPara);
	quoteSection.appendChild(quoteDiv);
}

const newError = () => {
	container.removeChild(welcomeSection);
	container.removeChild(quoteSection);
	const errMess = document.createElement("h1");
	errMess.classList.add("error");
	errMess.textContent =
		"Unexpected Error :( please refresh or check your connection";
	container.appendChild(errMess);
};

const newQuote = async () => {
	try {
		result = await axios.get("https://type.fit/api/quotes");
		domManip();
	} catch (e) {
		console.log("ERROR", e);
		newError();
	}
};

const clear = () => {
	quoteSection.removeChild(quoteDiv);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
});

btn.addEventListener("click", async () => {
	form.removeChild(btn);
	await newQuote();
	newBtn = document.createElement("button");
	newBtn.innerText = "Get Another Quote";
	form.appendChild(newBtn);
	newBtn.addEventListener("click", () => {
		clear();
		newQuote();
		newBtn.classList.add("clicked");
	});
});

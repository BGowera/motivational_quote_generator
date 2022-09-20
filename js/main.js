
const form = document.getElementById('form');
const btn = document.getElementById('get-btn');
form.appendChild(btn);
form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const req = await axios.get("https://type.fit/api/quotes");
        console.log(req.data)
const randCall = Math.floor(Math.random() * 1642) ;
        const quote = `${req.data[randCall].text} - ${req.data[randCall].author}`;
        const list = document.createElement('ul');
        const listItem = document.createElement('li');

        listItem.textContent = quote;
        list.appendChild(listItem);
        form.appendChild(list);
        btn.textContent = "Generate A New Quote";
})



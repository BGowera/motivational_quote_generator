
const form = document.getElementById('form');

form.addEventListener('submit',async function (e) { 
        e.preventDefault();
        const req = await axios.get("https://type.fit/api/quotes");
      
const randCall = Math.floor(Math.random() * 10) ;
        const quote = `${req.data[randCall].text}, - ${req.data[randCall].author}`;
        const list = document.createElement('ul');
        const listItem = document.createElement('li');
        listItem.textContent = quote;
        list.appendChild(listItem);
        form.appendChild(list);
})



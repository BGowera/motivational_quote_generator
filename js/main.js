
const form = document.getElementById('form');

form.addEventListener('submit',async function (e) { 
        e.preventDefault();
        const req = await axios.get("https://type.fit/api/quotes");
        console.log(req.data[0]);
})




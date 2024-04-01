const form = document.querySelector('#searchForm');
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`);
    //console.log(res.data);
    const img = document.createElement('IMG');
    img.src = res.data.image.medium;
    document.body.append(img);
 });

const form = document.querySelector('#searchForm');

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    console.dir(form);
    const searchTerm = form.elements.query.value;
    const config = {params : {q: searchTerm}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    //console.log(res.data);
    coverImage(res.data);
    form.elements.query.value ="";
 });

 const coverImage = (shows)  => {
    for(let result of  shows){
        if(result.show.image.medium){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }  
    }
};
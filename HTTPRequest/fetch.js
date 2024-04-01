fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("Resoleved",res);
        return res.json(); 
    })
    .then((data) => {
        console.log(data);
    })
       
    .catch((e) => {
        console.log("Rejected", e);
    });


// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("Resoleved",res);
//         return res.json(); 
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/1/")
//     })
//     .then((res) => {
//         console.log("Resoleved",res);
//         return res.json(); 
//     })
//     .then((data) => {
//         console.log("Second Request resolved");
        
//     })
       
//     .catch((e) => {
//         console.log("Rejected", e);
//     });

const star = async() => {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/1/");
    const data2 = await res2.json();
    console.log(data2);
};

star();
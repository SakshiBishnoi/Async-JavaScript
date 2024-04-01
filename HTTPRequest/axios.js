// axios.get("https://swapi.dev/api/people/1/nsnjean").then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error("Ooopise, Its an Error",err);
// });


const star = async(id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
            console.log(res.data);
    }catch (e) {
        console.log('Error', e);
    }
    
};

star(5);
star(10);
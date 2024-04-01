const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");

const addNewJoke  = async() => {
    const jokeText = await dadJoke();
    console.log(jokeText);
    const newli = document.createElement('LI');
    newli.append(jokeText);
    jokes.append(newli);
};
const dadJoke = async() => {
    try{
        const config = { headers: {Accept : "application/json"}};
        const res = await axios.get("https://icanhazdadjoke.com/",config);
        return res.data.joke;
    } catch (error){
        return "no jokes available";
    }      
};
btn.addEventListener('click', addNewJoke);







// const dadJoke = async() => {
//     const config = { headers: {Accept : "application/json"}};
//     const res = await axios.get("https://icanhazdadjoke.com/",config);
//     //console.log(res.data.joke);
//     const newli = document.createElement('LI');
//     newli.append(res.data.joke);
//     jokes.append(newli);
// };

//dadJoke();
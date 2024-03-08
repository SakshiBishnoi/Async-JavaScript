const sing = async () => {
    return('singing...');
};

sing().then((data) => {
    console.log('LALALALALA',data); 
});

const song = async() => {
    throw new  Error("I'm not feeling it");
};

const login = async(username, password) =>{
    if(!username || !password) throw 'Username and Password are required';
    if (password === 'cute') return 'logged in';
    //if (!username === 'sakshu') throw ('Wrong username or password');
    throw 'Invaild password'
}

login('hheehe','the')
    .then( data => console.log(data))
    .catch( err => console.error(err));
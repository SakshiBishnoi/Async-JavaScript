const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 1){
                resolve('resolved');
            }               
            reject('ohh noo');             
        },2000)
    })
}

fakeRequest('/bakery.com')
    .then((data) => {
        console.log('Its working',data);
    })
    .catch((error) => {
        console.log('Something went wrong',error);
    });
    


//The return statement before the new Promise ensures that the fakeRequest function actually returns the Promise object.
//This allows you to chain .then and .catch methods to handle the Promise's resolution or rejection.


const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color ;
            resolve();
        }, 1000)
    })
}

delayedColorChange('Aquamarine',1000)
    .then(() => delayedColorChange('Hotpink',1000))
    .then(() => delayedColorChange('CadetBlue',1000))
    .then(() => delayedColorChange('Bisque',1000))
    .then(() => delayedColorChange('CornflowerBlue',1000))
    .then(() => delayedColorChange('DarkSlateBlue',1000))
    .then(() => delayedColorChange('DarkSeaGreen',1000))
    .then(() => delayedColorChange('IndianRed',1000))
    .then(() => delayedColorChange('MediumPurple',1000))
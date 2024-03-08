const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color ;
            resolve();
        }, 1000)
    })
}

// delayedColorChange('Aquamarine',1000)
//     .then(() => delayedColorChange('Hotpink',1000))
//     .then(() => delayedColorChange('CadetBlue',1000))
//     .then(() => delayedColorChange('Bisque',1000))
//     .then(() => delayedColorChange('CornflowerBlue',1000))
//     .then(() => delayedColorChange('DarkSlateBlue',1000))
//     .then(() => delayedColorChange('DarkSeaGreen',1000))
//     .then(() => delayedColorChange('IndianRed',1000))
//     .then(() => delayedColorChange('MediumPurple',1000))

// async function colors(){
//     await delayedColorChange('Hotpink',1000)
//     console.log("First Color Change Made")
//     await delayedColorChange('CadetBlue',1000)
//     console.log("2nd Color Change Made")
//     await delayedColorChange('Bisque',1000)
//     console.log("3rd Color Change Made")
//     await delayedColorChange('CornflowerBlue',1000)
//     console.log("4th Color Change Made")
//     await delayedColorChange('DarkSlateBlue',1000)
//     console.log("5th Color Change Made")
//     await delayedColorChange('DarkSeaGreen',1000)
//     console.log("6th Color Change Made")
//     await delayedColorChange('IndianRed',1000)
//     console.log("7th Color Change Made")
//     await delayedColorChange('MediumPurple',1000)
//     console.log("All Done")
// }

// colors().then( () => console.log('woooohoooooo'));

// async function printcolors(){
//     await colors();
//     console.log('woooohoooooo');
// }
// printcolors();


const fakeRequest = (url)  => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            if(delay > 2000){
                reject(`Rejected ,TimeOut \n ${url}`);
            }else{
                resolve(` Resolved \n ${url}`);
            }
        },delay) 
    });
};

async function make2Request(url){
    try{
        const store = await fakeRequest(url);
        console.log(store);
        const store2 = await fakeRequest(url);
        console.log(store2);
    } catch(e){
        console.log('Caught a error : ',e);
    }
}
//make2Request('https://www.google.com/');
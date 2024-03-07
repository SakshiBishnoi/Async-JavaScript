const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject( "Error: Request took too long!" );
            } else{
                resolve(`Here is your fake Data! from ${url}`);
            }   
        },delay)
    })
};

//isnt neccessay to put in variable
// const request = fakeRequestPromise('books.com/good/coffee');
//  request.then(() => {
//     console.log("It worked");
//  }).catch(() => {
//     console.error("It didn't work");
//  })

fakeRequestPromise('books.com/good/coffee/page1')
    .then(() => {
        console.log("It worked for page 1");
        fakeRequestPromise('books.com/good/coffee/page2')
        .then(() => {
            console.log("It worked for page 2");
            fakeRequestPromise('books.com/good/coffee/page1')
            .then(() => {
                console.log("It worked for page 3");
                fakeRequestPromise('books.com/good/coffee/page1')
                .then(() => {
                    console.log("It worked for page 4");
                }).catch(() => {
                    console.log("It didn't work for page 4");
                })
            }).catch(() => {
                console.log("It didn't work for page 3");
            })
        }).catch(() => {
            console.log("It didn't work for page 2");
        })
    }).catch(() => {
        console.log("It didn't work page 1");
    })


    
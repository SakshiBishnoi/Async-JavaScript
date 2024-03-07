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


fakeRequestPromise('books.com/good/coffee/page1')
    .then((data) => {
        console.log('It worked (Page 1)\n', data);
        return fakeRequestPromise('books.com/good/coffee/page2')
    }) //When a Promise is successfully resolved, the value returned from its .then method 
    //becomes the input for the next .then method in the chain.
    .then((data) => {
        console.log('It worked (Page 2)\n', data);
        return fakeRequestPromise('books.com/good/coffee/page3')
    })
    .then((data) => {
        console.log('It worked (Page 3)\n', data);
    })
    .catch((error) => {
        console.log("It didn't work", error);
    })

    //By returning a new Promise (the result of fakeRequestPromise for the next page) within a .then method,
    //you ensure that the subsequent request doesn't start until the previous one has completed successfully.
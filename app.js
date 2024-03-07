// setTimeout( () => { document.body.style.backgroundColor = 'olive';
// }, 1000);
// setTimeout( () => { document.body.style.backgroundColor = 'pink';
// }, 3000);
// setTimeout( () => { document.body.style.backgroundColor = 'brown';
// }, 2000);

setTimeout( () => { 
    document.body.style.backgroundColor = 'olive';
    setTimeout( () => { 
        document.body.style.backgroundColor = 'pink';
        setTimeout( () => { 
            document.body.style.backgroundColor = 'brown';
            setTimeout( () => { 
                document.body.style.backgroundColor = 'coral';
                setTimeout( () => { 
                    document.body.style.backgroundColor = 'burlywood';
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

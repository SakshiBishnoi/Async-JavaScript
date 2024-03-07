fakeRequestCB = ((url,success,failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout = ( () => {
        if(delay > 4000)
            failure( "Error: Request took too long!" );
        else
            success(`Here is your fake Data! from ${url}`);
    },delay)
});


fakeRequestCB('books.com',
    function(response){ 
        console.log('It worked' ,response )
    }, function (error){
        console.log( 'Failed to get data: ', error);
    });
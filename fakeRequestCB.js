fakeRequestCB = (url,success,failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure( "Error: Request took too long!" );
        } else{
            success(`Here is your fake Data! from ${url}`);
        }   
    },delay)
};

fakeRequestCB('books.com/page1',
    function(response){ 
        console.log('It worked\n' ,response )
        fakeRequestCB('books.com/page2',
        function(response){
            console.log('\nSecond request also worked!\n' , response);
            fakeRequestCB('books.com/page3',
                function(response){
                console.log('\nYepppiieeee Third request worked!\n' , response);
                },
                function(error){
                console.log("AHHHHH Third one failed...\n" + error);
            })
        },function(error){
            console.log("But the second one failed...\n" + error);
        })
    }, function (error){
        console.log( 'Failed to get data:\n',  error);
});
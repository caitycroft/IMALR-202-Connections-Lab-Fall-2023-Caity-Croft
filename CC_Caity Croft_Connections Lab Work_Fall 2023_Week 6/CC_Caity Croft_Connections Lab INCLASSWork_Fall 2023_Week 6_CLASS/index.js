console.log("This is my server file.");

//Data
let astronauts = {
    "data": [
        {
            "key": "lindgren",
            "name": "Kjell Lindgren",
            "craft": "ISS",
            "wikipedia": "https://en.wikipedia.org/wiki/Kjell_N._Lindgren"
        },
        {
            "key": "hines",
            "name": "Bob Hines",
            "craft": "ISS",
            "wikipedia": "https://en.wikipedia.org/wiki/Robert_Hines_(astronaut)"
        },
        {
            "key": "yang",
            "name": "Liu Yang",
            "craft": "Tiangong",
            "wikipedia": "https://en.wikipedia.org/wiki/Liu_Yang_(taikonaut)"
        }
    ]
};

//5. Require Express
let express = require('express');
console.log(express);

//6. Create an app object
let app = express();
console.log(app);

//7. Create a Route
app.get('/', (request, response) => {
    response.send("This is the main page");
});

//8. Listen 
app.listen(3000, () => {
    console.log('The server is listening on localhost:3000');
});

//9. Create additional routes

app.get('/about', (request, response) => {
    //response.send("This is my Astronauts page"); 
});

app.get('/astronauts', (request, response) => {
    //response.send("This is my Astronauts page"); 
});


app.get('/astronauts/:astronaut', (request, response) => {
    let astronaut = request.params.astronaut;
    let astronaut_obj; // will hold the value that we'll send back to the client
    for (let i = 0; i < astronauts.data.length; i++) {
        if (astronaut === astronauts.data[i].key) {
            astronaut_obj = astronauts.data[i];
        }
    }
    // console.log(astronaut_obj);

    if (astronaut_obj) {
        //send back the specific object to the client side
        response.json(astronaut_obj);
    } else {
        response.json({ "status": "Data doesn't exist" });
    }

}); 

//Step 12. Serve static files
app.use('/', express.static('public'));
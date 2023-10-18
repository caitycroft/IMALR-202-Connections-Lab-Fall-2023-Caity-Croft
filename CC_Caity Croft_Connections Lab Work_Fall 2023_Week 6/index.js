/***MAKE** a Node-Express app that serves multiple .html pages. The project should have:
    - At least 3 static GET routes. For example, this website could be a portfolio page, where `“/”` takes you to your home page, `“/about”` takes you to your bio, and `“/projects”` takes you to a page about all your projects.
    - BONUS: Add one dynamic GET route. This can be a route with “query parameters” ( referred to as a [“query route”](https://expressjs.com/en/4x/api.html#req.query) in Express) or “path parameters” (referred to as a [“params”](https://expressjs.com/en/4x/api.html#req.params) route in Express). An example of a query route is `“projects?filter=arduino”` where the response would only include arduino projects. An example of a params route is `“/projects/:project”` where `:project` is a variable and the response would only include the project specifically indicated in the route (i.e. `“/projects/my-arduino-project”`).
    - You should be able to launch your app from the command line using node, open your web browser, and see your project running. To submit your assignment, push your code to Github using git (you will need to create a new repository) and share the link on [Weekly Homeworks Notion page](https://www.notion.so/2337e8980ab44ebe8ac94db475eab741?pvs=21) **by 11:59am ET (noon) on Tuesday**.
    
    **NOTES** on the **MAKE** Assignment
    
    - This is very much a technical exercise to help you solidify a basic understanding of a server and routes. Making sense of routes will be essential to making sense of the rest of  the Module 2 material over the next couple weeks since it very much is based on routes. Thus, for this assignment your focus is primarily on technical functionality, any website design or additional creative expression is optional.
    - Github doesn’t have a server service to deploy applications with server side code. Therefore, Github pages won’t work to deploy a Node-Express application. For homework, you only need to submit a link to your Github repository where your code lives.
    - You do NOT need to put your `node_modules` folder into your git repo (or push that folder to Github since the `package.json` file lists all the necessary modules). For the folder and its contents to be “ignored” by your git repo and not sent to Github, you can create a new file locally called `.gitignore` in your project folder and write `node_modules` on line 1 of the file. The `.gitignore` lists which files should be ignored by git, you can read more about it [here](https://git-scm.com/docs/gitignore). Once you commit this `.gitignore` file to your local git repo, it will exclude your `node_modules` (and anything else listed in the file) from your local git repo. You should do all of this before you push your code to Github*/

let express = require('express');
let app = express();

app.get('/', (request, response) => {
    response.send("Howdy");
    console.log("this is the route page");
})

app.listen(3000, () => {
    console.log("App is listening at localhost:3000");
})

app.get('/about', (request, response) => {
    response.send("...no doubt ABOUT it")
    response.send("...this is the ABOUT PAGE.")
    response.send("this is the page that will contain info about the project");

})

let songs = {
    "data": [
        {
            name: "Bohemian_Rhapsody",
            info: "Queen",

        },
        {
            name: "Stairway_to_Heaven",
            info: "Led Zeppelin",
        },
        {
            name: "All_Along_the_Watchtower",
            info: "Jimi Hendrix"
        }

    ]
}

app.get('/songs', (request, response) => {
    // express.response.json(songs);
    response.json(songs);
});

//Route with a query param
app.get('/songs/:name', (request, response) => {
    console.log(req.params);
    let user_song = req.params.name;
    let user_obj;
    for (let i = 0; i < songs.data.length; i++) {
        if (user_song == songs.data[i].name) {
            user_obj = songs.data[i];

        }
    }
    console.log(user_obj);
    if (user_obj) {
        res.json(user_obj);
    } else {
        res.json({ status: "info not present" });
    }
});

app.get('/test', (req, res) => {
    // console.log(req)
    console.log(req.query)
    res.send('hello')
});


let a = 10;
let b = 30;
console.log(a + b);



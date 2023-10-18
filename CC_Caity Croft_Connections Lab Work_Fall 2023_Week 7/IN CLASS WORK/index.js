use strict


window / addEventListener('load', () => {


})

//Data Array
let messages = [
    {
        "This is a message"

    }

]

let express = require("express");
let app = express();

app.use('/', express.static('public'));

app.listen(3000, () => {
    console.log("listening at localhost:3000");
})

window.addEventListener('load', () => {

    //STEP 5. Fetch all the messages from the server
    fetch('/messages')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

});

//6. Add data

let messages = data.data;
console.log(messages);
for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);


    let message = messages[i].message;
    let time = messages[i].time;
    let messageContent = time + ": " + message;
    let newMessage = document
};

//append to the feed

feed.appendChild(newMessage);

let msg = document.getElementById('msg-input');
let msgButton = document.getElementById('msg-submit');

msgButton.addEventListener('click', () => {
    let msgValue = msg.value;
    console.log(msgValue);


    //8. 
    fetch('/new-message')

})

let msgValue = msg.value;
console.log(msgValue); 

  leg msgObj = {
    message: msgValue
}

msgButton.addEventListener('click', () => {
    let msgValue = msg.value;
    console.log(msgValue);

    let msgObj = {
        message: msgValue
    }

    //Step 8.2 Stringify the data
    let messageObjJSON = JSON.stringify(msgObj);
    console.log(msgObj);
    console.log(messageObjJSON);

    //STEP 8. Create a fetch POST request
    fetch('/new-message', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: messageObjJSON
    })
})

//8.2. Stringify the data
let message ObjJSOn

fetch('/new-message', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: messageObjJSON
})

  //9. POST FOR A NEW MESSAGE

  Ruta Kruliauskaite to Everyone(Oct 18, 2023, 1: 21 PM)
app.post('/new-message', (request, response) => {
    console.log(request.body);
    //STEP 11. add message to the array
    let msgData = request.body;
    msgData.time = Date();
    //push array
    messages.push(msgData);
    console.log(messages);

    //STEP 12. Send message back to the client
    response.json(msgData);
});

fetch('/new-message', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: messageObjJSON
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

//STEP 13. Update the feed with a new message
let message = data.message.message;
let time = data.message.time;

//Create new elements
let newMessage = document.createElement('p');
let newMessageContent = time + ": " + message;
newMessage.innerHTML = newMessageContent;

//append to the feed
feed.insertBefore(newMessage, feed.firstChild);
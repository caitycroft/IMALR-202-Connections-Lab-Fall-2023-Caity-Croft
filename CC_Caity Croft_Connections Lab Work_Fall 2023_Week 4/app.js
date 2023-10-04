// const techno_vibe_1_kick = audio
let istechno_vibe_1_playAllClicked = false; 
let istechno_vibe_1_kickClicked = false;
let istechno_vibe_1_grooveClicked = false;
let istechno_vibe_1_bassCLicked = false; 

let istechno_vibe_2_playAllClicked = false; 
let istechno_vibe_2_kickClicked = false;
let istechno_vibe_2_grooveClicked = false;
let istechno_vibe_2_bassClicked = false;

let istechno_vibe_3_playAllClicked = false; 
let istechno_vibe_3_kickClicked = false;
let istechno_vibe_3_grooveClicked = false;
let istechno_vibe_3_bassClicked = false;

let istechno_vibe_4_playAllClicked = false; 
let istechno_vibe_4_kickClicked = false;
let istechno_vibe_4_grooveClicked = false;
let istechno_vibe_4_bassClicked = false;

var AudioTechnoKickVibe1; 
var AudioTechnoGrooveVibe1;
var AudioTechnoBassVibe1; 

var AudioTechnoKickVibe2;
var AudioTechnoGrooveVibe2;
var AudioTechnoBassVibe2;

var AudioTechnoKickVibe3;
var AudioTechnoGrooveVibe3;
var AudioTechnoBassVibe3;

var AudioTechnoKickVibe4;
var AudioTechnoGrooveVibe4;
var AudioTechnoBassVibe4;

fetch('technocroft_samples.json')
   .then(response => response.json())
   .then(function(response){
    console.log(response); 
    for (let i = 0; i < response.samples.length; i++) {
        console.log(response.samples[i]); 
        
        var sound      = document.createElement('audio');
        sound.id       = response.samples[i].id;
        sound.class    = response.samples[i].class; 
        sound.controls = 'controls';
        sound.src      = '/technocroft_samples_audio/'+response.samples[i].filename;
        sound.type     = 'audio/wav';
        sound.loop     = 'loop'; 
        document.getElementById('audio_container').appendChild(sound);
      }

AudioTechnoKickVibe1 = document.getElementById("audio_techno_vibe_1_kick");
AudioTechnoGrooveVibe1 = document.getElementById("audio_techno_vibe_1_groove");
AudioTechnoBassVibe1 = document.getElementById("audio_techno_vibe_1_bass");

AudioTechnoKickVibe2 = document.getElementById("audio_techno_vibe_2_kick");
AudioTechnoGrooveVibe2 = document.getElementById("audio_techno_vibe_2_groove");
AudioTechnoBassVibe2 = document.getElementById("audio_techno_vibe_2_bass");

AudioTechnoKickVibe3 = document.getElementById("audio_techno_vibe_3_kick");
AudioTechnoGrooveVibe3 = document.getElementById("audio_techno_vibe_3_groove");
AudioTechnoBassVibe3 = document.getElementById("audio_techno_vibe_3_bass");

AudioTechnoKickVibe4 = document.getElementById("audio_techno_vibe_4_kick");
AudioTechnoGrooveVibe4 = document.getElementById("audio_techno_vibe_4_groove");
AudioTechnoBassVibe4 = document.getElementById("audio_techno_vibe_4_bass");
   })



document.getElementById("play_vibe_1_all").addEventListener("click", function () {
    console.log("techno_vibe_1_PLAYALL_button_works")

if (istechno_vibe_1_playAllClicked == false){
    console.log(AudioTechnoKickVibe1);
    AudioTechnoKickVibe1.play(); 
    AudioTechnoGrooveVibe1.play();
    AudioTechnoBassVibe1.play();  
    istechno_vibe_1_playAllClicked =true;
    document.getElementById("techno_vibe_1_kick").checked = true;
    document.getElementById("techno_vibe_1_groove").checked = true;
    document.getElementById("techno_vibe_1_bass").checked = true;


}else{ 
    AudioTechnoKickVibe1.pause(); 
    AudioTechnoGrooveVibe1.pause();
    AudioTechnoBassVibe1.pause();
    istechno_vibe_1_playAllClicked = false;
    document.getElementById("techno_vibe_1_kick").checked = false;
    document.getElementById("techno_vibe_1_groove").checked = false;
    document.getElementById("techno_vibe_1_bass").checked = false;
}
}
)

document.getElementById("play_vibe_2_all").addEventListener("click", function () {
    console.log("techno_vibe_2_PLAYALL_button_works")
    if (istechno_vibe_2_playAllClicked == false){
        AudioTechnoKickVibe2.play(); 
        AudioTechnoGrooveVibe2.play();
        AudioTechnoBassVibe2.play();  
        istechno_vibe_2_playAllClicked =true;
        document.getElementById("techno_vibe_2_kick").checked = true;
        document.getElementById("techno_vibe_2_groove").checked = true;
        document.getElementById("techno_vibe_2_bass").checked = true;
    
    
    }else{ 
        AudioTechnoKickVibe2.pause(); 
        AudioTechnoGrooveVibe2.pause();
        AudioTechnoBassVibe2.pause();
        istechno_vibe_2_playAllClicked = false;
        document.getElementById("techno_vibe_2_kick").checked = false;
        document.getElementById("techno_vibe_2_groove").checked = false;
        document.getElementById("techno_vibe_2_bass").checked = false;
    }
}
)
   
document.getElementById("play_vibe_3_all").addEventListener("click", function () {
    console.log("techno_vibe_3_PLAYALL_button_works")
    if (istechno_vibe_3_playAllClicked == false){
        AudioTechnoKickVibe3.play(); 
        AudioTechnoGrooveVibe3.play();
        AudioTechnoBassVibe3.play();  
        istechno_vibe_3_playAllClicked =true;
        document.getElementById("techno_vibe_3_kick").checked = true;
        document.getElementById("techno_vibe_3_groove").checked = true;
        document.getElementById("techno_vibe_3_bass").checked = true;
    
    
    }else{ 
        AudioTechnoKickVibe3.pause(); 
        AudioTechnoGrooveVibe3.pause();
        AudioTechnoBassVibe3.pause();
        istechno_vibe_3_playAllClicked = false;
        document.getElementById("techno_vibe_3_kick").checked = false;
        document.getElementById("techno_vibe_3_groove").checked = false;
        document.getElementById("techno_vibe_3_bass").checked = false;
    }
}
)



document.getElementById("play_vibe_4_all").addEventListener("click", function () {
    console.log("techno_vibe_4_PLAYALL_button_works")
    if (istechno_vibe_4_playAllClicked == false){
        AudioTechnoKickVibe4.play(); 
        AudioTechnoGrooveVibe4.play();
        AudioTechnoBassVibe4.play();  
        istechno_vibe_4_playAllClicked =true;
        document.getElementById("techno_vibe_4_kick").checked = true;
        document.getElementById("techno_vibe_4_groove").checked = true;
        document.getElementById("techno_vibe_4_bass").checked = true;
    
    
    }else{ 
        AudioTechnoKickVibe4.pause(); 
        AudioTechnoGrooveVibe4.pause();
        AudioTechnoBassVibe4.pause();
        istechno_vibe_4_playAllClicked = false;
        document.getElementById("techno_vibe_4_kick").checked = false;
        document.getElementById("techno_vibe_4_groove").checked = false;
        document.getElementById("techno_vibe_4_bass").checked = false;
    }
}
)



// document.getElementById("techno_vibe_1_kick").addEventListener("click", function () {
//     console.log("techno_vibe_1_kick_button_works")
//     document.getElementById("KICK 1.wav").style.display = "block"
//     isTechnoClicked = true;
//     if (isRockClicked) {
//         isRockClicked = false
//         document.getElementById("rock_image").style.display = "none"

//     }

//     if (isOperaClicked) {
//         isOperaClicked = false
//         document.getElementById("opera_image").style.display = "none"

//     }
// }

// );

// document.getElementById("rock_button").addEventListener("click", function () {
//     console.log("I wanna rock n roll all night")
//     document.getElementById("rock_image").style.display = "block"
//     isRockClicked = true;
//     if (isTechnoClicked) {
//         isTechnoClicked = false
//         document.getElementById("techno_image").style.display = "none"

//     }

//     if (isOperaClicked) {
//         isOperaClicked = false
//         document.getElementById("opera_image").style.display = "none"

//     }
// }

// );


// document.getElementById("opera_button").addEventListener("click", function () {
//     console.log("happy dance")
//     document.getElementById("opera_image").style.display = "block"
//     isOperaClicked = true;
//     if (isTechnoClicked) {
//         isTechnoClicked = false
//         document.getElementById("techno_image").style.display = "none"

//     }
//     if (isRockClicked) {
//         isRockClicked = false
//         document.getElementById("rock_image").style.display = "none"

//     }
// }




// fetch('samples.json')
//     .then(response => response.json())
//     .then(data => {
//         const gridContainer = document.querySelector('.grid-container');
        
//         data.samples.forEach((sample, index) => {
//             const gridItem = document.createElement('div');
//             gridItem.classList.add('grid-item');
            
//             const audio = new Audio(`samples/${sample.filename}`);
//             let isPlaying = false;
            
//             gridItem.addEventListener('click', () => {
//                 if (isPlaying) {
//                     audio.pause();
//                 } else {
//                     audio.currentTime = 0;
//                     audio.play();
//                 }
//                 isPlaying = !isPlaying;
//                 gridItem.style.backgroundColor = isPlaying ? 'green' : '#ccc';
//             });
            
//             gridContainer.appendChild(gridItem);
//         });
//     })
//     .catch(error => console.error(error));
// Step 4: Create the JSON file

// In your samples.json file, define your sample data like this:



// }
// Step 5: Test your application

// Open index.html in a web browser, and you should see your grid of buttons that play music samples when clicked.

// This is a basic implementation of a music synthesizer. You can further enhance it by adding features like volume control, custom styling, and more.





/*--------------------------p5 code (if we use it)-----------------------------------*/



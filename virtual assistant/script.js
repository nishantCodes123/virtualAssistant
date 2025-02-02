let btn=document.querySelector(".btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1.1;
    text_speak.pitch=1.8;
    text_speak.volume=1;
    text_speak.lang="en-US"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date();
    let hours=day.getHours();
    let minute=day.getMinutes();
    // console.log(minute);
    // console.log(hours);
    if(hours>=5 && hours<12){
        speak("Good morning Nishant")

    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon bro")

    }
    else if(hours>=22 || hours<5){
        speak("Good night bro")

    }
    else{
        speak("Good evening,Nishant")
    }
}

window.addEventListener('load',()=>{
    wishMe();
})

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition=new speechRecognition();
recognition.onresult=(event)=>{
   let currentIndex=event.resultIndex;
   let transcript=event.results[currentIndex][0].transcript;
   content.innerText=transcript;
   takeCommand(transcript.toLowerCase())

}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
})

function takeCommand(message){
    btn.style.display="flex";
    voice.style.display="none";
    if(message.includes("hello")||message.includes("hey")||message.includes("whats up")){
        speak("At your service");
    }
    else if(message.includes("who are you")){
        speak("I am Bolt created by Nishant while you were thinking about her");
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/");
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com");
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com");
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com");
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("https://www.whatsapp.com");
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time);
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
        speak(time);
    }
    else{
        let finalText="this is what  found on internet regarding" +message.replace("bolt","")||message.replace("bolt","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("bolt","")}`,"_blank")
    }

}
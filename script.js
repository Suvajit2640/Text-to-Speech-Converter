let speech = new SpeechSynthesisUtterance();
const btn = document.querySelector(".btn");
let text = document.querySelector("textarea");
let voices = [];
let nowvoiceselect = document.querySelector("select");


// it is an event that fires when the list of available voices has been updated. The assigned arrow function is a callback that executes when this event occurs.
window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices();

    speech.voice = voices[0];

    // It creates a new Option object for each voice and assigns the voice's name as the option text and the index i as the option value.
    voices.forEach((voice, i) => {
        nowvoiceselect.options[i] = new Option(voice.name)

    });
}

nowvoiceselect.addEventListener("change",
    (e) => {
        // speech.voice = voices[nowvoiceselect.value];
        speech.voice = voices[e.target.value];
        // console.log(e);

    })

btn.addEventListener("click",
    () => {
        // console.log('btn clicked');
        // console.log('text area is',text.value);
        // speech.pitch=10;
        speech.text = text.value;
        window.speechSynthesis.speak(speech);

    })
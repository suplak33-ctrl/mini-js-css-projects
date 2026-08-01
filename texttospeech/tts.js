let speech = new SpeechSynthesisUtterance(); // creates a new speech object which is empty to be later filled

let voices = [];  // will store value 
let voiceSelect = document.querySelector("select"); //used to select voices from dropdown

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  //getVoices() collects them into the voices array
  speech.voice = voices[0]; // in default speaks first language 

  voices.forEach((voice, i)=> (voiceSelect.options[i] = new Option(voice.name,i)));
  //This loops through every voice and adds it to the dropdown. Each option shows the voice name and stores its index as the value.


};


voiceSelect.addEventListener("change",()=>{
speech.voice = voices[voiceSelect.value];
//When the user picks a different voice, this updates speech.voice to the selected voice. So the next time the text is spoken, it uses that voice.


})


document.querySelector("button").addEventListener("click",() => {
  speech.text = document.querySelector("textarea").value; //stores test inside speech object
  window.speechSynthesis.speak(speech); // it is used to read the text area 
 
})



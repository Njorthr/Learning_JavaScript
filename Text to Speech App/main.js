// Init SpeechSynth API
const synth = speechSynthesis;

// Variables
const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitch-value");
const body = document.querySelector("body");

// Init voices aray
let voices = [];

const getVoices = () => {
    voices = synth.getVoices();
    

    // Loop through voices and create an option each one
    voices.forEach(voice => {
        // Create option element
        const option = document.createElement("option");
        // Fill option with voice and language
        option.textContent = `${voice.name} (${voice.lang})`;
        // Set needed option attributes
        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);
        voiceSelect.appendChild(option);
    });
}

getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

// Speak
const speak = () => {
    
    // check if speaking
    if (synth.speaking) {
        console.error("Already speaking...");
        return;
    }
    if (textInput.value !== "") {
        // Add background animation
        body.style.background = "#141414 url(wave.gif)";
        body.style.backgroundRepeat = "repeat-x";
        body.style.backgroundSize = "100% 100%";
        // Get speak text
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        // Speak end
        speakText.onend = e => {
            console.log("done speaking...");
            body.style.background = "#141414";
        }
        // Speak Error
        speakText.onerror = e => {
            console.error("Something went wrong");
        }

        // Selected voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");

        // Loop through voices
        voices.forEach(voice => {
            if (voice.name == selectedVoice) {
                speakText.voice = voice;
            }
        });

        // Set pitch and rate
        speakText.rate = rate.value;
        speakText.pitch = pitch.value;

        // Speak
        synth.speak(speakText);
    }
};

// Event listeners

// Form Submit
textForm.addEventListener("submit", e => {
    e.preventDefault();
    speak();
    textInput.blur();
});

// Rate value change
rate.addEventListener("change", e => rateValue.textContent = rate.value);

// Pitch value change
pitch.addEventListener("change", e => pitchValue.textContent = pitch.value)

// Voice select change
// Speaks when language is changed without having to click submit again
voiceSelect.addEventListener("change", e => speak());
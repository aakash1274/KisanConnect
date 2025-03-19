import speech_recognition as sr
import pyttsx3

# Initialize recognizer and text-to-speech engine
recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    """Convert text to speech."""
    engine.say(text)
    engine.runAndWait()

def listen():
    """Listen for user input."""
    with sr.Microphone() as source:
        print("Listening...")
        try:
            audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
            return recognizer.recognize_google(audio).lower()
        except sr.UnknownValueError:
            return "I couldn't understand that."
        except sr.WaitTimeoutError:
            return "You were silent for too long."

def main():
    """Main function to handle the voice assistant."""
    speak("Voice assistant is ready. Say 'Hey Kisan Connect' to wake me up.")
    while True:
        command = listen()
        if "hey kisan connect" in command:
            speak("I'm listening. How can I help you?")
            while True:
                user_input = listen()
                if "stop listening" in user_input or "bye" in user_input:
                    speak("Goodbye!")
                    return
                elif "why are you not responding" in user_input:
                    speak("I might not have heard you clearly. Please try again.")
                else:
                    speak(f"You said: {user_input}")

if __name__ == "__main__":
    main()

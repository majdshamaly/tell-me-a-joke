const tellMeAjokeBtn = document.getElementById("tellMeAjokeBtn");
let joke = "";
async function getJoke() {
  const jokeApiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  try {
    const response = await fetch(jokeApiUrl);
    const data = await response.json();
    console.log(data)
    if (!data.joke) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    VoiceRSS.speech({
      key: "d61965316d6e4584acee6e09cf443a59",
      src: joke,
      hl: "en-us",
      v: "Linda",
      r: 0,
      c: "mp3",
      f: "44khz_16bit_stereo",
      ssml: false,
    });
  } catch (error) {
    console.log(error);
  }
}
// evebt Listeners
tellMeAjokeBtn.addEventListener("click", getJoke);

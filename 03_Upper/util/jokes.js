import Sentiment from "sentiment";
const sentiment = new Sentiment();

async function getJoke() {
    const URL  = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    const response = await fetch(URL);
    const result = await response.json();

    const jokeToAnalyse = result.joke || `${result.setup} ${result.delivery}`;
    const {score} = sentiment.analyze(jokeToAnalyse);
    if (score < 0){
        return await getJoke();
    } else {
        if (result.type === "single"){
            return result.joke;
        } else {
            return result.setup + "\n" + result.delivery;
        }
    }
}

//export a function reference
export default {
    getJoke
};

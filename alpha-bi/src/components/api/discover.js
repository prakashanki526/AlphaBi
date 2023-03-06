import axios from "axios";

export async function getData(text) {
    const reqUrl = `http://api.giphy.com/v1/gifs/trending?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${text}`;
    const result = await axios.get(reqUrl);
    console.log(result.data.data);
    return result.data;
}
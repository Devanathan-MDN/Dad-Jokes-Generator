const btnEle = document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiKey ="EnJiyAkDaWm4DjRAb6aQTg==zkfDZGkqMIPAJEwz";

const options={
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};
const apiURl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke()
{
    try{
        jokeEl.innerText="Updating...";
        btnEle.disabled=true;
        btnEle.innerText="Loading...";
  const response=await fetch(apiURl, options);
  const data=await response.json();
console.log(data[0].jokeEl);
  btnEle.disabled=false;
  btnEle.innerText="Tell me a Joke.";
  jokeEl.innerText=data[0].joke;

}catch(error)
{
    console.log(error);
}
}


btnEle.addEventListener("click", getJoke);
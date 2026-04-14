

async function getMeme() {
  let data;

  do {
    const res = await fetch("https://meme-api.com/gimme");
    data = await res.json();
  } while (!data.url.endsWith(".jpg") && !data.url.endsWith(".png"));

  document.getElementById("meme").src = data.url;
}
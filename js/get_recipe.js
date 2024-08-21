
onmessage = (message) => {
  recipe_name = message.data
  console.log(recipe_name);
  fetch(recipe_name).then(response => {
    if (!response.ok) {
      console.error(response);
      this.postMessage(null);
    }

    console.log(response.json());
    postMessage(response.json());
  }).catch(error => {
    console.error(error.message);
    postMessage(null);
  });
}

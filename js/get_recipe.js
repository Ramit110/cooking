
onmessage = async (message) => {
  recipe_name = message.data
  try {
    console.log(recipe_name);
    const response = await fetch(recipe_name);
    if (!response.ok) {
      console.error(response);
      this.postMessage(null);
    }

    const json = response.json();
    console.log(json);
    postMessage(response);

  } catch (error) {
    console.error(error.message);
    postMessage(null);
  }
}

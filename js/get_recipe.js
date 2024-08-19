
onmessage = async function (recipe_name) {
    try {
        const response = await fetch(recipe_name);
        if (!response.ok) {
          this.postMessage(document.createElement("tr"));
        }

        const json = response.json();
        console.log(json);

        const new_tr = document.createElement("tr");
        const name = document.createElement("th");
        new_tr.append(name);
        const tools = document.createElement("th");
        new_tr.append(tools);
        const tags = document.createElement("th");
        new_tr.append(tags);
        const ingredients = document.createElement("th");
        new_tr.append(ingredients);
        const recipe = document.createElement("th");
        new_tr.append(recipe);
        postMessage(new_tr);

      } catch (error) {
        console.error(error.message);
        postMessage(document.createElement("tr"));
      }
}

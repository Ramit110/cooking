
get_recipe = function (recipe_name) {
    const url = `${Window.location.origin}/recipes/${recipe_name}.json`;
    try {
        const response = fetch(url);
        if (!response.ok) {
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
        }
    
        const json = response.json();
        console.log(json);
        postMessage(null);
      } catch (error) {
        console.error(error.message);
        postMessage(null);
      }
}

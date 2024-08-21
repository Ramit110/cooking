
window.onload = function() {
    LoadTable();
};

/**
 * List of recipes (json files in `recipes/` of this repository) and the webworker used to load
 * those recipes.
 */
const recipes = ["sponge_cake"];

/**
 * Load the table with all the recipe info, uses web workers and async calls to update the table.
 */
function LoadTable() {
    rows = recipes.forEach((file) => {
        const worker = new Worker('js/get_recipe.js');
        worker.onmessage = function(new_element) {
            if (new_element === null) {
                console.error("Nice");
            }
            else
            {
                const new_tr = document.createElement("tr");

                const name = document.createElement("th");
                name.innerHTML = new_element['name']
                new_tr.append(name);

                const tools = document.createElement("th");
                tools.innerHTML = new_element['tools']
                new_tr.append(tools);

                const tags = document.createElement("th");
                tags.innerHTML = new_element['tags']
                new_tr.append(tags);

                const ingredients = document.createElement("th");
                ingredients.innerHTML = new_element['ingredients']
                new_tr.append(ingredients);

                const recipe = document.createElement("th");
                recipe.innerHTML = new_element['recipe']
                new_tr.append(recipe);

                document.getElementById("CookingTable").appendChild(new_tr);
            }

        };
        worker.postMessage(`${window.location.origin}/cooking/recipes/${file}.json`);
    });
}

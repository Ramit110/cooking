
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
            document.getElementById("CookingTable").appendChild(new_element);
        };
        worker.postMessage([document, `${window.location.origin}/recipes/${file}.json`]);
    });
}

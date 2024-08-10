/**
 * NOT USED YET
 */
const url_params = new URLSearchParams(document.location.search);
const pagination_number = 20;


/**
 * List of recipes (json files in `recipes/` of this repository).
 */
const recipes = ["sponge_cake"];
/**
 * NOT USED YET
 */
function NextPage () {
    const page = url_params.get("page", 1);
    if 
}

/**
 * NOT USED YET
 */
function LastPage () {
    const page = url_params.get("page", 1);
    if (page == 0 ) {
        
    }
}

/**
 * Load the table with all the recipe info, uses web workers and async calls to update the table.
 */
function LoadTable() {
    const workers = Array.from();
}

/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let name = document.createElement("h3");
        name.innerHTML = temple.templeName;

        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.location);

        article.appendChild(name);
        article.appendChild(image);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = (await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"));
    if (response.ok) {
        const data = await response.json();
        templeList.push(data);
    }
    templeList.forEach (temples =>
    {
        displayTemples(temples);
    });
}

/* reset Function */
function reset () {
    templesElement.innerHTML = "";
    // could it be because the async function is throwing everything off?
}

/* sortBy Function */
function sortBy (temples) {
    reset();
    let filter = document.getElementById("sortBy").value;
    switch (filter){
        case "utah":
            temples.forEach(temples => {
                displayTemples(temples.filter((temple) => temple.location.includes("Utah")))
            });
            break;
        case "notutah":
            temples.forEach(temples => {
                displayTemples(temples.filter((temple) => !temple.location.includes("Utah")))
            });
            break;
        case "older":
            let date = new Date(1950, 0, 1);
            temples.forEach(temples => {
                displayTemples(temples.filter((temple) => Date.parse(temple.dedicated)  < date));
            });
            break;
        case "all":
            temples.forEach(temples => {
                displayTemples(temples)
            });
            break;
    }
}


getTemples();
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

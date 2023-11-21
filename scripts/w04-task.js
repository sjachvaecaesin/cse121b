/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Elias Nikolai Schmutz Streeter",
    photo: "images/header picture.jpg",
    favoriteFoods: ["Cola Cao", "Tuna Pizza", "Hamburgers", "Meatloaf"],
    hobbies: ["Computer games", "Card games", "Taking a walk", "Board games"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Rota, Spain",
        length: "6 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Sicily, Italy",
        length: "7 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Vicenza, Italy",
        length: "5 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});


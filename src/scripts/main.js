const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");
planets.forEach(element => {
    planetEl.innerHTML += `<section>${element}</section>`;
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const properPlanets = planets.map(
    planet => {
        return planet.charAt(0).toUpperCase() + planet.slice(1);
    });

// charAt(#) method that returns the character of given string at given index
// slice(#,#) method that returns the piece of given string between two indices

// console.log(properPlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(
    planet => {
        let ifE = false;
        if (planet.includes("e")) {
            ifE = true;
        }
        return ifE;
    });

console.log(ePlanets);
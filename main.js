const divOutput = document.getElementById("output");

// businesses.filter(business => {
//     let inNewYork = false
//     if (business.addressStateCode === "NY"){
//         inNewYork = true;
//     }
//     return inNewYork;
// })

////////////////////////// BIZ .MAP ////////////////////////////////

businesses
  .filter(biz => biz.addressStateCode === "NY")
  .forEach(business => {
    console.log("What be of the business", business);
    divOutput.innerHTML += `
    <h2>${business.companyName}</h2>
    <address>${business.addressFullStreet}
    ${business.addressStateCode}
    ${business.addressZipCode}
    
    <hr>`;
  });

function showBusiness(business) {
  return `<div>${business.companyName}</div>`;
}

let newStuff = businesses.map(showBusiness);
divOutput.innerHTML += newStuff.join(`<hr>`);

//////////////////////////////// Business Exercise /////////////////
businesses
  .filter(business => {
    const bigSpender = business.orders.find(order => order > 9000);
    if (bigSpender === undefined) {
      return false;
    }
    return true;
  })
  .forEach(business => {
    divOutput.innerHTML += `
      <h3>"OH!! You're a big spender are you?!"</h3>
      <div>${business.companyName}<hr></div>`;
  });
///////////////////////   CANDY    .find  /////////////////////////////////
const candies = [
  {
    name: "Lollipop",
    price: 2.99
  },
  {
    name: "Tootsie Roll",
    price: 1.49
  },
  {
    name: "Sugar Daddy",
    price: 2.49
  }
];

const firstCheapCandy = candies.find(candy => {
  console.log("candy", candy);
  return candy.price < 2.0;
});

console.log("cheap", firstCheapCandy);

//////////////////////// REDUCE() ///////////////////////
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10];

const totalRainfall = monthlyRainfall.reduce(
  (currentTotal, nextValue) => (currentTotal += nextValue),
  0
);
console.log(totalRainfall);

/////////////////////////   Solar System Exercise    /////////////////////////
const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune"
];
planets.forEach(planet => {
  divOutput.innerHTML += `
    <section id = "planets">${planet}</section>`;
});

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
planets.map(planet => {
  const capPlanet = planet.charAt(0).toUpperCase() + planet.slice(1);
  divOutput.innerHTML += `<div>${capPlanet}</div><hr>`;
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const planetFilter = planets.filter(planet => {
  if (planet.includes("e")) {
    divOutput.innerHTML += `<br><div>${planet}</div><br>`;
  }
});
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

//////////////////  SPAM SPAM SPAM SPAM /////////////////////////
customers
  .map(customer => customer.contacts.email)
  .forEach(customer => {
    console.log(customer);
    divOutput.innerHTML += `<div>${customer.join(", ")}</div><br>`;
  });

/////////////CHAINING METHODS YEAAAAAAAAAH!!////////////////

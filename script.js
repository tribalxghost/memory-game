const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let clicked = 0;
let usersChoice = [];

// TODO: Implement this function!
function handleCardClick(event) {
  if (clicked >= 2) {
    usersChoice[0].style.backgroundColor = "";
    usersChoice[1].style.backgroundColor = "";
  }

  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  let user = event.target;

  // CHANGE BACKGROUND COLOR
  console.log("OVER HERE");
  user.style.backgroundColor = event.target.className;
  usersChoice.push(event.target);
  clicked++;

  // IF WE FIND A MATCH

  console.dir(usersChoice[0]);
  if (
    usersChoice[0].className === usersChoice[1].className &&
    usersChoice[0].className !== undefined
  ) {
    console.log("This MATCHES");
    clicked = 0;
    usersChoice = [];
  } else {
    setTimeout(
      (usersChoice) => {
        usersChoice[0].style.backgroundColor = "";
        usersChoice[1].style.backgroundColor = "";
        console.log("DONE");
        return (clicked = 0);
      },
      500,
      usersChoice
    );

    clicked++;
    usersChoice = [];
  }

  console.log("HERE");
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */

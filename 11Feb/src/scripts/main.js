// SET TWO
// 1. Add an event listener to the button with an id of `submit-btn`
// 2. When you click the submit button, get the value of what the user typed into the text input and log it to the console
getAllDrinks()
document.querySelector("#submit-btn").addEventListener("click", function () {
    let textInput = document.querySelector("#text-field").value
    console.log(textInput)

    let drinkObject = {
        drink: textInput,
        barrista: "Sydney",
        location: "downtown"
    }
    console.log(drinkObject)

    createDrink(drinkObject)
    getAllDrinks()
})

//
//       SET ONE
//       You're going to build an app for a coffee shop to keep track of what drinks their staff knows how to make!
//       1. Set up a new repo with grunt using the setUpGrunt function in your .bashrc file
//       2. Go into your src/lib directory and run `npm install`
//       3. In your db.json file, create an empty array called "coffeeDrinks"

/*
  1. In the event listener, use the value that the user typed in to build an object representing a coffee drink
  2. The object should have the following properties: name (aka what the user typed in), barrista (a string of your name), and coffee shop location (make something up)
  3. POST the object to the database
*/
const createDrink = (drinkObject) => {
    return fetch("http://localhost:8088/coffeeDrinks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(drinkObject)
    })
}





const getAllDrinks = () => {
    document.querySelector("#drink-orders").innerHTML=""
    return fetch("http://localhost:8088/coffeeDrinks")
        .then(drinks => drinks.json())
        .then(allDrinks => {

            console.log(allDrinks)
            allDrinks.forEach(drink => {
                console.log(drink.drink, drink.barrista, drink.location)
                buildSingleDrink("drink-orders", drink,)

            });
        })

}
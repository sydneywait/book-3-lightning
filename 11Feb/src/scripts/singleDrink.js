const buildSingleDrink = (id, drink)=>{

    document.querySelector(`#${id}`).innerHTML += `<div class = "drink-orders">
    <p>Drink: ${drink.drink}</p>
    <p>Barrista: ${drink.barrista}</p>
    <p>Location: ${drink.location}</p>

    </div>`


}
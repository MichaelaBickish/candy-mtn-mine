let candycount = 0
let extracount = 0


    let clickUpgrades= {

    sugarRush: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    candyAxe: {
        price: 5,
        quantity: 0,
        multiplier: 2
    }
}

let autoUpgrades = {
    candyCart: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    kingCandy: {
        price: 5,
        quantity: 0,
        multiplier: 2
    }
}


function mine(item) {
 candycount += 1

// let upgrade = clickUpgrades[action]
//    if (candycount >= upgrade.price){
//    }

updateCount()
}

function updateCount() {
    let template = ''
    template += `<h4 class="text-center">Candy Count: ${candycount}</h4>`
    document.getElementById('current-count').innerHTML = template
}


//check if the user has the resources, if they do, increase the purchased count & decrease the candycount
function buySugar(item) {
    let candy = clickUpgrades[item]
    template = ''
    if (candycount >= candy.price) {
         candy.quantity += 1
         candycount -= candy.price
         console.log("sugrush")
    }
    template += ` ${candy.quantity}`
    document.getElementById('sugrush').innerText = template
    
updateCount()
}
function buyAxe(item) {
    let candy = clickUpgrades[item]
    template = ''
    if (candycount >= candy.price) {
         candy.quantity += 1
         candycount -= candy.price
         console.log("axe")
    }
    template += ` ${candy.quantity}`
    document.getElementById('candaxe').innerText = template
}
function buyCandyCart(item) {
    let upgrade = autoUpgrades[item]
    template = ''
    if (candycount >= upgrade.price) {
         upgrade.quantity += 1
         candycount -= upgrade.price
         console.log("candy cart")
    }
    template += ` ${upgrade.quantity}`
    document.getElementById('candcart').innerText = template
}

//collectAutoUpgrades() {

//}

updateCount()
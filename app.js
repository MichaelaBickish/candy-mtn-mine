let candycount = 0
let clickMod = 0
let autoMod = 0


    let clickUpgrades= {

    sugarRush: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    candyAxe: {
        price: 50,
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
 candycount += clickMod

// if statement to update extracount for sugar rush and candy axe

updateCount()
}

function updateCount() {
    document.getElementById('current-count').innerText = `Candy Count: ` + `${candycount}`
    
}


//check if the user has the resources, if they do, increase the purchased count & decrease the candycount
function buySugar(item) {
    let candy = clickUpgrades[item]
    template = ''
    if (candycount >= candy.price) {
         candy.quantity += 1
         candycount -= candy.price
         candy.price *= candy.multiplier
         clickMod += 1
         console.log("sugrush")
    }
    template += `Sugar Rush's Collected: ${candy.quantity} Current Sugar Rush Price: ${candy.price}`
    document.getElementById('sugrush').innerText = template
    
updateCount()
}
function buyAxe(item) {
    let axe = clickUpgrades[item]
    template = ''
    if (candycount >= axe.price) {
         axe.quantity += 1
         candycount -= axe.price
         clickMod += 3
         console.log("axe")
    }
    template += ` ${axe.quantity}`
    document.getElementById('candaxe').innerText = template
updateCount()
}
function buyCandyCart(item) {
    let cCart = autoUpgrades[item]
    template = ''
    if (candycount >= cCart.price) {
         cCart.quantity += 1
         candycount -= cCart.price
         console.log("candy cart")
    }
    template += ` ${cCart.quantity}`
    document.getElementById('candcart').innerText = template
updateCount()
}
function buyKingCandy(item){
    let kCandy = autoUpgrades[item]
    template = ''
    if (candycount >= kCandy.price) {
         kCandy.quantity += 1
         candycount -= kCandy.price
         console.log("king candy")
    }
    template += ` ${kCandy.quantity}`
    document.getElementById('kingcand').innerText = template
updateCount()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
    console.log(working)
  }

//collectAutoUpgrades() {

//}


updateCount()
startInterval()
buySugar(sugarRush)
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
        price: 100,
        quantity: 0,
        multiplier: 2
    },
    kingCandy: {
        price: 150,
        quantity: 0,
        multiplier: 2
    }
}

function mine(item) {
 candycount += 1
 candycount += clickMod
 
updateCount()
}
function updateCount() {
    document.getElementById('current-count').innerText = `Candy Count: ` + `${candycount}`
    document.getElementById('click-power').innerText = `+${clickMod} ` + `Xtra Click Power`
    document.getElementById('autoclick-power').innerText = `+${autoMod} ` + `Auto Collect Power`    
    document.getElementById('sugrush-quan').innerText = `${clickUpgrades.sugarRush.quantity}` + ` Collected` 
    document.getElementById('sugrush-price').innerText = `Cost: ` + `${clickUpgrades.sugarRush.price} Candy`
    document.getElementById('candyaxe-quan').innerText = `${clickUpgrades.candyAxe.quantity}` + ` Collected`
    document.getElementById('candyaxe-price').innerText = `Cost: ` + `${clickUpgrades.candyAxe.price} Candy`
    document.getElementById('candycart-quan').innerText = `${autoUpgrades.candyCart.quantity}` + ` at Work`
    document.getElementById('candycart-price').innerText = `Cost: ` + `${autoUpgrades.candyCart.price} Candy`
    document.getElementById('kingcandy-quan').innerText = `${autoUpgrades.kingCandy.quantity}` + ` at Work`
    document.getElementById('kingcandy-price').innerText = `Cost: ` + `${autoUpgrades.kingCandy.price} Candy`
    myStorage = window.localStorage
    
}
function buySugar(item) {
    let candy = clickUpgrades[item]
    if (candycount >= candy.price) {
         candy.quantity += 1
         candycount -= candy.price
         candy.price *= candy.multiplier
         clickMod += 500
    }else{
        alert(`you don't have enough candy to purchase a SUGAR RUSH!`)
    }
    
updateCount()
}
function buyAxe(item) {
    let axe = clickUpgrades[item]
    
    if (candycount >= axe.price) {
         axe.quantity += 1
         candycount -= axe.price
         axe.price *= axe.multiplier
         clickMod += 1000
    }else{
        alert(`you don't have enough candy to purchase a CANDY AXE!`)
    }
    
updateCount()
}
function buyCandyCart(item) {
    let cCart = autoUpgrades[item]
    if (candycount >= cCart.price) {
         cCart.quantity += 1
         candycount -= cCart.price
         cCart.price *= cCart.multiplier
         autoMod += 500
    }else {
        alert(`you don't have enough candy to purchase a CANDY CART!`)
    }
updateCount()
collectAutoUpgrades()
}
function buyKingCandy(item){
    let kCandy = autoUpgrades[item]
    if (candycount >= kCandy.price) {
         kCandy.quantity += 1
         candycount -= kCandy.price
         kCandy.price *= kCandy.multiplier
         autoMod += 1000
    }else {
        alert(`you don't have enough candy to purchase a MINER from King Candy!`)
    }
updateCount()
collectAutoUpgrades()
}

function collectAutoUpgrades(item) {
    candycount += autoMod
    updateCount()
}

function startInterval() {
    setInterval(collectAutoUpgrades, 3000)
  }


updateCount()
startInterval()


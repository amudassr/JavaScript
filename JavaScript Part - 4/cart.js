let cart = [];

let item = prompt("please enter your item");

while (true) {
    if (item == "quit") {
        console.log("shopping quit");
        break;
    }
    if (item == "show") {
        console.log("---------");
        for (let j = 0; j < cart.length; j++) {
            console.log(j, cart[j])
        }
        console.log("---------");
    }

    else if (item == "add") {
        let product = prompt("please enter your product you want to add");
        cart.push(product);
        console.log("product added");
    } else if (item == "remove") {
        let shop_idx = prompt("plesae enter the product you want to delete");
        cart.splice(shop_idx, 1);
        console.log("product deleted")
    } else {
        console.log("wrong items")
    }

    item = prompt("please enter your item");
}


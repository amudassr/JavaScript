let contact = [];

let req = prompt("please enter your contact");

while (true) {
    if (req == "quit") {
        console.log("contact book close");
        break;
    }

    if (req == "list") {
        console.log("---------");
        for (let k = 0; k < contact.length; k++) {
            console.log(k, contact[k]);
        }
        console.log("-----------");
    } else if (req == "save") {
        let contactBook = prompt("please enter your contact you want to save");
        contact.push(contactBook);
        console.log("contact saved");
    } else if (req == "delete") {
        let contactIdx = prompt("please enter the contact index");
        contact.splice(contactIdx, 1);
        console.log("contact deleted");
    } else {
        console.log("invalid contact");
    }
}
const box = document.querySelectorAll("div")
console.log(box)


document.addEventListener("keyup", (event) => {
    for (let i = 0; i < box.length; i++) {
        const elemKey = box[i].dataset.key
        if (elemKey === event.key.toUpperCase()) {
            console.log("matched")
            box[i].remove();
            break;
        }
    }

})
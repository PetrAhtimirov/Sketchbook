let hidemessage = function (typeMessage) {
    let message = document.querySelector("." + typeMessage)
    message.classList.add("opacity-zero")
}

let showmessage = function (typeMessage) {
    let message = document.querySelector("." + typeMessage)
    message.classList.remove("opacity-zero")
    setTimeout(hidemessage, 1800, typeMessage)
}


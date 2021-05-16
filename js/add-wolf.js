const url = "https://lobinhos.herokuapp.com/wolves/"
let form = document.querySelector("#add-wolf-form")

form.addEventListener("submit", e => {
    e.preventDefault()
    let wolfName = document.querySelector("#wolf-name").value
    let wolfAge = document.querySelector("#wolf-age").value
    let linkPicture = document.querySelector("#link-picture").value
    let wolfDescription = document.querySelector("#wolf-description").value

    let fetchBody = {
        "wolf":{
            "name": wolfName,
            "description": wolfDescription,
            "link_image": linkPicture,
            "age": wolfAge
        }
    }

    let fetchConfig = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(fetchBody)
    }

    fetch(url, fetchConfig)
})
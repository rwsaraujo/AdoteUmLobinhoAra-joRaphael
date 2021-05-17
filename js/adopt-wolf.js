// Get wolves from API
const url = "https://lobinhos.herokuapp.com/wolves/"
let form = document.querySelector("#adopt-wolf-form")

// Adopt a wolf
form.addEventListener("submit", e => {
    e.preventDefault()
    let personName = document.querySelector("#person-name").value
    let personAge = document.querySelector("#person-age").value
    let personEmail = document.querySelector("#person-email").value
    // let wolfId = document.querySelector("#wolf-id-A").value

    console.log(wolfId)

    let fetchBody = {
        "adoption":{
            "name": personName,
            "email": personEmail,
            "age": personAge,
            // "wolf_id": wolfId
        }
    }

    let fetchConfig = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(fetchBody)
    }

    fetch(url, fetchConfig)
})
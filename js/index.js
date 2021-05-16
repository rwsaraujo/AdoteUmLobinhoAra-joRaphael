// Get wolves from API
const url = "https://lobinhos.herokuapp.com/wolves/"
fetch(url)
.then(resp => data.json())
.then(resp => {console.log(resp)})
.catch(err => console.log(err))

// Show wolves

fetch(url+"/1")
.then(data => data.json())
.then(resp => {
    document.getElementById("index-wolf-1-img").src = resp.link_image
    document.getElementById("index-wolf-1-name").innerHTML = resp.name
    document.getElementById("index-wolf-1-age").innerHTML = "Idade: " + resp.age
    document.getElementById("index-wolf-1-description").resp.description
})

.catch(err => console.log(err))

fetch(url+"/2")
.then(data => data.json())
.then(resp => {
    document.getElementById("index-wolf-2-img").src = resp.link_image
    document.getElementById("index-wolf-2-name").innerHTML = resp.name
    document.getElementById("index-wolf-2-age").innerHTML = "Idade: " + resp.age
    document.getElementById("index-wolf-2-description").resp.description
})
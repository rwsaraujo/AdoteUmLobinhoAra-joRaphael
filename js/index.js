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
    document.querySelector(".index-wolf-A-img").src = resp.link_image
    document.querySelector(".index-wolf-A-name").innerHTML = resp.name
    document.querySelector(".index-wolf-A-age").innerHTML = "Idade: " + resp.age
    document.querySelector(".index-wolf-A-description").resp.description
})

.catch(err => console.log(err))

fetch(url+"/2")
.then(data => data.json())
.then(resp => {
    document.querySelector(".index-wolf-B-img").src = resp.link_image
    document.querySelector(".index-wolf-B-name").innerHTML = resp.name
    document.querySelector(".index-wolf-B-age").innerHTML = "Idade: " + resp.age
    document.querySelector(".index-wolf-B-description").resp.description
})
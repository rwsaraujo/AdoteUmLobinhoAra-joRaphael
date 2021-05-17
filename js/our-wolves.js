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
    document.getElementById("our-wolves-A-img").src = resp.link_image
    document.getElementById("our-wolves-A-name").innerHTML = resp.name
    document.getElementById("our-wolves-A-age").innerHTML = "Idade: " + resp.age
    document.getElementById("our-wolves-A-description").innerHTML = resp.description
    document.getElementById("id-wolf-A").innerHTML = resp.id
})

fetch(url+"/2")
.then(data => data.json())
.then(resp => {
    document.getElementById("our-wolves-B-img").src = resp.link_image
    document.getElementById("our-wolves-B-name").innerHTML = resp.name
    document.getElementById("our-wolves-B-age").innerHTML = "Idade: " + resp.age
    document.getElementById("our-wolves-B-description").innerHTML = resp.description
    document.getElementById("id-wolf-B").innerHTML = resp.id
})

fetch(url+"/3")
.then(data => data.json())
.then(resp => {
    document.getElementById("our-wolves-C-img").src = resp.link_image
    document.getElementById("our-wolves-C-name").innerHTML = resp.name
    document.getElementById("our-wolves-C-age").innerHTML = "Idade: " + resp.age
    document.getElementById("our-wolves-C-description").innerHTML = resp.description
    document.getElementById("id-wolf-C").innerHTML = resp.id
})

fetch(url+"/4")
.then(data => data.json())
.then(resp => {
    document.getElementById("our-wolves-D-img").src = resp.link_image
    document.getElementById("our-wolves-D-name").innerHTML = resp.name
    document.getElementById("our-wolves-D-age").innerHTML = "Idade: " + resp.age
    document.getElementById("our-wolves-D-description").innerHTML = resp.description
    document.getElementById("id-wolf-D").innerHTML = resp.id
})
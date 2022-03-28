const header = document.querySelector("#header"),
    title = document.querySelector("#title"),
    excerpt = document.querySelector("#excerpt"),
    profile_img = document.querySelector("#profile_img"),
    name = document.querySelector("#name"),
    date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = "Lorem ipsum dolor sit amet."
    excerpt.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, perspiciatis."
    profile_img.innerHTML = "<img src='https://randomuser.me/api/portraits/men/35.jpg'>"
    name.innerHTML = "John Doe"
    date.innerHTML = "Oct 08, 2020"

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"))
}

setTimeout(getData, 2000)


// you could make it with random user api

const tabSkills = document.querySelector("#tab-skills")
const tabExperience = document.querySelector("#tab-experience")
const tabEducation = document.querySelector("#tab-education")
const skillsContent = document.getElementById("skills")
const experienceContent = document.getElementById("experience")
const educationContent = document.getElementById("education")
const links = document.querySelectorAll(".tab-link")
const contents = document.querySelectorAll(".tab-contents")
const exitBtn = document.getElementById("exit")
const menuBtn = document.getElementById("menu")
const menu = document.querySelector("header nav ul")


function eraseClass() {
    links.forEach((e) => {
        e.classList.remove("active-link")
    })
    contents.forEach((e) => {
        e.classList.remove("tab-activate")
    })
}
tabSkills.addEventListener("click", () => {
    eraseClass()
    tabSkills.classList.add("active-link")
    skillsContent.classList.add("tab-activate")
})
tabExperience.addEventListener("click", () => {
    eraseClass()
    tabExperience.classList.add("active-link")
    experienceContent.classList.add("tab-activate")
})
tabEducation.addEventListener("click", () => {
    eraseClass()
    tabEducation.classList.add("active-link")
    educationContent.classList.add("tab-activate")
})

menuBtn.addEventListener("click", () => {
    menu.classList.add("show")
})
exitBtn.addEventListener("click", () => {
    menu.classList.remove("show")
})

// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyboNm1wFZiEC2vqa9MhTlOHoIbEs-6CRnuk5N2RwqDoFjxD8btLvgv8vWn1phG47mVVw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector(".contact form .msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.classList.add("msg-show")
            msg.innerHTML = "Message Send Successfully."
            setTimeout(() => {
                msg.classList.remove("msg-show")
                msg.innerHTML = "";
            }, 3000)
            form.reset()
        })
        .catch(error => {
            msg.classList.add("msg-show")
            msg.innerHTML = "Error, message doesn't send."
            setTimeout(() => {
                msg.classList.remove("msg-show")
                msg.innerHTML = "";
            }, 3000)
        })
})
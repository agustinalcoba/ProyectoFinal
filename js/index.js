
let musicbtn = document.getElementById('music')
let seriesbtn = document.getElementById('series')
let moviesbtn = document.getElementById('movies')
let aside = document.getElementById('theme-option')

let r = document.querySelector('html')

musicbtn.addEventListener("click", setAside)
moviesbtn.addEventListener("click", setAside)
seriesbtn.addEventListener("click", setAside)

function SetSection(section) {
    setOffAllSections()
    document.getElementById(section).style.display = "flex"
    document.getElementById(section).style.maxHeight = "95vh"
    document.getElementById(section).style.overflow = "auto"
}
function setAside() {
    document.getElementById('nav').style.display="block"
    document.getElementById('nav').click()
    document.getElementById('header').style.minHeight = "0px"
    document.getElementById('header').style.maxHeight = "0px"
    aside.style.minWidth = "250px"
    aside.style.width = "250px"

    r.style.setProperty('--max-width-option-article', '200px')
    r.style.setProperty('--min-width-option-article', '200px')
    r.style.setProperty('--max-height-option-article', '200px')
    r.style.setProperty('--min-height-option-article', '200px')

    r.style.setProperty('--max-width-img', '100px')
}

function setOffAllSections() {
    document.getElementById("music-section").style.maxHeight = "0px"
    document.getElementById("music-section").style.overflow = "hidden"

    document.getElementById("movies-section").style.maxHeight = "0px"
    document.getElementById("movies-section").style.overflow = "hidden"

    document.getElementById("series-section").style.maxHeight = "0px"
    document.getElementById("series-section").style.overflow = "hidden"
}
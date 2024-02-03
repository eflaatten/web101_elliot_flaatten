// contact.html

const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

// about.html
handleClick = () => {
  const bottomContainer = document.querySelector('.bottom-container')
  bottomContainer.scrollIntoView({behavior: "smooth"})
}

scrollToTop = () => {
  const aboutContainer = document.querySelector('.about-container')
  aboutContainer.scrollIntoView({behavior: "smooth"})
}



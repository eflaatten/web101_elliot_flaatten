// contact.html

const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

// Function for adding red to required fields
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault()
  
  let requiredInputs = document.querySelectorAll("[required]")

  requiredInputs.style.border = "error-border"
  console.log("Form submitted")
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



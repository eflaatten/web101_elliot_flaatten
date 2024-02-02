handleClick = () => {
  const bottomContainer = document.querySelector('.bottom-container')
  bottomContainer.scrollIntoView({behavior: "smooth"})
}

scrollToTop = () => {
  const aboutContainer = document.querySelector('.about-container')
  aboutContainer.scrollIntoView({behavior: "smooth"})
}
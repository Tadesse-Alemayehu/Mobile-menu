
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("imported")
  const m = document.getElementById("switch-menu")
  const icon = m.getElementsByTagName("i")[0]
  const navbar = document.getElementById("desktop-nav")
  m.addEventListener("click", (e) => {
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    }
    else {
      icon.classList.add("fa-bars")
      icon.classList.remove("fa-times")
    }
  })
})

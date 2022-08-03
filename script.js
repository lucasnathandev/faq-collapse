const toggles = document.querySelectorAll(".faq-toggle")

function toggleActiveClass(element) {
  element.classList.toggle("active")
}

function main() {
  toggles.forEach((toggle) => {
    toggle.addEventListener("pointerup", (e) => {
      toggleActiveClass(toggle.parentNode)
    })
  })
}

main()

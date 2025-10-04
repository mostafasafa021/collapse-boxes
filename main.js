let headers = document.querySelectorAll(".accordion-header")

// console.log(headers)

// headers.forEach(function(el) {
//   el.addEventListener("click", function(event) {
//     headers.forEach(function(el) {
//       el.nextElementSibling.classList.remove("show")
//     })
//     el.nextElementSibling.classList.toggle("show")
//   })
// })


headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains("show");

    // Close all
    headers.forEach(h => h.nextElementSibling.classList.remove("show"));

    // Re-open only if it wasn’t already open
    if (!isOpen) {
      content.classList.add("show");
    }
  });
});

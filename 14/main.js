const uploadArea = document.querySelector(".uploads")

uploadArea.addEventListener("dragover", () => {
  uploadArea.classList.add("dragover")
})

uploadArea.addEventListener("dragleave", () => {
  uploadArea.classList.remove("dragover")
})
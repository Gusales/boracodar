function loading(type) {
  const btn = document.querySelector(`.${type}`);

  btn.classList.add("loading")
  btn.innerHTML = `<img src="./assets/loading.svg" alt="loading..." class="rotation"> interaja comigo`
}
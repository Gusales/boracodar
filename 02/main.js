function animateProduct() {
  console.log(document.getElementById('productImage').src)
  document.getElementById('productImage').src = './assets/product.gif'

  document.querySelector('.btn-360').classList.add('none')
  document.querySelector('.btn-close').classList.remove('none')
}

function stopProduct() {
  document.getElementById('productImage').src = './assets/product.jpg'

  document.querySelector('.btn-close').classList.add('none')
  document.querySelector('.btn-360').classList.remove('none')
}
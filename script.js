const allImages = document.querySelectorAll(".all-images img");
const mainImg = document.querySelector(".main-image");
const modal = document.getElementById("imageModel");
const popupImage = document.getElementById("popupImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const modalImages = document.querySelectorAll(".modal-images img");
const cartIcon = document.getElementById("cart-icon");
const cartContainer = document.getElementById("cart-container");
const cartMenu = document.querySelector(".cart");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const addToCartBtn = document.querySelector(".add-to-cart");

let index = 0;
let cart = [];

allImages.forEach((img) => {
  img.addEventListener("click", () => {
    mainImg.src = img.src;
  });
});

modalImages.forEach((img) => {
  img.addEventListener("click", () => {
    popupImage.src = img.src;
  });
});
mainImg.addEventListener("click", () => {
  const selectedImg = allImages[index];
  popupImage.scr = selectedImg.src;
  modal.style.display = "flex";

  popupImage.src = mainImg.src;
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % modalImages.length;
  popupImage.src = modalImages[index].src;
});
prevBtn.addEventListener("click", () => {
  index = (index - 1 + modalImages.length) % modalImages.length;
  popupImage.src = modalImages[index].src;
});

cartIcon.addEventListener("click", () => {
  cartContainer.style.display = "flex";
});
cartCloseBtn.addEventListener("click", () => {
  cartContainer.style.display = "none";
});


function renderCart() {
  const cartElement = document.querySelector('.cart');
  cartElement.innerHTML = `
    <img src="/images/icon-close.svg" alt="" id="cartCloseBtn" />
    <h3>Cart</h3>
  `;

  if (cart.length === 0) {
    cartElement.innerHTML += `<p>Your cart is empty.</p>`;
  } else {
    cart.forEach(item => {
      cartElement.innerHTML += `
        <div class="cart-item">
          <img src="${item.img}" width="50" />
          <div>
            <p>${item.name}</p>
            <p>$${item.price} x ${item.quantity} <strong>$${item.price * item.quantity}</strong></p>
          </div>
          <img src="./images/icon-delete.svg" alt="Delete" class="delete-item" data-id="${item.id}" />
        </div>
      `;
    });

    cartElement.innerHTML += `<button class="checkout-btn">Checkout</button>`;
  }


  document.getElementById('cartCloseBtn').addEventListener('click', () => {
    cartContainer.style.display = 'none';
  });


  document.querySelectorAll('.delete-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      cart = cart.filter(item => item.id !== id);
      renderCart();
    });
  });
}

addToCartBtn.addEventListener('click', () => {
  const product = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    img: document.querySelector('.main-image').src,
    price: 125,
    quantity: 1
  };


  const existingProduct = cart.find(p => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }

  renderCart();
});

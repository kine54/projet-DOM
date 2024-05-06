document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const totalDisplay = document.querySelector('.total');

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('h3').innerText;
            const productPrice = parseFloat(this.getAttribute('data-price'));

            const item = document.createElement('li');
            item.innerText = `${productName} - ${productPrice}€`;
            cartItems.appendChild(item);

            total += productPrice;
            totalDisplay.innerText = total;
        });
    });

    const btnPlusAll = document.querySelectorAll('.qty-plus');
    const btnMinusAll = document.querySelectorAll('.qty-minus');
    const addButton = document.querySelector('#add_button');

    let deleteButton = document.getElementById("1")

    deleteButton.addEventListener("click", function () {
        // Sélectionnez l'élément à supprimer
        let elementToDelete = document.getElementById("all_products");
    
        // Vérifiez si l'élément à supprimer existe
        if (elementToDelete) {
          // Supprimez l'élément du DOM
          elementToDelete.parentNode.removeChild(elementToDelete);
        }
      });

    btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
    btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

    addButton.addEventListener('click', addArticle);

    function increaseQuantity() {
        const qtyInput = this.parentElement.querySelector('.qty');
        qtyInput.value = parseInt(qtyInput.value) + 1;
        subtotal(this);
        calculateTotal();
    }

    function decreaseQuantity() {
        const qtyInput = this.parentElement.querySelector('.qty');
        if (qtyInput.value > 0) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
            subtotal(this);
            calculateTotal();
        }
    }

    function subtotal(button) {
        const priceElement = button.parentElement.parentElement.querySelector('.price');
        const qtyInput = button.parentElement.querySelector('.qty');
        const price = parseInt(priceElement.innerHTML);
        const qty = parseInt(qtyInput.value);
        const subt = price * qty;
        button.parentElement.parentElement.querySelector('.subtotal').innerHTML = subt + 'fr';
    }

    function calculateTotal() {
        const subtotals = document.querySelectorAll('.subtotal');
        let total = 0;
        subtotals.forEach(subtotal => {
            total += parseInt(subtotal.innerHTML);
        });
        document.querySelector('#total_display').textContent = total + ' fr cfa';
    }



    function addArticle() {
        const name = document.querySelector('#name-product');
        const price = document.querySelector('#price_product');
        document.querySelector('#all_products').innerHTML += 
        `<tr>
            <td class="article--name">
                <div style="margin-right:1rem">
                    <img src="https://img.freepik.com/vecteurs-libre/panier-supermarche-pictogramme-epicerie_1284-11697.jpg?t=st=1714744736~exp=1714745336~hmac=9b148420b1e013705f954ad9fc0b54bc7acb734f1195f0b2cccf31c2397da9a7" width="100" height="100">
                </div> 
                <div>
                    <h3>${name.value}</h3> 
                    <a class="remove" id="1">supprimer</a>
                </div>
            </td> 
            <td class="quantity">
                <button class="qty-minus" id="1">
                    -
                </button> 
                <input type="text" readonly placeholder="Prix unitaire" class="qty" value="1">
                <button class="qty-plus" id="1">
                    +
                </button> 
            </td>
            <td class="price">
                ${price.value} fr
            </td>
            <td class="subtotal"> 
                ${price.value} fr
            </td>
        </tr>`;
        loadNewElement();
    }

    function loadNewElement() {
        const btnPlusAll = document.querySelectorAll('.qty-plus');
        const btnMinusAll = document.querySelectorAll('.qty-minus');
        btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
        btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});
    }
  });
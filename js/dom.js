let btnPlusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let addButton = document.querySelector('#add_button')

btnPlusAll.forEach((btn) => {btn.addEventListener ('click', increaseQuantity)} );
btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)} );

addButton.addEventListener('click', addArticle);

function increaseQuantity() {
   this.previousElementSibing.value = parseInt(this.previousElementSibing.value) +1 ;
      subtotal();

}

function decreaseQuantity() {
    if (document.querySelector('.qty').value > 0) {
        document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) -1;
        subtotal()
    }
}
 
function subtotal(){
 let price = parseInt(document.querySelector('.price').innerHTML);
 let qty = parseInt(document.querySelector('.qty').value);
 let subt = price*qty;

 document.querySelector('.subtotal').innerHTML = subt + 'fr';

}

function addArticle(){
  let name = document.querySelector('#name-product');
  let price = document.querySelector('#price_product')
  document.querySelector('#all_products').innerHTML += '<tr><td class="article--name"><div style="margin-right:1rem"><img src="https://img.freepik.com/vecteurs-libre/panier-supermarche-pictogramme-epicerie_1284-11697.jpg?t=st=1714744736~exp=1714745336~hmac=9b148420b1e013705f954ad9fc0b54bc7acb734f1195f0b2cccf31c2397da9a7" width="100" height="100"></div> <div><h3>' + name.value + '</h3> <a class="remove" id="1">suppimer</a></div></td> <td class="quantity"><button class="qty-minus" id="1">-</button> <input type="text" readonly placeholder="Prix unitaire" class="qty" value="1"><button class="qty-plus" id="1">+</button> </td><td class="price">' + price.value + ' fr</td><td class="subtotal"> ' + price.value + ' fr</td></tr>'
  loadNewElement();

}        

function loadNewElement(){
  let btnPlusAll = document.querySelectorAll('.qty-plus');
  let btnMinusAll = document.querySelectorAll('.qty-minus');
  
  btnPlusAll.forEach((btn) => {btn.addEventListener ('click', increaseQuantity)} );
  btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)} );
}


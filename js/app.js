const btnAdd=document.querySelectorAll("[data-action='Add_to_Card']")
const modalProductDom=document.querySelector(".modal-body")
const cart=[];
btnAdd.forEach(btnAddDom=>{
    btnAddDom.addEventListener("click",()=>{
     const productParent=btnAddDom.parentNode.parentNode;
     var product={
      image:productParent.querySelector(".card-img-top").getAttribute("src"),
      productName:productParent.querySelector(".card-title").innerText,
      price:productParent.querySelector(".card-price").innerText,
      description:productParent.querySelector(".card-text").innerText,
      quantity:1
    }

        const cartItemDoms=document.querySelectorAll(".modal-middle")
       var isIncart=(cart.filter(cartitm=>(cartitm.productName.trim()==product.productName.trim())).length>0)
        if(!isIncart){
            modalProductDom.insertAdjacentHTML('beforeend',`
            <div class="modal-middle">
                <div class="d-flex justify-content-between">
               <div class="col-lg-2">
                   <img class="card-photo-item img-fluid" src="${product.image}"/>
               </div>
               <div class="">
                   <h5 class="card-name-item">${product.productName}</h5>
               </div>
                <div class="col-lg-5 p-0">
                <span class="card-price-item">${product.price}</span>
                <button type="submit" data-action="Decrease_Item" class="btn btn-sm btn-primary">&minus;</button>
                <span class="product_quantity">${product.quantity}</span>
                <button data-action="Increase_Item" type="submit" class="btn btn-sm btn-primary">&plus;</button>
                <button data-action="Remove_Item" type="submit" class="btn btn-sm btn-danger">&times;</button>
                
                </div>
            </div>
            </div>
            `)
            cart.push(product)
            cartMiddleDom=modalProductDom.querySelectorAll(".modal-middle")
            cartMiddleDom.forEach(cartmiddle=>{
                if(cartmiddle.querySelector(".card-name-item").innerText==product.productName){
                  product.price=product.price.split("Azn");
                  cartmiddle.querySelector("[data-action='Increase_Item']")
                  .addEventListener('click',()=>{
                    IncreaseItem(product,cartmiddle)
              })    
                }
                
              })                        
        }
       
    })
})
function IncreaseItem(product,cartmiddle){
    cart.forEach(cartItem=>{
        if(cartItem.productName==product.productName){
            if(cartItem.quantity>1){
                cartmiddle.querySelector(".product_quantity").innerText=++cartItem.quantity;    
                product.price=parseInt(product.price[0])*parseInt(cartmiddle.querySelector(".product_quantity").innerText)
                cartmiddle.querySelector(".card-price-item").innerText=product.price*product.quantity
            }
        }
         
                           
    
    })
}
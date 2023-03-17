function addToCartHandler (event){
    let parentNodeData = event.target.parentNode.outerHTML
    const data = localStorage.getItem('cart') || '';
    parentNodeData = parentNodeData.replace('<button onclick="addToCartHandler(event)">Add to cart</button>','<button onclick="removeToCartHandler(event)">Remove to cart</button>')
    if(!data.includes(parentNodeData)){
        localStorage.setItem('cart', `${data}${parentNodeData}`);
    }
    window.location.href = './cart.html'
}

function cartUpdateHandler(){
    const data = localStorage.getItem('cart') || '';
    // console.log(!data,data,'data'); 
    if(!data){
        window.location.href = './index.html'
    }
    let cart = document.getElementById('all_cart_pics')
    cart.innerHTML = data
    // console.log(cart,data);
}

function removeToCartHandler(event){
    let parentNodeData = event.target.parentNode.outerHTML
    let data = localStorage.getItem('cart') || '';
    let cart = document.getElementById('all_cart_pics')
    data = data.replace(parentNodeData,'')
    cart.innerHTML = data
    localStorage.setItem('cart', `${data||''}`);
    if(!data){
         window.location.href = './index.html'
    }
}

function loginfunction() {
    document.querySelector('.login').classList.add('showlogin')
    }
  
    function closefunction() {
      document.querySelector('.login').classList.remove('showlogin')
      }       

    var close=document.querySelector('.closeicon')
    close.addEventListener('click' , closefunction)
    
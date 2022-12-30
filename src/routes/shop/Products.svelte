<script>
    import {products, cart} from "./cart.js";

const addToCart = (product) => {
    for(let item of $cart) {
            if(item.id === product.id) {
                product.quantity += 1
                $cart = $cart;
                return;
            }
    }
    $cart = [...$cart, product]
}
</script>

<div class="product-list">
{#each $products as product}
<div class="imagebg">
    <div class="image" style="background-image: url({product.image})"></div>
<h4>{product.name}</h4>
<p>{product.price} VND</p>
<button on:click={() => addToCart(product)}>Thêm giỏ hàng</button>
</div>
{/each}
</div>

<style>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.imagebg{
    border: 1px solid grey;
    display: block;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10pxs;
}

.image {
    height: 150px;
    width: 150px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    /* border: 1px solid gray; */
}
button{
    background-color: black;
    color: whitesmoke;
    border-radius: 10px;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 20px;
    /* margin-top: 10px; */
}
button:hover{
    background-color: green;
    color: whitesmoke;
}
h4,p{
    align-items: center;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    margin-top: 8px;
}
</style>
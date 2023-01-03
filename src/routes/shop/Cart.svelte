<script>
	import {cart } from "./cart.js";
    
	
	const minusItem = (product) => {
		for(let item of $cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
							$cart = $cart
					} else {
							$cart = $cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
	
	const plusItem = (product) => {
			for(let item of $cart) {
							if(item.id === product.id) {
								product.quantity += 1
								$cart = $cart;
								return;
							}
					}
	}

		$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
	
</script>

<div class="cart-list">
		<div class="cart-item">
			<p class="shop-cart" style="width: 30%; margin:0 auto;font-weight: 600;">Sản phẩm</p>
			<div class="shop-cart">số lượng</div>
			<p class="shop-cart">Số tiền</p>
		</div>
		
	{#each $cart as item }
		{#if item.quantity > 0}
		<div class="cart-item">
			<img width="50" src={item.image} alt={item.name}/>
			<div class="shop-cart">
				<div class="shop-item">
					<button class="left" on:click={() => plusItem(item)}>+</button>
					&ensp;&ensp;&ensp;&ensp;{item.quantity}&ensp;&ensp;&ensp;&ensp;
					<button class="right" on:click={() => minusItem(item)}>-</button>
				</div>
			</div>
			<p class="shop-cart">{item.price * item.quantity} VND</p>
		</div>
		{/if}
	{/each}
	<div class="total">
		<h4>Tổng thanh toán ({$cart.length} sản phẩm): {total} đ</h4>
		
	</div>
	<button style="float: right; margin: 10px;">Mua hàng</button>
</div>


<style>
	.cart-item {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		/* border: 1px solid; */
		border-bottom: 1px solid gray;
		margin: 5px;
		padding: 5px;
	}

	img{
		/* border: 1px solid; */
		width: 30%;
		margin: 0 auto;
	}


	.shop-cart{
		/* border: 2px solid; */
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 15px;
		font-weight: 600;
	}

	button.left{
		margin-right: 15px;
		width: 3em;
		background-color: white;
		color: gray;
		border: 1px solid gray;
	}
	button.right{
		margin-left: 15px;
		width: 3em;
		background-color: white;
		color: gray;
		border: 1px solid gray;
	}

	.total {
		text-align: right;
		margin-top: 25px;
	}
	
	.cart-list {
		border: 2px solid;
		padding: 10px;
		
	}
</style>
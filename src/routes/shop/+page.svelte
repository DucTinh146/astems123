<script>
	// import CartLength from "./CartLength.svelte";
	// import Products from "./Products.svelte";
	import Cart from "./Cart.svelte";
	// import Address from "./Address.svelte";
</script>

<section>
	<h3>Giỏ hàng</h3>
	<!-- <CartLength />
<Products /><br/> -->
<Cart />
<!-- <Address /> -->
</section>

<style>
	section{
		width: 850px;
		margin: 0 auto;
		display: block;
		justify-content: center;
		align-items: center;
	}
	h3{
		font-weight: 500;
		color: black;
		font-size: 50px;
		justify-content: center;
		align-items: center;
		display: flex;
		padding: 10px;
	}
</style>

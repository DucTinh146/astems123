<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>


<script>
	// import { page } from '$app/stores';
	import CartLength from "../shop/CartLength.svelte";
	import Products from "../shop/Products.svelte";
	// import Cart from "./Cart.svelte";
	// import Address from "./Address.svelte";
</script>

<section>
	<CartLength />
<Products /><br/> 
<!-- <Cart /> -->
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
</style>

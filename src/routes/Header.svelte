<script>
	import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
	import logo from '$lib/images/123.jpg';
	import 'bootstrap/dist/css/bootstrap.min.css';

</script>

<header>
	<div class="corner">
		<a href="https://www.facebook.com/profile.php?id=100009046024337">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true"> -->
			<!-- <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" /> -->
		<!-- </svg> -->
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/contact">Contact</a>
			</li>
			<div class="input-group rounded">
				<input type="search" class="form-control rounded" placeholder="Tìm kiếm sản phẩm...." aria-label="Search" aria-describedby="search-addon" />
				<!-- <span class="input-group-text border-0" id="search-addon">
				  <i class="fas fa-search"></i>
				</span> -->
			  </div>
			<li>
				<a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
				  </svg></a>
			</li>
			<li>
				<a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
					<path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
				  </svg></a>
			</li>
			<li>
				<a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
				  </svg></a>
			</li>
		</ul>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true"> -->
			<!-- <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" /> -->
		<!-- </svg> -->
	</nav>

	<!-- <div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		background-color: wheat;
	}

	.corner {
		width: 10em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 162%;
		height: 100%;
	}

	.corner img {
		border-radius: 10px;
		object-fit: contain;
		/* padding-left: 50px; */
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	} */

	/* path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

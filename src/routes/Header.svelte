<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<header>
	<h1>Evgeny Bobkunov's page</h1>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="{base}/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/comic' ? 'page' : undefined}>
				<a href="{base}/comic">Comic</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="{base}/projects">Projects</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: #85736f;
		color: #fff;
		padding: 20px;
		margin: 0px;
	}

	h1 {
		margin: 0;
		font-size: 28px;
		float: left;
		font-family: Arial, sans-serif;
		font-weight: 700;
	}

	nav {
		margin-top: 10px;
		margin-right: 10px;
		float: right;
	}

	nav ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
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
		font-family: Arial, sans-serif;
		margin: 0px;
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 16px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

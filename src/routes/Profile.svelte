<script>
	import profilepic from '$lib/images/profilepic.jpg';
	import telegram from '$lib/images/telegram.png';
	import vk from '$lib/images/vk.png';
	import github from '$lib/images/github.png';
	import email from '$lib/images/email.png';
	import { base } from '$app/paths';
</script>

<div id="leftbar">
	<div id="photo">
		<img src={profilepic} alt="Avatar" style="width:300px" />
	</div>

	<div id="contact">
		<h2>You can find me:</h2>

		<div id="social">
			<a href="https://t.me/eugengold" id="tg-link"
				><img src={telegram} alt="Telegram" style="width:50px" /></a
			>
			<a href="https://vk.com/h_no3" id="vk-link"><img src={vk} alt="VK" style="width:50px" /></a>
			<a href="https://github.com/cuprum-acid" id="gh-link"
				><img src={github} alt="Github" style="width:50px" /></a
			>
			<a href="mailto:e.bobkunov@innopolis.university" id="email"
				><img src={email} alt="Email" style="width:50px" /></a
			>
		</div>
	</div>

	<style>
	</style>

	<a href="{base}/comic" id="comic"
		><button id="comic" style="margin-top: 20px; margin-left:80px">Get some comic </button></a
	>
</div>

<style>
	div#leftbar {
		float: left;
		width: 300px;
		height: 100%;
		padding: 20px;
		color: #534340;
	}
	div#photo {
		width: 300px;
		height: 300px;
		overflow: hidden;
		border-radius: 50%;
		border: 5px solid #fff;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		font-size: 16px;
	}
	div#social {
		margin-top: 20px;
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 40px;
	}

	button#comic {
		background-color: #85736f;
		color: #fff;
		padding: 10px;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
		text-decoration: none;

		margin-left: 80px;
	}

	button#comic:hover {
		background-color: #534340;
	}
</style>

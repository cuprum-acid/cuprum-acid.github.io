<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="description" content="Show some comics" />
</svelte:head>

<div class="text-column">
	<section class="API-experience">
		<div class="container">
			<div class="comic">
				<h1>{data.comic.safe_title}</h1>
				<img src={data.comic.img} alt={data.comic.alt} />
				<p>{data.comic.dataInfo}</p>
			</div>
		</div>
	</section>
</div>

<style>
	.comic {
		font-size: 20px;
		padding-top: 20px;
	}

	.comic h1 {
		font-size: 30px;
	}
	.comic p {
		padding-top: 10px;
	}

	.API-experience {
		text-align: center;
		margin: 0;
		color: #999;
	}
</style>

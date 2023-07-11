<script lang="ts">
	import { onMount } from "svelte";
	import { formatDistanceToNow } from "date-fns";
	import spinner from "$lib/images/load.gif";

	interface ComicDetailsResponse {
		img: string;
		alt: string;
		safe_title: string;
		year: number;
		month: number;
		day: number;
	}

	let comicData: ComicDetailsResponse;
	let email = "e.bobkunov@innopolis.university";
	let loading = false;

	const fetchComicId = async (): Promise<string> => {
		const response = await fetch(
			`https://fwd.innopolis.app/api/hw2?email=${email}`
		);
		const data = await response.text();
		return data;
	};

	const fetchComicDetails = async (
		comicId: string
	): Promise<ComicDetailsResponse> => {
		const response = await fetch(
			`https://fwd.innopolis.university/api/comic?id=${comicId}`
		);
		const comicData: ComicDetailsResponse = await response.json();
		return comicData;
	};

	const displayComic = (): void => {
		const comicContainer = document.querySelector(".comic-container");
		const comicImage = comicContainer?.querySelector(
			".comic-image"
		) as HTMLImageElement;
		const comicTitle = comicContainer?.querySelector(
			".comic-title"
		) as HTMLElement;
		const comicDate = comicContainer?.querySelector(
			".comic-date"
		) as HTMLElement;
		const comicAgo = comicContainer?.querySelector(
			".comic-ago"
		) as HTMLElement;

		if (comicImage && comicTitle && comicDate) {
			comicImage.src = comicData.img;
			comicImage.alt = comicData.alt;
			comicTitle.textContent = comicData.safe_title;

			const date = new Date(
				comicData.year,
				comicData.month - 1,
				comicData.day
			);
			comicDate.textContent = date.toLocaleDateString();
			comicAgo.textContent = formatDistanceToNow(date) + " ago";
		}
	};

	const handleError = (error: Error): void => {
		console.error(error);
	};

	const loadComic = async (): Promise<void> => {
		try {
			loading = true;
			const comicId = await fetchComicId();
			comicData = await fetchComicDetails(comicId);
			displayComic();
		} catch (error) {
			console.error("Error occurred", error);
		} finally {
			loading = false;
		}
	};

	onMount(loadComic);
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="description" content="Show some comics" />
</svelte:head>

<section>
	<div class="comic-container">
		<img
			class="comic-image"
			src={spinner}
			alt="The comic didn't load, please wait"
		/>
		<h3 class="comic-title">Comics</h3>
		<p class="comic-date" />
		<p class="comic-ago" />
		<button class="comic-button" disabled={loading} on:click={loadComic}>
			{#if loading}
				Loading...
			{:else}
				Next comic
			{/if}
		</button>
	</div>
</section>

<style>
	.comic-container {
		margin: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.comic-image {
		max-width: 100%;
		height: auto;
	}

	.comic-title {
		margin: 5px;
	}

	.comic-date {
		margin: 0;
		color: #999;
	}

	.comic-button {
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 10px 20px;
		border: 1px solid #999;
		border-radius: 5px;
		background-color: #fff;
		color: #999;
		font-size: 16px;
		cursor: pointer;
	}

	.comic-button:hover {
		border-color: #000;
		color: #000;
	}

	.comic-button:active {
		background-color: #000;
		color: #fff;
	}

	.comic-button:focus {
		outline: none;
	}

	.comic-button:disabled {
		border-color: #ccc;
		color: #ccc;
		cursor: default;
	}

	.comic-button:disabled:hover {
		border-color: #ccc;
		color: #ccc;
	}

	.comic-button:disabled:active {
		background-color: #fff;
		color: #ccc;
	}

	.comic-button:disabled:focus {
		outline: none;
	}

	.comic-ago {
		margin: 0;
		color: #999;
	}
</style>

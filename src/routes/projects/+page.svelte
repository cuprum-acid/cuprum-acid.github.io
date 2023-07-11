<script>
    import alphabeta from "$lib/images/alphabeta.jpg";
    import fridgeapp from "$lib/images/fridgeapp.jpg";
    import tiptime from "$lib/images/tiptime.jpg";
</script>

<svelte:head>
    <title>Projects</title>
    <meta name="description" content="My personal projects" />
</svelte:head>

<div id="projects">
    <h2>Projects</h2>
    <p>
        Now I am actively learning mobile development on Android using the
        Kotlin language. Here are a few of my projects that I have already done
        and am working on:
    </p>
    <div id="projects-list">
        <div class="project">
            <h3>Alpha Beta</h3>
            <p>
                Teaching children to read and to write the letters of the
                English alphabet
            </p>
            <a href="https://github.com/KuznetsLex/AlphaBeta" id="gh-link"
                ><p>GitHub link</p></a
            >

            <div class="image-container">
                <img
                    src={alphabeta}
                    class="rectangle-image"
                    alt="Alpha Beta"
                    style="width:300px"
                />
            </div>
        </div>
        <div class="project">
            <h3>Fridge App</h3>
            <p>The smart fridge app</p>
            <a href="https://github.com/cuprum-acid/fridgeapp" id="gh-link"
                ><p>GitHub link</p></a
            >
            <div class="image-container">
                <img
                    src={fridgeapp}
                    class="rectangle-image"
                    alt="Fridge App"
                    style="width:300px"
                />
            </div>
        </div>
        <div class="project">
            <h3>Tip Time</h3>
            <p>Tip calculation</p>
            <a href="https://github.com/cuprum-acid/TipTime" id="gh-link"
                ><p>GitHub link</p></a
            >
            <div class="image-container">
                <img
                    src={tiptime}
                    class="rectangle-image"
                    alt="Tip Time"
                    style="width:300px"
                />
            </div>
        </div>
    </div>
</div>

<style>
    #projects {
        margin: 20px 20px;
        padding: 20px;
        background-color: #faf1f4;
        color: #3c0700;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-size: 16px;
    }

    #projects-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .project {
        width: 30%;
        margin-bottom: 20px;
        margin-top: 20px;
        padding: 10px;
        background-color: #85736f;
        color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .rectangle-image {
        width: 200px;
        height: 600px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .rectangle-image:hover {
        transform: scale(1.05);
    }

    h2 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    p {
        margin: 5px 0;
        font-size: 16px;
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #gh-link {
        color: #fff;
        text-decoration: none;
    }

    #gh-link:hover {
        color: #fff;
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        #projects-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .project {
            width: 100%;
            margin-bottom: 20px;
            margin-top: 20px;
            padding: 10px;
            background-color: #85736f;
            color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .rectangle-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .rectangle-image:hover {
            transform: scale(1.05);
        }

        h2 {
            font-size: 22px;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        p {
            margin: 5px 0;
            font-size: 16px;
        }

        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #gh-link {
            color: #fff;
            text-decoration: none;
        }

        #gh-link:hover {
            color: #fff;
            text-decoration: underline;
        }
    }
</style>

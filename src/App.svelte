<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

<script>
    import Game from "./Game.svelte";
    import StartGamePanel from "./Panels/StartGamePanel.svelte";

    let activated = false;
</script>

<StartGamePanel activate={() => {activated = true}}/>
{#if activated}
    <Game/>
{/if}
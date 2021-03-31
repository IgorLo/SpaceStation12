<script>
    import {makeID} from "../common";
    import {GameSound} from "../GameSound";

    export let title;
    export let text;
    export let buttonText = "Кнопка";
    export let action;

    let panelRoot;
    let onclick;
    $: onclick = function () {
        GameSound.play('click');
        panelRoot.parentNode.removeChild(panelRoot);
        if (action) {
            action();
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0 0 40px;
    }

    .main {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: black;
        z-index: 10;
        color: wheat;
        font-family: 'Press Start 2P', cursive;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        padding: 20px 30px;
        color: wheat;
        background: transparent;
        border: 1px solid wheat;
    }

    button:active {
        background: #333333;
    }

</style>

<div bind:this={panelRoot} class="main">
    <h1>{title}</h1>
    <h3>{text}</h3>
    <button on:click={onclick}>{buttonText}</button>
</div>
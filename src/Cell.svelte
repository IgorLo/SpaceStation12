<script>
    import {stringToRGB} from "./common";

    export let cell;
    let player;
    $: player = cell.player;
    let item;
    $: item = cell.item;
    let color;
    $: color = player ? stringToRGB(player.name) : item ? item.color : '000000';
    export let size;
</script>

<style>
    td {
        background-size: 100% 100%;
        background-position: center;
        background-color: black;
        width: var(--size);
        height: var(--size);
        transition: all 0.3s ease-in-out;
        padding: 0;
        margin: 0;
        opacity: 0.0;
    }

    .halfVisible {
        opacity: 0.5;
    }

    .visible {
        opacity: 1.0;
    }

    td.empty {
        /*background-image: url("../floor.jpg");*/
        background-color: #bfaa84;
    }

    td.wall {
        /*background-image: url("../wall.jpg");*/
        background-color: #691b13;
    }

    td div {
        opacity: 0.0;
        box-sizing: content-box;
    }

    td .cell-content {
        cursor: pointer;
        opacity: 1.0;
        position: relative;
        background: #52ae16;
        margin-top: 5%;
        margin-left: 10%;
        width: 80%;
        height: 80%;
        max-width: var(--size);
        max-height: var(--size);
    }

    div.name {
        opacity: 1.0;
        top: 100%;
        text-align: center;
        width: 200px;
        right: -100px;
        position: absolute;
        z-index: 1;
    }

    div.item {
        border-radius: 50%;
    }
</style>

<td class={cell.state} style="--size: {size}px; opacity: {cell.opacity};">
    {#if player}
        <div class="cell-content player" style="background-color: #{color};">
            <div class="name">{player.name}</div>
        </div>
    {/if}
    {#if item}
        <div class="cell-content item" style="background-color: #1b36d9;">
            <div class="name">{item.type}</div>
        </div>
    {/if}
</td>

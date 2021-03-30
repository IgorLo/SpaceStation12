<script>
    import {stringToRGB} from "./common";

    export let cell;
    let player;
    $: player = cell.player;
    let color;
    $: color = player ? stringToRGB(player.name) : '000000';
    let name;
    $: name = player ? player.name : '';
    export let size;
</script>

<style>
    td {
        background-size: 100% 100%;
        background-position: center;
        background-color: black;
        width: var(--size);
        height: var(--size);
        transition: all 0.3s linear;
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
        margin: 2px;
        box-sizing: border-box;
        width: var(--size);
        height: var(--size);
    }

    td div.player {
        cursor: pointer;
        opacity: 1.0;
        position: relative;
        background: #52ae16;
    }

    div.player:hover div.name {
        opacity: 1.0;
        top: 100%;
        text-align: center;
        width: 200px;
        right: -100px;
        position: absolute;
    }
</style>

<td class={cell.state} style="--size: {size-5}px; opacity: {cell.opacity};">
    <div class:player style="background-color: #{color};">
        <div class="name">{name}</div>
    </div>
</td>

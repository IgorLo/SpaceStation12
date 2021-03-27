<script>
    export let player = false;
    export let cell;
    export let size;
</script>

<style>
    td {
        background-size: 100% 100%;
        background-position: center;
        width: var(--size);
        height: var(--size);
    }

    td.empty {
        background-image: url("../floor.jpg");
    }

    td.wall {
        background-image: url("../wall.jpg");
    }

    td.player {
        background-image: url("../player.png");
    }
</style>

<td class={cell.state} class:player style="--size: {size}px"></td>

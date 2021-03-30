<script>
    import Cell from "./Cell.svelte";
    import {calcDistMap, calcLight} from "./common";
    export let map = [[]];
    export let players;
    export let me;
    const maxDistance = 7;
    export let maxDistanceMultiplier = 1.0;
    let distMap = calcDistMap(maxDistance * maxDistanceMultiplier);
    $: distMap = calcDistMap(maxDistance * maxDistanceMultiplier);
    $: if (players) {
        let visited = new Set();
        players.forEach((player) => {
            calcLight(map, player.x, player.y, distMap, visited);
        });
    }
    let squareSize = window.innerWidth / map[0].length;
    window.addEventListener('resize', () => {
        squareSize = window.innerWidth / map[0].length;
    });

    function distance(x1, x2, y1, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
</script>

<style>
    table {
        border: 1px solid wheat;
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        /*table-layout: fixed;*/
    }

</style>

<table>
    {#each map as row}
        <tr>
            {#each row as cell}
                <Cell
                        size={squareSize}
                        cell={cell}
                />
            {/each}
        </tr>
    {/each}
</table>
<script>
    import Cell from "./Cell.svelte";
    import {calcDistMap, calcLight, Item} from "./common";
    export let map = [[]];
    export let players;
    export let items;
    export let me;
    const baseDistance = 8;
    let distMaps = new Map();
    $: if (players) {
        let visited = new Set();
        players.forEach((player) => {
            let actualDistance = player.items.includes(Item.LAMP) ? baseDistance * 1.5 : baseDistance;
            if (player === me) {
                calcLight(map, player.x, player.y, calcDistMap(actualDistance, distMaps), visited);
            } else if (player.items.includes(Item.RADIO) && me.items.includes(Item.RADIO)) {
                calcLight(map, player.x, player.y, calcDistMap(actualDistance, distMaps), visited);
            }
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
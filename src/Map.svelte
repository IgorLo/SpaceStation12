<script>
    import Cell from "./Cell.svelte";
    export let map = [[]];
    export let players;
    export let me;
    let squareSize = window.innerWidth / map[0].length;
    window.addEventListener('resize', () => {
        squareSize = window.innerWidth / map[0].length;
    });

    function distance(x1, x2, y1, y2){
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
                        distance={distance(me.x, cell.x, me.y, cell.y)}
                />
            {/each}
        </tr>
    {/each}
</table>
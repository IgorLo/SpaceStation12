<script>
    import Cell from "./Cell.svelte";
    export let map = [[]];
    export let playerCoords = {
        x: 2,
        y: 2
    };
    let squareSize = window.innerWidth / map[0].length;
    window.addEventListener('resize', () => {
        squareSize = window.innerWidth / map[0].length;
    });
</script>

<style>
    table {
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
                <Cell size={squareSize} cell={cell} player={cell.x === playerCoords.x && cell.y === playerCoords.y}/>
            {/each}
        </tr>
    {/each}
</table>
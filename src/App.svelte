<script>
    import {createMap} from "./common";
    import Map from "./Map.svelte";
    import {PlayerMovement} from "./PlayerMovement";

    let map = createMap();

    let coords = {
        x: 1,
        y: 1
    };
    let movement = new PlayerMovement(coords, (newCoords) => {
        coords = newCoords;
        return coords;
    });
    movement.enable();
</script>

<h1>Добро пожаловать на станцию!</h1>
<Map map={map} playerCoords={{x: coords.x, y: coords.y}}/>
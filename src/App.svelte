<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

<script>
    import {createMap, localMap, makeID} from "./common";
    import Map from "./Map.svelte";
    import {PlayerMovement} from "./PlayerMovement";
    import {API} from "./API";

    let address = '192.168.1.38'

    let originalMap;
    let map = createMap(localMap);
    let myName = makeID(5);
    let players = [];

    let movement = new PlayerMovement((direction) => {
        api.makeMove(direction);
    });
    movement.enable();

    let message = '';
    $: console.log(message);

    let api = new API(
        (world) => {
            originalMap = world;
            map = createMap(world);
        },
        (newPlayers) => {
            players.forEach((player) => {
                map[player.y][player.x].player = null;
            });
            players = newPlayers;
            players.forEach((player) => {
                map[player.y][player.x].player = player;
            });
        },
        () => {movement.dropCooldown()},
        (error) => {
            message = error.message;
            console.log(error);
        },
        (event) => {
            message = event.code
            console.log(event);
        },
        myName
    );

    api.init(address);

    function getMe(playerArray) {
        return playerArray.find((player) => {
            return player.name === myName;
        }) || {x: -10, y: -10};
    }
</script>

<style>
    :global(body) {
        color: wheat;
        background: black;
    }

    h1 {
        text-align: center;
        font-family: 'Press Start 2P', cursive;
    }

    .main {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>

<div class="main">
    <h1>Добро пожаловать на станцию 12!</h1>
    <Map map={map} players={players} me={getMe(players)}/>
    <!--    <Chat/>-->
</div>

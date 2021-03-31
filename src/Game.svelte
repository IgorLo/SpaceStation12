<script>
    import {createMap, localMap, makeID} from "./common";
    import Map from "./Map.svelte";
    import {PlayerMovement} from "./PlayerMovement";
    import {API} from "./API";
    import {GameSound} from "./GameSound";
    import StartGamePanel from "./Panels/StartGamePanel.svelte";

    // let address = '192.168.1.38:8080'
    let address = 'space-station-12.herokuapp.com/'
    let debug = true;

    let originalMap;
    let map = createMap(localMap);
    let myName = makeID(5);
    let players = debug
        ? [{
            name: myName,
            x: 1,
            y: 1
        }, {
            name: 'otherGuy',
            x: 19,
            y: 3
        }]
        : [];
    let items = debug
        ? [{
            type: 'LAMP',
            x: 3,
            y: 3
        }]
        : [];

    let movement = new PlayerMovement(debug, (direction) => {
        GameSound.play('step');
        if (debug) {
            let me = {
                name: myName,
                x: players[0].x,
                y: players[0].y
            }
            switch (direction) {
                case 'up':
                    me.y = players[0].y - 1;
                    break;
                case 'down':
                    me.y = players[0].y + 1;
                    break;
                case 'left':
                    me.x = players[0].x - 1;
                    break;
                case 'right':
                    me.x = players[0].x + 1;
                    break;
            }
            handlePlayers([me, {
                name: 'otherGuy',
                x: 19,
                y: 3
            }]);
        } else {
            api.makeMove(direction);
        }

    });
    movement.enable();

    let message = '';
    $: console.log(message);

    let api = new API(
        debug,
        (world) => {
            originalMap = world;
            map = createMap(world);
        },
        (newPlayers) => handlePlayers(newPlayers),
        () => {
            movement.dropCooldown()
        },
        (error) => {
            message = error.message;
            console.log(error);
        },
        (event) => {
            message = event.code
            console.log(event);
        },
        (items) => handleItems(items),
        myName
    );

    if (!debug) {
        api.init(address);
    }

    function handlePlayers(newPlayers) {
        players.forEach((player) => {
            map[player.y][player.x].player = null;
        });
        players = newPlayers;
        players.forEach((player) => {
            map[player.y][player.x].player = player;
        });
    }

    function handleItems(newItems) {
        items.forEach((item) => {
            map[item.y][item.x].item = null;
        });
        items = newItems;
        items.forEach((item) => {
            map[item.y][item.x].item = item;
        });
    }

    function getMe(playerArray) {
        return playerArray.find((player) => {
            return player.name === myName;
        }) || {x: 1, y: 1};
    }

    setTimeout(() => {
        GameSound.play('monster');
    }, 6000);
</script>

<style>
    :global(body) {
        background: black;
    }

    .main {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>

<div class="main">
    <Map map={map} items={items} players={players} me={getMe(players)}/>
    <!--    <Chat/>-->
</div>

export class API{

    constructor(debug, worldCB, playersCB, cooldownCB, errorCB, closeCB, itemsCB, name) {
        this.debug = debug;
        this.worldCB = worldCB;
        this.playersCB = playersCB;
        this.cooldownCB = cooldownCB;
        this.errorCB = errorCB;
        this.closeCB = closeCB;
        this.itemsCB = itemsCB;
        this.name = name;
        this.send = this.send.bind(this);
        this.sendName = this.sendName.bind(this);
        this.handle = this.handle.bind(this);
        this.send = this.send.bind(this);
        this.init = this.init.bind(this);
    }

    handle(event) {
        console.log(event.data);
        let data = JSON.parse(event.data);
        switch (data.type) {
            case 'WORLD':
                this.worldCB(data.world);
                break;
            case 'PLAYERS':
                this.playersCB(data.players);
                break;
            case 'ITEMS':
                this.itemsCB(data.items);
                break;
            case 'COOLDOWN':
                this.cooldownCB();
                break;
        }
    }

    init(address) {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
        this.socket = new WebSocket("ws://" + address);
        this.socket.onopen = this.sendName;
        this.socket.onmessage = this.handle;
        this.socket.onerror = this.errorCB;
        this.socket.onclose = this.closeCB;
    }

    send(obj) {
        if (this.socket) {
            console.log(obj);
            let json = this.prepareData(obj);
            this.socket.send(json);
        }
    }

    sendName() {
        this.send({
            type: 'INIT',
            data: this.prepareData({username: this.name})
        });
    }

    makeMove(direction) {
        this.send({
            type: 'MOVE',
            data: this.prepareData({direction: direction})
        })
    }

    prepareData(data) {
        return JSON.stringify(data);
    }

}

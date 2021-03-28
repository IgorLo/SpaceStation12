export class API{

    constructor(worldCB, playersCB, cooldownCB, errorCB, closeCB, name) {
        this.worldCB = worldCB;
        this.playersCB = playersCB;
        this.cooldownCB = cooldownCB;
        this.errorCB = errorCB;
        this.closeCB = closeCB;
        this.name = name;
        this.send = this.send.bind(this);
        this.sendName = this.sendName.bind(this);
        this.handle = this.handle.bind(this);
        this.send = this.send.bind(this);
        this.init = this.init.bind(this);
    }

    handle(event) {
        let data = JSON.parse(event.data);
        switch (data.type) {
            case 'world':
                this.worldCB(data.world);
                break;
            case 'players':
                this.playersCB(data.players);
                break;
            case 'cooldown':
                this.cooldownCB();
        }
    }

    init(address) {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
        this.socket = new WebSocket("ws://" + address + ":8080");
        this.socket.onopen = this.sendName;
        this.socket.onmessage = this.handle;
        this.socket.onerror = this.errorCB;
        this.socket.onclose = this.closeCB;
    }

    send(obj) {
        if (this.socket) {
            let json = this.prepareData(obj);
            this.socket.send(json);
        }
    }

    sendName() {
        this.send({
            type: 'init',
            data: this.prepareData({username: this.name})
        });
    }

    makeMove(direction) {
        this.send({
            type: 'move',
            data: this.prepareData({direction: direction})
        })
    }

    prepareData(data) {
        return JSON.stringify(data);
    }

}

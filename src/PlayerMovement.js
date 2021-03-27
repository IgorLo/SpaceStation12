const movementCooldown = 200; //1 секунда

export class PlayerMovement {
    constructor(coords, react) {
        this.enabled = true;
        this.cooldown = false;
        this.coords = coords;
        this.update = this.update.bind(this);
        this.enable = this.enable.bind(this);
        this.disable = this.disable.bind(this);
        this.listenButtons = this.listenButtons.bind(this);
        this.react = react;

        window.addEventListener("keydown", onKeyDown.bind(this), false);
        window.addEventListener("keyup", onKeyUp.bind(this), false);

        function onKeyDown(event) {
            var keyCode = event.keyCode;
            switch (keyCode) {
                case 68:  //d
                    this.keyD = true;
                    break;
                case 83:  //s
                    this.keyS = true;
                    break;
                case 65:  //a
                    this.keyA = true;
                    break;
                case 87:  //w
                    this.keyW = true;
                    break;
            }
        }

        function onKeyUp(event) {
            var keyCode = event.keyCode;
            switch (keyCode) {
                case 68:  //d
                    this.keyD = false;
                    break;
                case 83:  //s
                    this.keyS = false;
                    break;
                case 65:  //a
                    this.keyA = false;
                    break;
                case 87:  //w
                    this.keyW = false;
                    break;
            }
        }
    }

    enable() {
        this.enabled = true;
        requestAnimationFrame(this.update);
    }

    disable() {
        this.enabled = false;
    }

    update() {
        if (!this.cooldown) {
            this.cooldown = true;
            setTimeout(() => {
                this.cooldown = false
            }, movementCooldown)
            this.listenButtons();
        }
        if (this.enabled) {
            requestAnimationFrame(this.update);
        }
    }

    listenButtons() {
        if (this.keyW) {
            this.coords.y--;
        }
        if (this.keyD) {
            this.coords.x++;
        }
        if (this.keyA) {
            this.coords.x--;
        }
        if (this.keyS) {
            this.coords.y++;
        }
        this.coords = this.react(this.coords);
    }
}

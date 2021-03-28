import {CellState} from "./common";

const movementCooldown = 20; //1 секунда

export class PlayerMovement {
    constructor(react) {
        this.enabled = true;
        this.cooldown = false;
        this.update = this.update.bind(this);
        this.enable = this.enable.bind(this);
        this.disable = this.disable.bind(this);
        this.listenButtons = this.listenButtons.bind(this);
        this.dropCooldown = this.dropCooldown.bind(this);
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
            }, movementCooldown);
            this.listenButtons();
        }
        if (this.enabled) {
            requestAnimationFrame(this.update);
        }
    }

    dropCooldown() {
        this.cooldown = false;
    }

    listenButtons() {
        let direction;
        if (this.keyW) {
            direction = 'up';
        }
        if (this.keyD) {
            direction = 'right'
        }
        if (this.keyA) {
            direction = 'left'
        }
        if (this.keyS) {
            direction = 'down'
        }
        if (direction){
            this.react(direction);
        }
    }
}

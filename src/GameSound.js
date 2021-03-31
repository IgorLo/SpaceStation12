import {Howl, Howler} from 'howler';

export class GameSound {

    static soundPathBase = "sound/";

    static sounds = {
        step: this.createHowl('step', 0.5, false),
        click: this.createHowl('click', 0.2, false),
        lobby: this.createHowl('lobby', 0.3, true),
        ambient: this.createHowl('ambient', 0.3, true),
        chase: this.createHowl('chase', 0.3, false),
        monster: this.createHowl('monster', 0.4, false)
    }

    static createHowl(name, volume, loop) {
        return new Howl({
            src: [this.soundPathBase + name + '.wav'],
            volume: volume,
            loop: loop
        })
    }

    static play(sound) {
        this.sounds[sound].play();
    }

}
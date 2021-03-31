<script>
    import Panel from "./Panel.svelte";
    import {GameSound} from "../GameSound";

    export let activate;
</script>

<Panel
    title="Космическая Станция 12"
    text="Нажмите чтобы войти в игру"
    buttonText="Войти"
    action={() => {
        GameSound.play('ambient');
        activate();
    }}
/>
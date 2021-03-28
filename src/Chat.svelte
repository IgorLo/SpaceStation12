<script>
    import Message from "./Message.svelte";
    let messages = [
        "ФЫв фывф ыфв афыва фыва фыва фывафыв",
        "ФЫв фыasdfasdfasdfasdfasdfasdfasdfasdfвф ыфв афыва фыва фыва фывафыв",
        "ФЫв фывф ыфв афыва фыaasdfasdfasdfва фывsdf asd fasdf asdf asdf asdf asdf asdf asdf  as df asdf d ddа фывафыв",
        "ФЫв фывф ыфв афыва фыва фыва фывафыв",
        "ФЫв фыasdfasdfasdfasdfasdfasdfasdfasdfвф ыфв афыва фыва фыва фывафыв",
        "ФЫв фывф ыфв афыва фыaasdfasdfasdfва фывsdf asd fasdf asdf asdf asdf asdf asdf asdf  as df asdf d ddа фывафыв",
        "ФЫв фывф ыфв афыва фыва фыва фывафыв",
        "ФЫв фыasdfasdfasdfasdfasdfasdfasdfasdfвф ыфв афыва фыва фыва фывафыв",
        "ФЫв фывф ыфв афыва фыaasdfasdfasdfва фывsdf asd fasdf asdf asdf asdf asdf asdf asdf  as df asdf d ddа фывафыв",
        "ФЫв фывф ыфв афыва фыва фыва фывафыв",
        "ФЫв фыasdfasdfasdfasdfasdfasdfasdfasdfвф ыфв афыва фыва фыва фывафыв",
        "ФЫв фывф ыфв афыва фыaasdfasdfasdfва фывsdf asd fasdf asdf asdf asdf asdf asdf asdf  as df asdf d ddа фывафыв",
        // "ФЫв фывф ыфв афыва фыва фыва фывафыв",
        // "ФЫв фыasdfasdfasdfasdfasdfasdfasdfasdfвф ыфв афыва фыва фыва фывафыв",
        // "ФЫв фывф ыфв афыва фыaasdfasdfasdfва фывsdf asd fasdf asdf asdf asdf asdf asdf asdf  as df asdf d ddа фывафыв",
        // "ФЫв фывф ыфв афыва фыва фыва фывафыв",
        // "ФЫв фыasdfasdfasdfasdfasdfasdfasdfasdfвф ыфв афыва фыва фыва фывафыв",
        // "ФЫв фывф ыфв афыва фыaasdfasdfasdfва фывsdf asd fasdf asdf asdf asdf asdf asdf asdf  as df asdf d ddа фывафыв",
    ];
</script>

<style>
    .chat {
        background: red;
        width: 100%;
        flex-grow: 1;
        flex-shrink: 1;
        position: relative;
    }

    .messages {
        margin-bottom: 20px;
        height: 100%;
    }

    input {
        position: absolute;
        bottom: 0;
        height: 20px;
    }
</style>

<div class="chat">
    <div class="messages">
        {#each messages as message}
            <Message message={message}/>
        {/each}
    </div>
    <input/>
</div>

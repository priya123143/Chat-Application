function sendMessage() {
    let message = document.getElementById("message").value;
    let chatBox = document.getElementById("chat-box");

    if (message.trim() === "") return;

    let msg = document.createElement("div");
    msg.innerText = message;

    chatBox.appendChild(msg);

    document.getElementById("message").value = "";
}

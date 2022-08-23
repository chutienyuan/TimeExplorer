import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("connect!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {

    const msg = document.querySelector('#msg')
    msg.innerHTML += `<div class="message"> ${data.content}</div>`
    document.querySelector("#message_content").value = ""

    console.log(data);
  }
});

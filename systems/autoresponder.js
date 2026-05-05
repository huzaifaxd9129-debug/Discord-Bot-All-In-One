module.exports = {
  run(message) {
    if (message.content.toLowerCase().includes("hello")) {
      message.channel.send("Hi!");
    }
  }
};

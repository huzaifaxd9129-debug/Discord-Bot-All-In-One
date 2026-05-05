module.exports = {
  run(message) {
    if (message.content.toLowerCase().includes("gg")) {
      message.react("🔥").catch(() => {});
    }
  }
};

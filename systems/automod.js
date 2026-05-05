module.exports = {
  run(message) {
    if (/(https?:\/\/)/gi.test(message.content)) {
      message.delete().catch(() => {});
      message.channel.send(`${message.author}, links not allowed.`);
    }
  }
};

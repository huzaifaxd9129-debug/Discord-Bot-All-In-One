module.exports = {
  name: "guildMemberAdd",
  execute(client, member) {
    client.systems.welcome.send(member);
  }
};

// Телепортироваться к игроку
mp.events.addCommand('goto', (player, _, id) => {
    if (id == undefined) return player.outputChatBox('/goto [id]');
    let target = mp.players.at(id);
    if (target == null) return player.notify('~r~ID игрока не найден!');
    player.dimension = target.dimension;
    player.position = target.position;
    player.notify(`~g~ Вы телепортировались к ~y~${target.id} ~g~ID`);
})
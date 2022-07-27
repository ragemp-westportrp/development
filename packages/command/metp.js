// Телепортиртация игрока
mp.events.addCommand('metp', (player, _, id) => {
    if (id == undefined) return player.outputChatBox('/metp [id]');
    let target = mp.players.at(id);
    if (target == null) return player.notify('~r~ID игрока не найден!');
    target.dimension = player.dimension;
    target.position = player.position;
    player.notify(`~g~ Вы телепортировали ~y~${target.id} ~g~ID`);
})
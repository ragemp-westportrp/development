// Восстановление жизни
mp.events.addCommand('hp', (player, _, target, hp) => {
    if (target == undefined || hp == undefined) return player.outputChatBox('/hp [player] [hp]');
    var p = mp.players.at(target);
    if (p == null) return player.notify('~r~ID игрока не найден!');
    p.health = parseInt(hp);
})
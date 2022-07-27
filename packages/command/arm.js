// Восстановление брони
mp.events.addCommand('arm', (player, _, target, arm) => {
    if (target == undefined || arm == undefined) return player.outputChatBox('/arm [player] [armour]');
    var p = mp.players.at(target);
    if (p == null) return player.notify('~r~ID игрока не найден!');
    p.armour = parseInt(arm);
})

// Бан по железу
mp.events.addCommand('banhd', (player, _, id, reason) => {
    if (id == undefined || reason == undefined) return player.outputChatBox('/banhd [id] [reason]');
    let target = mp.players.at(id); // Проверка всех игроков по ID
    if (target == null) return player.notify('~r~ID игрока не найден!');
    var message =  _.replace(id, '');
    mp.server.database.query('INSERT INTO banhwid (admin,player,playerHWID,reason) VALUES (?,?,?,?)', [player.name, target.name, target.serial, message]);
    mp.players.broadcast(`[A] ${player.name} забанил по железу !{FFFF00}${target.name} !{FFF000} по причине: ${message}`);
    target.kick();
})
// Смена дименшина
mp.events.addCommand('setdim', (player, _, id, dim) => {
    if (id == undefined || dim == undefined) return player.outputChatBox('/setdim [id] [dim]');
    let target = mp.players.at(id);
    if (target == null) return player.notify('~r~ID игрока не найден!');
    target.dimension = parseInt(dim);
    player.notify(`~g~ Переход в~y~ ${target.dimension} ~g~дименшин`);
})
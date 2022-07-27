// Восстановление транспорта
mp.events.addCommand('fixcar', (player, _, id) => {
    if (id == undefined) {
        if (!player.vehicle) return player.notify('~r~Вы не в транспорте!');
        player.vehicle.repair();
    } else {
        let target = mp.players.at(id);
        if (target == null) return player.notify('~r~ID игрока не найден!');
        target.vehicle.repair();
    }
})
// Спавн машины
mp.events.addCommand('veh', (player, _, id, veh, color1, color2) => {
    if (id == undefined || veh == undefined) return player.outputChatBox('/veh [id] [model] [color1] [color2]');
    let target = mp.players.at(id);
    if (target == null) return player.notify('~r~ID игрока не найден!');
    let pos;
    pos = target.position;
    var adminVeh = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(pos.x + 2, pos.y, pos.z));
    adminVeh.setColor(parseInt(color1), parseInt(color2));
    player.dim = player.id;
    setTimeout(() => {
        target.putIntoVehicle(adminVeh, 0) // Спавн за водительское место
    }, 150)
})
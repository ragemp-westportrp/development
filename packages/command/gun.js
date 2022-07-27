// Спавним оружие в руках
mp.events.addCommand('gun', (player, _, id, weapon, ammo) => {
    if (id == undefined || weapon == undefined || ammo == undefined) return player.outputChatBox('/gun [id] [weapon] [ammo]');
    let target = mp.players.at(id);
    target.giveWeapon(mp.joaat(`weapon_${weapon}`), parseInt(ammo));
})
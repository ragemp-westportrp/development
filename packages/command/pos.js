// Координаты игрока
mp.events.addCommand('pos', (player) => {
    let pos;
    pos = player.position;
    rot = player.heading;
    player.outputChatBox(`X: ${pos.x.toFixed(4)} Y: ${pos.y.toFixed(4)} Z: ${pos.z.toFixed(4)}`);
    player.outputChatBox(`Head rotate: ${rot.toFixed(4)}`);
    console.log(`X: ${pos.x.toFixed(2)} Y: ${pos.y.toFixed(2)} Z: ${pos.z.toFixed(2)}`);
})
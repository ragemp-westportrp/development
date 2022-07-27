// Погода
mp.events.addCommand('setw', (player, _, weather) => {
    if (weather == undefined) return player.outputChatBox('/setw [weather]');
    mp.world.weather = weather;
})
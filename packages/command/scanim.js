// Прокрут сценарий
mp.events.addCommand('scanim', (player, _, scenario) => {
    player.outputChatBox('/scanim [scenario]');
    player.playScenario(scenario);
})
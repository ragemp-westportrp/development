// Прокрут анимации
mp.events.addCommand('anim', (player, _, dict, name, speed, flag) => {
    player.outputChatBox('/anim [animDic] [animName] [duration] [flag]');
    player.playAnimation(dict, name, speed, flag);
})
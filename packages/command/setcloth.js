// Одежда
mp.events.addCommand('setcloth', (player, _, component, drawable, texture, pallete) => {
    if (component == undefined || drawable == undefined) return player.outputChatBox('/setcloth [component] [drawable] [texture? [pallete?]]');
    player.setClothes(parseInt(component), parseInt(drawable), parseInt(texture), parseInt(pallete));
})
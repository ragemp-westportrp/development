global.patch = 'game_resources/handlers/'

require(patch + 'clothes');
require(patch + 'vspawner');
require(patch + 'players');

mp.events.add("render", () => {
    drawText('F2 - Одеждв', [0.01, 0.01], 4, [255, 255, 255, 255], 0.35);
    drawText('F3 - Полет', [0.01, 0.03], 4, [255, 255, 255, 255], 0.35);
    drawText('F4 - Транспорт', [0.01, 0.05], 4, [255, 255, 255, 255], 0.35);
    drawText('Команды в чат:', [0.01, 0.08], 4, [255, 255, 255, 255], 0.35);
    drawText('hp arm veh fixcar pos tpc setw metp goto setdim', [0.01, 0.10], 4, [255, 255, 255, 255], 0.35);
    drawText('gun dim banhd setcloth delveh clshape anim scanim', [0.01, 0.12], 4, [255, 255, 255, 255], 0.35);
}); 

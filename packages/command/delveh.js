// Удаление машин
mp.events.addCommand(`delveh`,
    (player) => {
        mp.vehicles.forEach(
            (vehicle) => {
                vehicle.destroy();
            }
        );
        mp.players.broadcast(`${player.name} Удалил все машины!`);
    }
);
GetWaypointCoords = function () {
    try {
        if (mp.game.invoke('0x1DD1F58F493F1DA5')) {
            let Blip_Interator = mp.game.invoke('0x186E5D252FA50E7D');
            let BlipsFound = mp.game.invoke('0x9A3FF3DE163034E8');
            let FirstInfoId = mp.game.invoke('0x1BEDE233E6CD2A1F', Blip_Interator );
            let NextInfoId = mp.game.invoke('0x14F96AA50D6FBEA7', Blip_Interator);
            for (let i = FirstInfoId, blipCount = 0; blipCount != BlipsFound; blipCount++, i = NextInfoId) {
                if (mp.game.invoke('0x1FC877464A04FC4F'))
                var coord = mp.game.ui.getBlipInfoIdCoord(i);
                return coord;
            }
        }
        return null;
    } catch (e) {}
}

getZCoord = function(x, y, z, fnd) {
    let player = mp.players.local;
    let zcoord = 0.0;
    let interval_c = 0;

    let interval = setInterval(function() {
        interval_c++;
        mp.game.streaming.setFocusArea(x, y, 1000, 0.0, 0.0, 0.0);

        if (z ==0) {
            for (let i = 800; i >= 0; i-=20) {
                let checkz = i +0.1;

                mp.game.streaming.requestAdditionalCollisionAtCoord(x, y, checkz);
                if (interval_c >= 50) player.setCoordsNoOffset(x, y, checkz, false, false, false);
                zcoord = mp.game.gameplay.getGroundZFor3dCoord(x, y, checkz, 0.0, false);
                if (zcoord !== 0.0) {
                    mp.game.invoke('0x198F77705FA0931D', player.handle)
                    fnd(zcoord + 0.1);
                    clearInterval(interval);
                    return;
                }
            }
        } else {
            zcoord = mp.game.gameplay.getGroundZFor3dCoord(x,y, checkz, 0.0, false);
            mp.game.invoke('0x198F77705FA0931D', player.handle)
            fnd(zcoord + 0.1);
            clearInterval(interval);
            return;
        }
        if (interval_c >= 100) {
            if (interval_c >= 50) player.setCoordsNoOffset(x, y, 10.0, false, false, false);
            mp.game.invoke('0x198F77705FA0931D', player.handle);
            clearInterval(interval);
            return
        }
    }, 1);
}

mp.keys.bind(0x74, true, function() {
  let player = mp.players.local;
  let coords = GetWaypointCoords();
  if (!coords) return mp.game.graphics.notify('~r~ Нет точки телепорта');
  if (coords !== null) {
      getZCoord(coords.x, coords.y, 0, function(z) {
          if (!player.vehicle){
            player.setCoordsNoOffset(coords.x, coords.y, z, false, false, false);
          } else {
              player.vehicle.setCoordsNoOffset(coords.x, coords.y, z, false, false, false);
          }
      })
  }
});
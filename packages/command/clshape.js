// Пытаемся заспавнить колшейпы
mp.events.addCommand('clshape', (player, _, namez, red, green, blue, alpha, colradz, markidz, typez, pricez) => {
    let pos = player.position;
    var poz = JSON.stringify(pos);
    var color = {r:red, g:green, b:blue, a:alpha};
    if (namez == undefined || color == undefined || colradz == undefined || markidz == undefined || typez == undefined || pricez == undefined) return player.outputChatBox('/clshape [name] [r g b a] [colshape_radius] [marker_id] [type] [price]');
    mp.server.database.query('INSERT INTO `shop` (`name`, `coord`, `markcolor`, `colrad`, `markid`, `type`, `price`) VALUES (?, ?, ?, ?, ?, ?, ?)', [namez, poz, JSON.stringify(color), colradz, markidz, typez, pricez] , function (err, res) {
        // console.log(err);
    });
});
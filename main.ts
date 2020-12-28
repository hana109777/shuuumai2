controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -16
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -16
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 16
})
let car: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0e001800040404040403010103040404040403030303030301010303030303030101010101010101010101010101020202020202020202020202020202020202020202020202020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202020202020202020202020202020202020202020202020202010101010101010101010101010102020202020202020202020202020202020202020202020202020202010101010101010101010101010106060606060505050506060606060707070707010101010707070707070707070701010101070707070701010101010101010101010101010202020202020202020202020202020202020202020202020202020201010101010101010101010101010101010101010101010101010101`, img`
    .....2..2.....
    222222..222222
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    ..............
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.vehicle.roadHorizontal,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava0], TileScale.Sixteen))
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
mySprite.setPosition(120, 328)
scene.setBackgroundColor(2)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(0)) {
        car = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 c 2 2 2 2 2 2 4 2 . 
            . . . . 2 c c 2 2 2 2 2 2 4 c 2 
            . . d 2 4 c c 2 4 4 4 4 4 4 c c 
            . d 2 2 4 c b e e e e e e e 2 c 
            . 2 2 2 4 b e e b b b e b b e 2 
            . 2 2 2 2 2 e b b b b e b b b e 
            . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
            . 2 d d 2 e f e e e f e e e e e 
            . d d 2 e e e f e e f e e e e e 
            . e e e e e e e f f f e e e e e 
            . e e e e f f f e e e e f f f f 
            . . . e f f f f f e e f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        car.setVelocity(-50, 0)
        tiles.placeOnRandomTile(car, sprites.vehicle.roadHorizontal)
        car.x = 200
        car.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})

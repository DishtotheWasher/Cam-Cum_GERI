enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const Complete = SpriteKind.create()
    export const Building = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const River = SpriteKind.create()
    export const WALL_SHOOTER = SpriteKind.create()
    export const PERSONAJE_INTRO = SpriteKind.create()
    export const Lvl_2_Gate_Keeper_SONSO = SpriteKind.create()
    export const Chest = SpriteKind.create()
    export const Item = SpriteKind.create()
}
namespace StatusBarKind {
    export const Item = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    CamKun,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e b e e f f f f b b e . . 
        . . . e b b e b b 1 1 f e e . . 
        . . . . c e e 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f e e . . . 
        . . e b c b 1 b b 1 b f b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f e e f . . . 
        . . e b b f e e e e e b e . . . 
        . . e e f 1 1 b b e b b e . . . 
        . . . f 1 1 1 1 1 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f f e . . . 
        . . e b f b 1 b b 1 b c b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    130,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    clearLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (CamKun.overlapsWith(Vendedor_Derecha_2) && level == 2) {
        if (CamKun.overlapsWith(Vendedor_Derecha_2)) {
            DialogueMode = true
            game.showLongText("Hola pelau... no le vayaj a contar a nadie, pero mi receta secreta para el sonso son los siguientes gramos de queso menonita ", DialogLayout.Bottom)
            Random_Gramos_Queso_Menonita = randint(20, 50)
            story.spriteSayText(Vendedor_Derecha_2, convertToText(Random_Gramos_Queso_Menonita))
            DialogueMode = false
            Vendedor_Derecha_2.setKind(SpriteKind.Complete)
            pause(60000)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    Quinto.destroy(effects.starField, 1000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myMinimap = tilemap`El Pirai`
})
function INTRO_CamKun () {
    DialogueMode = true
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd99999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999991111111dddd999999999999999999999999999999999999999999999999999999999999999
        999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999111111111ddd99999999999999999999999999999999999999999999999999999999999999
        9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999999111111111111dd9999999999999999999999999999999999999999999999999999999999999
        99999999999999999911111111d999999999999999999999999999999999999999999999999999ddddddd111111111111dd9999999999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd191ddd999999999999999999999999999999999999999999dddddddddd11111111111dd1999999999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999dd111111d1111111111111d1119999999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11111111ddddd9999999999999999999999999999999999dd111111111111111111111111119ddd99999999999999999999999999999999999999999999999999999
        999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999991dd11111111111111111111111111dddddd999999999999999999999999999999999999999999999999999
        9999999ddddddddddd11111111111111111111111119999999999999999999999999999999dd11111111111111111111111111dd111ddd99999999999999999999999999999999999999999999999999
        9999991dd11111111dd11111111111111111111111119999999999999999999999999999991d11111111111111111111111111dd1111dd99999999999999999999999999999999999999999999999999
        999999dd1111111111111111111111111111111111119999999999999999999999999999dddd11111111dd11111111111111111111111dd9999999999999999999999999999999999999999999999999
        99999dd1111111111111111111111111111111111111999999999999999999999999999ddd1dd111111dd111111111111111111111111dd9999999999999999999999999911dddd99999999999999999
        99999dd1111111111111111111111dd111111111111199999999999999999999999999ddd1111111111dd111111111111111111111111dd99999999999999999999999911111ddddd999999999999999
        99999111111111111111111111111dd111111111111199999999999999999999999999dd1111111111111111111111111111111111111dd99999999999999999999999111111111ddd99111119999999
        999991111111111111111111111111dd1111111111b199999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999ddddd1111111111ddd1111dd1199999
        999999111111111111111111111111dd11bbb111bbb999999999999999999999999999d1111111111111111111111111111111111111dd999999999999999999ddddddddd11111111dd1111dddd19999
        999999111111111111111111111111ddbbbbbbbbbb999999999999999999999999999911111111111111111111111111dd111111111dd9999999999999999991d111111dd11111111dd1111111dd9999
        99999991bb1111111111bbb111111bbb9999911999999999999999999999999999999911111111111111111111111111dd111111111d199999999999d999991111111111111111111111111111dd9999
        99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999ddddd999999991111111111111111111111111dd111111111119999999dddddddddd1111111111111111111111111111dd1999
        9999999991bbbbbbbbbb9991bbbbb1999999999999999999ddddddddddddddddd9999999bbbbbbbbbbb1111111111111dd11111111119999999ddd11111ddddd11111111111111111111111111dd9999
        999999999999999999999999911199999999999999999911ddd111dddd111111d9999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb9999999911111111111dd11111111111111111111111111dd9999
        999999999999999999999999999999999999ddddddddd1111111111dd11111111999999999999999999bbbb1111111bbdbbbbbbb9999999999911111111111111111111111111111111111111dd19999
        99999999999999999999999999999999991dddddd1ddddd11111111111111111199999999999999999999bbbbbbbbbbbb999999999999999999111111111111111111111111dd11111111111dd199999
        999999999999999999999999999999991111111111111dddd111111111111111199999999999999999999999bbbbb9999999999999999999999111111111111111111111111dd11111111111d1199999
        99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
        999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
        99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
        99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99cc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993999999999999999993399999999999
        9999999999999999999999939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993339333399999999999999993393999ccc9c9
        99999c99999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99c9
        9999cc93399999999993333333999999999999999999999999999999993399999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b3399ccc999
        99c9933333cc9999999333333399999999999999999999999999999993333399999999999999999999999999999999999999999999999999999999999993335553339999999999993333553339cc9999
        9cc93333333399999993335333339999999999999999cc99999ccc99933333399cc999999999999999999999999999999999cc999999999cc99999999993335533339999999999999335553339ccc999
        cc9c93353333cc999993355533399999cc9999999999cc99999999933355333999999999cc9cc999999cc99999999c999999cc9999c9999ccc99999999999333333999999c9999993333533c99cccccc
        c99cc3555339cc99c93333533333c999cc99cc9999999999999999933353333999999999c999c99999999999c9999c999999999999c9999c9999999cccc93333333cc999ccc99999333333ccccccccc9
        9cc9333333399cc99933333333399999999cc999999c999999cc999333333399999999c9999999999cc99999cc99999c999c9cc9999cc99999ccc99cccc97333739cc9999cc999999333333cccccc999
        9ccc33333339cc99999933333399999cc99999999c999999999999933333339c9cc999c99c9999999cc9999999c999cc99999999999cc9999999c999cc9977777799c9999cc999cc999979399cc9cc99
        ccccc977339ccc99997797777c99999cc99999999c9999999a9999993933339999c999999c99c999999999cc9cc999c999cc99999969999999999999999977777999cc9999c999cc999777799cc9cc99
        cc997777799c979997779777799999999aa79c9977999777aa9977c797737777799999c9999cc9999997799c9aa997c999779c79996979cc977cc7aa9c9997779997cc9999c99999779777799cc9cc99
        c779777779777777979777777797c7796a7797c977797777aaaaa77797777777779977c9977999779c977779a6a97777997797799969797c977c779a6c7797797777c77c77999c7a7aa777cc99cccc99
        9777977779777a7777c777797797c779aaa77777777777777777777777777777777c77c777777777777777777aa777777777777777aa777777777aa7aa777777777777777777997a7a7779979c7797cc
        9779977777777aa77777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777aa77777777777777777777777777a777777cc7797c9
        777777777777777777777777777777a777777777777777777777777777a777777777777777777777aa7777777777777777777aa777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777a77777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777777a777777777777777777777777777
        7777777777777777777777777777777777777777aa7777777777777777a7777777777777777777777777777777777a77777777777777777777777777777777777777a777777777777777777777777777
        77777777777777777aa777777777777777777777aa77777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777a777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777777777777aa777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777
        77777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777777777777777777
        777777aa77777777777777777aa777777777a7777777aa777777777777a77777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777
        777777aa7777777777777777777777777777a777777777777777777777aa777777777777777777777777777777777777777777aa777777777777777777777777777777777aa777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777b77777777777777777777777777777777777777777777777777777777777777777aa7777777
        77777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777aa777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111bbbbb1111111111bbbbb1111111111bbbbb1111111111bbbbb1111111111bbbbb1111111111bbbbb1111111111bbbbb1111111111bbbbb111111111bbbbb1111111111bbbbb111111111bbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    Scene_1_CamCun = sprites.create(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 1 b b 1 b c b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.PERSONAJE_INTRO)
    Scene_1_CamCun.setPosition(0, 200)
    Scene_1_CamCun.setPosition(13, 60)
    animation.runImageAnimation(
    Scene_1_CamCun,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 1 f . . . . . 
        . . . e b b e 1 1 1 1 f . . . . 
        . . . . e e 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f e e b b b b f . . . . 
        . . . f e b b e e e f . . . . . 
        . . . . e b b e b b 1 f . . . . 
        . . . . f e e 1 1 1 1 c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 1 f . . . . . 
        . . . e b b e 1 1 1 1 f . . . . 
        . . . . e e 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . e b b e e e e e f . . . . . 
        . . e b b e b b b 1 1 f . . . . 
        . . . e e e 1 1 1 1 1 c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    130,
    true
    )
    story.spriteMoveToLocation(Scene_1_CamCun, 73, 60, 20)
    Scene_1_Cambita_Bien = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.PERSONAJE_INTRO)
    Scene_1_Cambita_Bien.setPosition(160, 60)
    animation.runImageAnimation(
    Scene_1_Cambita_Bien,
    [img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . f 3 e e e f b f b b b b f . . 
        . . f e 4 4 f 1 e b b b b f . . 
        . . . f 4 4 4 4 f b b b b f f . 
        . . . f e e e f f f b b b b f . 
        . . . f d d d e 4 4 f b b f . . 
        . . . f d d d e 4 4 e f f . . . 
        . . f b d b d b e e b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `],
    130,
    true
    )
    story.spriteMoveToLocation(Scene_1_Cambita_Bien, 89, 60, 20)
    animation.runImageAnimation(
    Scene_1_CamCun,
    [img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 1 b b 1 b f b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b e e e f . . . 
        . . e b b f e e e e b b e . . . 
        . . e e f 1 1 b b e b b e . . . 
        . . . f 1 1 1 1 1 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 1 b b 1 b c b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 1 1 f e e . . 
        . . . . c e e 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    130,
    true
    )
    story.spriteMoveToLocation(Scene_1_CamCun, 73, 60, 20)
    animation.runImageAnimation(
    Scene_1_Cambita_Bien,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b e e 4 4 4 4 4 f b b f . 
        . . f 4 4 4 e d d d b f e f . . 
        . . f e 4 4 e d d d d c 4 e . . 
        . . . f e e d d b d b b f e . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    130,
    true
    )
    story.spriteMoveToLocation(Scene_1_Cambita_Bien, 89, 60, 20)
    Scene_1_Corazon = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . f f f f f f . 
        . f f 3 3 3 3 f f f 3 3 3 3 f f 
        . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
        . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
        . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
        . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
        . f 3 3 3 3 b b b b b 3 3 3 3 f 
        . f f 3 3 b b b b b b b 3 3 f f 
        . . f f 3 b b b b b b b 3 f f . 
        . . . f f b b b b b b b f f . . 
        . . . . f f b b b b b f f . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Building)
    Scene_1_Corazon.setPosition(79, 43)
    animation.runImageAnimation(
    Scene_1_Corazon,
    [img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2222.2222.....
        .....23222222222....
        .....23222222222....
        .....22322222222....
        ......2222222b2.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `],
    275,
    true
    )
    pause(2000)
    game.showLongText("CamCun y Pelada Bien estaban camote", DialogLayout.Bottom)
    pause(3000)
    game.showLongText("Pero había una traba...", DialogLayout.Bottom)
    pause(2000)
    Scene_1_Auto = sprites.create(img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 4 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b c c f e e f b c c f . 
        . . . . b b f . . . . b b f . . 
        `, SpriteKind.Building)
    Scene_1_Auto.setPosition(152, 94)
    animation.runImageAnimation(
    Scene_1_Auto,
    [img`
        ..............eeeeeeeeee................
        ..............eeeeeeeeee................
        ..........eeee2222222222ee..............
        ..........eeee2222222222ee..............
        ........eeee22222222222222ee............
        ........eeee22222222222222ee............
        ........ee9944222222222244bbee..........
        ........ee9944222222222244bbee..........
        ....eeee99994444222222224499bbee........
        ....eeee99994444222222224499bbee........
        ..ee22229999444444222222449999ee........
        ..ee22229999444444222222449999ee........
        ee2222229999224444444444229999ee........
        ee2222229999224444444444229999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        eeee3333eeee22222222ee2222eeeeee........
        eeee3333eeee22222222ee2222eeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        ..eeeeffbbccccffeeeeffbbccccff..........
        ..eeeeffbbccccffeeeeffbbccccff..........
        ........bbbbff........bbbbff............
        ........bbbbff........bbbbff............
        `,img`
        ..............eeeeeeeeeee...............
        ..............eeeeeeeeeee...............
        ..........eeee22222222222ee.............
        ..........eeee22222222222ee.............
        ........eeee222222222222222ee...........
        ........eeee222222222222222ee...........
        ........ee99444444422222244bbee.........
        ........ee99444444422222244bbee.........
        ....eeee999944444444422224499bbe........
        ....eeee999944444444422224499bbe........
        ..ee222299994444444444422449999e........
        ..ee222299994444444444422449999e........
        ee22222299992244444444444229999e........
        ee22222299992244444444444229999e........
        ee2222229999eeeeeeeeeeeeeee9999e........
        ee2222229999eeeeeeeeeeeeeee9999e........
        ee22222299bbeebbbbbbbeebbeebb99e........
        ee22222299bbeebbbbbbbeebbeebb99e........
        ee22eeeeeeeebbbbbbbbbeebbbbeebbe........
        ee22eeeeeeeebbbbbbbbbeebbbbeebbe........
        eeee3333eeee222222222ee2222eeeee........
        eeee3333eeee222222222ee2222eeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeffffffeeeeeeeeeffffffeee........
        eeeeeeeeffffffeeeeeeeeeffffffeee........
        ..eeeeffffffbbfffeeeeffffffbbff.........
        ..eeeeffffffbbfffeeeeffffffbbff.........
        ........ccbbbb.........ccbbbb...........
        ........ccbbbb.........ccbbbb...........
        `,img`
        ..............eeeeeeeeee................
        ..............eeeeeeeeee................
        ..........eeee2222222222ee..............
        ..........eeee2222222222ee..............
        ........eeee22222222222222ee............
        ........eeee22222222222222ee............
        ........ee9944222222444444bbee..........
        ........ee9944222222444444bbee..........
        ....eeee99994422222244444499bbee........
        ....eeee99994422222244444499bbee........
        ..ee22229999444422222244449999ee........
        ..ee22229999444422222244449999ee........
        ee2222229999224444444444229999ee........
        ee2222229999224444444444229999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        eeee3333eeee22222222ee2222eeeeee........
        eeee3333eeee22222222ee2222eeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        ..eeeeffccbbbbffeeeeffccbbbbff..........
        ..eeeeffccbbbbffeeeeffccbbbbff..........
        ........ffffff........ffffff............
        ........ffffff........ffffff............
        `,img`
        ..............eeeeeeeeee................
        ..............eeeeeeeeee................
        ..........eeee2222222222ee..............
        ..........eeee2222222222ee..............
        ........eeee22222222222222ee............
        ........eeee22222222222222ee............
        ........ee9944222222222244bbee..........
        ........ee9944222222222244bbee..........
        ....eeee99994422222222224499bbee........
        ....eeee99994422222222224499bbee........
        ..ee22229999444422222222449999ee........
        ..ee22229999444422222222449999ee........
        ee2222229999224444444444229999ee........
        ee2222229999224444444444229999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        eeee3333eeee22222222ee2222eeeeee........
        eeee3333eeee22222222ee2222eeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        ..eeeeffbbbbccffeeeeffbbbbccff..........
        ..eeeeffbbbbccffeeeeffbbbbccff..........
        ........ccffff........ccffff............
        ........ccffff........ccffff............
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_Auto, 90, 94, 20)
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_Auto)
    Scene_1_Papa_Bien = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.PERSONAJE_INTRO)
    Scene_1_Papa_Bien.setPosition(89, 106)
    animation.runImageAnimation(
    Scene_1_Papa_Bien,
    [img`
        2 2 . . . . . . . . . . 
        2 2 . f f f f f f . . . 
        2 2 f f e e e e f f f . 
        f f f e e e e e e f f f 
        2 2 f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `,img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_Papa_Bien, 89, 110, 5)
    animation.runImageAnimation(
    Scene_1_Papa_Bien,
    [img`
        2 2 . f f f f f . . . . 
        2 2 f e e e e e f f . . 
        2 2 e e e e e e e f f . 
        f e e e e e e e f f f f 
        2 2 e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_Papa_Bien, 65, 110, 20)
    animation.runImageAnimation(
    Scene_1_Papa_Bien,
    [img`
        2 2 . . f f f f . . . . 
        2 2 f f e e e e f f . . 
        2 2 e e e e e e e f f . 
        f f e f e e e e e e f f 
        2 2 f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f b b b b b f e 4 e 
        . 4 f d d d d d e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_Papa_Bien, 65, 80, 20)
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_Papa_Bien)
    story.printText("Hija!! Que hacej con este Camba Cunumi!!", 40, 108, 2)
    scene.cameraShake(2, 1000)
    pause(1000)
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_Corazon)
    pause(1000)
    Scene_1_Corazon.destroy(effects.fire, 700)
    pause(2500)
    story.printText("Te subij al auto AHORINGA!", 40, 108, 2)
    scene.cameraShake(2, 1000)
    pause(1000)
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_CamCun)
    story.spriteMoveToLocation(Scene_1_Cambita_Bien, 91, 100, 40)
    animation.runImageAnimation(
    Scene_1_Cambita_Bien,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b e e 4 4 4 4 4 f b b f . 
        . . f 4 4 4 e d d d b f e f . . 
        . . f e 4 4 e d d d d c 4 e . . 
        . . . f e e d d b d b b f e . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    100,
    true
    )
    Scene_1_Cambita_Bien.destroy()
    animation.runImageAnimation(
    Scene_1_Papa_Bien,
    [img`
        2 2 . . . . . . . . . . 
        2 2 . f f f f f f . . . 
        2 2 f f e e e e f f f . 
        f f f e e e e e e f f f 
        2 2 f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `,img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_Papa_Bien, 65, 110, 20)
    animation.runImageAnimation(
    Scene_1_Papa_Bien,
    [img`
        2 2 . . . . . . . . . . 
        2 2 . f f f f f f . . . 
        2 2 f f e e e e e f . . 
        f f f e e e e e e e f . 
        2 2 f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_Papa_Bien, 89, 110, 20)
    animation.runImageAnimation(
    Scene_1_Papa_Bien,
    [img`
        2 2 . . f f f f . . . . 
        2 2 f f e e e e f f . . 
        2 2 e e e e e e e f f . 
        f f e f e e e e e e f f 
        2 2 f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f b b b b b f e 4 e 
        . 4 f d d d d d e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_Papa_Bien, 89, 106, 5)
    Scene_1_Papa_Bien.destroy()
    pause(2000)
    music.setVolume(255)
    music.spooky.play()
    animation.runImageAnimation(
    Scene_1_Auto,
    [img`
        ..............eeeeeeeeee................
        ..............eeeeeeeeee................
        ..........eeee2222222222ee..............
        ..........eeee2222222222ee..............
        ........eeee22222222222222ee............
        ........eeee22222222222222ee............
        ........ee9944222222222244bbee..........
        ........ee9944222222222244bbee..........
        ....eeee99994444222222224499bbee........
        ....eeee99994444222222224499bbee........
        ..ee22229999444444222222449999ee........
        ..ee22229999444444222222449999ee........
        ee2222229999224444444444229999ee........
        ee2222229999224444444444229999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        eeee3333eeee22222222ee2222eeeeee........
        eeee3333eeee22222222ee2222eeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        ..eeeeffbbccccffeeeeffbbccccff..........
        ..eeeeffbbccccffeeeeffbbccccff..........
        ........bbbbff........bbbbff............
        ........bbbbff........bbbbff............
        `,img`
        ..............eeeeeeeeeee...............
        ..............eeeeeeeeeee...............
        ..........eeee22222222222ee.............
        ..........eeee22222222222ee.............
        ........eeee222222222222222ee...........
        ........eeee222222222222222ee...........
        ........ee99444444422222244bbee.........
        ........ee99444444422222244bbee.........
        ....eeee999944444444422224499bbe........
        ....eeee999944444444422224499bbe........
        ..ee222299994444444444422449999e........
        ..ee222299994444444444422449999e........
        ee22222299992244444444444229999e........
        ee22222299992244444444444229999e........
        ee2222229999eeeeeeeeeeeeeee9999e........
        ee2222229999eeeeeeeeeeeeeee9999e........
        ee22222299bbeebbbbbbbeebbeebb99e........
        ee22222299bbeebbbbbbbeebbeebb99e........
        ee22eeeeeeeebbbbbbbbbeebbbbeebbe........
        ee22eeeeeeeebbbbbbbbbeebbbbeebbe........
        eeee3333eeee222222222ee2222eeeee........
        eeee3333eeee222222222ee2222eeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeffffffeeeeeeeeeffffffeee........
        eeeeeeeeffffffeeeeeeeeeffffffeee........
        ..eeeeffffffbbfffeeeeffffffbbff.........
        ..eeeeffffffbbfffeeeeffffffbbff.........
        ........ccbbbb.........ccbbbb...........
        ........ccbbbb.........ccbbbb...........
        `,img`
        ..............eeeeeeeeee................
        ..............eeeeeeeeee................
        ..........eeee2222222222ee..............
        ..........eeee2222222222ee..............
        ........eeee22222222222222ee............
        ........eeee22222222222222ee............
        ........ee9944222222444444bbee..........
        ........ee9944222222444444bbee..........
        ....eeee99994422222244444499bbee........
        ....eeee99994422222244444499bbee........
        ..ee22229999444422222244449999ee........
        ..ee22229999444422222244449999ee........
        ee2222229999224444444444229999ee........
        ee2222229999224444444444229999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        eeee3333eeee22222222ee2222eeeeee........
        eeee3333eeee22222222ee2222eeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        ..eeeeffccbbbbffeeeeffccbbbbff..........
        ..eeeeffccbbbbffeeeeffccbbbbff..........
        ........ffffff........ffffff............
        ........ffffff........ffffff............
        `,img`
        ..............eeeeeeeeee................
        ..............eeeeeeeeee................
        ..........eeee2222222222ee..............
        ..........eeee2222222222ee..............
        ........eeee22222222222222ee............
        ........eeee22222222222222ee............
        ........ee9944222222222244bbee..........
        ........ee9944222222222244bbee..........
        ....eeee99994422222222224499bbee........
        ....eeee99994422222222224499bbee........
        ..ee22229999444422222222449999ee........
        ..ee22229999444422222222449999ee........
        ee2222229999224444444444229999ee........
        ee2222229999224444444444229999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee2222229999eeeeeeeeeeeeee9999ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22222299bbeebbbbbbeebbeebb99ee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        ee22eeeeeeeebbbbbbbbeebbbbeebbee........
        eeee3333eeee22222222ee2222eeeeee........
        eeee3333eeee22222222ee2222eeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        ee3333eeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        eeeeeeeeffffffeeeeeeeeffffffeeee........
        ..eeeeffbbbbccffeeeeffbbbbccff..........
        ..eeeeffbbbbccffeeeeffbbbbccff..........
        ........ccffff........ccffff............
        ........ccffff........ccffff............
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_Auto, 0, 94, 35)
    Scene_1_Auto.destroy()
    pause(1000)
    animation.runImageAnimation(
    Scene_1_CamCun,
    [img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 1 b b 1 b f b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b e e e f . . . 
        . . e b b f e e e e b b e . . . 
        . . e e f 1 1 b b e b b e . . . 
        . . . f 1 1 1 1 1 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 1 b b 1 b c b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 1 1 f e e . . 
        . . . . c e e 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    100,
    true
    )
    story.spriteMoveToLocation(Scene_1_CamCun, 73, 103, 30)
    animation.runImageAnimation(
    Scene_1_CamCun,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 1 b b e b b e . . . 
        . . . . f 1 1 1 1 e b b e . . . 
        . . . . c b 1 1 1 1 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b e e f f . . . 
        . . . . . f e e e b b e f . . . 
        . . . . f 1 b b e b b e . . . . 
        . . . . c 1 1 1 1 e e f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 1 b b e b b e . . . 
        . . . . f 1 1 1 1 e b b e . . . 
        . . . . c b 1 1 1 1 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e e b b e . . 
        . . . . f 1 1 b b b e b b e . . 
        . . . . c 1 1 1 1 1 e e e . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    false
    )
    pause(1000)
    animation.runImageAnimation(
    Scene_1_CamCun,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 1 b b e b b e . . . 
        . . . . f 1 1 1 1 e b b e . . . 
        . . . . c b 1 1 1 1 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b e e f f . . . 
        . . . . . f e e e b b e f . . . 
        . . . . f 1 b b e b b e . . . . 
        . . . . c 1 1 1 1 e e f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 1 b b e b b e . . . 
        . . . . f 1 1 1 1 e b b e . . . 
        . . . . c b 1 1 1 1 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e e b b e . . 
        . . . . f 1 1 b b b e b b e . . 
        . . . . c 1 1 1 1 1 e e e . . . 
        . . . . . f f f f f f . . . . . 
        `],
    150,
    true
    )
    story.spriteMoveToLocation(Scene_1_CamCun, 65, 103, 5)
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_CamCun)
    pause(2000)
    effects.blizzard.startScreenEffect()
    animation.runImageAnimation(
    Scene_1_CamCun,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b 9 f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 1 1 f e e . . 
        . . . . c e e 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f e e e b b f 1 f f f . . 
        . . . f b b e b b b b f f . . . 
        . . . e b b e e e e 9 b b e . . 
        . . . e c e e b b 1 1 f e e . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 1 9 f e e . . 
        . . . . c e e 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 1 1 f e e . . 
        . . . . c e e 1 1 1 9 1 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 1 1 f e e . . 
        . . . . c e e 1 1 1 1 1 f . . . 
        . . . . . f f f f f 9 f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 1 1 f e e . . 
        . . . . c e e 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    135,
    true
    )
    story.spriteMoveToLocation(Scene_1_CamCun, 64, 103, 5)
    pause(2000)
    music.setVolume(20)
    music.playMelody("A G F - E D C - ", 120)
    music.playMelody("A G F - E D C - ", 120)
    color.startFade(color.originalPalette, color.Black, 3000)
    effects.blizzard.endScreenEffect()
    pause(1300)
    story.cancelAllCutscenes()
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_CamCun)
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_Papa_Bien)
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_Cambita_Bien)
    animation.stopAnimation(animation.AnimationTypes.All, Scene_1_CamCun)
    DialogueMode = false
    clearLevel()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lvl_2_Gate_Keeper_SONSO, function (sprite, otherSprite) {
    if (CamKun.overlapsWith(LVL2_Gate_Keeper_SONSO) && level == 2) {
        if (CamKun.overlapsWith(LVL2_Gate_Keeper_SONSO)) {
            DialogueMode = true
            game.showLongText("Si querej pasar, me vaj a tener que dar la receta del mejor sonso del Piraí", DialogLayout.Bottom)
            game.showLongText("¿Cuantoj gramo' de queso menonita lleva el mejor sonso del piraí?", DialogLayout.Bottom)
            PRUEBA_RESPUESTA_SONSO = game.askForString(true)
            if (PRUEBA_RESPUESTA_SONSO == convertToText(Random_Gramos_Queso_Menonita)) {
                game.showLongText("hmmm...Ya choco, voy a probar con eso, si no sirve, te voy a sacar la puta, podej pasar..", DialogLayout.Bottom)
                LVL2_Gate_Keeper_SONSO.setKind(SpriteKind.Complete)
                tiles.setWallAt(tiles.getTileLocation(33, 40), false)
                tiles.setWallAt(tiles.getTileLocation(33, 41), false)
                tiles.setTileAt(tiles.getTileLocation(33, 40), assets.tile`stairWest1`)
                tiles.setTileAt(tiles.getTileLocation(32, 40), assets.tile`stairWest1`)
                tiles.setTileAt(tiles.getTileLocation(33, 41), assets.tile`stairWest2`)
                tiles.setTileAt(tiles.getTileLocation(32, 41), assets.tile`stairWest2`)
            } else {
                game.showLongText("A mi no me la vaj a charlar, no volvaj por aca, cunumi e mierda", DialogLayout.Bottom)
                scene.cameraShake(3, 1000)
                info.changeLifeBy(-1)
                music.smallCrash.play()
            }
            DialogueMode = false
            pause(3000)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Machetazo = true
    music.knock.play()
    animation.runImageAnimation(
    CamKun,
    [img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . f e b f 9 9 9 9 9 9 9 9 9 9 9 
        . f e e f 9 9 9 9 9 9 9 9 9 1 1 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . 1 . f e b b f 1 b f f f . . 
        . 1 . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        9 9 9 9 9 f 1 b b e b b e . . . 
        1 1 9 9 f 1 1 1 1 e b b e . . . 
        . . . . c b 1 1 1 1 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f f e . . . 
        9 9 9 9 f b 1 b b 1 b c b e f . 
        1 1 9 9 f 1 1 1 1 1 1 f e e f . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f 1 . 1 . 
        . . . f f b b b b b b f . 1 . 1 
        . . . e e f e e e e f . . . . . 
        . . . f b b f 9 9 9 9 9 9 9 9 9 
        . . . f b b f 9 9 9 9 9 9 9 1 1 
        . . . . e e 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 1 b b 1 b c b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    125,
    false
    )
    pause(375)
    Machetazo = false
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    CamKun,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 1 b b e b b e . . . 
        . . . . f 1 1 1 1 e b b e . . . 
        . . . . c b 1 1 1 1 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b e e f f . . . 
        . . . . . f e e e b b e f . . . 
        . . . . f 1 b b e b b e . . . . 
        . . . . c 1 1 1 1 e e f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 1 b b e b b e . . . 
        . . . . f 1 1 1 1 e b b e . . . 
        . . . . c b 1 1 1 1 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e e b b e . . 
        . . . . f 1 1 b b b e b b e . . 
        . . . . c 1 1 1 1 1 e e e . . . 
        . . . . . f f f f f f . . . . . 
        `],
    130,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    game.showLongText("Tocar \"A\" para abrir el cofre.", DialogLayout.Bottom)
    if (controller.A.isPressed()) {
        Chest_Llave_Dungeon_Lvl_2.destroy(effects.spray, 500)
        Chest_Llave_Dungeon_Lvl_2 = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Chest)
        Chest_Llave_Dungeon_Lvl_2.setPosition(760, 10)
        Chest_Llave_Dungeon_Lvl_2.setKind(SpriteKind.Complete)
        Llave_Chest_Sprite = sprites.create(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . f f f f 5 5 5 f f f f . . . 
            . . f f f f 5 5 f 5 5 f f f f . . 
            . . f f f 5 5 5 f 5 5 5 f f f . . 
            . f f f f 5 5 f f f 5 5 f f f f . 
            . f f f f 5 5 5 f 5 5 5 f f f f . 
            . f f f f f 5 5 5 5 5 f f f f f . 
            . f f f f f f 5 5 5 f f f f f f . 
            . f f f f f f 5 5 5 f f f f f f . 
            . f f f f f f 5 5 5 f f f f f f . 
            . f f f f f f 5 5 5 5 f f f f f . 
            . . f f f f f 5 5 5 f f f f f . . 
            . . f f f f f 5 5 5 5 f f f f . . 
            . . . f f f f 5 5 5 f f f f . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, SpriteKind.Item)
        statusbar.positionDirection(CollisionDirection.Top)
        statusbar = statusbars.create(20, 4, StatusBarKind.Item)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    DialogueMode = true
    game.showLongText("Madre: A ver mijo...Esa pelada no es pa' voj. Te vas a meter en problemas.", DialogLayout.Bottom)
    story.showPlayerChoices("No mamita, estoy yendo a la ventita", "Bah! yo hago lo que quiero puej")
    if (story.checkLastAnswer("No mamita, estoy yendo a la ventita")) {
        game.showLongText("Madre: Ya, toma quintos, comprese unos cuñapeces hijito..", DialogLayout.Bottom)
        music.baDing.play()
        info.changeScoreBy(2)
    } else if (story.checkLastAnswer("Bah! yo hago lo que quiero puej")) {
        game.showLongText("Madre: No me hables asi malcriau", DialogLayout.Bottom)
        scene.cameraShake(3, 1000)
        music.smallCrash.play()
        info.changeLifeBy(-1)
    }
    pause(500)
    DialogueMode = false
    NPCMama.setKind(SpriteKind.Complete)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    CamKun,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 1 f . . . . . 
        . . . e b b e 1 1 1 1 f . . . . 
        . . . . e e 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f e e b b b b f . . . . 
        . . . f e b b e e e f . . . . . 
        . . . . e b b e b b 1 f . . . . 
        . . . . f e e 1 1 1 1 c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 1 f . . . . . 
        . . . e b b e 1 1 1 1 f . . . . 
        . . . . e e 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . e b b e e e e e f . . . . . 
        . . e b b e b b b 1 1 f . . . . 
        . . . e e e 1 1 1 1 1 c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    130,
    true
    )
})
function CreateLevel () {
    CamKun = sprites.create(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 1 b b 1 b c b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    if (level == 1) {
        color.startFade(color.Black, color.originalPalette, 3500)
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.setBackgroundColor(0)
        Quinto = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Coin)
        Sofa = sprites.create(img`
            ..cccc.........
            .c7776c........
            c67776ccccccc..
            c67776c677777c.
            c67776c7777766c
            c67776c6666666c
            c67776cccccc66c
            c67776c77776ccc
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67766c777776c.
            c66666cccccccc.
            c66666c677777c.
            c66666c7777766c
            c66666c6666666c
            c66666c6666666c
            c66666c6666666c
            .cccccccccccccc
            .cbbc.....cbbc.
            `, SpriteKind.Building)
        Sofa.setPosition(57, 82)
        NPCMama = sprites.create(img`
            . . . f f f c c c . . . . . 
            . f f e e e e e e f f . . . 
            . f e e e e e e e e e f . . 
            f e e e e e e e e e e e c . 
            f e e b d e e e e e e e c . 
            f e d 4 4 b e e e e e e e f 
            f e b 4 4 4 c c e e e e e f 
            f f f 4 4 c b c c e e e c f 
            . f f d d c 1 e c c c c c c 
            . . f d d d d 4 f c c c c c 
            . . f 4 4 4 e e e 4 c c c . 
            . . f 9 9 9 e d d 4 f f . . 
            . . f 9 9 9 e d d e f . . . 
            . f 3 3 b 3 b e e b f . . . 
            . f f 3 b 3 b 3 b f f . . . 
            . . . f f b b f f . . . . . 
            `, SpriteKind.NPC1)
        NPCMama.setPosition(108, 80)
        animation.runImageAnimation(
        Quinto,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(Quinto, assets.tile`myTile21`)
        pause(1000)
        Musica_1 = true
    } else if (level == 2) {
        Chest_Llave_Dungeon_Lvl_2 = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Chest)
        Chest_Llave_Dungeon_Lvl_2.setPosition(760, 10)
        Musica_1 = false
        NPCMama.destroy()
        tiles.setCurrentTilemap(tilemap`El Pirai`)
        scene.setBackgroundColor(13)
        Casa = sprites.create(img`
            ....................e2e22e2e....................
            .................222eee22e2e222.................
            ..............222e22e2e22eee22e222..............
            ...........e22e22eeee2e22e2eeee22e22e...........
            ........eeee22e22e22e2e22e2e22e22e22eeee........
            .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
            ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            .c66444444444c66e4e44e44e44ffffe66c44444444466c.
            ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
            ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
            ....644444444c66f4e44e44e44e44ee66c444444446....
            .....64eee444c66f4e44e44e44e44ee66c444eee46.....
            ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
            `, SpriteKind.Building)
        Casa.setPosition(24, 8)
        LVL2_Gate_Keeper_SONSO = sprites.create(img`
            ........ccc.............
            ........cccccccc........
            .....cc..cc77777cc......
            .....cccc777777777c.....
            .....ccb77777777777c....
            ...cc.b7777bcc777777c...
            ...ccb77777777c77d77c...
            ....cb7777dd77777777c...
            .....7777dd7777d7777c...
            ..cc.777dd777777dbbbc...
            ..ccc77ddd777777d777c...
            ...ccd7dbdd7777d777c....
            ....bdddb777bbbbbccc....
            ..cccdddb777cbbbbbbbc...
            ...ccddddb777cbbbbbbbc..
            ....cdddddb777cbbbbbbc..
            ...ccddddddb77cbbbbbbcc.
            ...cbddddd77bcbbbbbbbcc.
            ..cbdddddd7777bbbbbbbc..
            .cddddddbdd777bbbbbbc...
            cddddddbbbdd77cbbccc....
            ccccccbbcbddddccdddcc...
            ......cccdd777dcccccc...
            ........cccccccc........
            `, SpriteKind.Lvl_2_Gate_Keeper_SONSO)
        LVL2_Gate_Keeper_SONSO.setPosition(552, 628)
        Vendedor_Derecha_1 = sprites.create(img`
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeebbbee
            cccccccccccceee555ee
            bbbfffffbbbcee55515e
            bfffffaffbbcee54445e
            bffffffafffcee55555e
            ffffafffaafceeeeeeee
            faffaafffffceeeeeeee
            faaffffefffceeeeeeee
            fffffffeefdceebbbbee
            ffeefafeefdce225512e
            dfe4e1f44fdce222222e
            dfffe4444fdceeeeeeee
            ddfeeeeeffdceeeeeeee
            ddeeee777fdceeebbeee
            dde44e777fdcee7777ee
            ddf44f999fdcee7667ee
            dddffffffddcee7661ee
            ddddfffddddcee7771ee
            dddddddddddcee7777ee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            cccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            `, SpriteKind.NPC)
        Vendedor_Derecha_1.setPosition(74, 488)
        Vendedor_Derecha_2 = sprites.create(img`
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            cccccccccccceeeeeeee
            bbbfffffbbbceeeeeeee
            bfffffaffbbceeeeeeee
            bffffffafffbbbbbbbbb
            ffffafffaafbdddddddb
            faffaafffffbbbbbbbbb
            faaffffefffbddddddeb
            fffffffeefdbbbb15ebb
            ffeefafeefdbdd4515db
            dfe4e1f44fdbb51554bb
            dfffe4444fdbd5545ddb
            ddfeeeeeffdbbe15bbbb
            ddeeee666fdbeddddddb
            dde44e666fdbbbbbbbbb
            ddf44f111fdbdddddddb
            dddffffffddbbbbbbbbb
            ddddfffddddceeeeeeee
            dddddddddddceeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            cccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            `, SpriteKind.NPC)
        Vendedor_Derecha_2.setPosition(74, 535)
        Vendedor_Derecha_3 = sprites.create(img`
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            cccccccccccceeeeeeee
            bbbfffffbbbceceef2ee
            bfffffaffbbcec22212b
            bffffffafffcebbbbbbb
            ffffafffaafceeeeeeee
            faffaafffffceeeeeeee
            faaffffefffceeeeeeee
            fffffffeefdce55eeeee
            ffeefafeefdce5e5eeee
            dfe4e1f44fdce5ee555e
            dfffe4444fdceeeeeeee
            ddfeeeeeffdceeeeeeee
            ddeeee888fdceeeeeeee
            dde44e888fdce777eeee
            ddf44fbbbfdcec7717ee
            dddffffffddcec77717b
            ddddfffddddcebbbbbbb
            dddddddddddceeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            cccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            `, SpriteKind.NPC)
        Vendedor_Derecha_3.setPosition(74, 582)
        Vendedor_Izquierda_1 = sprites.create(img`
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeecccccccccccc
            eefceececbbbfffffbbb
            bf1fffcecbbffafffffb
            bbbbbbbecfffaffffffb
            eeeeeeeecfaafffaffff
            eeeeeeeecfffffaaffaf
            eeeeeeeecfffeffffaaf
            eeeee99ecdfeefffffff
            eeee9e9ecdfeefafeeff
            e999ee9ecdf44f1e4efd
            eeeeeeeecdf4444efffd
            eeeeeeeecdffeeeeefdd
            eeeeeeeecdf888eeeedd
            eeee444ecdf888e44edd
            ee41442ecdfcccf44fdd
            b414442ecddffffffddd
            bbbbbbbecddddfffdddd
            eeeeeeeecddddddddddd
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            cccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            `, SpriteKind.NPC)
        Vendedor_Izquierda_1.setPosition(134, 488)
        Vendedor_Izquierda_2 = sprites.create(img`
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eebbbeeeeeeeeeeeeeee
            ee444eeecccccccccccc
            e41444eecbbbfffffbbb
            e45554eecbbffafffffb
            e44444eecfffaffffffb
            eeeeeeeecfaafffaffff
            eeeeeeeecfffffaaffaf
            eeeeeeeecfffeffffaaf
            eebbbbeecdfeefffffff
            e91cc99ecdfeefafeeff
            e999999ecdf44f1e4efd
            eeeeeeeecdf4444efffd
            eeeeeeeecdffeeeeefdd
            eeebbeeecdf666eeeedd
            ee3333eecdf666e44edd
            ee3553eecdf222f44fdd
            ee1553eecddffffffddd
            ee1333eecddddfffdddd
            ee3333eecddddddddddd
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            cccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            `, SpriteKind.NPC)
        Vendedor_Izquierda_2.setPosition(134, 535)
        Vendedor_Izquierda_3 = sprites.create(img`
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeecccccccccccc
            eeeeeeeecbbbfffffbbb
            eeeeeeeecbbffafffffb
            bbbbbbbbbfffaffffffb
            bdddddddbfaafffaffff
            bbbbbbbbbfffffaaffaf
            beddddddbfffeffffaaf
            bbe51bbbbdfeefffffff
            bd5154ddbdfeefafeeff
            bb45515bbdf44f1e4efd
            bdd5455dbdf4444efffd
            bbbb51ebbdffeeeeefdd
            bddddddebdf666eeeedd
            bbbbbbbbbdf666e44edd
            bdddddddbdf222f44fdd
            bbbbbbbbbddffffffddd
            eeeeeeeecddddfffdddd
            eeeeeeeecddddddddddd
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            cccccccccccccccccccc
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbb
            `, SpriteKind.NPC)
        Vendedor_Izquierda_3.setPosition(134, 582)
        for (let index = 0; index < 3; index++) {
            Comida = sprites.create(img`
                . . . . . . . . . . . e e 
                . . . . . . . . . . e e e 
                . . . . . . . 5 4 1 5 e . 
                . . . . . . 1 5 5 5 5 . . 
                . . . . . 5 5 1 4 5 1 . . 
                . . . . 5 5 4 5 5 5 5 . . 
                . . . 5 1 5 1 5 5 4 . . . 
                . . 4 5 5 5 5 4 5 . . . . 
                . . 5 1 4 5 5 5 . . . . . 
                . . 5 5 5 1 5 . . . . . . 
                . e 5 4 5 5 . . . . . . . 
                e e e . . . . . . . . . . 
                e e . . . . . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnRandomTile(Comida, assets.tile`tilePath5`)
        }
        for (let index = 0; index < 6; index++) {
            Vibora = sprites.create(assets.image`Vibora`, SpriteKind.Enemy)
            Vibora.follow(CamKun, 20)
            tiles.placeOnRandomTile(Vibora, sprites.castle.tileGrass3)
        }
        for (let index = 0; index < 10; index++) {
            Vibora = sprites.create(assets.image`Vibora`, SpriteKind.Enemy)
            Vibora.follow(CamKun, 25)
            tiles.placeOnRandomTile(Vibora, assets.tile`tilePath0`)
        }
    } else if (level == 3) {
        NPCMama.destroy()
        tiles.setCurrentTilemap(tilemap`level4`)
    } else {
    	
    }
    tiles.placeOnRandomTile(CamKun, sprites.dungeon.collectibleInsignia)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    CamKun,
    [img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 1 b b 1 b f b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b e e e f . . . 
        . . e b b f e e e e b b e . . . 
        . . e e f 1 1 b b e b b e . . . 
        . . . f 1 1 1 1 1 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 1 b b 1 b c b e . . 
        . . e e f 1 1 1 1 1 1 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 1 1 f e e . . 
        . . . . c e e 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    130,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.coolRadial, 500)
    info.changeLifeBy(1)
    music.beamUp.play()
    pause(1000)
})
function clearLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Building)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.NPC1)) {
        NPCMama.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.NPC)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.PERSONAJE_INTRO)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.WALL_SHOOTER)) {
        value.destroy()
    }
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    level += 1
    CreateLevel()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Machetazo == true) {
        otherSprite.destroy(effects.disintegrate, 700)
        info.changeScoreBy(1)
        music.playMelody("B C5 C5 - - - - - ", 600)
    } else {
        info.changeLifeBy(-1)
        pause(1000)
        music.playMelody("C D D - - - - - ", 400)
        scene.cameraShake(3, 500)
    }
})
/**
 * HISTORIA CAM-KUN
 * 
 * INTRO
 * 
 * Cam-Kun y Cambita Bien se enamoran, besos. Amor prohibido.
 * 
 * Aparece Papá Bien desaprueba a Cam-Kun, señala que nunca sera como Gomelo, que no se acerque a su hija. Se lleva a Bien.
 * 
 * NIVEL 1 - Inicio de la aventura en Casa de Cam-Kun
 * 
 * Dialogo con Mama-Kun.
 */
let Vibora: Sprite = null
let Comida: Sprite = null
let Vendedor_Izquierda_3: Sprite = null
let Vendedor_Izquierda_2: Sprite = null
let Vendedor_Izquierda_1: Sprite = null
let Vendedor_Derecha_3: Sprite = null
let Vendedor_Derecha_1: Sprite = null
let Casa: Sprite = null
let Sofa: Sprite = null
let NPCMama: Sprite = null
let statusbar: StatusBarSprite = null
let Llave_Chest_Sprite: Sprite = null
let Chest_Llave_Dungeon_Lvl_2: Sprite = null
let PRUEBA_RESPUESTA_SONSO = ""
let LVL2_Gate_Keeper_SONSO: Sprite = null
let Scene_1_Papa_Bien: Sprite = null
let Scene_1_Auto: Sprite = null
let Scene_1_Corazon: Sprite = null
let Scene_1_Cambita_Bien: Sprite = null
let Scene_1_CamCun: Sprite = null
let myMinimap: tiles.TileMapData = null
let Quinto: Sprite = null
let Random_Gramos_Queso_Menonita = 0
let DialogueMode = false
let level = 0
let Vendedor_Derecha_2: Sprite = null
let CamKun: Sprite = null
let Musica_1 = false
let Machetazo = false
Machetazo = false
Musica_1 = false
info.setLife(3)
let SALTEAR_INTRO = true
if (SALTEAR_INTRO) {
    clearLevel()
} else {
    INTRO_CamKun()
}
forever(function () {
    if (Musica_1) {
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Breve))
    }
})
forever(function () {
    scene.cameraFollowSprite(CamKun)
    if (DialogueMode == false) {
        controller.moveSprite(CamKun, 100, 100)
    } else if (DialogueMode == true) {
        controller.moveSprite(CamKun, 0, 0)
    }
})
forever(function () {
    if (info.life() > 5) {
        info.setLife(5)
    }
})

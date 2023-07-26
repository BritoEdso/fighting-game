import {useState, useEffect, useRef} from "react";


export const useGameAttirbutes = (props) => {
    const [context, setContext] = useState();
    const [canvas, setCanvas] = useState();
    const [game, setGame] = useState()
    const [player, setPlayer] = useState()
    const [enemy, setEnemy] = useState()
    const [background, setBackground] = useState()
    const [shop, setShop] = useState()
    const [gravity, setGravity] = useState(0.8)

    setGame(props.game)
    setPlayer(game.activePlayer)
    setEnemy(game.activeEnemy)
    setBackground(game.background)
    setShop(game.shop)

    return(
        context,
        canvas,
        game,
        player,
        enemy,
        background,
        shop,
        gravity,
        setContext,
        setCanvas,
        setGame,
        setPlayer,
        setEnemy,
        setBackground,
        setShop,
        setGravity
    )
}
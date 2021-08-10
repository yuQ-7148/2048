import { Component } from "react";
import { Link } from "react-router-dom";
import initGame from "../component/initgame";

var boardBox = []


class Game extends Component {
    render() {
        return(
            <div>
                <div>this is game</div>
                {initGame(boardBox)}
                <Link to='/'>返回主页</Link>
            </div>
        )
    }
}

export default Game
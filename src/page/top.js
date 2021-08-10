import { Component } from "react";
import { Link } from "react-router-dom";

class Top extends Component {
    render() {
        return(
            <div>
                <div>this is top</div>
                <Link to='/'>返回主页</Link>
            </div>
        )
    }
}

export default Top
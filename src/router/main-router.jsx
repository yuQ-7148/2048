import {
    BrowserRouter,
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import Game from '../page/game'
import Top from '../page/top'

const MainRouter = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Link to='/game'>开始游戏</Link><br />
                    <Link to='/top'>排行榜</Link><br />
                </Route>
                <Route exact path='/game' component={Game} />
                <Route exact path='/top' component={Top} />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
)

export default MainRouter
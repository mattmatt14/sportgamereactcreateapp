

import './App.css';
import Game from './components/game/Game';
import RacoonImage from './assets/images/raccoon.png'
import SquirrelImage from './assets/images/squirrel.png'
import BunnyImage from './assets/images/bunny.png'
import HoundImage from './assets/images/hound.png'




function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: RacoonImage
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: SquirrelImage
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: BunnyImage
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: HoundImage
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;

import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import './App.css';
import {useState} from 'react';

function ActionIcon({action, ...props}) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };
  const Icon = icons[action]
  return (<Icon {...props}/>);
}

function Player({name = "Player", score = 0, action = "rock"}) {
  return (
    <div className='player'>
      <div className='score'>{name}: {score}</div>
      <div className='action'>
        {action && <ActionIcon action={action} size={60} />}
      </div>
    </div>
  )
}

function ActionButton({action = "rock", onActionSelected}) {
  return (
    <button className='round-bnt' onClick={() => onActionSelected(action)}>
      <ActionIcon action={action} size={20} />
    </button>
  )
}

function App() {
  const [playerAction, setPlayerAction] = useState("")

  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction)
  }

  return (
    <div className='center'>
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className='container'>
          <Player name="Player" score={0} action={playerAction} />
          <Player name="Computer" score={0} action="paper" />
        </div>
        <div>
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <h2>Player 1 wins!</h2>
      </div>
    </div>
  );
}

export default App;

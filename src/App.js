import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import './App.css';
import {useState} from 'react';

const actions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculateWinner(action1, action2) {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1] === action2) {
    return -1;
  } else if (actions[action2] === action1) {
    return 1;
  }

  return null;
}

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
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const winner = calculateWinner(selectedAction, newComputerAction);
    if (winner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (winner === 1) {
      setComputerScore(computerScore + 1)
    }
  }

  return (
    <div className='center'>
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className='container'>
          <Player name="Player" score={playerScore} action={playerAction} />
          <Player name="Computer" score={computerScore} action={computerAction} />
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

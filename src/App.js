import { FaHandRock } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';
import { FaHandScissors } from 'react-icons/fa';
import './App.css';

function Player({name = "Player", score = 0}) {
  return (
    <div className='player'>
      <div className='score'>{name}: {score}</div>
      <div className='action'>
        <FaHandRock size={60} />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='center'>
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className='container'>
          <Player name="Player" score={0} />
          <Player name="Computer" score={0} />
        </div>
        <div>
          <button className='round-bnt'>
            <FaHandRock size={20} />
          </button>
          <button className='round-bnt'>
            <FaHandPaper size={20} />
          </button>
          <button className='round-bnt'>
            <FaHandScissors size={20} />
          </button>
        </div>
        <h2>Player 1 wins!</h2>
      </div>
    </div>
  );
}

export default App;

import { FaHandRock } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';
import { FaHandScissors } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className='center'>
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className='container'>
          <div className='player'>
            <div className='score'>Player 1: 0</div>
            <div></div>
          </div>
          <div className='player'>
            <div className='score'>Player 2: 0</div>
            <div></div>
          </div>
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

import './App.css';

import Questions from './components/Questions';
import WomanCube from './components/WomanCube';

const app = () => {
  return <div className='site'>
    <WomanCube />
    <Questions />
  </div>

}

export default app;
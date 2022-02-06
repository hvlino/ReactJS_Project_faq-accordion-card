import Woman from '../images/illustration-woman-online-desktop.svg';
import Cube from '../images/illustration-box-desktop.svg';
import './WomanCube.css'

const WomanCube = () => <div className='woman-cube'>
<div class="cube">
    <img src={Cube} alt="Illustration" />
</div>
<div class="woman">
    <img src={Woman} alt="Illustration" />
</div>
</div>;

export default WomanCube;
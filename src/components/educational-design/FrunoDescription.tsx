import './FrunoDescription.css';
import frunoBellPeppers from '../../assets/educational-design/fruno-bell-pepper.png';
import frunoFruitWorm from '../../assets/educational-design/fruno-fruit-worm.png';
import frunoApple from '../../assets/educational-design/fruno-apple.png';
import frunoRainbowChard from '../../assets/educational-design/fruno-rainbow-chard.png';
import frunoDisclaimerCard from '../../assets/educational-design/fruno-disclaimer-card.png';
import frunoFullDeckShuffle from '../../assets/educational-design/fruno-full-deck-shuffle.png';
import FrunoInfoBox from './FrunoInfoBox';

const FrunoDescription = () => {
  return (
    <div className='fruno-description-section'>
      <div className='fruno-description-subsection'>
        <div className='fruno-description-text'>
          Fruits with subtypes that fall into all 4 color categories are used as action cards.
        </div>
        <div className='fruno-description-cards'>
          <img src={frunoBellPeppers} loading='lazy'/>
          <img src={frunoFruitWorm} loading='lazy'/>
          <img src={frunoApple} loading='lazy'/>
        </div>
        <div className='fruno-rainbow-chard-section'>
          <div>A rainbow chard is used for the wild card because a single chard can contain all 4 colors.</div>
          <img src={frunoRainbowChard} loading='lazy'/>
        </div>
      </div>
      <div className='fruno-description-subsection'>
        <img className='fruno-disclaimer-card' src={frunoDisclaimerCard} loading='lazy'/>
        <FrunoInfoBox description='*These cards were made for educational purposes only and are not intended for commercial use.*'/>
        <div className='fruno-full-deck'>
          <img src={frunoFullDeckShuffle} loading='lazy'/>
        </div>
      </div>
    </div>
  );
}

export default FrunoDescription;
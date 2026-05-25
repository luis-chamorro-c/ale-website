import './DigitalArtSection.css';
import schnauzer from '../../assets/digital-art/schnauzer.png';
import heartImg from '../../assets/digital-art/heart.png';
import marblePurse from '../../assets/digital-art/marble-markers-purse.png';
import abuillo from '../../assets/digital-art/abuillo.png';
import coolRoom from '../../assets/digital-art/cool-room.png';
import luchoImg from '../../assets/digital-art/lucho.png';
import marbleOne from '../../assets/digital-art/marble-markers-1.png';
import marbleTwo from '../../assets/digital-art/marble-markers-2.png';

const DigitalArtSection = () => {
  return (
    <div className='digital-art-section'>
      <div className='digital-art-left-section'>
        <img src={schnauzer} loading='lazy'/>
        <img src={heartImg} loading='lazy'/>
        <img src={marblePurse} loading='lazy'/>
      </div>
      <div className='digital-art-right-section'>
        <img src={abuillo} loading='lazy'/>
        <img src={coolRoom} loading='lazy'/>
        <img src={luchoImg} loading='lazy'/>
        <div className='digital-art-marble'>
          <div>
            <img src={marbleOne} loading='lazy'/>
          </div>
          <div>
            <img src={marbleTwo} loading='lazy'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalArtSection;
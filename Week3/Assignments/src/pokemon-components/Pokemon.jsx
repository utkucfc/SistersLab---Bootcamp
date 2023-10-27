import './PokemonStyles.css';
import Pikachu from './pikachu.png';
import Mimikyu from './mimikyu.png';
const Pokemon = (props) => {
    const { currentStatus, rotate } = props;
    return (
        <div className='Pokemon-container'>
            <div className={`Pokemon ${rotate && 'Pokemon-rotate'}`}>
                <img src={Pikachu} alt="" className={currentStatus === 'Pikachu' ? 'Pokemon-front' : 'Pokemon-back'} />
                <img src={Mimikyu} alt="" className={currentStatus === 'Pikachu' ? 'Pokemon-back' : 'Pokemon-front'} />
            </div>
        </div>
    );
};
export default Pokemon;

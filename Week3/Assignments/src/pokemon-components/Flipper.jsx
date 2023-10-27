import { useState } from "react";
import './PokemonFlipperStyles.css';
import Pokemon from './Pokemon';

const options = ['Pikachu', 'Mimikyu'];

const getRandomElementFromArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
};

const PokemonFlipper = () => {
    const [rotate, setRotate] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(options[0]);
    const [results, setResults] = useState([]);
    const start = () => {
        setRotate(true);
        const randomElement = getRandomElementFromArr(options);
        setTimeout(() => {
            setCurrentStatus(randomElement);
            setResults([...results, randomElement]);
            setRotate(false);
        }, 1000);
    };


    const Counters = () => {
        const LastFR = () => { return <span>Last flip's result: {currentStatus}</span> }
        const TotalFlip = () => { <span>{results.length}</span> };
        const TotalMimi = results.filter((el) => el === options[1]).length
        const TotalPika = results.filter((el) => el === options[0]).length
        
        const Totals = () => {
            return (
                <>
                    <br />
                    <span>Total Pikachu Flips: {TotalPika}</span>
                    <br />
                    <span>Total Mimikyu Flips: {TotalMimi}</span>
                </>
            )
        }

        return (
            <>
                {results.length > 0 && !rotate && <LastFR />}
                <TotalFlip />
                <Totals />
            </>
        )
    }
    return (
        <div>
            <h1>Pikahcu or Mimikyu</h1>
            <br />
            <Pokemon currentStatus={currentStatus} rotate={rotate} />
            <br />
            <button onClick={start}>Flip!</button>
            <br />
            <Counters />
        </div>
    );
};


export default PokemonFlipper;

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
        const LastFR = () => {
            if (results.length > 0) {
                return <span>Last flip's result: {currentStatus}</span>
            }
        }
        const TotalFlip = () => { <span>{results.length}</span> };
        const TotalPika = results.filter((el) => { return el === 'Pikachu' })
        const TotalMimi = results.filter((el) => { return el === 'Mimikyu' })
        return (
            <>
                <LastFR />
                <TotalFlip />
                <br />
                <span>Total Pikachu Flips: {TotalPika.length}</span>
                <br />
                <span>Total Mimikyu Flips: {TotalMimi.length}</span>
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

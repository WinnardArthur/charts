import React from 'react';
import './sortingVisualizer.css';

const NUMBER_OF_ARRAY_BARS = 20;

const PRIMARY_COLOR = 'teal';

const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    };
    
    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 300));
        }
        this.setState({array});
    }

    bubbleSort() {
        const {array} = (this.state)
        console.log('1.', array)
        let i, j;
        
        for (i= 0; i < array.length; i++) {
            for (j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                       
                        [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    
                    }
                }
            }
            
            setInterval(() => {
                this.setState(array)
                console.log(array)
            }, 3000)
    }

    Button = ({type, text}) => {
        return <button className={`button ${type}`}>{text}</button>
    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        className="array-bar"
                        key={index}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`
                        }}
                    ></div>
                ))}
                <div className="x-axisLabel">
                    Number of Stages
                </div>
                <div className="y-axisLabel">
                    Number of People
                </div>

                <button className="new" onClick={() => this.resetArray()}>Generate New Array</button>
                <button className="sort" onClick={() => this.bubbleSort()}>Bubble Sort</button>

            </div>
        )
    }
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
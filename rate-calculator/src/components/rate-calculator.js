import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyRate: 20,
            numHours: 4,
            hourlyRate: 5,
        }
    }

    updateDailyRate(dailyRate){
        console.log('daily rate is ' + dailyRate);
        this.setState({dailyRate});
        this.updateHourlyRate();
    }

    updateHours(numHours){
        console.log('num hours is ' + numHours);
        this.setState({numHours});
        this.updateHourlyRate();
    }

    updateHourlyRate() {
        this.setState({ hourlyRate: this.state.dailyRate / this.state.numHours });
    }

    calculateHourlyRate(){
        return this.state.dailyRate / this.state.numHours;

    }

    render() {
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} onChange={rate=> this.updateDailyRate(rate)} value={this.state.dailyRate}/>
                <NumberInput id="hours" label="Hours" min={1} max={12} onChange={hours => this.updateHours(hours)} value={this.state.numHours}/>
                <Output id="hourly-rate" label="Hourly rate" value={this.state.hourlyRate.toFixed(2)}/>
            </form>
        );
    }
}


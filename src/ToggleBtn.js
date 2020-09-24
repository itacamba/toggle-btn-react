import React, { Component } from 'react';

class ToggleBtn extends Component {
    
    constructor(){
        super()
        this.state = {
            isClicked: false
        }
    }

    handleCheckbox = () => {
        /* The following line is destructuring isClicked from state */
        const {isClicked} = this.state
        this.setState({isClicked: !isClicked})
    }
    

    render() {
        const {isClicked} = this.state
        return (
            <div id="main-section">
                <h1>Toggle Button | On/Off Switch</h1>
                <div id="view">

                    {isClicked? <h2>It was clicked</h2> : <h2>Initial State</h2>}

                </div>
                <div id="toggle-btn">


                    <input type="checkbox" 
                           id="checkbox-input" 
                           onChange={this.handleCheckbox}
                    />
                    
                    
                    
                    <label htmlFor="checkbox-input" className="round-slider-container">
                        <div>On</div>
                        <div>Off</div>
                        <div className="round-slider"></div>
                    </label>
                </div>
                <div id="about">
                    <a href="">Github Repository</a>
                    <a href="">Carla Sahagun Portfolio</a>
                </div>
            </div>
        );
    }
}

export default ToggleBtn;


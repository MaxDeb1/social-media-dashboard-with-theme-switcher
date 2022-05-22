import React from 'react';
import ToggleSwitch from './ToggleSwitch';

const Header = ({ isToggled, setIsToggled }) => {

    return (
        <div className='header'>
            <div className='title'>
                <h1>Social Media Dashboard</h1>
                <div className='followers'>Total Followers: 23,004</div>
            </div>
            <div className='theme-selection'>
                <div className='mode'>
                {(isToggled ? 'Light' : 'Dark')} Mode
                </div>
                <ToggleSwitch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
            </div>
        </div>
    );
};

export default Header;
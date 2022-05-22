import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => {
    const [isToggled, setIsToggled] = useState(false)
    return (
        <div className={'theme ' + (isToggled ? 'theme--dark' : 'theme--default')}>
              <div className='base'>
                <Header isToggled={isToggled} setIsToggled={setIsToggled}/>
                <MainContent />
              </div>
          </div>
    );
};

export default App;
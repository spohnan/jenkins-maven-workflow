import React from 'react';
import {render} from 'react-dom';
import RandomNumberComponent from "./RandomNumberComponent.jsx";

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Jenkins Maven Workflow Example</p>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));

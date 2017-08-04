import React from 'react';
import {render} from 'react-dom';
import HelloComponent from "./HelloComponent.jsx";

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Jenkins Maven Workflow Example</p>
                <HelloComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
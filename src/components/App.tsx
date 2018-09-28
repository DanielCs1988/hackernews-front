import * as React from 'react';
import './App.css';
import LinkList from "../containers/LinkList/LinkList";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <LinkList />
            </div>
        );
    }
}

export default App;

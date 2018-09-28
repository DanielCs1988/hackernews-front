import * as React from 'react';
import './App.css';
import LinkList from "../containers/LinkList/LinkList";
import CreateLink from "../containers/CreateLink/CreateLink";
import Header from "./Header/Header";
import {Route, Switch} from "react-router";

class App extends React.Component {
    public render() {
        return (
            <div className="center w85">
                <Header />
                <div className="ph3 pv1 background-gray">
                    <Switch>
                        <Route exact path="/" component={LinkList} />
                        <Route exact path="/create" component={CreateLink} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;

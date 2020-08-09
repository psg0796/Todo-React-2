import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ButtonNavTabs, {
  ButtonNavTabProps,
} from "./common/components/buttonNavTabs";
import Todo from "./MainApp/todo";
import Done from "./MainApp/done";
import { Paths } from "./common/Constants";
import { Data } from './mockData';
import * as R from 'ramda';

export interface UserTasksProps {
  id: Number;
  title: String;
  description: String;
  isDone: boolean;
}

interface RoutesInterface {
  title: string;
  path: string;
  exact: boolean;
  componentRenderer: (arg0: UserTasksProps[]) => JSX.Element;
}

const Routes: RoutesInterface[] = [
  {
    title: Paths.todo.title,
    path: Paths.todo.path,
    exact: true,
    componentRenderer: (data) => <Todo data={R.filter(d => !d.isDone, data)} />,
  },
  {
    title: Paths.done.title,
    path: Paths.done.path,
    exact: true,
    componentRenderer: (data) => <Done data={R.filter(d => d.isDone, data)} />,
  },
];

interface State {
  activeTab: string;
  data: UserTasksProps[]
}

interface Props {}

class App extends Component<Props, State> {
  state = {
    activeTab: window.localStorage.getItem('activeTab') || Paths.todo.title,
    data: Data
  };

  render() {
    const tabPaths: ButtonNavTabProps[] = Routes.map((route) => ({
      title: route.title,
      linkTo: route.path,
    }));

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ButtonNavTabs tabPaths={tabPaths} />
            <Switch>
              <Route exact path="/">
                {this.state.activeTab === Paths.todo.title ? (
                  <Redirect to={Paths.todo.path} />
                ) : (
                  <Redirect to={Paths.done.path} />
                )}
              </Route>
              {Routes.map((route) => (
                <Route exact={route.exact} path={route.path}>
                  {route.componentRenderer(this.state.data)}
                </Route>
              ))}
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;

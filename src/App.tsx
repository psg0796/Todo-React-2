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
import styled from "styled-components";
import { white, shark } from './common/colors';
import { FlexCol } from "./common/components/flex";
import { font24, font32 } from "./common/fontSize";

export interface UserTasksProps {
  key: Date;
  title: String;
  description: String;
  isDone: boolean;
}

interface RoutesInterface {
  title: string;
  path: string;
  exact: boolean;
  componentRenderer: (data: UserTasksProps[], addItem: (task: UserTasksProps) => void, extras?: any) => JSX.Element;
}

const Routes: RoutesInterface[] = [
  {
    title: Paths.todo.title,
    path: Paths.todo.path,
    exact: true,
    componentRenderer: (data, addItem, extras) => <Todo addItem={addItem} extras={extras} data={R.filter(d => !d.isDone, data)} />,
  },
  {
    title: Paths.done.title,
    path: Paths.done.path,
    exact: true,
    componentRenderer: (data) => <Done data={R.filter(d => d.isDone, data)} />,
  },
];

const AppContent = styled(FlexCol)`
  background-color: ${shark};
  min-height: 100vh;
  font-size: ${font24};
  color: ${white};
`;

const StyledButtonNavTabs = styled(ButtonNavTabs)`
  width: 30%;
  justify-content: space-around;
  font-size: ${font32};
`;

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

  getExtras = (title: string) => {
    return (
      {
      }
    )
  }

  addItem = (item: UserTasksProps) => {
    let newData = R.append(item, this.state.data);
    this.setState({
      data: newData
    });
  }

  handleNavTabClick = (title: string) => {
    this.setState({
      activeTab: title
    });
  }

  render() {
    const tabPaths: ButtonNavTabProps[] = Routes.map((route) => ({
      title: route.title,
      linkTo: route.path,
    }));

    return (
      <Router>
        <div className="App">
          <AppContent>
            <StyledButtonNavTabs onClick={this.handleNavTabClick} activeTab={this.state.activeTab} tabPaths={tabPaths} />
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
                  {route.componentRenderer(this.state.data, this.addItem, this.getExtras(route.title))}
                </Route>
              ))}
            </Switch>
          </AppContent>
        </div>
      </Router>
    );
  }
}

export default App;

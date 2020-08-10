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
import { paths } from "./common/Constants";
import { data } from "./mockData";
import { filter, append, map } from "ramda";
import styled from "styled-components";
import { white, shark } from "./common/colors";
import Flex, { FlexDirection } from "./common/components/flex";
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
  componentRenderer: (
    data: UserTasksProps[],
    addItem: (task: UserTasksProps) => void,
    deleteItem: (task: UserTasksProps) => void,
  ) => JSX.Element;
}

const routes: RoutesInterface[] = [
  {
    title: paths.todo.title,
    path: paths.todo.path,
    exact: true,
    componentRenderer: (data, addItem, deleteItem) => (
      <Todo
        addItem={addItem}
        deleteItem={deleteItem}
        data={filter((d) => !d.isDone, data)}
      />
    ),
  },
  {
    title: paths.done.title,
    path: paths.done.path,
    exact: true,
    componentRenderer: (data, addItem, deleteItem) => (
      <Done
        addItem={addItem}
        deleteItem={deleteItem}
        data={filter((d) => d.isDone, data)}
      />
    ),
  },
];

const AppContainer = styled(Flex)`
  background-color: ${shark};
  min-height: 100vh;
  font-size: ${font24};
  color: ${white};
`;

const AppContent = styled(Flex)`
  width: fit-content;
`;

const StyledButtonNavTabs = styled(ButtonNavTabs)`
  width: 100%;
  justify-content: space-between;
  font-size: ${font32};
`;

interface State {
  activeTab: string;
  data: UserTasksProps[];
}

interface Props {}

class App extends Component<Props, State> {
  state = {
    activeTab: window.localStorage.getItem("activeTab") || paths.todo.title,
    data: data,
  };

  addItem = (item: UserTasksProps) => {
    const newData = append(item, this.state.data);
    this.setState({
      data: newData,
    });
  };

  deleteItem = (item: UserTasksProps) => {
    const newData = filter((d) => d.key !== item.key, this.state.data);
    this.setState({
      data: newData,
    });
  };

  handleNavTabClick = (title: string) => {
    window.localStorage.setItem("activeTab", title);
    this.setState({
      activeTab: title,
    });
  };

  render() {
    const tabPaths: ButtonNavTabProps[] = map(route => ({
      title: route.title,
      linkTo: route.path,
      }), routes);

    return (
      <Router>
        <div className="App">
          <AppContainer>
            <AppContent direction={FlexDirection.column}>
              <StyledButtonNavTabs
                onClick={this.handleNavTabClick}
                activeTab={this.state.activeTab}
                tabPaths={tabPaths}
              />
              <Switch>
                <Route exact path="/">
                  {this.state.activeTab === paths.todo.title ? (
                    <Redirect to={paths.todo.path} />
                  ) : (
                    <Redirect to={paths.done.path} />
                  )}
                </Route>
                {map(route => (
                  <Route exact={route.exact} path={route.path}>
                    {route.componentRenderer(
                      this.state.data,
                      this.addItem,
                      this.deleteItem
                    )}
                  </Route>
                ), routes)}
              </Switch>
            </AppContent>
          </AppContainer>
        </div>
      </Router>
    );
  }
}

export default App;

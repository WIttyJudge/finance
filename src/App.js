import React, { Component } from "react";
import Sidebar from "./components/Layout/Sidebar";
import Bill from "./pages/bill/Bill";
import History from "./pages/history/History";
import Planning from "./pages/planning/Planning";
import Record from "./pages/record/Record";
import Category from "./pages/category/Category";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout className="main-page">
            <Header className="header">
              <div className="header__body">
                <p className="header__logo">logo</p>
                <p className="header__text">Name</p>
              </div>
            </Header>
            <Layout>
              <Sidebar />
              <Layout>
                <Content className="content__body">
                  <Switch>
                    <Route path="/bill" component={Bill} />
                    <Route path="/history" component={History} />
                    <Route path="/planning" component={Planning} />
                    <Route path="/record" component={Record} />
                    <Route path="/categories" component={Category} />

                    <Route path="*">
                      <h1>No Match</h1>
                    </Route>
                  </Switch>
                </Content>
                <Footer className="footer">Footer</Footer>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;

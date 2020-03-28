import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Bill from "./pages/Bill";
import History from "./pages/History";
import Planning from "./pages/Planning";
import Record from "./pages/Record";
import Category from "./pages/Category";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ backgroundColor: "#001529" }}>
              <p style={{ color: "white" }}>header</p>
            </Header>
            <Layout>
              <Sidebar />
              <Layout>
                <Content style={{ padding: "30px" }}>
                  <Switch>
                    <Route path="/bill">
                      <Bill />
                    </Route>
                    <Route path="/history">
                      <History />
                    </Route>
                    <Route path="/planning">
                      <Planning />
                    </Route>
                    <Route path="/record">
                      <Record />
                    </Route>
                    <Route path="/categories">
                      <Category />
                    </Route>
                  </Switch>
                </Content>
                <Footer style={{ textAlign: "center" }}>Footer</Footer>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;

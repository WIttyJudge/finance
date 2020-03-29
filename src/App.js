import React, { Component } from "react";
import Sidebar from "./components/Layout/Sidebar";
import Bill from "./pages/bill/Bill";
import History from "./pages/history/History";
import Planning from "./pages/planning/Planning";
import Record from "./pages/record/Record";
import Category from "./pages/category/Category";
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
                    <Route path="/bill" component={Bill} />
                    <Route path="/history" component={History} />
                    <Route path="/planning" component={Planning} />
                    <Route path="/record" component={Record} />
                    <Route path="/categories" component={Category} />
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

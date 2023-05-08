import "./App.css";
import 'antd/dist/reset.css';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { privateRoute, publicRoute } from "./router";
import Auth from "./component/Auth";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoute.map((item, index) => {
          const Page = item.component;
          const Layout = item.layout;
          return (
            <Route key={index}
              path={item.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route element={<Auth/>}>
          {privateRoute.map((item, index) => {
            const Page = item.component;
            const Layout = item.layout;
            return (
              <Route key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );

  
}

export default App;

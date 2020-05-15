import React, { Suspense, lazy, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./common/css/Base.scss";
import "./common/css/Reset.scss";

import Loader from "./components/Loader";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer/";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import { Clients } from "./pages/Clients";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";

import Button from "./components/Ui/Button";
import { InnerAdmin } from "./pages/Admin/innerAdmin";

// Lazy models
const Page = lazy(() => import("./components/Page"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <Router>
          <Page>
            <Header />
            <Layout />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />}>
                <Route path="/" element={<InnerAdmin />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/policy" element={<Policy />} />
            </Routes>

            
            <Button
              type=""
              onClick={() => {
                console.log("object");
              }}
              disabled={false}
              
            >
              click me
            </Button>
            <Button
              type="submit"
              onClick={() => {
                console.log("object");
              }}
              disabled={false}
            >
              save me
            </Button>
         
            <Footer />
          </Page>
        </Router>
      </Suspense>
    );
  }
}

export default App;

import { Component } from "react";
import App from "./App";
import Navigation from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import NoMatch from "./pages/NoMatch";

class Root extends Component {
  routeList = [
    { path: "/", name: "Home", Component: App, exact: true },
    { path: "/about", name: "About", Component: About, exact: false },
    { path: "/contact", name: "Contact", Component: Contact, exact: false },
    { path: "/blogs", name: "Blog", Component: Blogs, exact: true },
    { path: "/blogs/:id", name: "Post", Component: BlogPost, exact: false },
    { path: "*", name: "No Match", Component: NoMatch, exact: false },
  ];

  render() {
    return (
      <BrowserRouter>
        <div className="todo-app-container">
          <Navigation></Navigation>
          <div className="main-content">
            <Routes>
              {this.routeList.map(({ path, Component, exact }) => (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  element={<Component />}
                ></Route>
              ))}
              {/* <Route path="/" element={<App />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="blogs" element={<Blogs />}></Route>
              <Route path="/blogs/:id" element={<BlogPost />}></Route> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;

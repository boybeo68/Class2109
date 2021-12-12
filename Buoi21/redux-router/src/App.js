import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";
import Invoices from "./pages/Invoices";
import Invoice from "./pages/Invoice";
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Router
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  {" "}
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/post">
                  {" "}
                  Post
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  {" "}
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/invoices">
                  {" "}
                  Invoices
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com.vn/">
                  Link online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/invoices" element={<Invoices />}>
          {/* /invoices/123123  invoiceID = 123123*/}
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>

        {/* error page (no match) */}
        <Route
          path="*"
          element={
            <main>
              <p>not Found</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

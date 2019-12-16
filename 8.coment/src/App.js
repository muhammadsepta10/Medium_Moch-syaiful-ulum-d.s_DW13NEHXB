import React from "react";
import {
  Navbar,
  Container,
  Button,
  Row,
  Col,
  Image,
  ButtonToolbar
} from "react-bootstrap";
import CategoryScroll from "./components/home/CategoryScroll";
import HomeP from "./components/home/HomeP";
import AppHeader from "./components/home/AppHeader";
//
function App() {
  return (
    <div>
      <header>
        <AppHeader />

        <div className="mx-auto my-4">
          <Container>
            <CategoryScroll />
          </Container>
        </div>
      </header>
      <HomeP />
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./componat/navbar/Navbar";
import Hero from "./componat/hero-section/hero";
import Heap from "./componat/heapw/heap";
import { Card, Nav } from "react-bootstrap";
import It from "./componat/IT/it";
import Max from "./componat/Max/max";
import Goal from "./componat/Goal/goal";
import Case from "./componat/CASE/case";
import Main from "./componat/mission/main";
import Code from "./componat/code/code";
import Footer from "./componat/foot/Footer";

const App = () => {
  return (
    <div className="haep">
      <Navbar></Navbar>
      <Hero></Hero>
      <Heap></Heap>
      <It></It>
      <Max></Max>
      <Goal></Goal>
      <Case></Case>
      <Main></Main>
      <Code></Code>
      <Footer></Footer>
    </div>
  );
};
export default App;

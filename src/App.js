import React from "react";
import Card from "./components/Card";
import CardsRow from "./components/CardsRow";
import SideBar from "./components/SideBar";
import AppContainer from "./components/AppContainer";
import "./App.css";

function App() {
  return (
    <>
      <SideBar>
        <div>Hide menu</div>
        <div>Modul 1</div>
        <div>Modul 2</div>
        <div>Logout</div>
      </SideBar>
      <AppContainer>
        <CardsRow>
          <Card text="hi1"></Card>
          <Card text="hi2"></Card>
          <Card text="hi3"></Card>
        </CardsRow>
        <CardsRow>
          <Card text="hi4"></Card>
          <Card text="hi5"></Card>
          <Card text="hi6"></Card>
        </CardsRow>
        <CardsRow>
          <Card text="hi7"></Card>
          <Card text="hi8"></Card>
          <Card text="hi9"></Card>
        </CardsRow>
      </AppContainer>
    </>
  );
}

export default App;

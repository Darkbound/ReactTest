import React, {useState, useEffect} from "react";
import Card from "./components/Card";
import CardsRow from "./components/CardsRow";
import SideBar from "./components/SideBar";
import AppContainer from "./components/AppContainer";
import RowInCard from "./components/RowInCard";
import TextField from "./components/TextField";
import Button from "./components/buttons/Button";
import "./App.css";

function App() {
  const [texts, setTexts] = useState(["text1", "text2", "text3"])

//TODO connect with socket.io and backend
//TODO give a value to an element
//TODO change the value from robot
//TODO see if it automatically updates on the front end -> power of react?
//TODO figure out a way to structure everything from the backend and send the config to react and render the UI from there
//TODO type of element in config -> component
//TODO translate config.json to JS object directly


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
          <Card text="hi1">
            {texts.map(t => {
              return (
              <RowInCard key={`rc${t}`}>
                <TextField key={`tf${t}`} text={t}></TextField>
                <Button key={`Btn${t}`} text={t}></Button>
              </RowInCard>
              );
            })}
          </Card>
          <Card text="hi2">
            <RowInCard text="row1">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row2">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row3">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            </Card>
          <Card text="hi3">
            <RowInCard text="row1">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row2">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row3">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            </Card>
        </CardsRow>
        <CardsRow>
          <Card text="hi4">
            <RowInCard text="row1">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row2">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row3">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            </Card>
          <Card text="hi5">
            <RowInCard text="row1">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row2">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row3">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            </Card>
          <Card text="hi6">
            <RowInCard text="row1">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row2">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row3">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            </Card>
        </CardsRow>
        <CardsRow>
          <Card text="hi7">
            <RowInCard text="row1">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row2">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row3">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            </Card>
          <Card text="hi8">
            <RowInCard text="row1">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row2">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row3">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            </Card>
          <Card text="hi9">
            <RowInCard text="row1">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row2">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            <RowInCard text="row3">
              <TextField text="text1"/>
              <Button text="button1"/></RowInCard>
            </Card>
        </CardsRow>
      </AppContainer>
    </>
  );
}

export default App;

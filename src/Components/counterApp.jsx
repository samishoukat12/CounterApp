import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, Container } from "@material-ui/core";
import "./CounterApp.css";
import { FetchHooks } from "../Hooks/Hooks";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function CounterApp() {
  const [
    Count,
    ctaIncrementHandler,
    ctaDecrementHandler,
    ctaResetHandler,
    error,
    Reset,
    CountOverflow,
  ] = FetchHooks();

  return (
    <Container maxWidth="sm">
      <Card className="CardSize">
        <CardContent className="value">
          <center>{Count}</center>
        </CardContent>
      </Card>
      <Container>
        <Button
          variant="contained"
          onClick={ctaIncrementHandler}
          className="Buttons1"
        >
          <AddIcon />
        </Button>
      <>
      
      <Button color="secondary" variant="contained" onClick={ctaResetHandler}>
          <RotateLeftIcon /> Reset
        </Button>
    
    
      </>

        <Button
          variant="contained"
          onClick={ctaDecrementHandler}
          className="Buttons2"
        >
          <RemoveIcon />
        </Button>
      </Container>

      <p>{Reset}</p>
      <p>{error}</p>
      <p>{CountOverflow}</p>
    </Container>
  );
}

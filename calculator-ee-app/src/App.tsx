import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Toolbar,
} from "@mui/material";
// @ts-ignore
import LogoEEImg from "./assets/img/logo-ee.svg";

import { DigitButton } from "./DigitButton";
import { OperationButton } from "./OperationButton";
import { calculate } from "./utils/calculate";
import theme from "./theme";

function App() {
  const [prevValue, setPrevValue] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const equals = () => {
    const result = calculate(currentValue, prevValue, operation);
    setCurrentValue(`${result}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  // all clear
  const allClear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  // set current value to 0
  const clear = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (x: string) => {
    if (prevValue) {
      const result = calculate(currentValue, prevValue, operation);
      setPrevValue(`${result}`);
      setCurrentValue("");
    } else {
      setPrevValue(currentValue);
      setCurrentValue("");
    }
    setOperation(x);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;

    if (overwrite) {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Box
            component="img"
            src={LogoEEImg}
            alt="Logo EE"
            height="32px"
            title="Equal Experts"
          />
        </Toolbar>
      </AppBar>
      <Paper sx={{ padding: 2, marginTop: 10, borderRadius: 5 }} elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div
              style={{
                width: "100%",
                textAlign: "right",
                height: "2em",
                padding: theme.spacing(2),
                fontSize: "3em",
                overflow: "hidden",
              }}
              data-testid="output"
            >
              {currentValue}
            </div>
          </Grid>
          <Grid item container columnSpacing={1}>
            <OperationButton
              operation={"AC"}
              selectOperation={allClear}
              selectedOperation={operation}
            />
            <OperationButton
              operation={"C"}
              selectOperation={clear}
              selectedOperation={operation}
            />
            <OperationButton
              operation={"%"}
              selectOperation={percent}
              selectedOperation={operation}
            />
            <OperationButton
              operation={"÷"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitButton digit={"7"} enterDigit={setDigit} />
            <DigitButton digit={"8"} enterDigit={setDigit} />
            <DigitButton digit={"9"} enterDigit={setDigit} />
            <OperationButton
              operation={"*"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitButton digit={"4"} enterDigit={setDigit} />
            <DigitButton digit={"5"} enterDigit={setDigit} />
            <DigitButton digit={"6"} enterDigit={setDigit} />
            <OperationButton
              operation={"-"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitButton digit={"1"} enterDigit={setDigit} />
            <DigitButton digit={"2"} enterDigit={setDigit} />
            <DigitButton digit={"3"} enterDigit={setDigit} />

            <OperationButton
              operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitButton xs={6} digit={"0"} enterDigit={setDigit} />
            <DigitButton digit={"."} enterDigit={setDigit} />

            <Grid item xs={3}>
              <Button fullWidth variant="contained" onClick={equals}>
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;

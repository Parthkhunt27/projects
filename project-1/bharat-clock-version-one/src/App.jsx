import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import ClockHeading from "./components/ClockHeading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;

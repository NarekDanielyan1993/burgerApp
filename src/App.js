import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import CardProvider from "./store/card/CardProvider";

function App() {
  return (
    <CardProvider>
      <Header />
      <Meals />
    </CardProvider>
  );
}

export default App;

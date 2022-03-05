import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
//{because func is const not default}
import { Footer } from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Hello!1",
    },
    {
      sno: 2,
      title: "Go to the shop",
      desc: "Hello!2",
    },
    {
      sno: 2,
      title: "Go to the home",
      desc: "Hello!3",
    },
  ];
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;

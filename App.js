import { Provider } from "./Context";
import Form from "./components/Form1";
import LoadData from "./components/LoadData";
import { Insert } from "./Insert";
function App() {
  const data = Insert();
  return (
    <Provider value={data}>
      <div className="App">
        <h1>React JS + PHP CRUD Application</h1>
        <div className="wrapper">
          <section className="left-side">
            <Form />
          </section>
          <section className="right-side">
          <LoadData />
          </section>
        </div>
      </div>
    </Provider>
  );
}

export default App;

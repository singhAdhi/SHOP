import "./App.css";
import { createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: "Home page",
    },
    {
      path: "/add",
      element: "Home page",
    },
    {
      path: "/edit",
      element: "Home page",
    },
  ]);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;

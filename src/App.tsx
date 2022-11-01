import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

/* TODO: Aqui no app, deve conter apenas o BrowserRouter com o Router. Esses imports devem estar no Home.tsx*/
export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

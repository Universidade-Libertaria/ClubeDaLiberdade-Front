import { HourglassMedium } from "phosphor-react";
import { Routes, Route } from "react-router-dom";
import { Redefinicao } from "./pages/Redefinicao";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Redef' element={<Redefinicao />}></Route>
    </Routes>
  );
}
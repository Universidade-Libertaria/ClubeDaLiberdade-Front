import { HourglassMedium } from "phosphor-react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Planos } from "./pages/Planos";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Planos' element={<Planos />}></Route>
      </Route>
    </Routes>
  );
}

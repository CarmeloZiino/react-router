import { BrowserRouter, Routes } from "react-router-dom";

//pages
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';

//layouts
import DefaultLayout from './layouts/DefaultLayout'


export default function App() {


return (

<BrowserRouter>
  <Routes>
  <Route Component={DefaultLayout}>
          <Route path="/" element={HomePage} />
          <Route path="/chisiamo" element={ChiSiamo} />
        </Route>
  </Routes>
</BrowserRouter>

);


}
import { BrowserRouter, Routes , Route } from "react-router-dom";

//pages
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import Posts from "./pages/Posts";

//layouts
import DefaultLayout from './layouts/DefaultLayout'


export default function App() {


return (

<BrowserRouter>
  <Routes>
  <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/chi-siamo" Component={ChiSiamo} />
          <Route path="/posts" Component={Posts} />
        </Route>
+  </Routes>
</BrowserRouter>

);
}
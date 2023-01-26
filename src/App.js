import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";


function App() {
  return (
    <main>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='*' element={<NotFound/>}/>  
    </Routes>
    <Search/>
    <Footer/>
    </main>
  )
}
export default App;
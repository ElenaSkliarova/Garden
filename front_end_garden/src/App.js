import Header from "./components/Header/Header";
import {Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import SalesListPage from "./pages/SalesListPage/SalesListPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoriesListPage from "./pages/CategoriesListPage/CategoriesListPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import './App.css';
import Footer from "./components/Footer/Footer";


function App() {
 
  return (
    <div className='main_container'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/categories/all' element={<CategoriesListPage />}/>
        <Route path='/category/:id' element={<CategoryPage />}/>
        <Route path='/product/:id' element={<ProductPage />}/>
        <Route path='/products/all' element={<ProductsListPage />}/>
        <Route path='/sales/all' element={<SalesListPage />}/>
        <Route path='/basket' element={<BasketPage />}/>        
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

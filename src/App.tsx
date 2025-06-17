import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Catalog from './routes/ClientHome/Catalog';
import ProductDetails from './routes/ClientHome/ProductDetails';
import ClientHome from './routes/ClientHome';
import Cart from './routes/ClientHome/Cart';
import { useState } from 'react';
import { ContextCartCount } from './utils/context-cart.ts';
import Login from './routes/ClientHome/Login/index.tsx';
import Admin from './routes/Admin/index.tsx';
import AdminHome from './routes/Admin/AdminHome/index.tsx';


export default function App() {

  /*
    • Prover o contexto globalmente
      • Instanciar um useState em App.tsx
      • Prover o contexto usando o método Provider
  */
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientHome />}>
        <Route index element={<Catalog/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="product-details/:productId" element={<ProductDetails/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
      <Route path="/admin/" element={<Admin/>}>
        <Route index element={<AdminHome/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  </BrowserRouter>
  </ContextCartCount.Provider>
  );
}



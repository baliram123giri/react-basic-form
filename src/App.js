
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './routers/About';
import { Contact } from './routers/Contact';
import { Header } from './Header';
import React from 'react';
import { Tour } from './routers/Tour';
import { Features } from './routers/Features';
import { Pricing } from './routers/Pricing';
import { Login } from './routers/Login';
import TodoMain from './Todo/TodoMain';
import { Instagram } from './routers/Instagram';
import { Beta } from './routers/Beta';


function App() {
  const routesData = [{
    path: '/',
    element: <h3>Welcome Homepage</h3>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <h3>Page Not Found</h3>
  },
  {
    path: '/tour',
    element: <Tour />
  },
  {
    path: '/features',
    element: <Features />
  },
  {
    path: '/pricing',
    element: <Pricing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/todos',
    element: <TodoMain />
  },
  {
    path: '/instagram',
    element: <Instagram />
  },
  {
    path: '/beta/:city?/:name?',
    element: <Beta />
  },
  ]
  return <>
    <Header />
    <Routes>
      {routesData.map((ele) => <Route path={ele.path} element={ele.element} key={ele.path} />)}
    </Routes>
  </>
}

export default App;

import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home/Home';
import SavedPosts from "./components/Saved-posts/Saved_posts";
import RootLayout from "./components/Layouts/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path='/saved' element={<SavedPosts />} />
    </Route>
  )
)

function App() {
  return (  
    <RouterProvider router={router} />
  );
}

export default App;

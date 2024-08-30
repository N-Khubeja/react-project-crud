

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/route';

function App() {
  return <RouterProvider router={createBrowserRouter(routes)}/>;
}
  
export default App;

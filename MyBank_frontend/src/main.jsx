import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './stores/store.js'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    index: true,
  },
  {
    element: <ProtectedRoute />,
    // children: [
    //   {
    //     path: "/modules",
    //     element: <ModulesTemplate />
    //   }
    // ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)

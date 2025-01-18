import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import './app/layout/styles.css'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { store, StoreContext } from './app/stores/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router}/>
    </StoreContext.Provider>
  </StrictMode>,
)

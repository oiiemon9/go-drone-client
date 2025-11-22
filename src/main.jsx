import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router';
import { Router } from './Routes/Router.jsx';
import FirebaseContext from './Context/firebaseContext/FirebaseContext.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseContext>
        <RouterProvider router={Router}></RouterProvider>
      </FirebaseContext>
    </QueryClientProvider>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Slider from './components/Slider';
import ContactScreen from './components/Contact/contactScreen';
import ContactForm from './components/Contact/contactForm';
import Chart from './components/chart';
import Map from './components/map';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { store } from './store';
import { Provider } from "react-redux"
import Details from './components/Details';



const queryClient = new QueryClient();

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ContactScreen />
      },
      {
        path: "/chart",
        element: <Chart />
      },
      {
        path: "/map",
        element: <Map />
      },
      {
        path: "/contact-form",
        element: <ContactForm />
      }
    ]
  },
  {
    path: "/",
    element: <Slider />,
  },
  {
    path: "/details",
    element: <Details />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </QueryClientProvider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { StrictMode, lazy, Suspense, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";

// Secondary pages are split into their own chunks so the home page loads less JavaScript.
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const page = (el: ReactNode) => <Suspense fallback={<div className="min-h-screen bg-paper" />}>{el}</Suspense>;

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: page(<ContactPage />) },
      { path: "/privacy", element: page(<LegalPage kind="privacy" />) },
      { path: "/terms", element: page(<LegalPage kind="terms" />) },
      { path: "*", element: page(<NotFoundPage />) },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

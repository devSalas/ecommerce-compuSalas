import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

import "@fontsource/alata";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>

      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </HashRouter>

  </React.StrictMode>
);

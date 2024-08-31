import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, MantineProvider } from "@mantine/core";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />,
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);

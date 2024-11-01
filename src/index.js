import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import MarvelService from "./components/services/MarvelService";
import "./style/style.scss";

// const marvelService = new MarvelService();

// marvelService
//     .getAllCharacters()
//     .then((res) => res.data.results.forEach((item) => console.log(item.name)));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

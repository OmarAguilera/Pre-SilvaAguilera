import React from "react";
import ReactDOM from 'react-dom';
import { NavBar } from "./components/NavBar";
import { ItemListcontainer } from "./components/ItemListContainer";
import styles from "./styles.css"
const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
    <>
    <h1>SweetSite</h1>
    <NavBar/>
    <ItemListcontainer greeting="Empieza a comprar 😉"/>
    </>
)



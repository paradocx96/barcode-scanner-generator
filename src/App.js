import {Route, Routes} from "react-router-dom";
import './App.css';
import React from 'react';
import Home from './pages/Home'
import BarcodeGenerator from "./pages/BarcodeGenerator";
import BarcodeScanner from "./pages/BarcodeScanner";


export default function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/barcode_generator" element={<BarcodeGenerator/>}/>
                    <Route exact path="/barcode_scanner" element={<BarcodeScanner/>}/>
                    <Route path="*" element={<h1>Page Not Found</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductContextProvider from "./Context/ProductContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProductContextProvider>
            <App/>
        </ProductContextProvider>
    </StrictMode>
)

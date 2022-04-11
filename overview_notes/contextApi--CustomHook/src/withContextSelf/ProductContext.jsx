
import { createContext, useState } from "react";

const initialProducts = [
    {id : 0, product : "Basketball" , price : 12 },
    {id : 1, product : "Baseball" , price : 30 },
    {id : 2, product : "Tennis Racquet" , price : 50 }
]

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState(initialProducts);

    const increasePrice = (id) => {
        const newProducts = [...products];
        newProducts[id].price += 1;
        setProducts(newProducts);
    }

    const decreasePrice = (id) => {
        const newProducts = [...products];
        newProducts[id].price -= 1;
        setProducts(newProducts);

    }

    return <ProductContext.Provider value= {{products, increasePrice, decreasePrice}} >
        {props.children}
    </ProductContext.Provider>
}
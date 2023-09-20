import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [counter, setCounter] = useState(0);
    
    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);


    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart - Order 
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null);
    
    //Get products by Title
    const [searchByTitle, setSearchByTitle] = useState('');

    //Get products by Category
    const [searchByCategory, setSearchByCategory] = useState('');

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);

    // BEGIN SEARCH BY TITLE
    const filteredItemsByTitle = items?.filter(
        (item) => {
            const itemTitle = item.title.toLowerCase();
            const searchTitle = searchByTitle.toLowerCase();
            return itemTitle.includes(searchTitle);
        }
    );

    //BEGIN SEARCH BY CATEGORY:
    const filteredByCategory = items?.filter(
        (item) => {
            const itemCategory = item.category.name.toLowerCase();
            const searchCategory = searchByCategory?.toLowerCase();
            
            return itemCategory.includes(searchCategory);
        })

    // BEGIN SEARCH BY CATEGORY AND TITLE
    const filteredItemsByCategoryAndTitle = filteredByCategory?.filter(
        (item) => {
            const itemTitle = item.title.toLowerCase();
            const searchTitle = searchByTitle.toLowerCase();
            return itemTitle.includes(searchTitle);
        }
    )

    return (
        <ShoppingCartContext.Provider value={{
            counter,
            setCounter,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItemsByTitle,
            searchByCategory,
            setSearchByCategory,
            filteredByCategory,
            filteredItemsByCategoryAndTitle
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}
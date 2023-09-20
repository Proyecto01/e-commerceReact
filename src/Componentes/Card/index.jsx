import { CheckIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = (props) => {
    const context = useContext(ShoppingCartContext);
    const data = props.data;

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
        context.closeCheckoutSideMenu();
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.setCounter(context.counter + 1)
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart) {
            return(
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
                    onClick={(event) => {event.stopPropagation();}}>
                    <CheckIcon className="h-6 w-6 text-black-500" />
                </div>
            )
        } else {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
                    onClick={(event) => addProductsToCart(event, data)}>
                    <HandThumbUpIcon className="h-6 w-6 text-black-500" />
                </div>
            )
        }
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 roundd-lg"
            onClick={() => showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data?(data?.category.name):"Electronic"}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data?(data?.images[0]):"https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={data?(data?.title):"Headphones"} />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data?(data?.title):"Headphones"}</span>
                <span className="text-lg font-medium">${data ? (data?.price) : 688 }</span>
            </p>
        </div>
    )
}

export default Card;
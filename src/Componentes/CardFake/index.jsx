import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const CardFake = () => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }
    return (
        <div 
            className="bg-white cursor-pointer w-52 h-60 roundd-lg"
            onClick={() => showProduct({})}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">"Electronic"</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Headphones" />
                <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
                onClick={() => context.setCounter(context.counter + 1)}>
                    <HandThumbUpIcon className="h-4 w-4 fill-none stroke-black" />
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">"Headphones"</span>
                <span className="text-lg font-medium">$688</span>
            </p>
        </div>
    )
}

export default CardFake;
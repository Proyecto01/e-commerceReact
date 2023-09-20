import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Layout from "../../Componentes/Layout"
import OrderCard from '../../Componentes/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const subString = currentPath.lastIndexOf('/') + 1;
  let index = currentPath.substring(subString);
  if(index === 'last') index = context.order?.length -1;

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-6'>
        <Link to="/my-orders" className='absolute left-0'>
          <ChevronLeftIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>    
          {
              context.order?.[index]?.products.map(product => (
                  <OrderCard 
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imgUrl={product.images}
                      price={product.price}
                  />
              ))
          }
      </div>
    </Layout>
  )
}

export default MyOrder
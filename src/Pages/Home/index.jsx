import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Componentes/Layout"
import Card from "../../Componentes/Card"
import CardFake from '../../Componentes/CardFake'
import ProductDetail from '../../Componentes/ProductDetail'


function Home() {
  const context = useContext(ShoppingCartContext);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await fetch('https://api.escuelajs.co/api/v1/products');
  //     const data = await response.json();
      
  //     console.log("items");
  //     console.log(data.length);
  //     setItems(data);
  //   };
  // }, []);

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-6'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      
        <input 
          type="text" 
          placeholder='Search a product'
          className='rounded-lg border border-black p-4 mb-4 w-3/4 focus:outline-none'
          value={context.searchByTitle}
          onChange={(event) => context.setSearchByTitle(event.target.value) } />
      
      <div className='grid gap-1 grid-cols-4 w-full max-w-screen-lg'>
        { 
            (context.searchByTitle.length == 0 && context.searchByCategory.length == 0) &&
            context.items?.map(item => (
              <Card key={item.id} data={item} />
            ))
        }
        {
          (context.searchByTitle.length > 0 && context.searchByCategory.length == 0) &&
            context.filteredItemsByTitle?.map(item => (
              <Card key={item.id} data={item} />
            ))
        }
        {
          (context.searchByTitle.length == 0 && context.searchByCategory.length > 0) &&
            context.filteredByCategory?.map(item => (
              <Card key={item.id} data={item} />
            ))
        }
        {
          (context.searchByTitle.length > 0 && context.searchByCategory.length > 0) &&
            context.filteredItemsByCategoryAndTitle?.map(item => (
              <Card key={item.id} data={item} />
            ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
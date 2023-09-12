import { useState, useEffect } from 'react'
import Layout from "../../Componentes/Layout"
import Card from "../../Componentes/Card"
import CardFake from '../../Componentes/CardFake'
import ProductDetail from '../../Componentes/ProductDetail'

function Home() {
  const [items, setItems] = useState(null)

  // useEffect(() => {
  //   fetch('https://api.escuelajs.co/api/v1/products')
  //     .then(response => response.json())
  //     .then(data => setItems(data))
  // }, [])


  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      
      console.log("items");
      console.log(data.length);
      setItems(data);
    };
  }, []);

  return (
    <Layout>
      Home
      <div className='grid gap-1 grid-cols-4 w-full max-w-screen-lg'>
        { items &&
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
        { !items &&
          <>
          <CardFake key={1} />
          <CardFake key={2} />
          <CardFake key={3} />
          <CardFake key={4} />
          </>
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
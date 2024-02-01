'use client'
import { Product } from "../types/Product"
import { ProductItem } from "./components/ProductItem"

const getProducts = async()=>{
  const res = await fetch('https://fakestoreapi.com/products')

  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const page = async()=>{

  const products = await getProducts();

  
  return(
    <div className="container pt-8 px-8 mx-auto xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 xl:gap-6">
      {products.map((product:Product)=>(
        <div key={product.id}>
          <ProductItem product={product}/>
        </div>
      ))}
      </div>
    </div>
  )
}
export default page;
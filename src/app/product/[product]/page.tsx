
import React from 'react';
import { ProductDetails } from '@/components/ProductDetails';
import getProductData from '../../../../sanity/getproductdata'

// export async function generateStaticParams() {
//   const data = await getProductData();
//   return data.map((item: any) => ({
//     product: item._id,
//   }));
// }

export default async function page({ params }: { params: any}) {
    
    const data = await getProductData();
  const filteredData = data.find(
    (item: any) =>
      
            item._id == params.product
            
    );


  return (
    <ProductDetails filteredData={filteredData} />
    
  ); }
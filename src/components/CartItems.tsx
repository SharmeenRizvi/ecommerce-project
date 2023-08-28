// "use client"
// import { useAuth } from "@clerk/nextjs";
// import React, { useEffect, useState } from "react";

// export default function CartItems() {
//     const [products, setProducts] = useState<any>(null);
//     const { isSignedIn, userId } = useAuth();

//     useEffect(() => {
//       fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
//         .then((res) => res.json())
//         .then((data) => setProducts(data));
//     }, [isSignedIn]);

  
  
//   return (
//     <div>
//           <h1 className="text-2xl font-bold">Cart</h1>
//      {isSignedIn ?
//       <div className="flex gap-14">
//         {products.map((item: any, i: any) => (
//           <div key={i + 1}>
//             <h1>{item.product_title}</h1>
//             <h1>{item.product_price}</h1>
//             <h1>{item.product_quantity}</h1>
//             <img
//               src={item.image_url}
//               alt="pic"
//               className="w-40 h-40"
//               width={300}
//               height={300}
//             />
//           </div>
//         ))}
//           </div>
//               :
//               <div>
//                   <h1> Please LogIn fiirst </h1>
//               </div>
//               }

//     </div>
//   );
// }
"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

export default function CartItems() {
  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { isSignedIn, userId } = useAuth();
  //   console.log("user_id", uid);
  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn, state]);

  async function deleteProduct(product_title: any) {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_title: product_title,
      }),
    });
    setState(!state);
  }

  return (
    <div>
      <h1 className="text-2xl ml-4 font-bold">Cart</h1>
      {isSignedIn ? (
        <div className="grid gap-14">
          {products?.map((item: any, index: number) => (
            <div className="flex m-4" key={index}>
              <img
                src={item.image_url}
                alt=""
                className="w-56 h-56"
                width={250}
                height={250}
              />
              <div className="ml-10">
                <h1 className="text-xl font-bold">{item.product_title}</h1>
                <h1 className="text-lg mt-2 font-medium">${item.product_price}</h1>
                <div className="flex border w-fit mt-5">
                  {/* <button className={`px-3 py-1 text-center hover:bg-gray-200`}>
                    -
                  </button> */}
                  <div className="px-3 py-1 text-center">
                   Quantity: {item.product_quantity}
                  </div>
                  {/* <button className={`px-3 py-1 text-center hover:bg-gray-200`}>
                    +
                  </button> */}
                </div>
                <button
                  onClick={() => deleteProduct(item.product_title)}
                  className="bg-black text-white py-1 px-3 rounded-md mt-10"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Please Login First</h1>
        </div>
      )}
    </div>
  );
}

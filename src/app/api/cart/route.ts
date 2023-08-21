import { NextRequest, NextResponse } from "next/server";
import { cartColumns, db } from "../../../lib/drizzle";


export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
      .insert(cartColumns)
      .values({
        // id: req.id,
        user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
        image_url: req.image_url,
      })
      .returning();
    console.log("Data posted to database");
      return NextResponse.json({res});
    
  } catch (error) {
    console.log("Error while posting to Database")
    console.log("error", error);
    return NextResponse.json({message: "Something went wrong"})
  }
}


























// import { NextRequest, NextResponse } from "next/server"
// import { cart, db } from "@/lib/drizzle"
// import {v4 as uuid} from "uuid"
// import { cookies } from "next/dist/client/components/headers"

// export const GET = async (request: Request) => {



//     try {
//         const res = await db.select().from(cart);
//         return NextResponse.json({res})
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({message: "Something went wrong"})
        
//    }
// }


// export const POST = async (request: NextRequest) => {
//   const req = await request.json();

//     const uid = uuid();
//     const setCookies = cookies();

//     if (!cookies().has("user_id")) {
//         setCookies.set("user_id", uid)
//     }
  
//   try {
//       const res = await db.insert(cart).values({
//         product_id: req.product_id,
//         quantity: 1,
//         user_id: cookies().get("user_id")?.value as string
//       });
//     return NextResponse.json({ res });
//   } catch (error) {}
// };
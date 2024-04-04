import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import Products from "@/models/productModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){

    try {
        
        const product = await Products.find()
        
        return NextResponse.json({
            message: "product found",
            data: product
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}
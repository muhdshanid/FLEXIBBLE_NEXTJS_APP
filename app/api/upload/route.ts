import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

export const POST = async (req: Request) => {

    const {path} = await req.json()

    if(!path){
        return NextResponse.json({message: "Image path required"},{status: 400})
    }

    try {
        
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation: [{width: 1000, height: 720, crop: "scale"}]
        }

        const result = await cloudinary.uploader.upload(path, options)

        return NextResponse.json(result, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Uploading image failed"},{status: 500})

    }
}
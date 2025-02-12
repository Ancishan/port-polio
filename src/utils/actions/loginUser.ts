"use server"

import { FormValues } from "@/app/login/page";

export const userLogin = async(data : FormValues) =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`,{
        method: "POST",
        headers:{
            "Content-Type" : "Application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store"
    });

    const userInfo =await res.json()

    return userInfo
}
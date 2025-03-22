"use client";
import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
    const params = useParams();
    const productId = params.productId || []; 
	return (
        <div>{productId}</div>
    );
};

export default Page;

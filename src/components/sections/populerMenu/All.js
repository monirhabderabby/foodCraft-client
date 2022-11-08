import React from "react";
import { useGetProductsQuery } from "../../../Redux/features/products/productsApi";
import { SingleProduct } from "./SingleProduct";

export const All = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery();

    let content;

    if (isLoading) content = "Loading...";
    if (!isLoading && isError) content = "Error occured while loading";
    if (!isError && !isLoading && products?.length === 0) {
        content = <div>Product not found</div>;
    }
    if (!isError && !isLoading && products?.length > 0) {
        content = products.slice(0, 6).map(product => <SingleProduct key={product._id} product={product} />);
    }
    return <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-y-[20px]">{content}</div>;
};

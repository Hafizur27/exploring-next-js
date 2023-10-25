import { useRouter } from "next/router";
import React from "react";

const SingleProduct = () => {
  const router = useRouter();
  return (
    <div>
      <h1>SingleProduct: {router.query.product}</h1>
    </div>
  );
};

export default SingleProduct;

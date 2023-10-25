import { Button } from "antd";
import Link from "next/link";
import React from "react";
import RootLayout from "../../../components/RootLayout/RootLayout";

const ArticleHome = () => {
  return (
    <div>
      <h3>ArticleHome</h3>
      <Link href="/">
        <Button type="primary">Home</Button>
      </Link>
    </div>
  );
};

export default ArticleHome;

ArticleHome.getLayout = function getLayout(page){
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

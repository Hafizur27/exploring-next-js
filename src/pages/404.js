/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react'

const ErrorPage = () => {
    const router = useRouter();
    setTimeout(()=>{
        router.push("/")
    }, 5000);
  return (
    <div>
        <img src="https://www.impactplus.com/hs-fs/hubfs/404-error-page-examples-best.jpg?length=1200&name=404-error-page-examples-best.jpg" alt="" width="100%" />
    </div>
  )
}

export default ErrorPage;
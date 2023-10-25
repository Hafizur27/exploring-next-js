import React from 'react'
import RootLayout from '../../../components/RootLayout/RootLayout';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';

const Admin = () => {
  return (
    <div>
        <h1>Admin Page</h1>
    </div>
  )
}

export default Admin;

Admin.getLayout = function getLayout(page){
    return(
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}
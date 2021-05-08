import React, { useState } from "react";
import AdminResume from './AdminResume'
import AdminPortfolio from './AdminPortfolio'


function Admin() {
    return (
        <div>
            <AdminResume />
            <AdminPortfolio />
        </div>
    )
}

export default Admin
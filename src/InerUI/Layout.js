import React from 'react'
import Outlet from 'react-router-dom';
import Decor from './Decor/Decor';
import Gas from './Gas/Gas';
import Kitchen from './Kitchen/Kitchen';
import Refrigerator from './Refrigerator/Refrigerator';
const Layout = () => {
    return (
        <>
            <>
            <Decor />
            {/* <Outlet /> */}
            </>

            <>
                <Gas/>
                {/* <Outlet /> */}
            </>
            <>
                <Kitchen/>
                {/* <Outlet /> */}
            </>
            <>
                <Refrigerator/>
                {/* <Outlet /> */}
            </>
        </>

    )
}

export default Layout
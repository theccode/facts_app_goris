import React from 'react';
import Aux from '../../highcomponents/Auxilliary';

const Layout = (props:any) => {
    return (
        <Aux>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}
export default Layout;
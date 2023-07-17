
import React from "react";

import "./layout.scss";
import Header from "./header/index";

// interface LayoutInterface {
//     children?: React.ReactNode;
// }
const Layout: React.FC<any> = ({ children }) => {

    return (
        <main>
            {/* <Header /> */}
            <div className="content">
                {children}
            </div>
        </main>
    )
}

export default Layout;
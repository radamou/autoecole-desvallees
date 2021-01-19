import { styles } from "assets/react/components/style/pages/shop";

import React from "react";
import Sidebar from "assets/react/components/organisms/sidebar/sidebar";
import GlobalHeader from "assets/react/components/organisms/globalHeader";
import {user} from "assets/data/user";
import ShopList from "assets/react/components/organisms/shop/list";

export default function Shop() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <GlobalHeader user={user}/>
                <Sidebar/>
                <ShopList />
            </div>
        </div>
    )
}
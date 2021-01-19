import React from "react";
import Sidebar from "assets/react/components/organisms/sidebar/sidebar";
import GlobalHeader from "assets/react/components/organisms/globalHeader";
import { user } from 'assets/data/user'
import Calendar from "assets/react/components/organisms/planing/form";


export default function Planing() {
    return (
        <div>
            <GlobalHeader user={user}/>
            <Sidebar/>
            <Calendar />
        </div>
    )
}
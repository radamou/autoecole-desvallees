import React from "react";
import { useStyles } from "assets/react/components/style/organisms/planing/form";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export default function Calendar() {
    const style = useStyles();

    return (
        <div className={ style.root }>
            <h1><CalendarTodayIcon /> Nouvelle reservation</h1>
        </div>
    )
}
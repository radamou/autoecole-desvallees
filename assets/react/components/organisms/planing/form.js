import React from "react";
import { useStyles } from "assets/react/components/style/organisms/planing/form";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { withStyles } from "@material-ui/core/styles";
import {Schedular} from "assets/react/components/organisms/planing/schedular";

export default function Calendar() {
    const style = useStyles();

    const StyledCalendarTodayIcon = withStyles((theme) => ({
        root: {
            borderRadius: '50%',
            padding: '7px',
            color: '#d3215f',
            cursor: 'pointer'
        },
    }))(PermContactCalendarIcon);

    return (
        <div className={ style.root }>
            <h1 className={style.title}><StyledCalendarTodayIcon/> Nouvelle reservation</h1>
            <div className={style.calender}>
                <Schedular />
            </div>
        </div>
    )
}
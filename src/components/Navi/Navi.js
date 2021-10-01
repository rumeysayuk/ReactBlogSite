import React from 'react';
import {Search} from "@material-ui/icons";
import styles from "./styles";
import {InputBase} from "@material-ui/core";

const Navi = () => {
    const classes = styles();
    return (
            <div className={classes.header}>
            <h3>Logo</h3>
                <div className={classes.search}>
                    <Search/>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            input: classes.inputInput,
                        }}
                        style={{marginLeft: "6px", display: "flex", alignItems: "center"}}
                        inputProps={{'aria-label': 'search'}}
                    />
                </div>
        </div>
    )
}

export default Navi;

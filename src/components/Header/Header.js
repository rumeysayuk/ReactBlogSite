import React from 'react';
import {Search} from "@material-ui/icons";
import styles from "./styles";
import {InputBase} from "@material-ui/core";
import {Container} from "reactstrap";
import {postsFilterService} from "../../services/postsFilterService";

const Header = () => {
    const classes = styles();
    const handleFilterChange = (value) => {
        postsFilterService.sendFilterData(value)
    }
    return (
        <Container className={classes.header}>
           <h1 className="mt-3 ">MY SITE</h1>
            <div className={classes.search}>
                <Search/>
                <InputBase
                    placeholder="Search…"
                    classes={{input: classes.inputInput}}
                    onChange={({target : {value}}) => handleFilterChange(value)}
                    style={{marginLeft: "6px", display: "flex", alignItems: "center"}}
                    inputProps={{'aria-label': 'search'}}
                />
            </div>
        </Container>
    )
}


export default Header;

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
            <img src="https://picsum.photos/200/300?random=" className={classes.logo} style={{marginTop: 10}}
                 alt="logo"/>
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

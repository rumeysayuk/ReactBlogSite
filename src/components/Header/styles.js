import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    search: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        top: 0,
        left:0,
        border: "1px solid black",
        background: "#e7e5e8",
    },
}))
;


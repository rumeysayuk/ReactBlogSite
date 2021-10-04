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
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "rgba(149, 157, 165, 0.2) 15px 8px 24px;"
    },
    body: {
        background: "#2B2E37",
    },

    logo: {
        width: "120px",
        height: "80px",
        animation: "bounceIn 0.6s",
        transform: " rotate(0deg) scale(1) translateZ(20)",
        transition: "all 0.4s cubic-bezier(.8,1.8,.75,.75)",
        cursor: "pointer",
        "&:hover": {
            transform: " rotate(10deg) scale(1.5);",
        }
    },

}))
;


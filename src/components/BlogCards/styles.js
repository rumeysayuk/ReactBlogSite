import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    card: {
        marginBottom:40,
        animation: "bounceIn 0.6s",
        transform: " rotate(0deg) scale(1) translateZ(0)",
        transition: "all 0.4s cubic-bezier(.8,1.8,.75,.75)",
        cursor: "pointer",
        "&:hover": {
            transform: " rotate(-5deg) scale(1.1);",
        }
    },

    img: {
        borderRadius: "15px",
        padding: 10,
        objectFit: "cover",
        // filter: "grayscale(80%)",
        opacity:0.6,
        "&:hover": {
            opacity:1,
            transition:"all .3s ease-out",
        }
    },
    icons: {
        display: "flex",
        justifyContent: "space-between",
    },
    icon: {
   fontSize:"35px",
    },
    btn:{
        display: "inline-block",
        whiteSpace: "nowrap",
    }
}))


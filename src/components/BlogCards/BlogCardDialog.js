import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField} from "@material-ui/core";
import {Button} from "reactstrap";
import Draggable from "react-draggable";

function PaperComponent(props) {
    return (
        <Draggable>
            <Paper {...props} />
        </Draggable>
    );
}

const BlogCardDialog = ({open, handleClose, currentPost, valueChange, handleEdit}) => {
    return (
        <Dialog open={open} onClose={() => handleClose()} PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title">
            <DialogTitle id="draggable-dialog-title">Change Screen</DialogTitle>
            <DialogContent>
                <DialogContentText>Change my info...</DialogContentText>
                <TextField margin="dense" name="title" label="Title" type="text"
                           fullWidth value={currentPost.title}
                           onChange={(e) => valueChange(e)}/>
                <TextField margin="dense" name="body" label="Body" type="text"
                           fullWidth value={currentPost.body}
                           onChange={(e) => valueChange(e)}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()} color="primary">Close</Button>
                <Button onClick={() => handleEdit()} color="primary">Güncelle</Button>
            </DialogActions>
        </Dialog>
    )
}

export default BlogCardDialog;

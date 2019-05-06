import React from "react";
import Button from "@material-ui/core/Button";
import Register from "../Register";

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { title } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  return (
    <span>
      <Button mini color="secondary" size="small" onClick={handleClickOpen}>
        {title}
      </Button>
      <Register open={open} setOpen={setOpen} />
    </span>
  );
}

export default FormDialog;

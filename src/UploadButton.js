// import { CloudUpload } from "@material-ui/icons";

import { Button } from "@mui/material";

export default function UploadButton({
  id,
  onChange,
  title = "Upload",
  color = "primary",
  accept = ".xlsx",
  variant = "text",
  size = "small",
}) {
  return (
    <div>
      <input
        accept={accept}
        style={{ display: "none" }}
        id={id}
        type="file"
        onChange={onChange}
      />
      <label htmlFor={id}>
        <Button sx={{m: 5}} variant={variant} color={color} component="span" size={size}>
          {title}
        </Button>
      </label>
    </div>
  );
}

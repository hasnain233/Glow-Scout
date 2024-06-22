import { Button as MuiButton } from "@mui/material";

function Button({
  bg,
  fs,
  p,
  color,
  border,
  br,
  width,
  height,
  title,
  lineHeight,
  fontWeight,
  mt,
  ml,
  pt,
  ffamily
}) {
  return (
    <MuiButton
      sx={{
        background: bg,
        fontSize: fs,
        padding: p,
        color: color,
        border: border,
        borderRadius: br,
        width: width,
        height: height,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        marginTop: mt,
        paddingTop: pt,
        marginLeft: ml,
        fontFamily: ffamily
      }}
    >
      {title}
    </MuiButton>
  );
}

export default Button;
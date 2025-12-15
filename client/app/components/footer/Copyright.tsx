import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
        position: "fixed",
        bottom: 15,
        width: '100vw'
      }}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://averyf.dev">
        Some Blog Site
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router";
import SitemarkIcon from "../sitemark/SitemarkIcon";
import ColorModeIconDropdown from "../shared/ColorModeIconDropdown";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function BlogAppBar() {
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <SitemarkIcon />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                component={RouterLink}
                to="/"
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                Home
              </Button>{" "}
              <Button
                component={RouterLink}
                to="/about"
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                About
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              component={RouterLink}
              to="/sign-in"
              color="primary"
              variant="text"
              size="small"
            >
              Sign in
            </Button>
            <Button
              component={RouterLink}
              to="/sign-up"
              color="primary"
              variant="contained"
              size="small"
            >
              Sign up
            </Button>
            <ColorModeIconDropdown />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

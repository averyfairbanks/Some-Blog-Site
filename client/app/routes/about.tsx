import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as ReactRouterLink } from "react-router";
import BlogAppBar from "~/components/app-bar/BlogAppBar";
import Copyright from "~/components/footer/Copyright";

export function meta() {
  return [
    { title: "About" },
    {
      name: "description",
      content: "About the project",
    },
  ];
}

export default function About() {
  return (
    <>
      <BlogAppBar />
      <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI - React Router example in TypeScript
          </Typography>
          <Box sx={{ maxWidth: "sm", mb: 3 }}>
            <Button variant="contained" component={ReactRouterLink} to="/">
              Go to the home page
            </Button>
          </Box>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

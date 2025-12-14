import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as ReactRouterLink } from "react-router";
import Copyright from "~/components/footer/Copyright";
import BlogAppBar from "~/components/app-bar/BlogAppBar";

export function meta() {
  return [
    { title: "Some Blog Site" },
    {
      name: "Well I wasn't sure what to call it",
      content: "Well I wasn't sure what to call it",
    },
  ];
}

export default function Home() {
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
          <Link to="/about" color="secondary" component={ReactRouterLink}>
            Go to the about page
          </Link>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

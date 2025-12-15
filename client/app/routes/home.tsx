import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import BlogAppBar from "~/components/app-bar/BlogAppBar";
import Copyright from "~/components/footer/Copyright";

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
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
            A blog <i>specifically</i> for a lovely paranoid friend
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Described by said <s>paranoid</s> friend as: "Not googlable. No big
            tech company involved."
          </Typography>
          <Stack width="60vw" mt='15px' alignItems='center'>
            <Typography variant="h6">
              What does this mean?
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Well I'm not completely sure yet, but ideally we'll have password
              protected blogs that require only an email to access (and the
              password, obviously).
            </Typography>
          </Stack>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

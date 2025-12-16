import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SitemarkIcon from "~/components/sitemark/SitemarkIcon";
import ColorModeSelect from "../components/shared/ColorModeIconDropdown";
import {
  SignInContainer,
  StyledCard,
} from "~/components/sign-in/SharedComponents";
import { Link as RouterLink } from "react-router";
import { object, string } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormHelperText, Stack } from "@mui/material";

export function meta() {
  return [{ title: "Sign-up" }];
}

export default function SignUp() {
  const initialValues = { firstName: "", email: "" };
  const validationSchema = object().shape({
    firstName: string()
      .min(3, "Name needs to be at least 3 characters.")
      .required(
        "You gotta provide a name! You can make it up if you really want."
      ),
    email: string()
      .email()
      .required("Need this one too boss, can't make it up either."),
  });

  return (
    <>
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
      
      <SignInContainer direction="column" justifyContent="space-between">
        <StyledCard variant="outlined">
          <Stack direction="row" alignItems="center" gap={2}>
            <SitemarkIcon height={45}/>
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              Sign up
            </Typography>
          </Stack>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values));
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <FormControl>
                    <FormLabel htmlFor="name">Full name</FormLabel>
                    <Field type="text" name="firstName" as={TextField} />
                    <ErrorMessage name="firstName" component={FormHelperText} />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="name">Email</FormLabel>
                    <Field type="email" name="email" as={TextField} />
                    <ErrorMessage name="email" component={FormHelperText} />
                  </FormControl>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
      
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/sign-in"
                variant="body2"
                sx={{ alignSelf: "center" }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </StyledCard>
      </SignInContainer>
    </>
  );
}

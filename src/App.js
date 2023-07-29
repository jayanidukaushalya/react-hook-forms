import "./App.css";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Form from "./components/Form";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "5px",
        }}
      >
        <Form />
      </Box>
    </ThemeProvider>
  );
}

export default App;

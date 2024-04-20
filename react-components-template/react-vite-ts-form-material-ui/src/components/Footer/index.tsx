import { Container, Box } from "@mui/material"

const Footer = () => {
  return (
    <Container maxWidth="lg"  >
      <Box  my={4}>
        <Box textAlign="center">
          © {new Date().getFullYear()} Material UI - Kolkova Tatiana
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
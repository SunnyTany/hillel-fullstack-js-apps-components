import { Box, Button, Container, Grid, TextField } from "@mui/material"
import styles from './style.module.css'

const Form = () => {
  return (
    <Container maxWidth="sm">
      <form className={styles.form}>
        <Box sx={{ my: 2 }} >
          <TextField 
            className={styles.input}
            id="login"
            label="Login"
            type="text"
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ my: 2 }} >
          <TextField 
            className={styles.input}
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ my: 2 }} >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField 
                className={styles.input}
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                className={styles.input}
                id="password"
                label="Repeat password"
                type="password"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Button color="primary" size="large" variant="contained">Send</Button>
        </Box>
      </form>
    </Container>
  )
}

export default Form
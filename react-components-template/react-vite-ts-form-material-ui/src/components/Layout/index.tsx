import { Container, Box } from "@mui/material"
import Gallery from "../Gallery"
import AccordionUsage from "../AccordionUsage"
import Form from "../Form"
import BasicModal from "../BasicModal"
import Footer from "../Footer"

const Layout = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}
    >
      <Box sx={{display: 'flex', flex: '1 1 auto', overflow: 'hidden'}}>
        <Box sx={{flex: '0 1 auto'}}>
          <Gallery/>
        </Box>
        <Box sx={{flex: '1 1 auto'}}>
          <AccordionUsage/>
        </Box>
      </Box>
      <Box sx={{flex: '0 1 auto'}}>
        <BasicModal/>
      </Box>
      <Box sx={{flex: '0 0 auto'}}>
          <Form/>
        </Box>
      <Box sx={{flex: '0 1 auto'}}>
        <Footer/>
      </Box>
    </Container>
  )
}

export default Layout
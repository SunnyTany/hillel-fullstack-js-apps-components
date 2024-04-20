import { AppBar, IconButton, MenuItem, MenuList, Toolbar, Typography } from "@mui/material"
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SimpleMenu from '../SimpleMenu'
import styles from './style.module.css'

const NavBar = () => {
  return (
    <>
      <AppBar className={styles.myHeader} position="static">
        <Toolbar>
          <Typography className={styles.logo} variant="h5">My App MUI</Typography>
        </Toolbar>
        <MenuList className={styles.list}>
          <MenuItem>
            Contacts
            <IconButton>
              {/* <ExpandMoreIcon /> */}
              <SimpleMenu/>
            </IconButton>
          </MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Gallery</MenuItem>
          <MenuItem>
            Auth
          </MenuItem>
        </MenuList>
      </AppBar>
    </>
  )
}

export default NavBar
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function MobDrawer() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const totalQuantites = useSelector((state) => state.cart).totalQuantity;

  const AuthCartPath = `${isAuth ? "/cart" : "#"}`;
  const router = useRouter();
  const isActive = (href) => router.pathname === href;
  const handleAuth = () => {
    if (!isAuth) {
      // alert("Please Login to view cart");
      console.log("Please Login to view cart");
    }
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['', '', ''].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
                {index === 0 ? <Link
            href="/"
            className={`${styles.home} ${isActive("/") ? styles.active : ""}`}
          >
            Home
          </Link>: index === 1 ?
          <Link
            href="/contact"
            className={`${styles.contact} ${
              isActive("/contact") ? styles.active : ""
            }`}
          >
            Contact
          </Link>
          :
          <Link
            onClick={handleAuth}
            href={AuthCartPath}
            className={`${styles.cart} ${
              isActive("/cart") ? styles.active : ""
            }`}
            passHref
          >
            Cart
          </Link>}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><img src="/menu.svg"/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

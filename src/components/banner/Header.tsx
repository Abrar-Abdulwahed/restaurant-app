"use client";
import Link from "next/link"
import MenuIcon from '@mui/icons-material/Menu';
import { Container, AppBar, Drawer, Toolbar, Box, Typography, Menu, MenuItem, Tooltip, List, ListItem, IconButton, Button } from '@mui/material';
import React from "react";
import Logo from '@/components/svgs/Logo';
import Search, { SearchIconWrapper, StyledInputBase } from "@/components/Search"

// Import Icons
import ClearCartIcon from '@/components/svgs/ClearCartIcon';
import SearchIcon from '@/components/svgs/SearchIcon';
import CartIcon from '@/components/svgs/CartIcon';
import PersonIcon from '@/components/svgs/PersonIcon';
import WishlistIcon from '@/components/svgs/WishlistIcon';


const Header = () => {
  const [isCartOpen, setCartOpen] = React.useState(false);

  const toggleCartDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setCartOpen(open);
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const pages = [
    { name: "الرئيسية", href: "/" },
    { name: "المنتجات", href: "/products" },
    { name: "عننا", href: "/about" },
    { name: "الاتصال بنا", href: "/contact" },
  ];
  const settings = [
    { name: "البروفايل", href: "/" },
    { name: "الحساب", href: "#" },
    { name: "لوحة التحكم", href: "#" },
    { name: "تسجيل خروج", href: "#" }
  ];
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'background.default' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          justifyContent: 'space-between',
          paddingBlock: '20px'
        }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index}>
                  <Link href={page.href} onClick={handleCloseNavMenu}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo />
          <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: { md: 'center' } }}>
            <List sx={{ display: 'flex', flexDirection: 'row-reverse', padding: 0 }}>
              {pages.map((page, index) => (
                <ListItem key={index} sx={{
                  display: 'inline', padding: 0, marginRight: 2, whiteSpace: 'nowrap', '&:hover': {
                    backgroundColor: 'primary.light',
                  }
                }}>
                  <Link
                    href={page.href}
                  >
                    {page.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box display="flex" flexGrow="0" columnGap="8px">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon />
              </IconButton>
            </Tooltip>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <WishlistIcon />
            </IconButton>
            <IconButton onClick={toggleCartDrawer(true)}>
              <CartIcon />
            </IconButton>
            <Menu
              disableScrollLock={true}
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Link href={setting.href}>{setting.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={toggleCartDrawer(false)}
      >
        <Box
          sx={{ width: 400 }}
          role="presentation"
          onClick={toggleCartDrawer(false)}
          onKeyDown={toggleCartDrawer(false)}
        >
          <Box>
            <Typography variant="h5" fontWeight="bold" sx={{ padding: 2 }}>Shopping Cart</Typography>
            <ClearCartIcon />
          </Box>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            {/* Add your cart items here */}
          </List>
          <Box sx={{ padding: 2 }}>
            <Typography variant="subtitle1">Subtotal: $123.00</Typography>
            <Button variant="contained" sx={{ marginTop: 2 }}>Checkout</Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header
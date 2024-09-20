"use client";

import Link from "next/link"
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PersonIcon from '@mui/icons-material/Person';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, Toolbar, Box, Menu, MenuItem, Tooltip, List, ListItem, Typography, IconButton, Button } from '@mui/material';
import React from "react";
import Search, { SearchIconWrapper, StyledInputBase } from "@/components/Search"
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const pages = [
    { name: "الرئيسية", href: "/" },
    { name: "الخدمات", href: "/services" },
    { name: "الأسعار", href: "/prices" }
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
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RestaurantMenuIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={page.href} sx={{ textAlign: 'center' }}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <RestaurantMenuIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box component="nav" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
              {pages.map((page, index) => (
                <ListItem key={index} sx={{ display: 'inline', padding: 0, marginRight: 2 }}>
                  <Link
                    href={page.href}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'primary.light',
                      },
                    }}
                  >
                    {page.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="ابحث عن طلبك"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon />
              </IconButton>
            </Tooltip>
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
                  <Link href={setting.href} sx={{ textAlign: 'center' }}>{setting.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header
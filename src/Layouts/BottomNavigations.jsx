import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function BottomNavigations({children}) {

  const Location = useLocation();
  const [value, setValue] = useState(Location.pathname);

  return (
    <Box sx={{ p: 7, pb: 10 }}>
      <CssBaseline />
      <main className="w-full h-full p-5">
      {children}
    </main>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

        <BottomNavigation  
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
        >
          <BottomNavigationAction
          label="About"
          icon={<PersonIcon />}
          value={"/"}
          component={Link}
          to="/"
          />

          <BottomNavigationAction
          label="Projects"
          icon={<ArticleIcon />}
          value="/about"
          component={Link}
          to="/about"
          />

          <BottomNavigationAction
          label="Contacts"
          icon={<ContactMailIcon />}
          value="/contacts"
          component={Link}
          to="/contacts"
          />

        </BottomNavigation>
      </Paper>
    </Box>
  );
}


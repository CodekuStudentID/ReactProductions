import * as React from 'react';
import BottomNavigations from '../Layouts/BottomNavigations';
import { Link } from 'react-router-dom';

export default function Apps() {
  return ( 
    <BottomNavigations>
      <div>Page Default</div>
      <Link to="/about">
        About Page
      </Link>
    </BottomNavigations>
  )
}

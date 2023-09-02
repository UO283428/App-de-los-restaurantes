import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import './styles/MainLayout.css';

// MainLayout component
// The main layout is the main container of the webApp. It contains the header and any other page that is created with.
// It also contains the state for the header, which is passed to the header component as props. So any page that is used with
// the main layout is required to control de header state with the setHeaderExtended and setHeaderAnimated functions.
const MainLayout = () => {
  const [user, setUser] = React.useState({});
  //const [isHeaderAnimated, setHeaderAnimated] = useState(false);
  //const [isHeaderExtended, setHeaderExtended] = useState(true);
  
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
}

// We ensure that the children of the main layout are a react element
MainLayout.propTypes = {
  //component: PropTypes.element.isRequired,
};

export default MainLayout;
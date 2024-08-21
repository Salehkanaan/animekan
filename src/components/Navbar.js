import Sidebar from './sidebar/Sidebar';
import ListIcon from '@mui/icons-material/List';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Sidebar statu={props.sideStatu} toggle={props.sidetog} />
      </div>
      <div onClick={props.list}>
        {props.listStatu ? <ViewModuleIcon className="mobile-menu-icon"
          onClick={props.toggle} /> :
          <ListIcon className="mobile-menu-icon"
            onClick={props.toggle} />}
      </div>
    </nav>
  );
};

export default Navbar;

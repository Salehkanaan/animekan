import MenuIcon from '@mui/icons-material/Menu';
import WeatherBarContent from './WeatherBarContent';
const Weathbar = (props) => {
    return ( <div
        className={`weatherbar${props.statu ? 'open' : ''}`}>
  {props.statu ? "" : <MenuIcon className="toggle-button" onClick={props.toggle} />}
        <div className="content">
         <WeatherBarContent/></div>    
     </div>
       
  );
}
 
export default Weathbar;
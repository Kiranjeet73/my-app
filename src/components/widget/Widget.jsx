import "./widget.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



const Widget = ({type}) => {
let data;
// temporary
const amount = 100;
const diff =20;


      switch(type){

        case"user":
        data = {
          title:"USERS",
          isMoney: false,
          link:"see all users",
          icon: (<PeopleIcon className="icon" style={{color:"crimson",backgroundColor:"rgb(255,0,0,0.2)"}}/>
        ),};
        break;
       
        case"order":
        data = {
          title:"ORDERS",
          isMoney: false,
          link:"view all orders",
          icon: <ShoppingCartIcon className="icon" style={{color:"goldenrod",backgroundColor:"rgb(218,165,32,0.2)"}}/>,
        };
        break;

        case"earning":
        data = {
          title:"EARNINGS",
          isMoney: true,
          link:"view net earnings",
          icon: <MonetizationOnIcon className="icon" style={{color:"green",backgroundColor:"rgb(0,128,0,0.2)"}}/>,
        };
        break;

        case"balance":
        data = {
          title:"BALANCE",
          isMoney: true,
          link:"see Details",
          icon: <AccountBalanceIcon className="icon" style={{color:"purple",backgroundColor:"rgb(128,0,128,0.2)"}}/>,
        };
        break;
        default:
      break;
      }





  return (
    <div className="widget">
<div className="left">
<span className="title">{data.title}</span>
<span className="counter">{data.isMoney && "$"}{amount}</span>
<span className="link">{data.link}</span>
    
</div>
<div className="right">
  <div className="percentage negative">
<ArrowUpwardIcon/>{diff}%
</div>
{data.icon}
    </div>
    </div>
  )
}

export default Widget
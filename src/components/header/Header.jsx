import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball, faBowlingBall, faClock, faFutbol, faPerson, faTableTennis, faVolleyball } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { DateRange } from 'react-date-range';
import {useState} from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"

const Header = () => {
    const [opendDate, setOpenDate] = useState (false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState (false);
      const [options,setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
      })
    return ( 
        <div className="header">
            <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faFutbol} />
                <span>Futsal</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faVolleyball} />
                <span>Bola Voli</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTableTennis} />
                <span>Tenis</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBasketball} />
                <span>Basket</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBowlingBall} />
                <span>Bowling</span>
                </div>
            </div>
            <h1 className="headerTitle">Booking Lapangan Olahrga Terbaik</h1>
            <p className="headerDesc">
                Pilihan semua tempat Olahraga banyak pilihan dan banyak yang tersedia 
                silahkan booking sekarang
            </p>
            <button className="headerBtn">Riwayat Booking</button>
            
            </div>
            </div>
     )
}
 
export default Header;

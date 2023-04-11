import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = [
            '여성', 
            'Devided', 
            '남성', 
            '신생아/유아', 
            '아동', 
            'H&M Home', 
            'Sale', 
            '지속가능성', 
        ] ;
    const search=(event)=>{
        if ( event.key == "Enter"){
            // console.log("We client key", event.key) ;
            // 입력한 검색어를 읽어와서  URL을 
            let keyword = event.target.value ;
            console.log("keyworkd....", keyword) ;
            navigate(`/?q=${keyword}`) ;
        }
    }
    const navigate = useNavigate() ;
    const goToLogin=()=>{
        navigate("/login") ;

    }
  return (
    <div>
        <div>
            <div className="login-button" onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <div>로그인</div>
            </div>
        </div>
        <div className="nav-section">
            <img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Emblem.jpg" />
        </div>
        <div className="menu-area">
             <ul className="menu-list">
                    { menuList.map((menu) => ( 
                        <li>{menu}</li>
                    ))}
             </ul>
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(event)=>search(event)}/>
            </div>
        </div>
      
    </div>
  );
}

export default Navbar;

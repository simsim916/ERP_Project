import { useRef, useState } from 'react';
import './Header.css'

const Header = () => {

    const mainMenu = ['회계', '인사', '물류', '시스템'];
    const subMenu = {
        '회계': ['회계1', '회계2', '회계3'],
        '인사': ['인사1', '인사2', '인사3'],
        '물류': ['물류1', '물류2', '물류3'],
        '시스템': ['시스템1', '시스템2', '시스템3']
    };
    const [Header_Contents_Select_Value, set_Header_Contents_Select_Value] = useState('회계');

    return (
        <div id="Header">
            <div id='Header_Contents'>
                <select id='Header_Contents_Select' onChange={e => set_Header_Contents_Select_Value(e.target.value)}>
                    {mainMenu.map((e, i) => <option key={i} value={e}>{e}</option>)}
                </select>
                <ul id='Header_Contents_Ul'>
                    {subMenu[Header_Contents_Select_Value].map((e, i) => <li key={i}>{e}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Header;
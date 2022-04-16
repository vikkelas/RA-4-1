import React, {useState} from 'react';
import './Container.css'

const Container = () => {
    const [color, setColor] = useState({
        colorHex:'#FFF',
        colorRgb: '',
        styleColor: '#FFF'
    });

    const divStyle = {
        backgroundColor: color.styleColor,
    }

    const handleChangeColor = (evt)=>{
        const regColor = /^#([A-Fa-f0-9]{6})$/gm.test(evt.target.value);
        const converter = (col)=>{
            const rgbArr = [];
            const arrHex = col.slice(1).match(/.{1,2}/g);
            arrHex.forEach(item=>rgbArr.push(parseInt(item,16)));
            return rgbArr.toString();
        }
        setColor(() => ({
            colorHex: evt.target.value,
            styleColor: (evt.target.value.length===7 && regColor && evt.target.value)||
            (evt.target.value.length===7 && !regColor && '#FA5958')||
            ((evt.target.value.length!==7||regColor)&&'#ffffff'),
            colorRgb: (evt.target.value.length===7 && regColor && `rgb(${converter(evt.target.value)})`)||
                (evt.target.value.length===7 && !regColor && 'ошибка')||
                ((evt.target.value.length!==7||regColor)&&'')
        }))
    };



    return (
        <div className='container' style={divStyle}>
            <input className='color' maxLength= '7' name='color-hex' type="text" value={color.colorHex} onChange={handleChangeColor}/>
            <input className='color' disabled name='color-rgb' value={color.colorRgb} type="text"/>
        </div>
    );
};

export default Container;
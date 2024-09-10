import React from "react";
import "./../Styles/SCSS/_Menu.scss"

function Menu() {

    return (
        <div className="menu">
            <div className="menu__writing">Меню</div>
            <div className="menu__food">
                <div className="menu__food--maffins">
                    Маффины
                    <div className="maffin__publika-gaultier">
                        <div className="food__inner">
                            <div className="food__inner--name">«ПУБЛИКА ГОЛЬТЬЕ» <img src="~/../../public/icons/publika.png" alt="" width={30} height={30}/></div>
                            <div className="food__inner--ingredients"></div>
                        </div>
                        <div className="food__price">666</div>
                        <div className="food__photo"></div>
                    </div>
                    <div className="maffin__cream-soda"></div>
                    <div className="maffin__stvol"></div>
                    <div className="maffin__easy-fresh"></div>
                    <div className="maffin__kultura"></div>
                </div>
                <div className="menu__food--fries">
                    <div className="fries__batat"></div>
                    <div className="fries__olive"></div>
                </div>
                <div className="menu__food--soup">
                    <div className="soup__hangover"></div>
                </div>
                <div className="menu__food--breakfast">
                    <div className="breakfast__meal"></div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Menu
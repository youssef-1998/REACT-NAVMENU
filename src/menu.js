import React from 'react'

const Menu = (props) => {
    return (
        <ul className="lien-nav">
            {props.tab.map(el => <li className="list-item"><a href={el.link}>{el.text}</a>
                {el.subMenu ? <ul className="list-subMenu">{el.subMenu.map(el => <li className="sub-menu-item">{el}</li>)}</ul> : null}
            </li>)}
        </ul>

    )
}
export default Menu
import React from 'react'

const Menu = (props) => {
    return (
        <ul className="lien-nav">
            {props.tab.map(el => <li><a href={el.link}>{el.text}</a>
                {el.subMenu ? <ul>{el.subMenu.map(el => <li>{el}</li>)}</ul> : null}
            </li>)}
        </ul>

    )
}
export default Menu
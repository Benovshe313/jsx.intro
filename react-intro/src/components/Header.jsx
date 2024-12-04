import styled from "styled-components";

function Header() {
    return (
        <Menu>
            <p className="first">Интерьер.</p>
            <div className="right">
                <p className="second">Каталог</p>
                <p className="third">Корзина</p>
            </div>
        </Menu>
    );
}

export default Header


const Menu = styled.menu`
    width: 1210px;
    height: 76px;
    margin-left: 33px;
    margin-right: 0px;
    display: flex; 
    align-items: center;
    justify-content: space-between; 
    background: #CCCCCC;
    padding: 0;

    .first {
        color: #FFFFFF;
        width: 198px;
        font-family: Montserrat;
        font-size: 36px;
        font-weight: 600;
        line-height: 43.88px;
        text-align: left;
        margin: 0;
    }

    .right {
        display: flex; 
        align-items: center; 
        gap: 10px; 
    }

    .second {
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        margin: 0;
    }

    .third {
        width: 72px;
        height: 20px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        text-align: right;
        border: 1px solid #000000;
        padding: 4px; 
    }
`;

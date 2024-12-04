import styled from "styled-components"

function ProductItem(prod){
    return(
        <ProductsLi>
            <ProductImage src={prod.ProductImage} alt={prod.ProductName}/>
            <ProductName>{prod.ProductName}</ProductName>
            <ProductDesc>{prod.ProductDesc}</ProductDesc>
            <ProductPrice>{prod.ProductPrice}</ProductPrice>
        </ProductsLi>
    )
}

export default ProductItem

const ProductImage = styled.img`
    width: 100%;
    height: auto;
`;
const ProductsLi = styled.li`
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:15px;
`;

const ProductName = styled.p`
    width: 219px;
    height: 31px;
    top: 260px;
    gap: 0px;
    opacity: 0px;
    margin-bottom: 5px; 
    margin-top:0px;
    
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 520;
    line-height: 29.26px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

const ProductDesc = styled.p`
    
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #888888;
    margin-top: 0;
`;

const ProductPrice = styled.span`
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 520;
    line-height: 29.26px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;
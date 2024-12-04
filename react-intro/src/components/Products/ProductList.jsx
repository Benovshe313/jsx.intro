import { products } from "../../assets/data";
import ProductItem from "./ProductItem"
import styled from "styled-components";

function ProductList(){
    return(
        <ProductsSection>
            <Products>
                {/* <ProductItem ProductImage = "/Rectangle 22(1).png" ProductName = "Кровать TATRAN" ProductDesc = "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект."          ProductPrice = "120 000 руб."></ProductItem>
                <ProductItem ProductImage = "/Rectangle 23.png" ProductName = "Кресло VILORA"  ProductDesc = "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань." ProductPrice = "21 000 руб."></ProductItem>
                <ProductItem ProductImage = "/Rectangle 24@2x.png" ProductName = "Стол MENU"      ProductDesc = "Европейский дуб - отличается особой прочностью и стабильностью."                            ProductPrice = "34 000 руб."></ProductItem>
                <ProductItem ProductImage = "/Rectangle 22.png" ProductName = "Диван ASKESTA"  ProductDesc = "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать."      ProductPrice = "68 000 руб."></ProductItem>
                <ProductItem ProductImage = "/Rectangle 23 (1).png" ProductName = "Кресло LUNAR"   ProductDesc = "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки."                     ProductPrice = "40 000 руб."></ProductItem>
                <ProductItem ProductImage = "/Rectangle 24.png" ProductName = "Шкаф Nastan"    ProductDesc = "Мебель может быть оснащена разнообразными системами подсветки."                             ProductPrice = "80 000 руб."></ProductItem> */}
                {products.map((item)=>
                <ProductItem
                ProductImage = {item.ProductImage}
                ProductName = {item.ProductName}
                ProductDesc = {item.ProductDesc}
                ProductPrice = {item.ProductPrice} />)}
            </Products>
        </ProductsSection>
    )
}
export default ProductList

const ProductsSection = styled.section`
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const Products = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0;
    margin: 0;
`;
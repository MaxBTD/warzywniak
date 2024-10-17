import "./App.css";
import TowarCell from './towarCell';
import gr from './img/gruszka.jpg';
import kpr from './img/koper.jpg';
import mrchw from './img/marchew.jpg';
import mrl from './img/morela.jpg';
import owl from './img/owoce.jpg';
import ppj from './img/papaja.jpg';
import ppr from './img/papryka.jpg';
import zmnk from './img/ziemniak.jpg';

const products = [{nr: 1,name: "Gruszka",desc: "PYSZNE GRUSZKI",instock: 13,price: 3.50, img: gr},
                  {nr: 2,name: "Koper",desc: "PYSZNY KOPEREK",instock: 25,price: 2.00, img: kpr},
                  {nr: 3,name: "Marchew",desc: "PYSZNA MARCHEW",instock: 392,price: 3.00, img: mrchw},
                  {nr: 4,name: "Morela",desc: "PYSZNE MORELE",instock: 31,price: 2.50, img: mrl},
                  {nr: 5,name: "Owoce Leśne",desc: "PYSZNE OWOCE LEŚNE",instock: 6,price: 4.00, img: owl},
                  {nr: 6,name: "Papaja",desc: "PYSZNA PAPAJA",instock: 11,price: 5.00, img: ppj},
                  {nr: 7,name: "Papryka",desc: "PYSZNA PAPRYKA",instock: 21,price: 2.50, img: ppr},
                  {nr: 8,name: "Ziemniak",desc: "PYSZNY ZIEMNIOK",instock: 19,price: 1.50, img: zmnk}
];


function ProductsList(){
    return(
    <div className='productsList'>
        {products.map((p) => <TowarCell key={p.nr} products={p}/>)}
    </div>);
}

export default ProductsList;
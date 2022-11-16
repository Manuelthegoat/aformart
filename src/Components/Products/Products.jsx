import React from 'react'
// import Cart from './Cart/Cart'
import './Products.css'
import { GalleryData } from './GalleryData'
import { useEffect, useState } from 'react'
import Plus from "../../img/plus.png"
import minus from "../../img/minus.png"
import cartimg from "../../img/cart.png"
import cancel from "../../img/cancel.png"
import productdecore from "../../img/productdecore.png"
import swal from 'sweetalert'
const Products = ({handleClick}) => {

   const [data, setData] = useState([]);
   const [collection, setCollection] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [ popup, setPopup ] = useState(false);

   useEffect(()=>{
     setData(GalleryData);
     setCollection([...new Set(GalleryData.map((item)=> item.title))])
   },[])

   const galleryfilter = (itemData) =>{
      const filterData = GalleryData.filter((item)=> item.title === itemData);
      setData(filterData);  
   };
   const handleClickOpen=(product)=>{
      setPopup(!popup);
      const ProductExist = cartItems.find((pop) => pop.id === product.id);
         if(ProductExist){
             setCartItems(cartItems.map((pop) => pop.id === product.id ?
             {...ProductExist, quantity: ProductExist.quantity + 1}: pop)
          );
         } else{
            setCartItems([...cartItems, {...product, quantity: 1}]);
         }
   }
   const plus =(product)=>{
    const ProductExist = cartItems.find((pop) => pop.id === product.id);
         if(ProductExist){
             setCartItems(cartItems.map((pop) => pop.id === product.id ?
             {...ProductExist, quantity: ProductExist.quantity + 1}: pop)
          );
         } else{
            setCartItems([...cartItems, {...product, quantity: 1}]);
         }
   }
   const closePopup=(product)=>{
         setPopup(false);
         const ProductExist = cartItems.find((pop) => pop.id === product.id);
        if(ProductExist.quantity === 1){
            setCartItems(cartItems.filter((pop) => pop.id !== product.id));
        }else{
           setCartItems(
              cartItems.map((pop) => pop.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - ProductExist.quantity} : pop)
            )
        }
    }

  return (
    <div className='products' id='products'>
        <div className="productstitle">
            <p className="prodhead">Available products</p>
            <p className="prodtext">This is a type of resturent which typically serves food and drink, in addition to<br/> light refreshments such as baked goods or snacks. The term comes from the <br/>French word meaning food</p>
        </div>
        <div className="gallerywrapper">
            <div className="filteritem">
                <ul>
                    <li><button onClick={() => setData(GalleryData)} className="allbtn" >Randoms</button></li>
                    {
                        collection.map((item) => <li><button onClick={()=>{galleryfilter(item)}}>{item}</button></li>)
                    }
                </ul>
            </div>
            <div className="gallerycontainer">
                {
                    data.map((item)=> <div className='galleryitem'>
                        <img src={item.image} key={item.id} alt=""/>
                        <p className="prodname">{item.title}</p>
                        <img src={item.rating} className="prodrating" alt=""/>
                        <p className="proddtext">{item.text}</p>
                        <div className="prodbtndiv">
                        <button className="prodbtn" onClick={() => handleClickOpen(item)}>View</button> 
                        </div>
                        </div>)
                }
              </div>
            {popup?
            <div className="popupdiv">
            <div className="popup">
                    {cartItems.map((pop) => (
                        <>
                        <div className="popleft">
                        <div key={pop.id}>
                        <img src={pop.cartimg} className="popimg"alt="" />
                        </div>
                        </div>
                        <div className="popright">
                            <img onClick={() => closePopup(pop)} src={cancel} className="closepop" alt=""/>
                            <div className="poping">
                        <p className="popname">{pop.title}</p>
                       <p className="popprice">${pop.price} </p>
                       <img src={productdecore} alt="" />
                       <p className="poptext">Stock fish is an unsalted fish that is dried in the sun and wind<br/> on special wooden racks (sticks). Stock fish is a dried cod<br/> product dried by cold air on the foreshore. Stock fish has<br/> become an important component/ingredient in Nigerian <br/>meals. Stock fish can be mild and with a firm texture that<br/> holds even after soaking in water for some time. </p> 
                     <div className="increase">
                        <p>Quantity</p>
                        <div className="add">
                        <img src={minus} onClick={() => closePopup(pop)} alt="" />
                        <p>{pop.quantity}</p>
                        <img src={Plus} alt="" onClick={() => plus(pop)}/>
                    </div>
                    <button className="addcart" onClick={() => handleClick(pop)}>Proceed <img src={cartimg} alt="" /></button>
                        
                     </div>
                            </div>
                        </div>
                   </>
                    ))}

                
            </div>
            </div>:""}
        </div>
    </div>
  )
}

export default Products

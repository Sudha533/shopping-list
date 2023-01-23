import React, { useState } from 'react';
import './App.css';
import {FaPlus, FaSquare, FaCheckSquare, FaCommentsDollar} from 'react-icons/fa';


function App() {
  const [items, setItems] = useState([
    {itemName :"Item1", quantity :1, isSelected : false},
    {itemName :"Item2", quantity :5, isSelected : true},
    {itemName :"Item3", quantity :2, isSelected : false}
  ]);

  const [inputValue, setInputValue] = useState("");
  const [totalItemCount,setTotalItemCount] = useState(0);
  const handleAddButtonClick = () =>{
    const newItem = {
      itemName:inputValue,
      quantity:1,
      isSelected:false,
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue("");
  }
  const handleDecreaseButtonClick = (index) =>{
    const newItems = [...items];
    if(newItems[index].quantity>0){
      newItems[index].quantity--;
    }
    setItems(newItems);
    calculateTotal();
    
  }
  const handleIncreaseButtonClick = (index)=>{
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    calculateTotal();
  }
  const handleToddleComplete = (index) =>{
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);

  }
  const calculateTotal = () =>{
    const totalItemCounts = items.reduce((total,item)=>{
      return total+item.quantity;
    },0);
   setTotalItemCount(totalItemCounts);
  }
  return (
    <main className="App">
      <div className='container'>
          <div className='add-item-box'>
            <input className='add-item-input' 
            value = {inputValue}
            onChange={(event)=>setInputValue(event.target.value)}
            placeholder = "Add an item"
            type="text"/>
            <FaPlus className='plus-icon' onClick={()=>handleAddButtonClick()}/>

          </div>
          <div className='item-list'>
            {items.map((items, index)=>
               <div className='item-container' key={index}>
               <div className='item-name'>
                {items.isSelected?(
                  <>
                  <FaCheckSquare className='icon-square-check' onClick={()=>handleToddleComplete(index)}/>
                  <span>{items.itemName}</span>
                  </>
                ):(
                  <>
                  <FaSquare className='icon-square' onClick={()=>handleToddleComplete(index)}/>
                  <span>{items.itemName}</span>
                  </>
                )}
                
               </div>
               
               <div className='quantity'>
               <button className="decrease-button" onClick={()=>handleDecreaseButtonClick(index)}>-</button>
                {items.quantity}
                <button className='increase-button' onClick={()=>handleIncreaseButtonClick(index)}>+</button>
                </div>
               
             </div>

            )}
         
            
            <div className="total">Total {totalItemCount}</div>
          </div>
         

      </div>
      
    </main>
  );
}

export default App;

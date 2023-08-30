import '../App.css';

const ItemList =(p)=>{
    const CreateItem=(e,index)=>{
  
        return(
              <div key ={index}className="item__container">
                <p>{e}</p>
               
                <a onClick={()=>RemoveItem(index)}>X</a>
               </div>
              
        )
      
    }
    const RemoveItem=(i)=>{
        //  setItemList([]);
         console.log(i);
         p.setItemList(p.itemList.filter((e,index)=>index != i))
      }

    return(            
        <div className="item__list--container">
            {
              p.itemList.map((e,index)=>CreateItem(e,index))
            }
        </div>
    );
}

export default ItemList;
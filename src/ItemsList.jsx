import { useState,useEffect,useRef } from 'react';
function Items({name,isPacked=false}){
    return(<li>
        {name} {isPacked && '✔'}
    </li>);
}
export default function ItemsList(){
    const [value,setValue] = useState("");
    useEffect(()=>{
        console.log("this component is load!");
        return()=>{
            alert("component is unloaded!");
        }
    })
    const items=[{name :"Sunglass",isPacked:false},
        {name :"Swimming suit",isPacked:true},
        {name: "Lotion",isPacked:false},
        {name :"Towel",isPacked:true},
        {name:"Power bank",isPacked:true}];
        const filterList=items.filter(i=>i.name.toLowerCase().includes(value.toLowerCase()))
    const itemsList=filterList.map(i=><Items key={i.name} 
        name ={i.name} 
        isPacked={i.isPacked}/>);
    return(
    <>
        <input type="text" value={value} onChange={e=>setValue(e.target.value.toLowerCase())}/>
        <ui>
            {itemsList}
        </ui>
    </>)
}
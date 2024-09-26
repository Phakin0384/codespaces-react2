import { useRef,useState } from "react";
const BmiText=({bmi})=>{
    if(bmi<18.5 && bmi!=0){
        return(<h1>UnderWeight</h1>);
    }
    if(bmi>30){
        return(<h1>Overweigth</h1>);
    }
    if(bmi!=0) 

    return(<h1>Normal</h1>);
}
export default function Bmi(){
    const W_inputRef = useRef(null);
    const H_inputRef = useRef(null);
    const [Bmi,setBmi] = useState(0); 
    const calBmi=()=>{
        let w = W_inputRef.current.value;
        let h = H_inputRef.current.value/100;
        setBmi(w/h/h); 
    }
    return (
    <>
    <h3>BMI Calculator</h3>
    Weight:<input 
        type = "number"
        ref = {W_inputRef} /> kg <br/>
    Height:<input 
        type = "number" 
        ref = {H_inputRef} /> cm <br/>
    <button onClick={()=>calBmi()}>Calculate!</button><br/>
    Bmi value: {Bmi.toFixed(2)}
        <BmiText bmi={Bmi}/>
    </>
    );
}
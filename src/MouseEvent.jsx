export default function MouseEvent(){
    return(<h1 onMouseEnter={e=>alert("MouseEnter")}
    onMouseDown={e=>alert("Down")}>
            Click here
            </h1>)
}
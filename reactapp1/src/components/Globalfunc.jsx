function Globalfunc1(){
    alert("hello")
}
export default function Globalfunc(){
    return(
        <>
        <button onClick={Globalfunc1}>submit</button></>
    )
}
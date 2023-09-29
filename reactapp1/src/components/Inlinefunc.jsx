export default function Inlinefunc(){
    return(
        <div>
            <button onClick={function inline(){
                alert("it is a inline function")
            }}>Inlinefunc</button>
            <button className="btn btn-primary" onClick={()=>{
                alert("inline arroe function")
            }}>Inlinearrow</button>
        </div>
    )
}
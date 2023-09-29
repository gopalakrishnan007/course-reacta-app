export default function Remotefunc(){
    const a = "ram", b = " kumar"
    function remote() {
        alert(a+b)
        
    }

    return(
        <>
            <button onClick={remote}>remotefunc</button>
        </>
    )
}
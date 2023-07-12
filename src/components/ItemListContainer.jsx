/* function greeings(){
    return <ItemListcontainer greeting="Hola"/>
} */
export function ItemListcontainer(props){
    return (
        <div>
            <h2 style={{textAlign: "center"}}>{props.greeting}</h2>
        </div>
    )
}
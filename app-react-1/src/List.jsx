
function List(props){
    // const fruits=  [{id: 1, name:"apple", calories: 95},
    //                 {id: 2, name:"orange", calories: 50},
    //                 {id: 3, name:"banana", calories: 130},
    //                 {id: 4, name:"coconut", calories: 150}]
    // return(fruits); this just returns fruits without space

    // fruits.sort((a, b)=> a.name.localeCompare(b.name));// sorts alphabetically
    // fruits.sort((a,b)=>a.calories-b.calories); //sorts in ascending order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const category=props.category;
    const itemlist = props.items;

    const listitems = itemlist.map(fruit => 
    <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b></li>);

    return(
        <>
        <h3>{category}</h3>
        <ol>{listitems}</ol>
        </>
    )

}
export default List;
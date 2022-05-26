const TodoItem = ({item})=>{

    return (<>

    <input type="checkbox" id={item.id} value={item.value} />{item.value}<br />
    </>)

}

export default TodoItem
const TodoItem = ({item})=>{


    return (<>

    <input type="radio" value={item} />{item}<br />
    </>)

}

export default TodoItem
import { useEffect, useState } from "react";




function App() {
  
  const [item, setItem] = useState('')
  const [todoList, setTodoList] = useState(()=>{
   const localvalue = localStorage.getItem("ITEMS")
   if (localvalue == null){
    return []
   }
   else{
    return JSON.parse(localvalue)
   }
  })
  const[editid,seteditid] = useState(null);

  const addItem = () => {
    if (!item.trim()) return;
    setTodoList([...todoList, {
      id: crypto.randomUUID(),
      name: item,
      isFinished: false
    }])
    seteditid(null)
    setItem('')
    document.getElementById('i1').focus()
  }

  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todoList))
  }, [todoList])


  const toggleTodo = (id) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id
          ? { ...todo, isFinished: !todo.isFinished }
          : todo
      )
    );
  };
  const deleteTask =(id)=> {
    setTodoList(todoList.filter(todo=> todo.id !== id))
  }
const startedit=(Task) => {
  seteditid(Task.id)
  setItem(Task.name)
  document.getElementById("i1").focus();
}
const UBDATEItem =()=> {
  setTodoList(
    todoList.map(todo => todo.id === editid ? {...todo,name:item}:todo)
  )
}



  return (
    <div className="root">
      <input type="text" value={item} id="i1" onChange={
        (e) => setItem(e.target.value)} />
        {editid ?(
      <button onClick={UBDATEItem}>UBDATE Task</button>
        ):(
      <button onClick={addItem}>Add Task</button>
       )}
      <div>
        {todoList.map((task) =>
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isFinished}
              onChange={() => toggleTodo(task.id)}
            />
            {task.isFinished ? (
              <span>
                <del>{task.name}</del>
              </span>
            ) : (
              <span>{task.name}</span>
            )}
           <button onClick={()=>deleteTask(task.id)}>x</button>
           <button onClick={()=>startedit(task.id)}>delete</button>
          </div>

        )}
      </div>
    </div>
  );
}

export default App;

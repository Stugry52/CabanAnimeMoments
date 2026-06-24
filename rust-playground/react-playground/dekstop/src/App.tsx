
import TakePreview from "./components/TaskPreview";

function App(){  

  const [title, setTitle] = useState("Подготовить первый экран KanBan");

  const [assignee, setAssignee] = useState("Анна")

  const [priority, setPriority] = useState<"low"|"medium"|"hign">("medium");
  
    return{
        <main className="app">
            <section className="wellcome-card">

            <div className="status-box">
                <p>{title}</p>
                <p>{assignee}</p>
                <select {priority}>
                    <option value="low"> Низкий</option>
                    <option value="medium"> Средний</option>
                    <option value="hign"> Высокий</option>
                </select>
            </div>

            // Дальше я не знаю как использовать TakePreview, и проверить не могу из-за тех же самых проблем

            </section>
        </main>
    }
  }

  export default App;
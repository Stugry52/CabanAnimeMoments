// Импорт спец режима, чтобы реакт помогал находить потенциальные проблемы в разработке
import { StrictMode } from "react"; 
// импрот, чтобы подключить reat приложение к HTML элементу
import { createRoot } from "react-dom/client";
// подключеник css стилей приложения
import "./App.css";
// Импортируем главный компонент App из соседнего файла
import App from "./App";

// находим HTML элемент с id = root куда будет всталяться наше реакт приложение
const rootElement = document.getElementById("root");

// Сравнение == и ===
// === это строгое сравнение (сравниваем и тип и значение)
// 5 === 5       // 5 === "5" - то они не равны
// 5 == "5" - они равны
// null == undefined - равно    // null === undefined - не равно
// проверяем существует ли root
if(rootElement === null){
  // Если не существует, то останавливаем приложение с понятной ошибкой
  throw new Error("Не найден элемент #root в index.html")
}

// Создание react-корня и назначение команды отрисовать приложение внутри rootElement
createRoot(rootElement).render(
  <StrictMode>
    {/* Включаем строгий режим react, для доп проверок во время разработки */}
    <App /> {/* Рендер главного компонента приложение*/}
  </StrictMode>, // Закрытие StrictMode
);


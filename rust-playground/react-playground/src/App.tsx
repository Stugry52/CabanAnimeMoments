// Импорт, чтобы компонент мог хранить изменяемое состояние
import { useState } from 'react' 

// Главный компонент приложения
function App(){
  // Создаем состояние для имени ученика и функцию для его изменения
  const [studentName, setStudentName] = useState("Oleg");
  const [lessonCount, setLessonCount] = useState(2);

  // Функция которая будет вызываться в момент изменения текста внутри input
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>){
    // Берем базовое значение из input и сохраняем его
    setStudentName(event.target.value);
  }
  // Функция изменения номера урока при нажатии на кнопку
  function handleNextLessonClick(){
    setLessonCount(lessonCount + 1);
  }

  // Возврат функции App это сама JSX разметка
  return(
  <main className="app">
    <section className='hero'>
      <p className='eyebrow'>React + TypeScript</p>
      <h1>Первое приложение для командной работы на React</h1>
      <p className='description'>
        Бле бле бле блеб ле блю блю лю...
      </p>
    </section>

    <section className='card'>
      <label className='field'>
        <span>Имя ученика</span>
        <input value={studentName} onChange={handleNameChange} />
      </label>

      <p className='result'>
        Привет, {studentName || "Без имени"}! Сейчас ты на уроке {lessonCount}
      </p>

      <button onClick={handleNextLessonClick}>
        Перейти к следующему уроку
      </button>
    </section>
  </main>
  );
}

// Экспортируем компонент чтобы его можно было использовать в других файлах
export default App;
use std::fmt::format;

fn build_greeting(user_name: &str) -> String{
    // функция build_greeting, которая принимает стринговое значение и возвращает стринговое -> String
    let message = format!("Привет, {user_name}, Wellcome в TeamFlow");
    // format - собирает новую строчку не печатаем ее сразу
    message // Без точки с запятой, потому что ьы это значение возвращаем (return)
}

fn create_user_label(name: &str, role: &str) -> String{
    format!("{name} - {role}")
}
fn main() {
    let app_name = "TeamFlow Desk";
    let lesson_number = 1;
    let rust_is_installed = true;
    
    println!("Приложение {app_name}");
    println!("Номер урока {lesson_number}");
    println!("Rust установлен? {rust_is_installed}");

    let mut counter = 0;
    // mut - делаем переменную изменяемой
    // По умолчанию все переменные в Rust - не изменяемые
    //counter = counter + 1;

    let name = "Oleg";
    let greeting = build_greeting(name);
    println!("{greeting}");

    let user_name = "Oleg";
    let user_role = "Sigma";
    let label = create_user_label(user_name, user_role);

    println!("Пользователь:{label}")
}

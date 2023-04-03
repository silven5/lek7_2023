//Створили інтерфейс для опису завдання
export interface Task {
    //Код
    id?: string;
    //Заголовок
    title: string;
    //Опис
    description: string;
}

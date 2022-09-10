// Задание выполняйте в отдельном репозитории или в песочнице codepen
// 1) Добавьте на HTML-страницу пустой список ul.
// 2) Через prompt запрашивайте у пользователя строку, программа должна работать в бесконечном цикле или в бесконечной рекурсии, условия выхода в 6 пункте
// 3) Добавляйте все строки внутрь списка ul, текст должен быть внутри li.
// 4) Если пользователь введёт del, то последний элемент удаляется
// 5) Если пользователь введёт clear, то список ul очищается
// 6) Если пользователь введёт exit или нажмет отмена, то программа завершает выполнение
// Если пользователь ничего не ввел или ввел только пробелы , то пункт списка не должен быть добавлен
// Программу максимально декомпозируйте
// Чистые функции для вычисления и процедуры для запроса данных от пользователя и вывод на страницу

// Внешний вид на ваше усмотрение

"use strict";

const main = document.querySelector('main');
const ul = document.createElement('ul');
main.append(ul);

const getUserInput = () => {
  return prompt('Введите строку');
};

const addItem = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.append(li);
};

const addElement = () => {
  const userInput = getUserInput();
  console.log('userInput: ', userInput);

  if (userInput) {
    switch (userInput) {
      case 'del':
        ul.lastChild.remove();
        break;
      case 'clear':
        ul.textContent = '';
        break;
      case 'exit':
        return null;
      default:
        if (userInput !== '' || userInput.trim() !== '')
          addItem(userInput);
        break;
    }
  } else return null;
  return addElement();
};

addElement();

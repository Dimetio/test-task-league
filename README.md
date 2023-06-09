# Тестовое задание на должность Frontend-разработчик к компанию [Лига Цифровой Экономики](https://www.digitalleague.ru/)

### Демо: [https://dimetio.github.io/test-task-league/](https://dimetio.github.io/test-task-league/)

### Технологии:
React, React-router v6, Effector

---

### Описание:
### Экраны
* Экран поиска
 * Состоит из поля ввода и кнопки "искать". 
 * После ввода текста и нажатия кнопки поиска, происходит загрузка результатов поиска и переход на экран результата поиска.
* Экран результата поиска
 * Состоит из таблицы с результатами поиска и панели "быстрого отображения".
   * В таблице должны отображаться: Автор вопроса, тема, количество ответов, теги.
     * При клике на:
       * автора вопроса — в панели "быстрого отображения" появляется таблица, аналогичная основной и содержащая наиболее популярные вопросы автора
       * тему и количество ответов — происходит переход на экран информации о вопросе.   
       * один из тегов — в панели "быстрого отображения" появляется таблица, аналогичная основной и содержащая наиболее популярные вопросы по этому тегу
   * Панель "быстрого отображения" по умолчанию скрыта и появляется когда нажали на автора вопроса, или на тег.
     * При клике на тему и количество ответов происходит переход на экран информации о вопросе
* Экран информации о вопросе
 *  должен отображать список ответов на выбранный вопрос
 
### Технические требования:
1. Для получения данных использовать вызовы к api прямо из браузера http://api.stackexchange.com/docs
2. Переходы между экранами должны оставаться в истории браузера и должны работать браузерные переходы "вперед" и "назад"
3. Поддержка firefox, chrome, safari, edge.
4. Стэк технологий: create-react-app, react, effector, react-router v6. По желанию можно использовать Lodash, eslint (airbnb-config). Использование других библиотек запрещено. Использовать последние версии представленных библиотек. 
5. Активно использовать стандарт ES6.
6. Нельзя использовать CSS Фреймворки такие как Bootstrap, Foundation, Bulma, Ulkit, Semantic UI, Susy, Materialize, Pure и другие.
7. Анимации переходов между состояниями (по желанию).
8. Возможность сортировки в таблицах.
9. Активно использовать Flexbox или Grid.
10. Typescript (желательно, но не обязательно)

---
### Как запустить локально:
### `git clone git@github.com:Dimetio/test-task-league.git`
### `npm i`
### `npm start`

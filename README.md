# Игра города

---
### Процесс разработки

- верстка и построение макета по шаблону из фигмы
- добавление folder alias в `vite.config` и `tsconfig`
- реализация ввода городов, их проверка и создание чата
- кодсплитинг и разделение вспомогающих функций
- создание `useTimer` хука и компонента `Timer`
- изменение компонента результатов и фиксап

---

### Некоторые замечания

- изначальный текстовый файл с городами перевел в json через отдельную js функцию для удобства работы
- города оканчивающиеся на буквы "ы" и "й" тоже пропускал, чтобы "соперник" мог искать города. (т.к. в списке нет городова начинающихся на эти буквы)

---
Код для программы для перевода в `json`
```js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'cities.txt');

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const cities = data.split('\n');

  const cleanCities = cities.filter((city) => city.trim() !== '');

  const json = JSON.stringify(cleanCities, null, 2);

  console.log(json);

  const jsonFilePath = path.join(__dirname, 'cities.json');

  fs.writeFile(jsonFilePath, json, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
```
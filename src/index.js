class Game {
   constructor() {
      // Масив з даними питань
      this.data = [
         { id: "1", city: "Київ", country: "Україна", imageCity: "./src/img/city/kyiv.jpg", imageCountry: "./src/img/country/ukraine.jpg" },
         { id: "2", city: "Лондон", country: "Велика Британія", imageCity: "./src/img/city//london.jpg", imageCountry: "./src/img/country/uk.jpg" },
         { id: "3", city: "Відень", country: "Австрія", imageCity: "./src/img/city/vienna.jpg", imageCountry: "./src/img/country/austria.jpg" },
         { id: "4", city: "Брюсель", country: "Бельгія", imageCity: "./src/img/city/brussel.jpg", imageCountry: "./src/img/country/belgium.jpg" },
         { id: "5", city: "Софія", country: "Болгарія", imageCity: "./src/img/city/sofia.jpg", imageCountry: "./src/img/country/bulgaria.jpg" },
         { id: "6", city: "Афіни", country: "Греція", imageCity: "./src/img/country/greece.jpg", imageCountry: "./src/img/country/greece.jpg" },
         { id: "7", city: "Копенгаген", country: "Данія", imageCity: "./src/img/city/copenhagen.jpg", imageCountry: "./src/img/country/denmark.jpg" },
         { id: "8", city: "Таллінн", country: "Естонія", imageCity: "./src/img/city/tallinn.jpg", imageCountry: "./src/img/country/estonia.jpg" },
         { id: "9", city: "Дублін", country: "Ірландія", imageCity: "./src/img/city/dublin.jpg", imageCountry: "./src/img/country/ireland.jpg" },
         { id: "10", city: "Мадрид", country: "Іспанія", imageCity: "./src/img/city/madrid.jpg", imageCountry: "./src/img/country/spain.png" },
         { id: "11", city: "Рим", country: "Італія", imageCity: "./src/img/city/rome.jpg", imageCountry: "./src/img/country/italy.jpg" },
         { id: "12", city: "Нікосія", country: "Кіпр", imageCity: "./src/img/country/cyprus.jpg", imageCountry: "./src/img/country/cyprus.jpg" },
         { id: "13", city: "Рига", country: "Латвія", imageCity: "./src/img/city/riga.jpg", imageCountry: "./src/img/country/latvia.jpg" },
         { id: "14", city: "Вільнюс", country: "Литва", imageCity: "./src/img/city/vilnius.jpg", imageCountry: "./src/img/country/lithuania.jpg" },
         { id: "15", city: "Люксембург", country: "Люксембург", imageCity: "./src/img/country/luxembourg.jpg", imageCountry: "./src/img/country/luxembourg.jpg" },
         { id: "16", city: "Валетта", country: "Мальта", imageCity: "./src/img/city/valletta.jpg", imageCountry: "./src/img/country/malta.jpg" },
         { id: "17", city: "Амстердам", country: "Нідерланди", imageCity: "./src/img/city/amsterdam.jpg", imageCountry: "./src/img/country/netherlands.jpg" },
         { id: "18", city: "Варшава", country: "Польша", imageCity: "./src/img/city/warsaw.jpg", imageCountry: "./src/img/country/poland.jpg" },
         { id: "19", city: "Лісабон", country: "Португалія", imageCity: "./src/img/city/lisboa.jpg", imageCountry: "./src/img/country/portugal.png" },
         { id: "20", city: "Братислав", country: "Словаччина", imageCity: "./src/img/city/bratislava.jpg", imageCountry: "./src/img/country/slovakia.png" },
         { id: "21", city: "Люблянка", country: "Словенія", imageCity: "./src/img/city/ljubljana.jpg", imageCountry: "./src/img/country/slovenia.png" },
         { id: "22", city: "Бухарест", country: "Румунія", imageCity: "./src/img/city/bucharest.jpg", imageCountry: "./src/img/country/romania.jpg" },
         { id: "23", city: "Гельсінккі", country: "Фінляндія", imageCity: "./src/img/city/helsinki.jpg", imageCountry: "./src/img/country/finland.jpg" },
         { id: "24", city: "Загреб", country: "Хорватія", imageCity: "./src/img/city/zagreb.jpg", imageCountry: "./src/img/country/croatia.jpg" },
         { id: "24", city: "Прага", country: "Чехія", imageCity: "./src/img/city/moravia.jpg", imageCountry: "./src/img/country/czech_republic.jpg" },
         { id: "24", city: "Стокгольм", country: "Швеція", imageCity: "./src/img/city/stockholm.jpg", imageCountry: "./src/img/country/sweden.png" },
         { id: "24", city: "Берлін", country: "Німеччина", imageCity: "./src/img/city/berlin.jpg", imageCountry: "./src/img/country/germany.jpg" },
         { id: "25", city: "Париж", country: "Франція", imageCity: "./src/img/city/paris.jpg", imageCountry: "./src/img/country/france.jpg" }
      ];

      // Початкові значення змінних
      this.currentQuestion = 0;
      this.score = 0;

      // Елементи DOM
      this.screen = document.getElementById("screen");
      this.screenText = document.getElementById("screen-text");
      this.endButton = document.getElementById("end");
      this.restartButton = document.createElement("button");
      this.gameContainer = document.getElementById("game-container");
      this.optionsContainer = document.getElementById("options");

      // Додавання обробників подій
      this.endButton.addEventListener("click", this.endGame.bind(this));

      // Показати перше питання
      this.showQuestion();
   }

   // Функція для перемішування елементів масиву
   shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
      }
      return array;
   }

   // Показати питання
   showQuestion() {
      var question = this.data[this.currentQuestion];
      var isCityQuestion = Math.floor(Math.random() * 2);

      // Очистити контейнер опцій
      this.optionsContainer.innerHTML = "";

      // Встановити зображення та клас контейнера гри
      var imageElement = document.getElementById("image");
      if (isCityQuestion == 0) {
         imageElement.src = question.imageCity;
         imageElement.alt = "Місто: " + question.city;
         this.gameContainer.classList.add("city");
      } else {
         imageElement.src = question.imageCountry;
         imageElement.alt = "Прапор: " + question.country;
         this.gameContainer.classList.add("flag");
      }

      // Масив опцій та правильної відповіді
      var options = [];
      var correctAnswer;

      if (isCityQuestion == 1) {
         options.push(question.country);
         correctAnswer = question.country;
      } else {
         options.push(question.city);
         correctAnswer = question.city;
      }

      // Отримати сусідні опції для випадкових варіантів
      var neighborOption1, neighborOption2;
      var dataIndex = 0;

      if (isCityQuestion == 1) {
         dataIndex = this.data.findIndex(function (item) {
            return item.country === question.country;
         });
      } else {
         dataIndex = this.data.findIndex(function (item) {
            return item.city === question.city;
         });
      }

      if (dataIndex > 0) {
         neighborOption1 = isCityQuestion == 1 ? this.data[dataIndex - 1].country : this.data[dataIndex - 1].city;
      }

      if (dataIndex < this.data.length - 1) {
         neighborOption2 = isCityQuestion == 1 ? this.data[dataIndex + 1].country : this.data[dataIndex + 1].city;
      }

      // Додати сусідні опції до масиву опцій
      if (neighborOption1) {
         options.push(neighborOption1);
      }

      if (neighborOption2) {
         options.push(neighborOption2);
      }

      // Перемішати опції
      options = this.shuffle(options);

      // Створити кнопки опцій
      for (var i = 0; i < options.length; i++) {
         var option = document.createElement("button");
         option.classList.add("option");
         option.textContent = options[i];

         // Встановити атрибут data-correct для правильної відповіді
         if (options[i] === correctAnswer) {
            option.dataset.correct = true;
         }

         // Додати обробник події для перевірки відповіді
         option.addEventListener("click", this.checkAnswer.bind(this));

         // Додати кнопку опції до контейнера опцій
         this.optionsContainer.appendChild(option);
      }
   }

   // Перевірити відповідь
   checkAnswer(event) {
      var selectedOption = event.target;
      var isCorrect = selectedOption.dataset.correct === "true";

      // Збільшити рахунок, якщо відповідь правильна
      if (isCorrect) {
         this.score++;
         this.screenText.textContent = "Відповідь правильна!"
         this.screen.style.background = '#c5edbb'
      } else {
         this.screenText.textContent = "Відповідь неправильна!"
         this.screen.style.background = '#ebbcbd'
      }

      this.currentQuestion++;

      // Показати наступне питання або завершити гру
      if (this.currentQuestion < this.data.length) {
         this.showQuestion();
      } else {
         this.endGame();
      }
   }

   // Завершити гру
   endGame() {
      // Відображення результатів гри
      this.screenText.textContent = "Гра завершена. Ваш результат: " + this.score + "/" + this.data.length;

      // Видалення обробника події для кнопки завершення гри
      this.endButton.removeEventListener("click", this.endGame);

      // Створення кнопки перезапуску
      this.restartButton.textContent = "Почати заново";
      this.restartButton.addEventListener("click", this.restartGame.bind(this));

      // Додавання кнопки перезапуску під текстом з результатами
      this.screen.appendChild(this.restartButton);
      this.screen.style.background = 'white'
   }

   // Перезапуск гри
   restartGame() {
      // Скидання значень змінних та видалення кнопки перезапуску
      this.currentQuestion = 0;
      this.score = 0;
      this.screen.removeChild(this.restartButton);

      // Показати перше питання
      this.showQuestion();
      this.screenText.textContent = "Виберіть правильну відповідь"
      this.screen.style.background = 'white'
   }
}

let game = new Game();

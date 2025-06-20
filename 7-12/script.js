document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Автоматически скрываем меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
    // === 1. alert, confirm, prompt ===
function showDialogs() {
    alert("Добро пожаловать на сайт популярных игр!");
  
    const name = prompt("Как вас зовут?");
    if (name) {
      alert(`Приятно познакомиться, ${name}!`);
    }
  
    const confirmVisit = confirm("Вы хотите просмотреть популярные игры?");
    if (!confirmVisit) {
      alert("Хорошо! Вы можете вернуться позже.");
    }
  }
  showDialogs();
  
  
  // === 2. Условия if, switch, и return ===
  function evaluateRating(rating) {
    if (rating >= 4.5) {
      console.log("Игра имеет высокий рейтинг.");
    } else if (rating >= 3) {
      console.log("Средний рейтинг.");
    } else {
      console.log("Низкий рейтинг.");
    }
  
    switch (true) {
      case rating === 5:
        console.log("Идеально!");
        break;
      case rating >= 4:
        console.log("Очень хорошо.");
        break;
      case rating >= 3:
        console.log("Хорошо.");
        break;
      default:
        console.log("Можно пропустить.");
    }
  
    return rating >= 4;
  }
  evaluateRating(4.4);
  
  
  // === 3. Циклы: for, while, do..while, break, continue ===
  function listTopGames(games) {
    console.log("ТОП игры (for):");
    for (let i = 0; i < games.length; i++) {
      if (games[i].toLowerCase() === "phasmophobia") continue; // пропускаем
      if (games[i] === "GTA V") break; // досрочно прекращаем
      console.log(`- ${games[i]}`);
    }
  
    console.log("ТОП игры (while):");
    let j = 0;
    while (j < games.length) {
      console.log(games[j]);
      j++;
    }
  
    console.log("ТОП игры (do..while):");
    let k = 0;
    do {
      console.log(`Game: ${games[k]}`);
      k++;
    } while (k < games.length);
  }
  listTopGames(["CS2", "Dota 2", "Rust", "Phasmophobia", "GTA V"]);
  
  
  // === 4. Другие примеры — обработка формы ===
  document.querySelector(".submit-button")?.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Спасибо за обратную связь!");
  });
  
  function calcY(x) {
    if (x === null || x === undefined) {
      alert("Ошибка: x не задан");
      return null;
    }
    // Пример обработки: корень, деление и т.п — здесь простая формула
    const y = 1 - x - 9;
    return y;
  }
});
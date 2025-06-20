function calcY(x) {
    if (x === null || x === undefined) {
      alert("Ошибка: x не задан");
      return null;
    }
    const denominator = x * x - 9;
    if (denominator === 0) {
      alert("Ошибка: деление на ноль (знаменатель равен нулю при x = ±3)");
      return null;
    }
    const y = (1 - x) / denominator;
    return y;
  }
  
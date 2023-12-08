enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

function isWeekend(day: Days): boolean {
  return day === Days.SUNDAY;
}

//приклад

const today1: Days = Days.MONDAY;
console.log(isWeekend(today1)); //поверне false, оскільки Monday це робочий день

const today2: Days = Days.SUNDAY;
console.log(isWeekend(today2)); //поверне true, оскільки Sunday це вихідний
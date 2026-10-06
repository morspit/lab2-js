// Исходные данные
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// Функция 1: Средний балл
function calculateAverage(data) {
    let sum = 0;
    for (let student of data) {
        sum = sum + student.score;
    }
    return sum / data.length;
}

// Функция 2: Лучший студент
function findTopStudent(data) {
    let topStudent = data[0];
    for (let student of data) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }
    return topStudent.name;
}

// Функция 3: Должники
function filterFailed(data, passScore = 60) {
    let failed = [];
    for (let student of data) {
        if (student.score < passScore) {
            failed.push(student.name);
        }
    }
    return failed;
}

// Функция 4: Буквенные оценки
function addLetterGrade(data) {
    for (let student of data) {
        if (student.score >= 90) {
            student.letter = "A";
        } else if (student.score >= 75) {
            student.letter = "B";
        } else {
            student.letter = "C";
        }
    }
    return data;
}

// Демонстрация работы всех функций
console.log("=== Анализ успеваемости ===");
console.log("1. Средний балл группы:", calculateAverage(grades));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников:", filterFailed(grades));
console.log("4. Итоговый массив с буквенными оценками:", addLetterGrade(grades));
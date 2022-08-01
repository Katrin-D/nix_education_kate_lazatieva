//Task 1
console.log('Task 1:');
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};
const result = [];

for (let city in citiesAndCountries) {
    result.push(`${city} - это ${citiesAndCountries[city]}`);
}
console.log(result);

//Task 2
console.log('Task 2:');
function getArray(amount){
    let arr = [];
    for (let j=1; j <= amount; j++) {
        arr.push(j);
        if (j % 3 === 0 ) {
            console.log(arr);
            arr = [];
        }
    }
}
getArray(11);

//Task 3
console.log('Task 3:');
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
function getNameOfDay(lang, day){
    console.log(namesOfDays[lang][day-1]);
}

getNameOfDay("en", 7);
getNameOfDay("ru", 3);





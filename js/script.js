const $name = document.getElementById("name");
const $age = document.getElementById("age");
const $work = document.getElementById("work");
const $btn = document.getElementById("btn");
const $names = document.getElementById("names");
const $ages = document.getElementById("ages");
const $works = document.getElementById("works");

$btn.addEventListener("click", () => {
    if ($name.value === '') {
        delete $names;
    } else {
        $names.innerHTML =` Твое имя: <b>${$name.value}</b>`;
    }
    if ($age.value === '') {
        delete $ages;
    } else {
        $ages.innerHTML =   `<b>${$name.value}</b> тебе: <u>${$age.value}</u> лет`;
    }
    if ($work.value === '') {
        delete $works;
    } else {
        $works.innerHTML =` Твое место работы:<b>${$work.value}</b>`;
    }
});
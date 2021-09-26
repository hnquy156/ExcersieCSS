const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const user = {
    name: 'Hoang Ngoc Quy',
    company: 'No',
    job: 'Developer',
    age: 23,
    email: 'hnquy.hbt@gmail.com'
}
const titleUser = [];
const contentUser = [];
for (let val in user) {
    if (val !== 'email') {
        titleUser.push(`<p>${val}</p>`);
        contentUser.push(`<p>${user[val]}</p>`);
    }
    if (val === 'age') {
        contentUser.pop()
        contentUser.push(`<p>${user[val]} years old</p>`);
    }
}


titleUserElement = $('.info-title');
contentUserElement = $('.info-content');


titleUserElement.innerHTML = titleUser.join('');
contentUserElement.innerHTML = contentUser.join('');

mynameElement = $('.my-name');
mynameElement.innerHTML = user.name;

mynameElement = $('.my-email');
mynameElement.innerHTML = user.email;


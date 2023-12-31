// Добавляю переменные для получения элементов
let postFormTitle = document.querySelector('.post__form-title');
let postFormText = document.querySelector('.post__form-text');
let postFormButton = document.querySelector('.post__form-btn');
let postFormPublication = document.querySelector('.post__publication');

// 
function publish ()  {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: postFormTitle.value,
      body: postFormText.value,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
 })
    .then(response => response.json())
    .then((json) => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        console.log(json.title);
        wrapper.innerHTML = `
        <p class="published__title">${json.title}</p>
        <p class="published__text">${json.body}</p>
    `;
    postFormPublication.appendChild(wrapper);
    })
    .catch((error) => {
        console.log('Error' + error);
    })
}

// Добавляю обработчик для опубликования поста
postFormButton.addEventListener('click', event => {
    event.preventDefault();
    if (postFormTitle === '' || postFormText === '') {
        alert('The input fields are not filled in');
    } else {
        postFormTitle = document.querySelector('.post__form-title');
        postFormText = document.querySelector('.post__form-text');
        publish();
    }
});


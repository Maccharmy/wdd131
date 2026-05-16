const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton');
const list = document.querySelector('#chapterList');

button.addEventListener('click', function () {
    const chapter = input.value.trim();

    if (chapter === '') {
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const delButton = document.createElement('button');

    li.textContent = chapter;
    delButton.textContent = '❌';
    delButton.setAttribute('aria-label', `Remove ${chapter}`);

    li.append(delButton);
    list.append(li);

    delButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    input.value = '';
    input.focus();
});

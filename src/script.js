const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('#myInput');
const list = document.querySelector('.list')
const mainForm = document.querySelector('#mainForm');

wrapper.addEventListener('click', (e) => {
    let action = e.target.dataset.action;
    let element = e.target;

    switch (action) {
        case 'add-item':
            addItem();
            break;
        case 'remove-item':
            removeItem(element);
            break;
        case 'state-toggle':
            stateToggle(element);
            break;
    }
});

input.addEventListener('input', (e) => {
    verivication(e.target.value);
});

mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

function addItem() {
    const liItem = document.createElement('li');
    liItem.dataset.action = 'state-toggle';

    if (verivication(input.value) && input.value) {
        liItem.innerHTML = `${input.value} <button class="btn btn-danger btn-sm btn-remove" data-action="remove-item" title="Remove">-</button>`;
        list.append(liItem);
        input.value = '';
    }

    return false;
}

function removeItem(el) {
    if (confirm('Are you sure?')) {
        el.closest('li').remove();
    }
}

function stateToggle(el) {
    el.classList.toggle('done');
}

function verivication(str) {
    const regExp = /^[a-zA-Z0-9]{2,25}$/g;
    let check = regExp.test(str);
    let result = false;

    if (!check && str) {
        mainForm.classList.add('invalid');
    } else {
        mainForm.classList.remove('invalid');
        result = true;
    }

    return result;
}

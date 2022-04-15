const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('#myInput');
const list = document.querySelector('.list');

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

function addItem() {
    const liItem = document.createElement('li');
    liItem.dataset.action = 'state-toggle';
    if (input.value) {
        liItem.innerHTML = `${input.value} <button class="btn btn-danger btn-sm btn-remove" data-action="remove-item" title="Remove">-</button>`;
    } else {
        alert('Input is empty');
        return;
    }

    list.append(liItem);
    input.value = '';
}

function removeItem(el) {
    if (confirm('Are you sure?')) {
        el.closest('li').remove();
    }
}

function stateToggle(el) {
    el.classList.toggle('done');
}

function addListItem() {
    const targetElement = document.getElementById('target');
    targetElement.classList.add('my-list');
    const items = ['First item', 'Second item', "Third item"];
    items.forEach(itemText => {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        targetElement.appendChild(listItem);
    })
}
addListItem();
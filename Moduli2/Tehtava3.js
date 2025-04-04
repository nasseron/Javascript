let dogName = [];
for (let i = 0; i < 6; i++) {
    let dogName = prompt('Enter the name of gog ${i + 1}:');
    dogNames.push(dogName);
}
dogNames.sort().reverse();
let u1 = document.createElement('ul');
dogNames.forEach(name => {
    let li = document.createElement('1i');
    li.textContent = name;
    ul.appendChild(li);
});
document.body.appendChild(ul);
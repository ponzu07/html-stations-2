function displayList () {

    let list = document.getElementById('fruits');
    list.innerHTML = '';
    let items = ['リンゴ', 'イチゴ', 'ブドウ'];
    let ul = document.createElement('ul');
    items.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    list.appendChild(ul);
}
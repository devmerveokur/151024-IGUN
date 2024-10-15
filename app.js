let todoInput = document.getElementById('todoInput');
let addBtn =  document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

addBtn.addEventListener('click', function () {
    //input'a girilen değeri alır
    let TodoText = todoInput.value.trim();
    if(TodoText === '') {  //Eğer input boş ise aşağıda uyarı verir
        alert('Lütfen bir todo giriniz');
        return;
    }
    let liElement = document.createElement('li');
    liElement.textContent = TodoText;

    todoList.appendChild(liElement);
})
{
    const form = document.querySelector('.createTaskForm');

    // form.onsubmit = function() {}
    form.onsubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const task = formData.get('task');

        console.log(task);
        addTask(task);

        form.reset();
    }

    const getUpdatedTemplate = (task) => `
        <div class="content">
            <button class="checkbox"></button>
            <input type="text" disabled value="${task}" class="taskInput"/>
        </div>
        <div class="actions">
            <button class="star"></button>
            <button class="edit"></button>
            <button class="remove"></button>
        </div>
    `;

    const addTask = (task) => {
        // взять ul элемент
        const tasksDom = document.querySelector('.tasks');
        // создать li элемент
        const taskDom = document.createElement('li');
        taskDom.innerHTML = getUpdatedTemplate(task);
        
        tasksDom.prepend(taskDom);
    }
}

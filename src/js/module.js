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

    const addRemoveHandler = (taskDom) => {
        const removeDom = taskDom.querySelector('.remove');

        removeDom.onclick = () => taskDom.remove();
    }

    const addFavoriteHandler = (taskDom) =>  {
        const starDom = taskDom.querySelector('.star');

        starDom.onclick = () => {
            starDom.classList.toggle('selected');
        };
    }

    const addEditHandler = (taskDom) => {
        const editDom = taskDom.querySelector('.edit');

        editDom.onclick = () => {
            const taskInputDom = taskDom.querySelector('.taskInput');
            const isDisabled = taskInputDom.getAttribute('disabled') === null;

            if (isDisabled) {
                taskInputDom.setAttribute('disabled', true);
            } else {
                taskInputDom.removeAttribute('disabled');
            }
        }
    }

    const addTask = (task) => {
        // взять ul элемент
        const tasksDom = document.querySelector('.tasks');
        // создать li элемент
        const taskDom = document.createElement('li');
        taskDom.innerHTML = getUpdatedTemplate(task);
        
        tasksDom.prepend(taskDom);

        addRemoveHandler(taskDom);
        addFavoriteHandler(taskDom);
        addEditHandler(taskDom);
    }
}

{
    const form = document.querySelector('.createTaskForm');

    // form.onsubmit = function() {}
    form.onsubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const task = formData.get('task');

        console.log(task);
    }
}

{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };

    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const render = () => {
        let tasksHTMLContent = "";

        for (const task of tasks) {
            tasksHTMLContent += `
            <li class="tasks_item js-task">
                <button class="tasks_button tasks_button--done js-toggleDone">
                 ${task.done ? "✔" : ""}
                </button>
                <span class="tasks_content ${task.done ? "tasks_content--done" : ""}">
                 ${task.content}
                </span>
                <button class="tasks_button tasks_button--remove js-remove">
                 🗑
                </button>               
            </li>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = tasksHTMLContent;

        bindRemoveEvents();
        bindToggleDoneEvents();
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask")
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();        
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };

    init();

}


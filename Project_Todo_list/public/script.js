fetch("/tasks")
  .then((res) => res.json())
  .then((tasks) => {
    const div = document.getElementById("tasks");

    tasks.forEach((task) => {
      div.innerHTML += `<p>${task.task}</p>`;
    });
  });
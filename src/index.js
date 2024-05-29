const TaskManager = require('./taskManager');

const task1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 1 completed');
            resolve();

        }, 1000);
    })
}

const task2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 2 failed');
            reject(new Error('Task 2 encountered an error'))
        }, 2000)
    })
}

const task3 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 3 completed');
            resolve();

        }, 3000);
    })
}


const main = async () => {
    const manager = new TaskManager();
    manager.addTask(task1);
    manager.addTask(task2);
    manager.addTask(task3);

    console.log('Executing tasks...');
  await manager.executeTasks();
  console.log('All tasks completed.');

  const statuses = manager.getTaskStatus();
  console.log('Task Statuses:', statuses);


}

main();
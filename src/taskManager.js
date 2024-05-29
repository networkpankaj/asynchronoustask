class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            task,
            status: 'pending',
        });
    }

    async executeTasks() {
        for(let i = 0; i < this.tasks.length; i++){
            const taskObj = this.tasks[i];

            try {
                taskObj.status = 'running';
                await taskObj.task();
                taskObj.status = 'completed';
            }catch (error) {
                taskObj.status = 'failed';
                console.error(`Task ${i} failed:`, error);
            }
        }
    }

    getTaskStatus() {
        return this.tasks.map((task, index) => ({
            index,
            status: task.status,
        }))
    }
}

module.exports = TaskManager;
// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    // Print the state of a task to the console in a nice readable way
    logTaskState: function() {
      /*const title = taskTitles[taskIndex];
      const complete = taskComplete[taskIndex];*/
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    completeTask: function() {
      /*taskComplete[taskIndex] = true;*/
      this.complete = true;
    }
  };

  return task;
}

// DRIVER CODE BELOW
/*newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1
*/

const task1 = newTask("Clean Cat Litter", "take out all poo");
const task2 = newTask("Do Laundry", "clean all dirty clothes");
const tasks = [task1, task2];

//logTaskState(task1); // Clean Cat Litter has not been completed
//completeTask(task1);
//logTaskState(task1); // Clean Cat Litter has been completed
task1.logTaskState();
task1.completeTask();
task1.logTaskState();
console.log(tasks);

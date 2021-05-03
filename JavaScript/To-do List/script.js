let input = prompt("Enter a Todo").toLowerCase();
const list = [];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
    }
    else if (input === 'new') {
        const newTodo = prompt('What would you like to add?');
        list.push(newTodo);
        console.log(`${newTodo} added to list!`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('What would you like to delete?'));
        if (!Number.isNaN(index)) {
            const deleted = list.splice(index, 1);
            console.log(`You deleted ${deleted[0]}`);
        }
        else {
            console.log('Unknown index');
        }
    }
    input = prompt("Enter a Todo").toLowerCase();
};
console.log("Ok, you quit.");

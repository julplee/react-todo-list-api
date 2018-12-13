module.exports = function (app, db) {
    app.get('/todos/:id', (req, res) => {
        const id = req.params.id;
        let data = db.readTodos();

        let searchedTodo = data.filter(todo => todo.id == id);

        res.send(searchedTodo);
    });

    app.post('/todos', (req, res) => {
        const todo = {
            title: req.body.title,
            description: req.body.description
        };

        let data = db.readTodos();

        todo.id = data.length + 1;

        data.push(todo);

        db.writeTodos(data);
        res.send('Todo created');
    });

    app.delete('/todos/:id', (req, res) => {
        const id = req.params.id;

        let data = db.readTodos();

        let dataToWrite = data.filter(todo => todo.id != id );
        
        console.log(dataToWrite[0]);

        db.writeTodos(dataToWrite);

        res.send('Todo deleted');
    });
};
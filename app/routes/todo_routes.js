module.exports = function (app, db) {
    app.get('/todos/:id', (req, res) => {
        const id = req.params.id;
        let data = db.readTodos();

        let searchedTodo = data.filter(todo => todo.id == id);

        res.send(searchedTodo);
    });

    app.post('/todos', (req, res) => {
        let data = db.readTodos();

        const todo = {
            id: db.giveId(),
            title: req.body.title,
            description: req.body.description
        };

        data.push(todo);

        db.writeTodos(data);

        db.commitId();
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
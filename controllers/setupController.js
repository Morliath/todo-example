var Todos = require('../models/todoModel');

module.exports = function (app) {

    app.get('/api/setupTodos', function (req, res) {
        // seed database
        var starterTodos = [
            {
                userName: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        })
    });
}
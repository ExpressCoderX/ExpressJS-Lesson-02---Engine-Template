var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
var todos = [
    { id: 1, name: 'Name A', job: 'Cook'},
    { id: 2, name: 'Name B', job: 'Study'}
]        

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Name A'
    });
});

app.get('/todos', (request, response) => {
    response.render('todos/index', {
        todos: todos
    });
});


app.get('/todos/search', (request, response) => {
    var q = request.query.q;
    var fillterTodos = todos.filter(todo =>{
        return todo.job.toLowerCase().indexOf(q.toLocaleLowerCase()) !== -1;        
    });    
    response.render('todos/index', {
        todos: fillterTodos        
    })    
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
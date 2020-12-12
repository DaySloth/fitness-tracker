module.exports = (app) => {
    app.get('/api/workouts', (req, res)=>{
        console.log("get, /api/workouts");
        console.log(req.body);
    });

    app.put('/api/workouts/:id', (req, res)=>{
        console.log("put, /api/workouts"+ req.params.id);
        console.log(req.body);
    });

    app.post('/api/workouts', (req, res)=>{
        console.log("post, /api/workouts");
        console.log(req.body);
    });

    app.get('/api/workouts/range', (req, res)=>{
        console.log("get, /api/workouts/range");
        console.log(req.body);
    });
};

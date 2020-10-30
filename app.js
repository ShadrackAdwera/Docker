const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker then k8s!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Moringa School Angular IP Goals</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Add Goal</label>
            <input type="text" name="goal">
          </div>
          <button>SUBMIT</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const goal = req.body.goal;
  console.log(goal);
  userGoal = goal;
  res.redirect('/');
});

app.listen(5000);
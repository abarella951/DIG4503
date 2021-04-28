import Express from "express";
import chalk from "chalk";

const App = Express();
//opens project on localhost:3010
const port = 3010;
//changes color of text in terminal
console.log(chalk.yellow('Server running!'));

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

//lists full array of names
App.get('/names/', (req,res)=>{
    res.json({names})
});

App.get('/names/:person', (req, res) => {
    let person = req.params.person;
    if (names.includes(person)){
        res.json({ 'Person': person});
    } else {
        res.json({ 'Person': "Not available" });
    }
});
//type in any letter and a name should come up
App.get('/search/:person', (req, res) => {
    const result = names.filter(str => str.includes(req.params.person)); 

    if(result != 0) {
        res.json({ search: result});
    } else {
        res.json({ search: "Not available" });
    }
})

//Lists names in terminal in red
  console.log(chalk.red('The server should display one of these names %s'), names);

App.listen(port, () => {

});
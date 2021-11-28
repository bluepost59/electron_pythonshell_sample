const { PythonShell } = require("python-shell");

let pydata = "";

let pyshell = new PythonShell("pyscript.py");

pyshell.send("momoka");
pyshell.on("message", function (message) {
    console.log(message);
});



// PythonShell.run("pyscript.py", "hoge",
//     function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
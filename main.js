global.counter = 0; //Keeps track of how many instances of the class are created
const fs = require('fs');

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, visitorAssistance) {
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.visitorAssistance = visitorAssistance;
        counter++;
        this.number = counter;
    }
}

//Saving information in JSON FILE:
function save(Visitor) {
    let data = JSON.stringify(Visitor);
    num = Visitor.number;

    fs.writeFileSync('Visitor_' + num + '_.json', data);
}

//Takes in number and returns visitor associated with the number
function load(no) {

    fs.readdir(process.cwd(), handleFiles); ///Read files in the folder    (Process.cwd() = current working directory)
    var filename;
    var i;

    function handleFiles(err, files) {
        for (i = 0; i < files.length; ++i) {
            filename = files[i];
            if (filename.match(no)) //Match filename with strings(no)
            {
                //Open the file and get the name:
                fs.readFile(filename, (err, data) => {
                    if (err) throw err;
                    let guest = JSON.parse(data);
                    console.log(guest.fullName);
                    return guest.fullName;
                });
            }
        }
    }
}



visitor = new Visitor('Rokhuda', 12, 1, 21 - 5 - 19, 'Shinigami love apples', 'Ryuk');
visitor2 = new Visitor('Light', 12, 1, 21 - 5 - 19, 'Shinigami love apples', 'Ryuk');
visitor3 = new Visitor('Rem', 12, 1, 21 - 5 - 19, 'Shinigami love apples', 'Ryuk');

save(visitor);
save(visitor2);
save(visitor3);

//Testing
load(1);
load(2);
load(3);
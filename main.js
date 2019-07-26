const fs = require('fs');



class Visitor {
    constructor(fullName, age, visitor, dateOfVisit, timeOfVisit, comments, visitorAssistance) {

  

        this.fullName = fullName;
        this.age = age;
        this.visitor = visitor;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.visitorAssistance = visitorAssistance;
    }


    visitorCount() {
        var count = 0;
        var increment = function () {
            return ++count;
        }
        return increment;
    }

    load(visitorCount) {
        if (visitorCount <= 0) {
            console.log("File doesn't exist");
        }
        var path = "visitor_" + visitorCount;
        var data = fs.readFileSync(path);
        console.log(data);
    }

    save() {
        if (typeof (storage) !== "undefined" && Object.isObject(this)) {
            localStorage.setItem('visitor', JSON.stringify('visitor'));

        }
        return (visitor + "_" + "visitorCount" + ".json");
    }


}


let visitor = new Visitor('Rokhuda', 12, 1, 21 - 5 - 19, 'Shinigami love apples', 'Ryuk')



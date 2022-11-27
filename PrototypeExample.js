var Employee = function (id, name) {
    if(!id || !name) {
        throw new Error("Employee id and name are mandatory");
    }
    this.id =  id;
    this.name =  name;
}

Employee.prototype.setSalary = function(salary) {
    this.salary = salary;
}

var Manager = function (params) {
    Employee.apply(this, arguments);   
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager
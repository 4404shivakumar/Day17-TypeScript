var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var Direction;
(function (Direction) {
    Direction[Direction["left"] = 0] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("Moving ".concat(Direction[direction]));
}
move(Direction.left);
var randomeValue;
randomeValue = 10;
console.log(randomeValue);
randomeValue = "Hello";
console.log(randomeValue);
randomeValue = true;
console.log(randomeValue);
//tuple implementation
var tuple;
tuple = [1, "Hello"];
console.log(tuple);
// enum
var Department;
(function (Department) {
    Department["Science"] = "Science";
    Department["Commerce"] = "Commerce";
    Department["Arts"] = "Arts";
})(Department || (Department = {}));
//decorator
function LogCreation(constructor) {
    console.log("Student class created:".concat(constructor.name, " "));
}
//class & tuple
var Student = function () {
    var _classDecorators = [LogCreation];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Student = _classThis = /** @class */ (function () {
        function Student_1() {
            this.studentMap = new Map();
            console.log("Student System Initilized");
        }
        Student_1.prototype.addStudent = function (student) {
            var id = student.id, name = student.name, age = student.age, department = student.department;
            this.studentMap.set(id, [name, age, department]);
        };
        //itertor 
        Student_1.prototype.printAllSudents = function () {
            for (var _i = 0, _a = this.studentMap.entries(); _i < _a.length; _i++) {
                var _b = _a[_i], id = _b[0], _c = _b[1], name_1 = _c[0], age = _c[1], dept = _c[2];
                console.log("ID: ".concat(id, ", Name: ").concat(name_1, ", Age: ").concat(age, ", Dept: ").concat(dept));
            }
        };
        return Student_1;
    }());
    __setFunctionName(_classThis, "Student");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Student = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Student = _classThis;
}();
var s = new Student();
s.addStudent({ id: 1, name: "Raj", age: 20, department: Department.Science });
s.printAllSudents();

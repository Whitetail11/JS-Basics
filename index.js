function validNumber(value) {
    let res = true;
    if (typeof value !== "number" || !isFinite(value) || isNaN(value))
        res = false;
    return res;
};
function addDays(value) {
    let res = new Date();
    res.setDate(res.getDate() + value);
    return res;
};
function evenFilter(array) {
    let res = array.filter((item) =>
        item % 2 == 0
    )
    return res;
};
function cutStrings(arr, length) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substr(0, length);
    }
    return arr;
}
function getFibonachiHelper(value) {
    if (value == 0)
        return 0;
    if (value == 1)
        return 1;
    return getFibonachiHelper(value - 1) + getFibonachiHelper(value - 2);
}
function getFibonachi(value) {
    let res = new Array();
    while (getFibonachiHelper(value) != 0)
        res.push(getFibonachiHelper(value--))
    return res;
}
function myDeepCopy(value) {
    let res = {};
    for (let key in value) {
        if (typeof value === "object" || typeof value === "function") {
            res[key] = cloneDeep(value[key]);
        } else
            res[key] = value[key]
    }
    return res;
}
function extend(obj, bonus) {
    for (key in bonus) {
        obj[key] = bonus[key]
    }
    return obj
}
function powBuilder(pow) {
    const res = function (n) {
        return Math.pow(n, pow);
    }
    return res;
}

Object.defineProperty(String.prototype, "firstToUppercase", {
    value: function firstToUppercase() {
        if (!this) return this;

        return this[0].toUpperCase() + this.slice(1);
    },
    writable: true,
    configurable: true
});
function countIntegerArgumentsFirst(...args) {
    let counter = 0;

    for (let arg of args) {
        if (typeof arg === "number")
            counter++;
    }

    return counter;
}
function countIntegerArgumentsSecond() {
    let counter = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number")
            counter++;
    }

    return counter;
}
function executeWithDelay(func, delay) {
      setTimeout(func, delay);
}
function getComment(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(response => response.json())
  .then(json => console.log(json))
}
let user = {
    name: "NAME",
    gender: "male",
    personalInfo: {
        dob: "11/05/1989"
    }
}
function getUserAge(user) {
    let {dob} = user.personalInfo;
    let res = 0;
    dob = new Date(dob);
    current = new Date();
    if(current.getMonth() < dob.getMonth()) {
        res = current.getFullYear() - dob.getFullYear() - 1;
    }
    else {
        if(current.getDate() < dob.getDate()) 
        {
            res = current.getFullYear() - dob.getFullYear() - 1;
        }
        else
            res = current.getFullYear() - dob.getFullYear();
    }
    return res;
}
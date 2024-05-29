function getName(){
    return "Shattajit";
}

const getAge = () => {
    return 25;
}

exports.f1 = getName;
exports.f2 = getAge;


module exports = {
    getName,
    getAge
}
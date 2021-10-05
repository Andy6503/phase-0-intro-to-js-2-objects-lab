const employee ={
    name: "Nathalia",
    streetAdress: "270 Deer rd"
}
function updateEmployeeWithKeyAndValue(obj,key,value){
    return{
        ...obj,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
obj[key]=value;
return obj;
}
function deleteFromEmployeeByKey(employee,key){
    const newList = {...employee};
    delete newList[key];
    return {newList};
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
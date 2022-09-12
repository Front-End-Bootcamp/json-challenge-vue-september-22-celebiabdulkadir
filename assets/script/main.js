import data from './data.json' assert {type:'json'} // get the all value from data.json as "data"
function getGroupPeople(param) { // get people who are in the related names and push into an array
    let people = [];
    for(let i = 0; i <data.length ;i++){
        if(data[i].group == param){
            people.push(data[i].name)
        };
    };
    return people;
}
function getGroupAssitant(param) { // get assistant names and push into an array
    let assistantName = [];
    for(let i = 0; i <data.length ;i++){
        if(data[i].group == param && data[i].type == "assistant"){
            assistantName.push(data[i].name)
        };
    };
    return assistantName;
}
function getGroupsName(){  // get the gruop names and push into an array
    let groups = [];
    for (let i = 0; i <data.length; i++){
        groups.push(data[i].group)
         };
    let newGroups = [...new Set(groups)]; // eliminate repeated elements
    return newGroups;
};
console.log(getGroupsName())
console.log(getGroupAssitant("Orchid"));
console.log(getGroupPeople("LightSeaGreen"));
function getdata(){ // get the all data
    let newArr = [];
    for(let i = 0; i < getGroupsName().length; i ++){
        const ArrElement = {
            "group": "",
            "student": [],
            "assistant": ""
        };
        ArrElement.group = getGroupsName()[i];
        ArrElement.student = getGroupPeople(getGroupsName()[i]);
        ArrElement.assistant = getGroupAssitant(getGroupsName()[i]).toString();
    newArr.push(ArrElement)
    }
    return newArr; 
}
console.log(getdata())
function getGroupData(param) { // sort data by group name
    let indexOfparam = 0
    if( getdata().group == param){
        indexOfparam = getdata().indexOf(getdata().group)
    }
    return  getdata()[indexOfparam];
}
console.log(getGroupData("Orchid"))


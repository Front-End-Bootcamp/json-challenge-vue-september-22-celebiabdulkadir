import data from './data.json' assert {type:'json'} // get the all value from data.json as "data"
function getGroupPeople(param) { // get people who are in the related group
    return data
    .filter((asst) => asst.type !== "assistant" && asst.group === param)
    .map((asst) => asst.name)
}
console.log(getGroupPeople("Orchid"))
function getGroupAssistant(param) { // get assistant who is in the related group
    return data
    .filter(std => std.type === "assistant")
    .find(std => std.group === param)
}
console.log(getGroupAssistant("Orchid"))
function getGroupData(param) { // get the all data for related group
    let groupPeople = getGroupPeople(param);
    let asistant = getGroupAssistant(param);
    return {
        group : param,
        studensName: groupPeople,
        asistant : asistant.name
    }
}
console.log(getGroupData("Orchid"))


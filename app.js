function initDiv(message, type){
    let arr = ["info","success","warning","danger"];
    let check = (type) => type;
    if((arr.some(check)) == true){
        document.body.innerHTML = `
        <div class="alert alert-${type}" role="alert">
        ${message}
        </div>
        `
    }
}
initDiv('Hello, world', "warning")


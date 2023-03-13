function validateForm(){
    let x = document.validteszt.vezeteknev.value;
    if ( x === ""){
        alert("A mező kitöltése kötelező")
        return false
    }
    return true;
}
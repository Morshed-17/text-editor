// font size changer

document.getElementById('font-size-input').addEventListener('keyup', function(e){
    let fontSize = e.target.value
    inputField.style.fontSize= fontSize+'px'
   
})
document.getElementById('font-size-input').addEventListener('change', function(e){
    let fontSize = e.target.value
    inputField.style.fontSize= fontSize+'px'
   
})

// font case changer
let caseClickCount = 0
document.getElementById('case-btn').addEventListener('click', function(){
    caseClickCount++
    if(caseClickCount%2 !== 0){
        inputField.style.textTransform='uppercase'
    }
    else{
        inputField.style.textTransform='none'
    }
})

// text color changer
document.getElementById('color-input').addEventListener('input', function(e){
    const theColor = e.target.value;
    inputField.style.color= theColor
    
})

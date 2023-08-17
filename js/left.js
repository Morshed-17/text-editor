let BoldClickCount = 0;
// bold  
document.getElementById('bold-btn').addEventListener('click', function(event){
    BoldClickCount++
    if(BoldClickCount%2 !== 0){
        inputField.style.fontWeight= '700'
    }else{
        inputField.style.fontWeight = ''
    }
})

let italicClickCount = 0
// italic

document.getElementById('italic-btn').addEventListener('click', function(){
    italicClickCount++
    if(italicClickCount%2 !== 0){
        inputField.style.fontStyle='italic'
    }
    else{
        inputField.style.fontStyle='normal'

    }
})


let underlineClickCount = 0
//  underline
document.getElementById('underline-btn').addEventListener('click', function(){
    underlineClickCount++
    if(underlineClickCount%2 !== 0){
        inputField.style.textDecoration='underline'
    }
    else{
        inputField.style.textDecoration= 'none'
    }
})

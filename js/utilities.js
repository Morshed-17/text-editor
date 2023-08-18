// bold btn
const inputField = document.getElementById('input-field')

// active btns

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', function(){      
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
        
    })
  
})

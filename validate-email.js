const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', function(event){
    const emailEl = document.getElementById('email')
    if(!emailEl){
        console.warn('did not select an email element for email validation')
        return
    }

    const email = emailEl.value
    const emailPattern = /^[0-9A-Za-z]+@[0-9A-Za-z]+\.[0-9A-Za-z]+$/
    if (!emailPattern.test(email )){
        event.preventDefault()
        emailEl.focus()
        alert('The email address is incorrect')
        return
    }
})
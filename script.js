const scriptURL = '' // ADD Your Sheet Link Here
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        success.innerHTML='data successfully submit'

        setTimeout(function()
        {
            success.innerHTML=''
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
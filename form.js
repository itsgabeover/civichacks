/*global console, $, document*/
/*esline-disable no-console*/
document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
     //whatever javascript function you want to do
  }
  
const form = document.getElementById('form');
const eventname = document.getElementById('eventname');
const location= document.getElementById('location');
const time = document.getElementById('time');




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const eventnameValue = eventname.value.trim();
    const locationValue = location.value.trim();
    const timeValue = time.value.trim();
  

    if(eventnameValue === '') {
        setError(eventname, 'Event name is required');
    } else {
        setSuccess(eventname);
    }

    if(locationValue === '') {
        setError(location, 'Location is required'); 
    } else {
        setSuccess(location);
    }

    if(timeValue === '') {
        setError(time, 'Event time is required');
 
    } else {
        setSuccess(time);
    }


};

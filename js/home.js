const signinbutton=document.querySelector('#signInButton');
const signupbutton=document.querySelector('#signUpButton');
const overlay_container= document.querySelector('.container .overlay-container')
const overlay=document.querySelector('.container .overlay-container .overlay')
const signinform=document.querySelector('.container .sign-in-form');
const signupform=document.querySelector('.container .sign-up-form');

signinbutton.addEventListener('click',() => {
	overlay_container.style.transform='translateX(100%)';
	overlay.style.transform='translateX(-50%)';
	signinform.classList.add('active');
	signupform.classList.remove('active');

});

signupbutton.addEventListener('click',() => {
	overlay_container.style.transform='translateX(0)';
	overlay.style.transform='translateX(0)';
	signupform.classList.add('active');
	signinform.classList.remove('active');  
});

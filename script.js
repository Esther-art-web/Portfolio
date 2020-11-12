var home= document.getElementById('home');
var about= document.getElementById('about');
var skills= document.getElementById('skills');
var work= document.getElementById('work');
var certificate= document.getElementById('certificate');
var contactme = document.getElementById('contactme');

home.addEventListener('mouseover', ()=>{
    home.innerHTML='Home'
});
home.addEventListener('mouseout', ()=>{
    home.innerHTML= '<i class="fa fa-home"></i>'
});

about.addEventListener('mouseover', ()=>{
    about.innerHTML='About'
});
about.addEventListener('mouseout', ()=>{
    about.innerHTML= '<i class="fa fa-user"></i>'
});

skills.addEventListener('mouseover', ()=>{
    skills.innerHTML='Skills'
});
skills.addEventListener('mouseout', ()=>{
    skills.innerHTML= '<i class="fa fa-cogs"></i>'
});

work.addEventListener('mouseover', ()=>{
    work.innerHTML='Work'
});
work.addEventListener('mouseout', ()=>{
    work.innerHTML= '<i class="fa fa-briefcase"></i>'
});

certificate.addEventListener('mouseover', ()=>{
    certificate.innerHTML='Certificate'
});
certificate.addEventListener('mouseout', ()=>{
    certificate.innerHTML= '<i class="fa fa-certificate"></i>'
});
contactme.addEventListener('mouseover', ()=>{
    contactme.innerHTML='Contact'
});
contactme.addEventListener('mouseout', ()=>{
    contactme.innerHTML= '<i class="fa fa-envelope"></i>'
});

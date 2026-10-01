(function(){
var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded','false')}});
document.getElementById('y').textContent=new Date().getFullYear();
var f=document.getElementById('quote'),s=document.getElementById('status');
f.addEventListener('submit',function(e){
e.preventDefault();s.textContent='Sending…';
fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}})
.then(function(r){if(!r.ok)throw 0;f.reset();s.textContent='Thank you. We will reply by email.'})
.catch(function(){s.textContent='Could not send. Please email sales@example.com instead.'})});
})();

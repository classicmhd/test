(function(){
  var b=document.querySelector('.menu'),n=document.getElementById('nav');
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
  document.querySelectorAll('.ph img').forEach(function(i){
    var f=i.parentNode;
    if(i.complete&&i.naturalWidth)f.classList.add('has-img');
    i.addEventListener('load',function(){f.classList.add('has-img')});
    i.addEventListener('error',function(){i.hidden=true});
  });
  document.getElementById('yr').textContent=new Date().getFullYear();
  // Static-site form: opens the visitor's email client. Replace with Formspree/Netlify etc. if desired.
  document.getElementById('enquiry').addEventListener('submit',function(e){
    e.preventDefault();var d=new FormData(e.target),g=function(k){return d.get(k)||''};
    var body='Name: '+g('name')+'\nCompany: '+g('company')+'\nPhone: '+g('phone')+'\nProject type: '+g('type')+'\n\n'+g('message');
    location.href='mailto:sales@example.com?subject='+encodeURIComponent('NM Fire Pumps Bangladesh enquiry – '+g('company'))+'&body='+encodeURIComponent(body);
  });
})();

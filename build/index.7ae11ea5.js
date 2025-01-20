document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("href"),r=document.querySelector(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});
//# sourceMappingURL=index.7ae11ea5.js.map

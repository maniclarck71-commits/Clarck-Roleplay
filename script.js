const menuBtn=document.getElementById("menuBtn"),navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>{navMenu.classList.toggle("active");menuBtn.textContent=navMenu.classList.contains("active")?"✕":"☰"});
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>{navMenu.classList.remove("active");menuBtn.textContent="☰"}));

const counters=document.querySelectorAll("[data-target]");
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const c=e.target,t=Number(c.dataset.target);let n=0,step=Math.max(1,Math.ceil(t/80));const run=()=>{n+=step;if(n>=t){c.textContent=t.toLocaleString("fa-IR");return}c.textContent=n.toLocaleString("fa-IR");requestAnimationFrame(run)};run();observer.unobserve(c)})},{threshold:.5});
counters.forEach(c=>observer.observe(c));

let players=247;
setInterval(()=>{players+=Math.floor(Math.random()*7)-3;players=Math.max(180,Math.min(350,players));document.getElementById("players").textContent=players.toLocaleString("fa-IR")},5000);

function showToast(message){const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}
function copyIP(){const ip="play.clarckrp.ir:7777";if(navigator.clipboard)navigator.clipboard.writeText(ip).then(()=>showToast("IP سرور کپی شد ✓")).catch(()=>showToast(ip));else showToast(ip)}
function buyProduct(product){showToast("محصول «"+product+"» انتخاب شد.")}

const animated=document.querySelectorAll(".feature-card,.news-card,.team-card,.shop-card,.rule");
const ao=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity="1";e.target.style.transform="translateY(0)"}}),{threshold:.1});
animated.forEach(el=>{el.style.opacity="0";el.style.transform="translateY(25px)";el.style.transition="opacity .6s ease,transform .6s ease";ao.observe(el)});

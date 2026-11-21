const $=s=>document.querySelector(s),cards=$("#cards"),dlg=$("#detail");
function render(f){cards.innerHTML="";R.filter(r=>f==="all"||r.w===f).forEach((r,i)=>{const c=document.createElement("div");c.className="card "+r.w;c.style.animationDelay=i*60+"ms";c.tabIndex=0;
c.innerHTML=`<div class="art">${pic(R.indexOf(r))}<i>${r.e}</i></div><div class="cb"><div class="pl">${r.w.toUpperCase()} · ${r.y}</div><h3>${r.n}</h3><p>${T(r).g}</p><span class="tag">${HEARD.includes(R.indexOf(r))?"✅":"📻"} ${r.fr} MHz</span>${r.t.map(x=>`<span class="tag">${x}</span>`).join("")}</div>`;
const open=()=>show(r);c.onclick=open;c.onkeydown=e=>e.key==="Enter"&&open();
c.onmousemove=e=>{const b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform=`rotateY(${x*10}deg) rotateX(${-y*10}deg) translateZ(6px)`};
c.onmouseleave=()=>c.style.transform="";cards.appendChild(c)})}
function show(r0){const i=R.indexOf(r0),r=T(r0),go=d=>show(R[(i+d+R.length)%R.length]);
dlg.innerHTML=`<button class="x" aria-label="Close">✕</button><div class="dh"><div class="kick">${r.w.toUpperCase()} · ${r.y}</div><h3>${r.e} ${r.n}</h3>${fig(i)}</div><div class="db"><div><p class="q" id="qt"></p><h4>${L("THE STORY","القصة")}</h4><p>${r.s}</p><button class="nb" id="say">${L("🔊 Hear this relic","🔊 استمع لقصتها")}</button> <a class="nb" style="text-decoration:none;display:inline-block" href="ghostradio.html#${i}">${L("📻 Tune in","📻 اضبط الراديو")} · ${r.fr} MHz</a></div><div><h4>${L("MISSION FACTS","حقائق المهمة")}</h4><ul>${r.f.map(x=>`<li>${x}</li>`).join("")}</ul></div></div><div class="pn"><button class="nb" id="pv">${L("← Previous","السابق →")}</button><button class="nb" id="nx">${L("Next →","← التالي")}</button></div>`;
if(!dlg.open)dlg.showModal();
const t='"'+r.q+'"',qt=$("#qt");let k=0;clearInterval(window.tw);window.tw=setInterval(()=>{qt.textContent=t.slice(0,++k);if(k>=t.length)clearInterval(window.tw)},26);
dlg.querySelector(".x").onclick=()=>dlg.close();$("#pv").onclick=()=>go(-1);$("#nx").onclick=()=>go(1);
$("#say").onclick=()=>{const s=speechSynthesis;if(s.speaking){s.cancel();return}const u=new SpeechSynthesisUtterance(r.q+" "+r.s);u.lang=L("en-US","ar");u.rate=.95;s.speak(u)}}
dlg.onclose=()=>{speechSynthesis.cancel();clearInterval(window.tw)};
addEventListener("keydown",e=>{if(!dlg.open)return;const n=$("#nx"),p=$("#pv");if(e.key==="ArrowRight")n.click();if(e.key==="ArrowLeft")p.click()});
dlg.onclick=e=>{if(e.target===dlg)dlg.close()};
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)});
render("all");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);e.target.querySelectorAll("[data-n]").forEach(n=>{const t=+n.dataset.n;let v=0;const k=setInterval(()=>{v++;n.textContent=v;if(v>=t)clearInterval(k)},900/t)})}}),{threshold:.15});
document.querySelectorAll(".rv,.ti").forEach(el=>io.observe(el));
addEventListener("scroll",()=>{const h=document.documentElement;$("#bar").style.width=h.scrollTop/(h.scrollHeight-h.clientHeight)*100+"%"});
const cv=$("#stars"),x=cv.getContext("2d");let W,H,S=[],mx=0,my=0;
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;S=Array.from({length:Math.min(220,W/5)},()=>({x:Math.random()*W,y:Math.random()*H,z:Math.random()*.8+.2,p:Math.random()*6}))}
addEventListener("resize",size);addEventListener("mousemove",e=>{mx=e.clientX/W-.5;my=e.clientY/H-.5});size();
(function loop(t){x.clearRect(0,0,W,H);S.forEach(s=>{s.y+=s.z*.12;if(s.y>H)s.y=0;const a=.4+.6*Math.abs(Math.sin(t/900+s.p));x.fillStyle=`rgba(200,225,255,${a*s.z})`;x.beginPath();x.arc(s.x-mx*s.z*30,s.y-my*s.z*30,s.z*1.4,0,7);x.fill()});requestAnimationFrame(loop)})(0);

addEventListener("mousemove",e=>{const g=$("#glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
setInterval(()=>{if(document.hidden)return;const s=document.createElement("div");s.className="ss";s.style.top=Math.random()*45+"vh";s.style.left=Math.random()*60+"vw";document.body.appendChild(s);setTimeout(()=>s.remove(),1300)},3200);
const Q=[
["Which rover was built for 90 days but lasted about 14 years?",["Opportunity","Spirit","Sojourner"],0],
["Which Apollo relic still bounces lasers back to Earth?",["ALSEP station","Laser retroreflector","Lunar rover"],1],
["How many flights did Ingenuity make?",["5","30","72"],2],
["Why was Eagle's descent stage left on the Moon?",["It was the launch platform and not meant to return","It broke on landing","It was forgotten"],0],
["What ended the Phoenix mission?",["A meteor strike","Running out of fuel","Polar winter darkness"],2]];
const QA=[["أي مركبة صُممت لـ90 يومًا وعاشت نحو 14 عامًا؟",["أوبورتيونيتي","سبيريت","سوجورنر"],0],["أي أثر من أبولو ما زال يعكس الليزر إلى الأرض؟",["محطة ALSEP","العاكس الليزري","المركبة القمرية"],1],["كم رحلة طيران قامت بها إنجينيويتي؟",["5","30","72"],2],["لماذا تُركت مرحلة هبوط النسر على القمر؟",["كانت منصة الإطلاق ولم تُصمم للعودة","تعطلت أثناء الهبوط","نُسيت"],0],["ما الذي أنهى مهمة فينيكس؟",["اصطدام نيزك","نفاد الوقود","ظلام الشتاء القطبي"],2]];
let qi=0,sc=0;const qz=$("#qz");
function ask(){if(qi>=Q.length){qz.innerHTML=`<div class="pr">${L("MISSION COMPLETE","اكتملت المهمة")}</div><div class="big">${sc}/${Q.length}</div><p>${sc>=4?L("Flight director level. The relics are proud.","بمستوى مدير رحلة. الآثار فخورة بك."):sc>=2?L("Solid crew member. Explore the archive again!","عضو طاقم ممتاز. أعد استكشاف الأرشيف!"):L("Rookie launch. The archive is waiting for you.","إطلاق مبتدئ. الأرشيف ينتظرك.")}</p><button class="nb" id="rs">${L("Try again","حاول مجددًا")}</button>`;$("#rs").onclick=()=>{qi=sc=0;ask()};return}
const q=(lang==="ar"?QA:Q)[qi];qz.innerHTML=`<div class="pr">${L("QUESTION","السؤال")} ${qi+1} / ${Q.length}</div><h3>${q[0]}</h3>`+q[1].map((o,i)=>`<button class="op" data-i="${i}">${o}</button>`).join("");
qz.querySelectorAll(".op").forEach(b=>b.onclick=()=>{const ok=+b.dataset.i===q[2];if(ok)sc++;qz.querySelectorAll(".op").forEach(x=>{x.disabled=true;if(+x.dataset.i===q[2])x.classList.add("ok")});if(!ok)b.classList.add("no");setTimeout(()=>{qi++;ask()},1100)})}
ask();

(function(){const c=$("#lg"),g=c.getContext("2d"),W=c.width=720,H=c.height=420,K={},msg=t=>$("#gs").textContent=t,
LV=[{n:"🌕 Moon",a:"🌕 القمر",g:.022,pw:80,col:"#8d97ad",w:0},{n:"🔴 Mars",a:"🔴 المريخ",g:.032,pw:70,col:"#b5532f",w:0},{n:"🌪️ Dust storm",a:"🌪️ عاصفة غبار",g:.032,pw:60,col:"#a2482a",w:.012}];
let s,pts,pad,fr=0,lv=0,un=0;try{un=+localStorage.sr_lv||0}catch(e){}
const ty=px=>{const i=Math.min(pts.length-2,Math.max(0,Math.floor(px/20))),a=pts[i],b=pts[i+1];return a+(b-a)*((px-i*20)/20)};
function bar(){const e=$("#lv");e.innerHTML="";LV.forEach((l,i)=>{const b=document.createElement("button");b.className="nb";b.style.margin="0";b.textContent=(i>un?"🔒 ":"")+L(l.n,l.a);b.disabled=i>un;if(i===lv)b.style.borderColor="var(--cy)";b.onclick=()=>{lv=i;init()};e.appendChild(b)})}
function init(){const P=LV[lv].pw;pad=60+Math.floor(Math.random()*(W-120-P));pad-=pad%20;pts=[];let y=H-80;for(let i=0;i<=W/20+1;i++){const px=i*20;if(px>=pad&&px<=pad+P)pts.push(H-70);else{y=Math.max(H-170,Math.min(H-40,y+(Math.random()-.5)*44));pts.push(y)}}
s={x:W/2,y:40,vx:(Math.random()-.5)*1.5,vy:0,a:0,f:100,st:"play"};bar();msg(L("Land softly on the glowing pad. Keys: arrows / space, R to restart.","اهبط بلطف على المنصة المضيئة. المفاتيح: الأسهم / المسافة، وR للإعادة."))}
function step(){fr++;if(s.st!=="play")return;const V=LV[lv];if(K.l)s.a-=.04;if(K.r)s.a+=.04;if(K.t&&s.f>0){s.vx+=Math.sin(s.a)*.055;s.vy-=Math.cos(s.a)*.055;s.f-=.3}s.vy+=V.g;s.vx+=Math.sin(fr/60)*V.w;s.x+=s.vx;s.y+=s.vy;if(s.x<0||s.x>W){s.vx*=-.5;s.x=Math.max(0,Math.min(W,s.x))}
if(s.y+12>=ty(s.x)){const on=s.x>pad+8&&s.x<pad+V.pw-8,ok=on&&Math.abs(s.vy)<1.1&&Math.abs(s.vx)<.8&&Math.abs(s.a)<.3;s.st=ok?"win":"crash";s.y=ty(s.x)-12;
if(ok){let x=L("🎉 Touchdown! You just created a relic: your descent stage stays here forever.","🎉 هبوط ناجح! صرت أنت أثرًا جديدًا: مرحلة هبوطك ستبقى هنا للأبد.");if(lv<2&&un<lv+1){un=lv+1;try{localStorage.sr_lv=un}catch(e){}x+=L(" Next level unlocked!"," فُتح المستوى التالي!");bar()}msg(x)}
else msg(L("💥 Crash. ","💥 تحطمت. ")+(on?L("Too fast or tilted.","سرعة عالية أو ميلان."):L("You missed the pad.","أخطأت المنصة."))+L(" Press R or ↻."," اضغط R أو ↻."))}}
function draw(){const V=LV[lv];g.clearRect(0,0,W,H);g.fillStyle=V.col;g.beginPath();g.moveTo(0,H);pts.forEach((y,i)=>g.lineTo(i*20,y));g.lineTo(W+20,H);g.fill();g.shadowColor="#5ee7ff";g.shadowBlur=18;g.fillStyle="#5ee7ff";g.fillRect(pad,H-72,V.pw,3);g.shadowBlur=0;
g.save();g.translate(s.x,s.y);g.rotate(s.a);if(K.t&&s.f>0&&s.st==="play"){g.fillStyle="#ff9a4d";g.beginPath();g.moveTo(-5,10);g.lineTo(0,24+Math.random()*10);g.lineTo(5,10);g.fill()}
g.fillStyle=s.st==="crash"?"#ff4d6d":"#f1f5ff";g.fillRect(-9,-8,18,14);g.fillStyle="#5ee7ff";g.fillRect(-4,-5,8,5);g.strokeStyle="#f1f5ff";g.lineWidth=2;g.beginPath();g.moveTo(-9,6);g.lineTo(-14,12);g.moveTo(9,6);g.lineTo(14,12);g.stroke();g.restore();
g.fillStyle="#f1f5ff";g.font="14px sans-serif";g.fillText("FUEL "+Math.max(0,s.f|0)+"%   SPEED "+Math.abs(s.vy).toFixed(1)+"   TILT "+(s.a*57.3|0)+"°"+(V.w?"   WIND "+(Math.sin(fr/60)>0?"→":"←"):""),14,24)}
const vis=()=>{const b=c.getBoundingClientRect();return b.top<innerHeight&&b.bottom>0},M={ArrowLeft:"l",a:"l",ArrowRight:"r",d:"r",ArrowUp:"t"," ":"t",w:"t"};
addEventListener("keydown",e=>{if(!vis())return;if(M[e.key]){K[M[e.key]]=1;e.preventDefault()}if(e.key==="r")init()});addEventListener("keyup",e=>{if(M[e.key])K[M[e.key]]=0});
[["gl","l"],["gt","t"],["gr","r"]].forEach(([id,k])=>{const b=$("#"+id);b.onpointerdown=e=>{e.preventDefault();K[k]=1};["pointerup","pointerleave","pointercancel"].forEach(ev=>b["on"+ev]=()=>K[k]=0)});
$("#gx").onclick=init;window.gbar=bar;init();(function Lp(){step();draw();requestAnimationFrame(Lp)})()})();
window.onLang=()=>{tr([[".kicker",["أرشيف ناسا الفضائي · متحف قصصي تفاعلي"]],[".hero h2",["رحلوا، لكن إرثهم لم يرحل."]],[".hero p",["ادخل متحفًا بلا جدران. تعرّف على الآلات والتجارب والمركبات التي تركها البشر على القمر والمريخ، واكتشف لماذا ما زالت قصصها مهمة."]],
[".hero .btn",["ادخل الأرشيف <b>↓</b>","📻 راديو الأشباح"]],["nav a",["المهمة","الأرشيف","الاختبار","الخط الزمني","الإرث","اللعبة","الراديو","المصادر"]],
["#about .title",["متحف <em>بلا جدران.</em>"]],["#about .lead",["حين تنتهي مهمة فضائية، لا تعود معداتها دائمًا. بعضها تُرك عمدًا لتخفيف الوزن، وبعضها صمت بعد سنوات من العمل، وبعضها صُمم ليبقى على عالم آخر. ليست مخلفات، بل دليل على الاستكشاف."]],
[".notice",["<strong>توضيح مهم:</strong> كلمة «مهجور» لا تعني دائمًا «معطّل». مراحل هبوط أبولو والمركبات تُركت على القمر عمدًا، وبعض التجارب أُوقفت، ومركبات المريخ صمتت عند انتهاء مهماتها."]],
[".stat span",["عالمان · القمر والمريخ","قطعة أثرية · مركبات ومسابير وتجارب","إرث واحد · معرفة عادت إلى الأرض"]],
["#archive .title",["اختر عالمًا. <em>وقابل آثاره.</em>"]],["#archive .lead",["اضغط على أي معروضة لتفتح قصتها وحقائق مهمتها."]],[".filter",["كل المعروضات","🌕 القمر","🔴 المريخ"]],
["#quiz .title",["اختبر <em>ذاكرتك الفضائية.</em>"]],["#timeline .title",["خط زمني <em>لآثار أقدام البشر.</em>"]],
[".ti",["<strong>1969</strong>تهبط أبولو 11 على القمر، ويضع الروّاد أجهزة علمية مبكرة وعاكسًا ليزريًا.","<strong>1971–1972</strong>تستخدم أبولو 15 و16 و17 مركبات قمرية كهربائية ثم تتركها ومراحل الهبوط خلفها.","<strong>1977</strong>توقف ناسا محطات الحزمة العلمية لأبولو.","<strong>1997</strong>يهبط باثفايندر ومعه سوجورنر، أول مركبة جوالة ناجحة بعجلات على المريخ.","<strong>2004</strong>يصل سبيريت وأوبورتيونيتي إلى المريخ بحثًا عن آثار الماء القديم.","<strong>2008</strong>يهبط فينيكس في القطب الشمالي للمريخ ويدرس تربة غنية بالجليد.","<strong>2010–2011</strong>يصمت سبيريت، وتنهي ناسا محاولات التواصل معه عام 2011.","<strong>2018–2019</strong>يأتي آخر اتصال بأوبورتيونيتي في عاصفة غبار عالمية، وتنتهي المهمة عام 2019.","<strong>2022</strong>تحيل ناسا إنسايت للتقاعد بعد توقف اتصاله.","<strong>2024</strong>تنهي إنجينيويتي طيرانها بعد 72 رحلة إثر تلف في الريشة."]],
["#legacy .title",["تتوقف الآلة. <em>ويستمر الاكتشاف.</em>"]],["#legacy article",["<i>⚙️</i><h3>الهندسة</h3><p>اختبرت كل مهمة طرق الهبوط والتحرك والاتصال والبقاء في أماكن قاسية، وبنت المهمات اللاحقة على دروسها.</p>","<i>🔬</i><h3>العلم</h3><p>صارت الصخور والتربة والموجات الزلزالية والغبار أسهل فهمًا لأن الأجهزة جمعت بياناتها في مكانها.</p>","<i>👣</i><h3>تاريخ البشرية</h3><p>تدل الآثار ومراحل الهبوط والأجهزة على المكان الذي استكشف فيه البشر وروبوتاتهم ما وراء الأرض.</p>"]],
[".msg",["<strong>رسالتنا:</strong> قد تنتهي المهمة، لكن المعرفة التي تصنعها تظل تشكل المستقبل."]],
["#build .kick",["كيف صُنع"]],["#build .title",["مبني على <em>بيانات حقيقية.</em>"]],["#build article",["<i>🛰️</i><h3>مصادر ناسا</h3><p>كل تاريخ وتفصيل في المهمات مأخوذ من صفحات ناسا ومختبر الدفع النفاث، وهي مدرجة في أرشيف المصادر.</p>","<i>🧩</i><h3>بلا أطر عمل</h3><p>HTML وCSS وJavaScript خالصة مع Canvas وWeb Audio. يُحمَّل بسرعة ويعمل في أي مكان.</p>","<i>📻</i><h3>القصص إشارات</h3><p>يحوّل راديو الأشباح كل آلة إلى صوت عليك أن تجده بضبط المؤشر.</p>"]],
["#game .title",["اهبط بـ <em>النسر.</em>"]],["#game .lead",["كل قطعة هنا اضطرت يومًا أن تهبط. الآن جاء دورك. المس المنصة المضيئة بلطف، وكن جزءًا من القصة."]],
["#sources .title",["أرشيف <em>مصادر ناسا.</em>"]],["#sources .lead",["تعتمد التواريخ والتفاصيل العلمية على مواد ناسا ومختبر الدفع النفاث. اقتباسات القصص إعادة سرد إبداعية بصيغة المتكلم وليست تسجيلات حقيقية من المركبات."]],
["footer span",["مشروع تعليمي قصصي · ناسا غير تابعة لهذا المشروع الطلابي ولا تتبناه."]]]);
render(document.querySelector(".filter.active").dataset.filter);dlg.open&&dlg.close();qi=0;sc=0;ask();window.gbar&&window.gbar()};
setLang(lang);

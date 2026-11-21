const R=[
{n:"Eagle Descent Stage",w:"Moon",e:"🚀",y:"1969",t:["Lander","Apollo 11"],g:"The base that launched humanity home.",
q:"I carried two people down, and my top half carried them back. My bottom half stayed to be the first step.",
s:"Apollo 11's lunar module landed in the Sea of Tranquility on July 20, 1969. The descent stage served as the launch platform for the ascent stage, then stayed behind on purpose.",
f:["Crew on the surface: Neil Armstrong and Buzz Aldrin","Left on purpose: the lander's lower half was not meant to return","Footprints nearby remain because the Moon has no wind"]},
{n:"Lunar Roving Vehicles",w:"Moon",e:"🚙",y:"1971–72",t:["Rover","Apollo 15·16·17"],g:"Three electric cars, parked forever.",
q:"I carried explorers farther than their legs could go. Now I am parked, facing nothing.",
s:"Apollo 15, 16 and 17 each carried a folding, battery-powered rover. Crews used them to reach farther sites for samples and science, then left them on the surface.",
f:["Three rovers were left on the Moon, one per mission","Electric and folded to fit inside the lander","Extended how far crews could explore from the landing site"]},
{n:"Apollo Science Stations (ALSEP)",w:"Moon",e:"📡",y:"1969–77",t:["Experiments","Apollo"],g:"Listening to the Moon for years.",
q:"I felt moonquakes and measured the Moon's temperature, and one day they told me to rest.",
s:"The Apollo Lunar Surface Experiments Package stations measured things like seismic activity and heat flow. NASA switched them off in 1977.",
f:["Set up by Apollo crews on several missions","Sent data back to Earth for years","Switched off in 1977; the hardware stayed in place"]},
{n:"Laser Retroreflector",w:"Moon",e:"🔦",y:"1969",t:["Instrument","Apollo 11"],g:"A mirror that still answers Earth.",
q:"I am only a mirror, but when light from Earth finds me, I send it back.",
s:"Apollo 11 astronauts placed a laser retroreflector on the Moon. Scientists have fired lasers at reflectors like it to measure the Earth–Moon distance very precisely.",
f:["Needs no power and no electronics","Used for precise Earth–Moon distance measurements","One of the few relics still scientifically useful"]},
{n:"Surveyor 3",w:"Moon",e:"🛸",y:"1967",t:["Lander","Pre-Apollo"],g:"The robot that got visitors.",
q:"I was alone for two years, then two humans walked over and said hello.",
s:"Surveyor 3 landed in 1967 as a scouting mission before Apollo. In 1969 Apollo 12 astronauts landed near it and brought back parts of it for study.",
f:["Landed on the Moon in 1967","Apollo 12 astronauts visited it in 1969","Returned parts showed how materials age in space"]},
{n:"Sojourner & Pathfinder",w:"Mars",e:"🛰️",y:"1997",t:["Rover","Lander"],g:"The first wheels on Mars.",
q:"I was small, but I proved a robot could roll across another world.",
s:"Mars Pathfinder landed in 1997 with Sojourner, the first successful wheeled rover on Mars. The mission lasted far longer than planned before contact ended.",
f:["First successful wheeled rover on Mars","Landed in 1997","Paved the way for Spirit, Opportunity and beyond"]},
{n:"Spirit",w:"Mars",e:"🤖",y:"2004–11",t:["Rover","MER"],g:"Stuck in sand, never giving up.",
q:"I kept turning my panels toward a Sun that was getting too far away.",
s:"Spirit landed in 2004 and explored far longer than planned. It got stuck in soft sand in 2009, last communicated in 2010, and NASA ended recovery attempts in 2011.",
f:["Landed on Mars in 2004","Got stuck in soft sand in 2009","NASA ended contact attempts in 2011"]},
{n:"Opportunity",w:"Mars",e:"🦾",y:"2004–19",t:["Rover","MER"],g:"The rover that outlived its warranty by 14 years.",
q:"My battery is low and it is getting dark.",
s:"Opportunity landed in 2004 and worked for about 14 years. A planet-wide dust storm in 2018 cut off its power, and NASA declared the mission complete in 2019.",
f:["Planned for a 90-day mission, lasted about 14 years","Last heard from during a global dust storm in 2018","Mission declared over in 2019"]},
{n:"Phoenix",w:"Mars",e:"🧊",y:"2008",t:["Lander","Arctic"],g:"It touched Martian ice.",
q:"I dug into the ground and found ice. Then the long dark winter came.",
s:"Phoenix landed in the Martian Arctic in 2008 and studied ice-rich soil. The mission ended as the polar winter reduced sunlight and power.",
f:["Landed near the Martian north pole in 2008","Studied water ice in the soil","Ended when winter darkness cut its power"]},
{n:"InSight",w:"Mars",e:"🎧",y:"2018–22",t:["Lander","Seismology"],g:"The listener of Marsquakes.",
q:"I listened to the planet's heartbeat until my power ran out.",
s:"InSight landed in 2018 with a seismometer to study the inside of Mars. Dust slowly covered its solar panels, and NASA retired it in 2022 after it stopped communicating.",
f:["Detected marsquakes with a seismometer","Solar panels slowly dimmed under dust","Retired by NASA in 2022"]},
{n:"Ingenuity",w:"Mars",e:"🚁",y:"2021–24",t:["Helicopter","Technology demo"],g:"The first aircraft to fly on another world.",
q:"I was meant to fly five times. I flew seventy-two.",
s:"Ingenuity proved powered flight is possible on Mars. After 72 flights, rotor damage during a landing in January 2024 ended its flying days.",
f:["72 flights, far beyond the original plan","First powered flight on another planet","Rotor damage ended flights in January 2024"]}
];
R.forEach((r,i)=>r.fr=+(89+i*1.7).toFixed(1));
let lang="en",HEARD=[];try{lang=localStorage.sr_lang||"en"}catch(e){}try{HEARD=JSON.parse(localStorage.sr_found||"[]")}catch(e){}
const T=r=>{const a=lang==="ar"&&typeof AR!=="undefined"&&AR[R.indexOf(r)];return a?{...r,...a}:r},L=(e,a)=>lang==="ar"?a:e;
function tr(list){list.forEach(([sel,ar])=>document.querySelectorAll(sel).forEach((e,i)=>{if(e.dataset.en===undefined)e.dataset.en=e.innerHTML;e.innerHTML=lang==="ar"&&ar[i]!==undefined?ar[i]:e.dataset.en}))}
function setLang(l){lang=l;try{localStorage.sr_lang=l}catch(e){}document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";document.querySelectorAll(".lgb").forEach(b=>{b.textContent=l==="ar"?"English":"العربية";b.onclick=()=>setLang(lang==="ar"?"en":"ar")});window.onLang&&window.onLang()}
const IMG={
0:{u:"https://assets.science.nasa.gov/content/dam/science/psd/lunar-science/2023/08/as11_44_6642.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",c:"NASA · Apollo 11 (AS11-44-6642), Eagle's ascent stage returning from the surface"},
1:{u:"https://science.nasa.gov/wp-content/uploads/2023/08/detail_as17-134-20473_orig.jpg?w=1280&format=jpeg",c:"NASA/JSC · Apollo 17 (AS17-134-20473), the Lunar Roving Vehicle with Earth behind it"},
7:{u:"https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA22222.jpg",c:"NASA/JPL-Caltech · Opportunity's first selfie (PIA22222)"},
4:{u:"https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/as12-48-7134_detail.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",c:"NASA · Apollo 12 astronauts visit Surveyor 3 (AS12-48-7134)"},
5:{u:"https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA00611.jpg",c:"NASA/JPL · Mars Pathfinder: Sojourner on the lander just after touchdown (PIA00611)"},
6:{u:"https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA03272.jpg",c:"NASA/JPL-Caltech/Cornell · Spirit self-portrait, 2005 (PIA03272)"},
9:{u:"https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA22876.jpg",c:"NASA/JPL-Caltech · InSight's first selfie (PIA22876)"},
10:{u:"https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA24542.jpg",c:"NASA/JPL-Caltech/MSSS · Perseverance's selfie with Ingenuity (PIA24542)"}};
const pic=i=>IMG[i]?`<img src="${IMG[i].u}" alt="" loading="lazy" onerror="this.remove()">`:"";
const fig=i=>IMG[i]?`<figure class="fg"><img src="${IMG[i].u}" alt="${IMG[i].c}" loading="lazy" onerror="this.parentNode.remove()"><figcaption>${IMG[i].c}</figcaption></figure>`:"";

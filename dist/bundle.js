const t=t=>fetch(`https://fwd.innopolis.app/api/hw2?email=${t}`).then((t=>t.text())).then((t=>t)),e=t=>fetch(`https://fwd.innopolis.university/api/comic?id=${t}`).then((t=>t.json())).then((t=>t)),n=t=>{const e=document.querySelector(".comic-container"),n=e.querySelector(".comic-image"),o=e.querySelector(".comic-title"),c=e.querySelector(".comic-date");n.src=t.img,n.alt=t.alt,o.textContent=t.safe_title,c.textContent=new Date(t.year,t.month-1,t.day).toLocaleDateString()},o=t=>{console.error(t)},c="e.bobkunov@innopolis.university",i=document.querySelector(".comic-button");t(c).then((t=>e(t))).then((t=>n(t))).catch((t=>o(t))),i.addEventListener("click",(()=>{t(c).then(i.disabled=!0).then(i.textContent="Loading...").then((t=>e(t))).then((t=>n(t))).then(i.disabled=!1).then(i.textContent="Next comic").catch((t=>o(t)))}));
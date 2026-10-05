/* ==========================================
   STRIDE GROWTH
   Premium JavaScript
========================================== */

// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(7,26,51,.95)";
        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(7,26,51,.82)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Reveal Animation
// ===============================

const reveals = document.querySelectorAll(
".service-card,.process-card,.case-card,.testimonial-card,.result,.dashboard-card"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

reveals.forEach(item=>observer.observe(item));

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".result h2");

const runCounter = counter=>{

const target = counter.innerText;

const value = parseInt(target.replace(/\D/g,""));

const suffix = target.replace(/[0-9]/g,"");

let count = 0;

const speed = value/120;

const update = ()=>{

count += speed;

if(count < value){

counter.innerText = Math.floor(count)+suffix;

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

};

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(c=>counterObserver.observe(c));

// ===============================
// FAQ
// ===============================

const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(faq=>{

const question=faq.querySelector(".faq-question");

const answer=faq.querySelector(".faq-answer");

question.addEventListener("click",()=>{

faqs.forEach(item=>{

if(item!==faq){

item.querySelector(".faq-answer").style.display="none";

}

});

answer.style.display=

answer.style.display==="block"

?"none"

:"block";

});

});

// ===============================
// Active Navbar
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Floating Dashboard
// ===============================

const dashboard=document.querySelector(".dashboard-card");

let pos=0;

let dir=1;

setInterval(()=>{

if(dashboard){

pos+=dir*.3;

if(pos>10) dir=-1;

if(pos<-10) dir=1;

dashboard.style.transform=`translateY(${pos}px)`;

}

},25);

console.log("Stride Growth Loaded Successfully");

const l1=document.querySelector(".light1");
const l2=document.querySelector(".light2");
const l3=document.querySelector(".light3");

document.addEventListener("mousemove",(e)=>{

l1.animate({

left:e.clientX+"px",
top:e.clientY+"px"

},{duration:300,fill:"forwards"});

l2.animate({

left:e.clientX+"px",
top:e.clientY+"px"

},{duration:600,fill:"forwards"});

l3.animate({

left:e.clientX+"px",
top:e.clientY+"px"

},{duration:900,fill:"forwards"});

});

/* ==========================================
   Snake Cursor Trail
========================================== */

const canvas = document.getElementById("snakeTrail");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const points = [];
const totalPoints = 35;

// Create snake body
for (let i = 0; i < totalPoints; i++) {
    points.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    });
}

let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Head follows mouse
    points[0].x += (mouse.x - points[0].x) * 0.35;
    points[0].y += (mouse.y - points[0].y) * 0.35;

    // Body follows previous point
    for (let i = 1; i < totalPoints; i++) {

        points[i].x += (points[i - 1].x - points[i].x) * 0.35;
        points[i].y += (points[i - 1].y - points[i].y) * 0.35;

    }

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (let i = 1; i < totalPoints; i++) {

        ctx.beginPath();

        ctx.moveTo(points[i - 1].x, points[i - 1].y);
        ctx.lineTo(points[i].x, points[i].y);

        ctx.strokeStyle = `rgba(255,255,255,${1 - i / totalPoints})`;

        ctx.lineWidth = (totalPoints - i) / 4;

        ctx.shadowBlur = 20;
        ctx.shadowColor = "white";

        ctx.stroke();

    }

    requestAnimationFrame(animate);
}

animate();
// ==========================================
// NOVI AI CHATBOT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const aiChatButton = document.getElementById("aiChatButton");
    const aiChatWindow = document.getElementById("aiChatWindow");
    const aiCloseButton = document.getElementById("aiCloseButton");
    const aiChatInput = document.getElementById("aiChatInput");
    const aiSendButton = document.getElementById("aiSendButton");
    const aiChatMessages = document.getElementById("aiChatMessages");

    // Safety check
    if (
        !aiChatButton ||
        !aiChatWindow ||
        !aiCloseButton ||
        !aiChatInput ||
        !aiSendButton ||
        !aiChatMessages
    ) {
        console.error("Novi AI: Chatbot HTML elements not found.");
        return;
    }


    // ==========================================
    // OPEN NOVI
    // ==========================================

    aiChatButton.addEventListener("click", () => {

        aiChatWindow.classList.toggle("active");

        if (aiChatWindow.classList.contains("active")) {
            aiChatInput.focus();
        }

    });


    // ==========================================
    // CLOSE NOVI
    // ==========================================

    aiCloseButton.addEventListener("click", () => {

        aiChatWindow.classList.remove("active");

    });


    // ==========================================
    // ADD AI MESSAGE
    // ==========================================

    function addAIMessage(message) {

        const messageElement = document.createElement("div");

        messageElement.className = "ai-message";


        const avatarElement = document.createElement("div");

        avatarElement.className = "ai-message-avatar";

        avatarElement.textContent = "AI";


        const contentElement = document.createElement("div");

        contentElement.className = "ai-message-content";

        contentElement.textContent = message;


        messageElement.append(
            avatarElement,
            contentElement
        );


        aiChatMessages.appendChild(messageElement);

        aiChatMessages.scrollTop =
            aiChatMessages.scrollHeight;


        return messageElement;

    }


    // ==========================================
    // ADD USER MESSAGE
    // ==========================================

    function addUserMessage(message) {

        const messageElement =
            document.createElement("div");

        messageElement.className =
            "ai-message user-message";


        const contentElement =
            document.createElement("div");

        contentElement.className =
            "ai-message-content";

        contentElement.textContent = message;


        messageElement.appendChild(
            contentElement
        );


        aiChatMessages.appendChild(
            messageElement
        );

        aiChatMessages.scrollTop =
            aiChatMessages.scrollHeight;

    }


    // ==========================================
    // SEND MESSAGE TO NOVI
    // ==========================================

    let aiRequestInProgress = false;


    async function sendMessage() {

        const message =
            aiChatInput.value.trim();


        if (
            !message ||
            aiRequestInProgress
        ) {
            return;
        }


        // Show user's message
        addUserMessage(message);


        // Clear input
        aiChatInput.value = "";


        // Lock input
        aiRequestInProgress = true;

        aiChatInput.disabled = true;

        aiSendButton.disabled = true;


        // Show loading message
        const loadingMessage =
            addAIMessage("Thinking...");


        try {

            const response = await fetch(
                "/.netlify/functions/novi",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        message: message
                    })
                }
            );


            const data =
                await response.json()
                    .catch(() => ({}));


            if (!response.ok) {

                throw new Error(
                    data.error ||
                    "Novi could not process your request."
                );

            }


            if (!data.reply) {

                throw new Error(
                    "Novi returned an empty response."
                );

            }


            // Replace Thinking...
            loadingMessage
                .querySelector(
                    ".ai-message-content"
                )
                .textContent =
                    data.reply;


        } catch (error) {

            console.error(
                "Novi AI Error:",
                error
            );


            loadingMessage
                .querySelector(
                    ".ai-message-content"
                )
                .textContent =
                    "Sorry, I'm temporarily unavailable. Please try later or contact support.";


        } finally {

            aiRequestInProgress = false;

            aiChatInput.disabled = false;

            aiSendButton.disabled = false;

            aiChatInput.focus();

            aiChatMessages.scrollTop =
                aiChatMessages.scrollHeight;

        }

    }


    // ==========================================
    // SEND BUTTON
    // ==========================================

    aiSendButton.addEventListener(
        "click",
        sendMessage
    );


    // ==========================================
    // ENTER KEY
    // ==========================================

    aiChatInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage();

            }

        }
    );

});
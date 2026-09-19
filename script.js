
const MESSAGE =
  "Hey Masha, I know i hurt you most of time. You don't say that, but i know so. " +
  "This gift is only and only for you...... I hope you will enjoy it.";

const TYPING_SPEED = 55;

const SONG_FILE = "music/song.mp3";    // the song file inside your "music" folder
const SONG_VOLUME = 0.7;               // 0 = silent, 1 = full volume
const RESUME_SONG_AFTER_VIDEO = true;  // true: song comes back after the video stops
                                       // false: song stays off after a video plays

const MEMORIES = [
  { type: "photo", file: "photos/pic1.jpg",   caption: "" },
  { type: "photo", file: "photos/pic2.jpg",   caption: "" },
  { type: "video", file: "videos/video1.mp4", caption: "" },
  { type: "photo", file: "photos/pic3.jpg",   caption: "" },
  { type: "photo", file: "photos/pic4.jpg",   caption: "" },
  { type: "photo", file: "photos/pic5.jpg",   caption: "" }
];

const FINAL_MESSAGE = [
  "These are some of our best Moments, Which we have lived Together and I will never ever can Forget Them.. ",
  "There are a lot of things which are left, so keep Watching My Masha....."
];

// These are sample lines. Replace them with your own words.
const TRUE_THINGS = [
  "You are like a dream which got in real when we became best friends.",
  "You are my light in the darkness.",
  "You are the person i trust the most.",
  "You are the person i care about the most.",
  "You are the person I’ve opened up to the most, and I feel like I can truly be myself around you.",
  "You are the first person I call when I’m facing a problem, when I’m happy, when I achieve something, when I want to share something about my day, when I’m sad, during my breakdowns, and many more.",
  "You are my first female friend who let me bring my inner side out..",
  "You are my never ending peace..",
  "You are my idol, my inspiration",
  "If someday i die your name will be the first i will talk about before dying....",
  "If someday we stay far from each other still you will be my Goodmorning and Goodnight...",
  "If someday i lose you still then you will be my only female friend.."
];

// These are sample lines too. Replace them with promises you actually mean.
const OATH_PROMISES = [
  "I promise to always pick up, no matter what time it is.",
  "I promise to tell you the truth, even when it's hard to say.",
  "I promise to never let a fight between us last more than a day.",
  "I promise to remember the small things you tell me, not just the big ones.",
  "I promise to always show up when you need me, not just when it's easy.",
  "I promise to be honest about my side, even when I'm the one who messed up.",
  "I promise this friendship is something I will never take for granted.",
  "I promise that i will always try to take care of you.",
  "I promise that i will celebrate your happiness, like it's my own.",
  "I promise that i will never let you regret on the decision of making me as your bestfriend.",
  "I promise our friendship won't depend on how often we talk.",
  "I promise that i will apologize and listen to you, when the mistake is caused by me, instead my ego coming between us."
];

// Write this in your own words — this is a sample so the page isn't empty.
// Each line inside the [ ] is shown as its own line of the shayari.
const SHAYARI = [
  "Har raaste mein tu mile, ye zaruri nahi,",
  "Par jahan bhi mile, wahan sukoon zaruri hai.",
  "Tu meri kahaniyon ka sabse pyara kirdaar hai,",
  "Meri zindagi mein tera hona hi ek tyohaar hai."
];

// Write your real letter here. Each line inside the [ ] becomes its own paragraph.
const LETTER = [
  "Masha,",
  "I don't really know how to start this letter, so I'll just start.",
  "There are things I don't say out loud, not because I don't feel them, but because some things are easier to write than to say. So I'm writing them here, for you.",
  "Thank you for staying, even on the days I didn't make it easy. Thank you for being the one constant when everything else kept changing.",
  "This whole thing, this whole gift, is just me trying to put into words what I feel every day but never fully say."
];

const LETTER_SIGNATURE = "Yours, always.";

// Each line inside the [ ] is shown as its own closing paragraph on page 8.
const FINALE_MESSAGE = [
  "This is where i end this gift, a heartfelt gift from bottom of my heart",
  "Thank you for being my person.",
  "Love You And Thank You my bestfriend. 💗"
];
/* ===================== END OF THE PART YOU EDIT ===================== */


// ---- Page 1 ----
const intro = document.getElementById("intro");
const note = document.getElementById("note");
const button = document.getElementById("go");
const musicButton = document.getElementById("music");

// ---- Page 2 (question) and the "No" page ----
const questionScreen = document.getElementById("screen-question");
const questionTitle = document.getElementById("question-title");
const popHeart = document.getElementById("pop-heart");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const noScreen = document.getElementById("screen-no");
const noTitle = document.getElementById("no-title");
const retryButton = document.getElementById("retry");

// ---- Page 3 (memories) ----
const memoriesView = document.getElementById("memories");
const memoriesTitle = document.getElementById("memories-title");
const gallery = document.getElementById("gallery");
const finalBox = document.getElementById("final-message");
const nextButton = document.getElementById("next");

// ---- Page 4 (things that are true about you) ----
const truthsScreen = document.getElementById("screen-truths");
const truthsTitle = document.getElementById("truths-title");
const truthGrid = document.getElementById("truth-grid");
const nextTruthsButton = document.getElementById("next-truths");

// ---- Page 5 (my promise to you) ----
const page5Screen = document.getElementById("screen-page5");
const page5Title = document.getElementById("page5-title");
const oathList = document.getElementById("oath-list");
const sealWrap = document.getElementById("seal-wrap");
const seal = document.getElementById("seal");
const sealHint = document.getElementById("seal-hint");
const sealedMsg = document.getElementById("sealed-msg");
const nextOathButton = document.getElementById("next-oath");

// ---- Page 6 (my shayari for you) ----
const shayariScreen = document.getElementById("screen-shayari");
const shayariTitle = document.getElementById("shayari-title");
const shayariCard = document.getElementById("shayari-card");
const nextShayariButton = document.getElementById("next-shayari");

// ---- Page 7 (a letter for you) ----
const letterScreen = document.getElementById("screen-letter");
const letterTitle = document.getElementById("letter-title");
const letterCard = document.getElementById("letter-card");
const nextLetterButton = document.getElementById("next-letter");

// ---- Page 8 (the final page) ----
const finaleScreen = document.getElementById("screen-finale");
const finaleTitle = document.getElementById("finale-title");
const heartCanvas = document.getElementById("heart-canvas");
const finaleMessage = document.getElementById("finale-message");
const replayButton = document.getElementById("replay");


/* =====================================================================
   PAGE 1: the typing message
   ===================================================================== */

// Every letter is placed on the page right away but kept invisible,
// so the text never jumps around while it is being typed.
const message = document.createElement("p");
message.className = "message";
message.setAttribute("aria-hidden", "true");

const letters = [];
MESSAGE.split(" ").forEach((wordText, index, all) => {
  const word = document.createElement("span");
  word.className = "word";
  for (const char of wordText) {
    const ch = document.createElement("span");
    ch.className = "ch";
    ch.textContent = char;
    word.appendChild(ch);
    letters.push(ch);
  }
  message.appendChild(word);
  if (index < all.length - 1) message.appendChild(document.createTextNode(" "));
});

// Screen readers read the whole message right away instead of letter by letter
const readable = document.createElement("p");
readable.className = "sr-only";
readable.textContent = MESSAGE;

const caret = document.createElement("span");
caret.className = "caret";
caret.setAttribute("aria-hidden", "true");

note.append(readable, message);

function delayAfter(char) {
  if (char === ".") return 380;
  if (char === ",") return 260;
  return 0;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function unlockButton() {
  caret.remove();
  button.disabled = false;
  button.classList.add("ready");
}

async function typeMessage() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    letters.forEach((ch) => ch.classList.add("on"));
    unlockButton();
    return;
  }

  await wait(700); // a small pause before she starts typing

  for (const ch of letters) {
    ch.classList.add("on");
    ch.after(caret); // keep the blinking line right after the newest letter
    await wait(TYPING_SPEED + delayAfter(ch.textContent));
  }

  await wait(400);
  unlockButton();
}

typeMessage();


/* =====================================================================
   SONG: plays after the first button is clicked, repeats forever,
   and stops while a video plays
   ===================================================================== */
const song = new Audio(SONG_FILE);
song.loop = true; // play on repeat
song.volume = SONG_VOLUME;

let songOn = false;       // does she want the song on? (turned on by the first button)
let songMissing = false;  // true if the song file could not be found

function anyVideoPlaying() {
  return Array.from(document.querySelectorAll("video")).some((v) => !v.paused && !v.ended);
}

// The song plays only when it is switched on AND no video is playing
function syncSong() {
  const shouldPlay = songOn && !anyVideoPlaying();
  if (shouldPlay && song.paused) {
    song.play().catch((err) => {
      // Some browsers block sound. Show the button as "off" so a tap on it starts the song.
      if (err && err.name === "NotAllowedError") {
        songOn = false;
        syncSong();
      }
    });
  }
  if (!shouldPlay && !song.paused) song.pause();
  musicButton.setAttribute("aria-pressed", String(songOn));
}

function onVideoPlay() {
  if (!RESUME_SONG_AFTER_VIDEO) songOn = false;
  syncSong();
}

// If the song file is missing, hide the music button
song.addEventListener("error", () => {
  songOn = false;
  songMissing = true;
  musicButton.hidden = true;
});

musicButton.addEventListener("click", () => {
  songOn = !songOn;
  syncSong();
});


/* =====================================================================
   SCREEN SWITCHING
   ===================================================================== */
const screens = Array.from(document.querySelectorAll(".screen"));

function showScreen(target, focusEl) {
  // Stop any video that is still playing on the screen we are leaving
  document.querySelectorAll("video").forEach((v) => v.pause());

  // Stop the particle heart's animation loop when she isn't looking at it
  if (target !== finaleScreen) heartAnimating = false;

  screens.forEach((s) => {
    s.hidden = s !== target;
    s.classList.remove("enter");
  });

  // The "No" page turns the whole page dark
  document.body.classList.toggle("mood-no", target === noScreen);

  if (target.dataset.title) document.title = target.dataset.title;

  target.classList.add("enter");
  window.scrollTo(0, 0);
  if (focusEl) focusEl.focus({ preventScroll: true });
}


/* =====================================================================
   FLYING HEARTS (used on page 2, and reused for the sealed promise)
   ===================================================================== */
const BURST_COUNT = 16;
const BURST_COLORS = ["var(--accent)", "var(--butter)", "var(--mint)"];
const HEART_PATH =
  "M23.6 0c-3.4 0-6.3 2.1-7.6 5.1C14.7 2.1 11.8 0 8.4 0 3.8 0 0 3.8 0 8.4c0 9.4 9.5 11.9 16 20.6 6.1-8.7 16-11.5 16-20.6C32 3.8 28.2 0 23.6 0z";
const SVG_NS = "http://www.w3.org/2000/svg";

// Fills `container` with little hearts that fly outward from its centre.
// `container` needs `position: relative` (or similar) in the CSS.
function burstHeartsIn(container, count = BURST_COUNT) {
  container.querySelectorAll(".burst-heart").forEach((h) => h.remove());

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
    const distance = 100 + Math.random() * 90;
    const size = 14 + Math.random() * 16;

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 32 29");
    svg.setAttribute("class", "burst-heart");
    svg.setAttribute("aria-hidden", "true");
    svg.style.setProperty("--dx", Math.cos(angle) * distance + "px");
    svg.style.setProperty("--dy", Math.sin(angle) * distance + "px");
    svg.style.setProperty("--rot", Math.random() * 60 - 30 + "deg");
    svg.style.setProperty("--s", size + "px");
    svg.style.setProperty("--c", BURST_COLORS[i % BURST_COLORS.length]);

    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", HEART_PATH);
    svg.appendChild(path);

    container.appendChild(svg);
  }
}


/* =====================================================================
   PAGE 2: the question, with hearts bursting out of the big heart
   ===================================================================== */
function showQuestion() {
  showScreen(questionScreen, questionTitle);
  burstHeartsIn(popHeart);
}

// Yes opens the memories (page 3), No opens the angry page
yesButton.addEventListener("click", () => showScreen(memoriesView, memoriesTitle));
noButton.addEventListener("click", () => showScreen(noScreen, noTitle));

// From the angry page she can go back and answer again
retryButton.addEventListener("click", showQuestion);


/* =====================================================================
   PAGE 3: photos, videos and your message
   ===================================================================== */

// Shown in place of a photo or video whose file isn't there yet
function makePlaceholder(item) {
  const box = document.createElement("div");
  box.className = "empty";
  box.textContent = "Add your " + item.type + " as " + item.file;
  return box;
}

MEMORIES.forEach((item, index) => {
  const figure = document.createElement("figure");
  figure.className = "memory";

  let media;
  if (item.type === "video") {
    media = document.createElement("video");
    media.controls = true;
    media.playsInline = true;
    media.preload = "metadata";
    media.setAttribute("aria-label", item.caption || "Video " + (index + 1) + " of us");
    media.src = item.file;
    media.addEventListener("play", onVideoPlay);
    media.addEventListener("pause", syncSong);
    media.addEventListener("ended", syncSong);
  } else {
    media = document.createElement("img");
    media.loading = "lazy";
    media.alt = item.caption || "Photo " + (index + 1) + " of us";
    media.src = item.file;
  }
  media.addEventListener("error", () => media.replaceWith(makePlaceholder(item)));
  figure.appendChild(media);

  if (item.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = item.caption;
    figure.appendChild(caption);
  }

  gallery.appendChild(figure);
});

FINAL_MESSAGE.forEach((text) => {
  const p = document.createElement("p");
  p.textContent = text;
  finalBox.appendChild(p);
});

// "Continue to see more" opens page 4
nextButton.addEventListener("click", () => showScreen(truthsScreen, truthsTitle));


/* =====================================================================
   Helper shared by page 4 and page 5: notes that pop in as she scrolls to them
   ===================================================================== */
function popInOnScroll(cards) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      let order = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.animationDelay = order * 0.12 + "s"; // notes in the same row/column pop one after another
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
        order++;
      });
    },
    { threshold: 0.3 }
  );
  cards.forEach((card) => observer.observe(card));
}


/* =====================================================================
   PAGE 4: things that are true about you
   Each note pops onto the page as she scrolls down to it.
   ===================================================================== */
TRUE_THINGS.forEach((text) => {
  const truth = document.createElement("div");
  truth.className = "truth";
  truth.textContent = text;
  truthGrid.appendChild(truth);
});

popInOnScroll(Array.from(truthGrid.children));

// "Continue to see more" on page 4 opens page 5
nextTruthsButton.addEventListener("click", () => showScreen(page5Screen, page5Title));


/* =====================================================================
   PAGE 5: my promise to you (the oath, returned)
   Each promise pops in as she scrolls, then she can tap the seal
   to "make it official" — hearts burst out and a sealed message appears.
   ===================================================================== */
OATH_PROMISES.forEach((text) => {
  const item = document.createElement("li");
  item.className = "oath-item";
  item.textContent = text;
  oathList.appendChild(item);
});

popInOnScroll(Array.from(oathList.children));

let sealed = false;
seal.addEventListener("click", () => {
  if (sealed) return;
  sealed = true;

  seal.setAttribute("aria-pressed", "true");
  sealHint.hidden = true;
  sealedMsg.hidden = false;
  nextOathButton.hidden = false;

  burstHeartsIn(sealWrap);
});

// "Continue to see more" on page 5 opens page 6
nextOathButton.addEventListener("click", () => showScreen(shayariScreen, shayariTitle));


/* =====================================================================
   PAGE 6: my shayari for you
   ===================================================================== */
SHAYARI.forEach((line) => {
  const p = document.createElement("p");
  p.textContent = line;
  shayariCard.appendChild(p);
});

// "Continue to see more" on page 6 opens page 7
nextShayariButton.addEventListener("click", () => showScreen(letterScreen, letterTitle));


/* =====================================================================
   PAGE 7: a letter for you
   ===================================================================== */
LETTER.forEach((text) => {
  const p = document.createElement("p");
  p.textContent = text;
  letterCard.appendChild(p);
});

const signature = document.createElement("p");
signature.className = "letter-signature";
signature.textContent = LETTER_SIGNATURE;
letterCard.appendChild(signature);

// "Continue to see more" on page 7 opens page 8
nextLetterButton.addEventListener("click", () => {
  showScreen(finaleScreen, finaleTitle);
  enterFinale();
});


/* =====================================================================
   PAGE 8: the final page — a solid heart packed with hundreds of tiny
   glowing particles, gently beating, drawn on a canvas
   ===================================================================== */

/* The heart as an equation. Anything with heartValue(x, y) <= 0 is INSIDE
   the heart, so we can fill the whole shape instead of only its outline. */
function heartValue(x, y) {
  const a = x * x + y * y - 1;
  return a * a * a - x * x * y * y * y;
}

// Picks a random point that lands inside the heart.
function randomHeartPoint() {
  for (let i = 0; i < 200; i++) {
    const x = (Math.random() - 0.5) * 2.7;
    const y = (Math.random() - 0.5) * 2.9;
    const f = heartValue(x, y);
    if (f <= 0) return { x: x, y: y, f: f };
  }
  return { x: 0, y: 0, f: -1 };
}

/* --- Tune the look of the heart here ---
   HEART_PARTICLE_COUNT = how packed the body is. 17000 gives a very
     dense, near-solid heart of red/pink pixels. Drop to about 8000
     if it feels slow on her phone.
   HEART_EDGE_COUNT = a thin bright rim around the edge, mostly pink/red
     (only a few particles are white, so the rim reads as a highlight,
     not a white outline).
   EDGE_THICKNESS = how thick that rim is. Closer to 0 = thin and crisp
     (try -0.02), further from 0 = thick and glowy (try -0.10). */
const HEART_PARTICLE_COUNT = 17000;
const HEART_EDGE_COUNT = 2700;
const EDGE_THICKNESS = -0.04;
const HEART_SPARKLE_COUNT = 40;

// Reds and pinks for the body — deep red/crimson mixed with hot pink
const HEART_PINKS = [
  "#B0002A", "#D4002E", "#E8103F", "#FF1F4D",
  "#FF3D6B", "#FF5C93", "#FF7FAC", "#FF1F6B"
];
// The rim is mostly pink/red too, with just a few brighter highlights
const HEART_EDGE_COLORS = ["#FF3D6B", "#FF7FAC", "#FFB3CB", "#FFFFFF"];

let heartCtx = null;
let heartParticles = [];
let heartSparkles = [];
let heartFrame = 0;
let heartAnimating = false;
let heartResizeObserver = null;

function pickEdgeColor() {
  // Only about 1 in 8 edge particles is white — the rim should glow
  // pink/red, not read as a white outline.
  if (Math.random() < 0.12) return "#FFFFFF";
  const reds = HEART_EDGE_COLORS.slice(0, 3);
  return reds[Math.floor(Math.random() * reds.length)];
}

function makeParticle(point, isEdge) {
  return {
    homeX: point.x,
    homeY: point.y,
    angle: Math.random() * Math.PI * 2,
    driftRadius: isEdge ? 0.3 + Math.random() * 0.5 : 0.4 + Math.random() * 1.1,
    driftSpeed: 0.008 + Math.random() * 0.018,
    size: isEdge ? 1 + Math.random() * 1.4 : 1.3 + Math.random() * 2.1,
    color: isEdge ? pickEdgeColor() : HEART_PINKS[Math.floor(Math.random() * HEART_PINKS.length)],
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleAmount: isEdge ? 0.2 : 0.3
  };
}

function buildHeartParticles() {
  heartParticles = [];

  // the filled body of the heart
  for (let i = 0; i < HEART_PARTICLE_COUNT; i++) {
    heartParticles.push(makeParticle(randomHeartPoint(), false));
  }

  // the glowing rim: keep only the points that sit close to the outline
  let made = 0;
  let tries = 0;
  while (made < HEART_EDGE_COUNT && tries < HEART_EDGE_COUNT * 200) {
    tries++;
    const p = randomHeartPoint();
    if (p.f > EDGE_THICKNESS) {
      heartParticles.push(makeParticle(p, true));
      made++;
    }
  }

  // little sparkles floating around the heart
  heartSparkles = [];
  for (let i = 0; i < HEART_SPARKLE_COUNT; i++) {
    heartSparkles.push({
      x: (Math.random() - 0.5) * 3.6,
      y: (Math.random() - 0.5) * 3.4,
      size: 0.6 + Math.random() * 1.3,
      phase: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.03
    });
  }
}

function drawHeartFrame() {
  const canvas = heartCanvas;
  const cssWidth = canvas.clientWidth;
  const cssHeight = canvas.clientHeight;
  if (!cssWidth || !cssHeight) {
    if (heartAnimating) requestAnimationFrame(drawHeartFrame);
    return;
  }

  heartCtx.clearRect(0, 0, cssWidth, cssHeight);

  // A gentle, continuous heartbeat: two quick pulses ("lub-dub"), then a rest.
  const beatT = (heartFrame % 260) / 260; // one full cycle every ~4.3s at 60fps
  const bump = (center, width) => {
    const d = beatT - center;
    return Math.exp(-(d * d) / (2 * width * width));
  };
  const beat = 1 + 0.08 * bump(0.05, 0.035) + 0.05 * bump(0.22, 0.045);

  const scale = Math.min(cssWidth, cssHeight) / 2.9;
  const cx = cssWidth / 2;
  const cy = cssHeight / 2 + Math.min(cssWidth, cssHeight) * 0.02;

  heartCtx.save();
  heartCtx.globalCompositeOperation = "lighter";

  // sparkles first, so the heart sits on top of them
  heartCtx.fillStyle = "#FFFFFF";
  heartSparkles.forEach((s) => {
    heartCtx.globalAlpha = 0.25 + 0.5 * (0.5 + 0.5 * Math.sin(heartFrame * s.speed + s.phase));
    heartCtx.beginPath();
    heartCtx.arc(cx + s.x * scale, cy - s.y * scale, s.size, 0, Math.PI * 2);
    heartCtx.fill();
  });

  // the heart itself
  for (let i = 0; i < heartParticles.length; i++) {
    const p = heartParticles[i];
    const drift = p.driftRadius * Math.sin(heartFrame * p.driftSpeed + p.angle);
    const px = cx + p.homeX * scale * beat + Math.cos(p.angle) * drift;
    const py = cy - p.homeY * scale * beat + Math.sin(p.angle) * drift;

    heartCtx.globalAlpha =
      (1 - p.twinkleAmount) + p.twinkleAmount * Math.sin(heartFrame * 0.05 + p.twinklePhase);
    heartCtx.fillStyle = p.color;
    heartCtx.fillRect(px, py, p.size, p.size); // squares, not circles — much faster on phones
  }

  heartCtx.restore();

  heartFrame++;
  if (heartAnimating) requestAnimationFrame(drawHeartFrame);
}

function resizeHeartCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2); // capped, so big phones stay smooth
  const width = heartCanvas.clientWidth;
  const height = heartCanvas.clientHeight;
  heartCanvas.width = Math.round(width * dpr);
  heartCanvas.height = Math.round(height * dpr);
  heartCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function initHeartCanvas() {
  heartCtx = heartCanvas.getContext("2d");
  buildHeartParticles();
  resizeHeartCanvas();

  if ("ResizeObserver" in window) {
    heartResizeObserver = new ResizeObserver(resizeHeartCanvas);
    heartResizeObserver.observe(heartCanvas);
  } else {
    window.addEventListener("resize", resizeHeartCanvas);
  }
}

FINALE_MESSAGE.forEach((text) => {
  const p = document.createElement("p");
  p.textContent = text;
  finaleMessage.appendChild(p);
});

let finaleStarted = false;

// Starts the particle heart the first time she reaches page 8
function enterFinale() {
  if (finaleStarted) {
    heartAnimating = true;
    requestAnimationFrame(drawHeartFrame);
    return;
  }
  finaleStarted = true;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  initHeartCanvas();

  if (reduceMotion) {
    // Draw one still frame instead of animating, out of respect for the setting
    heartAnimating = false;
    drawHeartFrame();
    return;
  }

  heartAnimating = true;
  requestAnimationFrame(drawHeartFrame);
}

replayButton.addEventListener("click", () => {
  location.reload();
});


/* =====================================================================
   FIRST BUTTON: starts the song, fades out page 1 and opens the question
   ===================================================================== */
let opened = false;

button.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  songOn = true;
  syncSong(); // starts the song (this click lets the browser play sound)

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  intro.classList.add("leaving");

  setTimeout(() => {
    musicButton.hidden = songMissing; // the music button stays on screen from here on
    showQuestion();
  }, reduceMotion ? 0 : 350);
});

/* =====================================================================
   EDIT THIS PART.

   The pages, in order:
     Page 1  the typing message and the "Click only if you are ready" button
     Page 2  the question (Yes or No). No opens the angry page.
     Page 3  the memories (photos, videos and your message)
     Page 4  "Things that are true about you" (notes that pop up as she scrolls)
     Page 5  my promise to you (the oath, returned) — a list of promises + a seal
     Page 6  my voice note for you
     Page 7  a letter for you
     Page 8  the final page — closing lines, a glowing particle heart, and a replay button

   1) MESSAGE: the text that gets typed on page 1.
   2) TYPING_SPEED: milliseconds per letter (bigger number = slower).
   3) SONG_FILE: your song, saved inside a folder called "music".
      It starts when she clicks the first button, repeats forever,
      and stops while any video plays.
   4) MEMORIES: your photos and videos, in the order they should appear.
      - type is "photo" or "video"
      - file is the path of the file inside your "photos" or "videos" folder
      - caption is optional. Write a few words under the picture, or leave "".
   5) FINAL_MESSAGE: the message shown below all the photos and videos.
      Each line inside the [ ] becomes its own paragraph.
   6) TRUE_THINGS: the notes on page 4. One line inside the [ ] = one note.
      Add, remove or rewrite lines. Write the real things you feel.
   7) OATH_PROMISES: the promises on page 5. One line inside the [ ] = one promise.
      They appear one by one as she scrolls, like the notes on page 4.
   8) VOICE_NOTE_FILE / VOICE_CAPTION: your voice note for page 6. Save the
      audio inside the "music" folder and put its name in VOICE_NOTE_FILE.
      VOICE_CAPTION is the short line shown above the play button.
      REQUIRE_FULL_VOICE_NOTE = true keeps the Continue button locked until
      she has listened to the whole voice note once.
   9) LETTER: your letter for page 7. Each line inside the [ ] becomes its
      own paragraph, same as FINAL_MESSAGE.
   10) LETTER_SIGNATURE: how you sign off the letter (e.g. "Yours, Always").
   11) FINALE_MESSAGE: the closing lines on page 8. Each line is its own
       paragraph.
   12) HEART_PARTICLE_COUNT / HEART_EDGE_COUNT / HEART_ROTATE_SECONDS: how
       densely packed the heart on page 8 is and how fast it spins. They're
       further down, just above the heart code in PAGE 8.

   The question ("Will You take oath...") and the angry "How Dare You..."
   words are written directly in index.html.
   ===================================================================== */
const MESSAGE =
  "Hey Masha, I know i disappoint you most of time. You don't say that, but i know so. " +
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

// Page 6: your voice note. Save the audio file (mp3, m4a, wav or ogg) inside
// the "music" folder, then put its exact file name here.
const VOICE_NOTE_FILE = "music/voice-note.mp3";
// The short line shown above the play button. Use "" for no caption.
const VOICE_CAPTION = "Press play. This one is in my own voice.";
// true = she can't continue to page 7 until she has listened to the whole voice note once.
// false = the Continue button works right away.
const REQUIRE_FULL_VOICE_NOTE = true;

// Write your real letter here. Each line inside the [ ] becomes its own paragraph.
const LETTER = [
  "Masha,",
  "I don't really know how to start this letter, so I'll just start.",
  "There are things I don't say out loud, not because I don't feel them, but because some things are easier to write than to say. So I'm writing them here, for you.",
  "Thank you for staying, even on the days I didn't make it easy. Thank you for being the one constant when everything else kept changing.",
  "This whole thing, this whole gift, is just me trying to put into words what I feel every day but never fully say.",
  "hey I hope tune ye sb padh liya hoga and maybe tujhe acha lga hoga nahi lga to next time I will or acha krne ka",
  "ye sb krne sirf ek hi reason tha ki, me tujhe khush nhi rkh pata like humesha doubt, trust issues and humesha puchna kya kyu kese kaha thi? I know tujhe ye sb psnd nhi h and I am sorry itna pagal hone ke liye and I will surely become a man than a emotional guy which I am right now...",
  "tujhe yaad h humari mulaqat and all the things.. ek cheez ka humesha ghum rhega wese ki me tere liye pehli web gift nhi kr paya like tujhe pehla web gift Saksham ne diya tha but koi na first come I is not imp I guess so.. but koi na",
  "ab point pe aate h jiske liye letter likh rha hu",
  "tujhe yaad h hum kab bestfriends bne the?? nahi yaad to yaad dilata hu mein tujhe ..",
  "tune ek bheji thi bestfriends ke liye jo nhi chlti h wo wali to I asked \"ME tera bestfriend?\" for first time I was like ki bhai yr Anubhav rehan ko chorke koi ladki yrrr koi ladki mujhe bestfriend bnana chahti h. first time aesa lga tha ki, haan now I am become a nice guy and I was itna happy ki kay btau yr yaad krta hu to hasi aati h ki, how silly mene ek min me boldiya bina soche ki \"Han kyu nhi bhai bestfriends aajse :)\"",
  "you know what mene kabhi socha nhi tha ek purani dost mera itna saath degi and literally yr....... I love you so much my bestie.... I love you yrr.. I never wanna lose you my sister my bestie my MASHA...",
  "tu kabhi jaiyo mt chorke please.. I know you also love me too tu nahi bol pati kyuki tera ek bf to tere pass restrictios h kya bolna h kya krna h etc etc.. I know that... I understand your situation ache se",
  "tu bohot achi ldki h yr",
  "and me humesha koshish krta hu ki yr tu humesha khush rhe, jb tujeh dhukh sataye tb me hu tere saath mein humesha time nikalta hu tere liye",
  "and yr aesa nahi h ki me sirf tere liye special chize nahi krta bohot kuch sirf aajtk tere liye kiya h like for proof wo shayari and ye web wali and tere liye humesha teyar rehena tu agr raatko bhi call kregi to me teyar rhunga help ke liye..... and tujhe yaad hoga tune or mene milke web bnaya tha nitin ke bday pe tb mene apni padhayi chor di thi lekin nitin ko tb bhi mujhse nafrat hi rhi he doesn't like me at all I know that but koi na jiju nahi smjhenge... mene jbse tera relation chalu hua h koshish kri h ki wapis nitin se dosti krlu he never let me to do so but leave it",
  "mene tere liye apni padhayi chordeta hu break manage krleta hua and shayari gifts...",
  "tu imp h yr mere liye roos mt jaya kr mere se disappoint mt hoya kr",
  "and finally yr sorry aj tk jo bhi kiya h mene and ye web sirf tujhe yaad dilane ke liye ki tu kaash h mere liye and tu or mein humesha saath rhenge and tu mere liye kya h .. ab me tere liye kya hu ye tujhe pta h sirf....",
  "I LOVE YOU MASHA....."
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

// The voice note on page 6 (the song pauses while it plays)
const voice = new Audio(VOICE_NOTE_FILE);
voice.preload = "metadata";

let songOn = false;       // does she want the song on? (turned on by the first button)
let songMissing = false;  // true if the song file could not be found

function anyVideoPlaying() {
  const videoPlaying = Array.from(document.querySelectorAll("video")).some((v) => !v.paused && !v.ended);
  return videoPlaying || (!voice.paused && !voice.ended);
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
  voice.pause();

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
const voiceCaption = document.getElementById("voice-caption");
const voicePlayer = document.getElementById("voice-player");
const voicePlay = document.getElementById("voice-play");
const voiceSeek = document.getElementById("voice-seek");
const voiceTime = document.getElementById("voice-time");
const voiceMissing = document.getElementById("voice-missing");

voiceCaption.textContent = VOICE_CAPTION;
voiceCaption.hidden = !VOICE_CAPTION;

function fmtTime(sec) {
  if (!isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
}

function updateVoiceUI() {
  const dur = voice.duration;
  voiceSeek.value = isFinite(dur) && dur > 0 ? (voice.currentTime / dur) * 100 : 0;
  voiceTime.textContent = fmtTime(voice.currentTime) + (isFinite(dur) ? " / " + fmtTime(dur) : "");
}

voicePlay.addEventListener("click", () => {
  if (voice.paused) {
    if (voice.ended) voice.currentTime = 0;
    voice.play().catch(() => {});
  } else {
    voice.pause();
  }
});

voiceSeek.addEventListener("input", () => {
  if (isFinite(voice.duration)) voice.currentTime = (voiceSeek.value / 100) * voice.duration;
});

/* Lock: "Continue" stays locked until she has listened to the whole voice note once.
   She can pause, and rewind and replay, but she can't skip ahead past the part
   she has actually heard. */
const voiceLockHint = document.getElementById("voice-lock-hint");
let voiceHeard = !REQUIRE_FULL_VOICE_NOTE; // has she listened to all of it?
let voiceFurthest = 0;                     // the furthest second she has really listened to

nextShayariButton.disabled = !voiceHeard;
voiceLockHint.hidden = voiceHeard;

function unlockContinue() {
  if (voiceHeard && !nextShayariButton.disabled) return;
  voiceHeard = true;
  nextShayariButton.disabled = false;
  voiceLockHint.hidden = true;
  nextShayariButton.classList.add("ready"); // the same little pop as on page 1
  nextShayariButton.addEventListener("animationend", () => nextShayariButton.classList.remove("ready"), { once: true });
}

voice.addEventListener("timeupdate", () => {
  if (!voice.seeking && voice.currentTime > voiceFurthest) voiceFurthest = voice.currentTime;
});

// Skipping ahead (with the slider or any other control) snaps back to where she had listened up to
voice.addEventListener("seeking", () => {
  if (!voiceHeard && voice.currentTime > voiceFurthest + 0.75) voice.currentTime = voiceFurthest;
});

// Reached the end: unlocked
voice.addEventListener("ended", unlockContinue);

["play", "pause", "ended"].forEach((evt) => {
  voice.addEventListener(evt, () => {
    voicePlayer.classList.toggle("playing", !voice.paused && !voice.ended);
    voicePlay.setAttribute("aria-label", voice.paused ? "Play voice note" : "Pause voice note");
    onVideoPlay(); // pauses the song while the voice note plays (resumes it after, if allowed)
  });
});
voice.addEventListener("timeupdate", updateVoiceUI);
voice.addEventListener("loadedmetadata", updateVoiceUI);

// If the voice note file is missing, say so instead of showing a dead player
voice.addEventListener("error", () => {
  voicePlayer.hidden = true;
  voiceMissing.hidden = false;
  unlockContinue(); // never leave her stuck on this page if the file can't play
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

/* The heart as an equation, in 3D (x = left/right, y = up/down, d = depth).
   Anything with heartValue(x, y, d) <= 0 is INSIDE the heart. This is the
   classic 3D heart: puffy in the middle and thin near the top dip and the
   bottom tip, so it still reads as a heart from every angle while it spins.
   (Looked at from the front it is exactly the same heart shape as before.) */
function heartValue(x, y, d) {
  const a = x * x + 2.25 * d * d + y * y - 1;
  return a * a * a - x * x * y * y * y - 0.1125 * d * d * y * y * y;
}

// Picks a random point inside the heart. maxDepth limits how far front/back it looks.
function randomHeartPoint(maxDepth) {
  for (let i = 0; i < 400; i++) {
    const x = (Math.random() - 0.5) * 2.4;
    const y = -1.05 + Math.random() * 2.35;
    const d = (Math.random() * 2 - 1) * maxDepth;
    const f = heartValue(x, y, d);
    if (f <= 0) return { x: x, y: y, d: d, f: f };
  }
  return { x: 0, y: 0, d: 0, f: -1 };
}

// Roughly how far (in heart units) a point inside the heart is from its skin.
function distanceToSkin(x, y, d, f) {
  const a = x * x + 2.25 * d * d + y * y - 1;
  const gx = 6 * x * a * a - 2 * x * y * y * y;
  const gy = 6 * y * a * a - 3 * x * x * y * y - 0.3375 * d * d * y * y;
  const gd = 13.5 * d * a * a - 0.225 * d * y * y * y;
  const g = Math.sqrt(gx * gx + gy * gy + gd * gd);
  return g > 1e-9 ? -f / g : 0;
}

// Picks a random point inside the heart that sits within maxDistance of its skin.
function randomHeartSkinPoint(maxDistance, maxDepth) {
  for (let i = 0; i < 60000; i++) {
    const p = randomHeartPoint(maxDepth);
    if (distanceToSkin(p.x, p.y, p.d, p.f) < maxDistance) return p;
  }
  return randomHeartPoint(maxDepth);
}

/* --- Tune the look of the heart here ---
   HEART_PARTICLE_COUNT = how packed the body is. With the pixel size below,
     17000 covers roughly 90% of the heart from every side while it spins.
     Drop to about 10000 if it feels slow on her phone. (Going far above
     20000 can make phones stutter, so make the pixels bigger instead.)
   HEART_PIXEL_SIZE = size of each little square. 1 = as it is now, bigger
     (1.2) = more solid but chunkier, smaller (0.8) = finer but more gaps.
   HEART_EDGE_COUNT = a thin bright rim around the edge, mostly pink/red
     (only a few particles are white, so the rim reads as a highlight,
     not a white outline).
   EDGE_THICKNESS = how thick that rim is. Smaller = thin and crisp
     (try 0.015), bigger = thick and glowy (try 0.06).
   SKIN_THICKNESS = how thick the shell of particles that makes the heart
     look solid is. Smaller = crisper surface, bigger = fuzzier.
   HEART_ROTATE_SECONDS = how many seconds one full turn takes.
     Bigger = slower (try 14). 0 = the heart stays still.
   HEART_DEPTH = how puffy the heart is from front to back. 1 is the
     natural 3D heart; 0.7 is flatter; 1.3 is chubbier.
   HEART_PERSPECTIVE = how much closer parts look bigger while it spins.
     0 = flat, no perspective. 0.05 is gentle. */
const HEART_PARTICLE_COUNT = 17000;
const HEART_EDGE_COUNT = 2700;
const HEART_PIXEL_SIZE = 1;
const EDGE_THICKNESS = 0.03;
const SKIN_THICKNESS = 0.02;
const HEART_SPARKLE_COUNT = 40;
const HEART_ROTATE_SECONDS = 9;
const HEART_DEPTH = 1;
const HEART_PERSPECTIVE = 0.05;

const HEART_SURFACE_SHARE = 0.8;  // share of particles that sit on the skin of the heart; the rest fill the inside
const HEART_SHADE_LEVELS = 6;     // how many brightness steps from the far side to the near side
const HEART_SHADE_MIN = 0.6;     // brightness of the farthest particles (1 = same as the nearest)

// Reds and pinks for the body — deep red/crimson mixed with hot pink
const HEART_PINKS = [
  "#B0002A", "#D4002E", "#E8103F", "#FF1F4D",
  "#FF3D6B", "#FF5C93", "#FF7FAC", "#FF1F6B"
];
// The rim is mostly pink/red too, with just a few brighter highlights
const HEART_EDGE_COLORS = ["#FF3D6B", "#FF7FAC", "#FFB3CB", "#FFFFFF"];

// One list of every color; body colors first, then the rim colors
const HEART_PALETTE = HEART_PINKS.concat(HEART_EDGE_COLORS);
const HEART_WHITE_INDEX = HEART_PALETTE.length - 1;

// Pre-made darker versions of each color, so far-away particles look farther away
const HEART_SHADED = [];
for (let level = 0; level < HEART_SHADE_LEVELS; level++) {
  const k = HEART_SHADE_MIN + (1 - HEART_SHADE_MIN) * (level / (HEART_SHADE_LEVELS - 1));
  HEART_SHADED.push(HEART_PALETTE.map((hex) => {
    const n = parseInt(hex.slice(1), 16);
    // fade toward a deep crimson (not black), so far-away white sparkles turn dusty pink, not grey
    const r = Math.round(90 + (((n >> 16) & 255) - 90) * k);
    const g = Math.round(0 + (((n >> 8) & 255) - 0) * k);
    const b = Math.round(30 + ((n & 255) - 30) * k);
    return "rgb(" + r + "," + g + "," + b + ")";
  }));
}

let heartCtx = null;
let heartSparkles = [];
let heartFrame = 0;
let heartAngle = 0;        // how far the heart has turned, in radians
let heartLastTime = 0;
let heartAnimating = false;
let heartResizeObserver = null;

// The particles, stored as plain number lists (fast to spin every frame)
let heartCount = 0;
let pX, pY, pZ, pSize, pAngle, pDriftRadius, pDriftSpeed, pTwPhase, pTwAmount, pColor;
let sX, sY, sSize;         // where each particle lands on screen this frame
let heartBuckets = [];     // particles grouped by (brightness level, color), drawn far to near

function pickEdgeColorIndex() {
  // Only about 1 in 8 edge particles is white — the rim should glow
  // pink/red, not read as a white outline.
  if (Math.random() < 0.12) return HEART_WHITE_INDEX;
  return HEART_PINKS.length + Math.floor(Math.random() * 3);
}

function setParticle(i, point, isEdge) {
  pX[i] = point.x;
  pY[i] = point.y;
  pZ[i] = point.d * HEART_DEPTH;
  pAngle[i] = Math.random() * Math.PI * 2;
  pDriftRadius[i] = isEdge ? 0.3 + Math.random() * 0.5 : 0.4 + Math.random() * 1.1;
  pDriftSpeed[i] = 0.008 + Math.random() * 0.018;
  pSize[i] = HEART_PIXEL_SIZE * (isEdge ? 1.4 + Math.random() * 1.4 : 2.0 + Math.random() * 2.4);
  pColor[i] = isEdge ? pickEdgeColorIndex() : Math.floor(Math.random() * HEART_PINKS.length);
  pTwPhase[i] = Math.random() * Math.PI * 2;
  pTwAmount[i] = isEdge ? 0.25 : 0.2;
}

function buildHeartParticles() {
  heartCount = HEART_PARTICLE_COUNT + HEART_EDGE_COUNT;
  pX = new Float32Array(heartCount);
  pY = new Float32Array(heartCount);
  pZ = new Float32Array(heartCount);
  pSize = new Float32Array(heartCount);
  pAngle = new Float32Array(heartCount);
  pDriftRadius = new Float32Array(heartCount);
  pDriftSpeed = new Float32Array(heartCount);
  pTwPhase = new Float32Array(heartCount);
  pTwAmount = new Float32Array(heartCount);
  pColor = new Uint8Array(heartCount);
  sX = new Float32Array(heartCount);
  sY = new Float32Array(heartCount);
  sSize = new Float32Array(heartCount);

  let n = 0;

  // the body of the heart: most particles sit on the skin (so it looks solid), the rest fill the inside
  const skinCount = Math.round(HEART_PARTICLE_COUNT * HEART_SURFACE_SHARE);
  for (let i = 0; i < HEART_PARTICLE_COUNT; i++) {
    setParticle(n++, i < skinCount ? randomHeartSkinPoint(SKIN_THICKNESS, 0.7) : randomHeartPoint(0.7), false);
  }

  // the glowing rim: the seam running around the outline, halfway between front and back
  for (let i = 0; i < HEART_EDGE_COUNT; i++) {
    setParticle(n++, randomHeartSkinPoint(EDGE_THICKNESS, 0.12), true);
  }
  heartCount = n;

  heartBuckets = [];
  for (let i = 0; i < HEART_SHADE_LEVELS * HEART_PALETTE.length; i++) heartBuckets.push([]);

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

function drawHeartFrame(now) {
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

  // sparkles first, so the heart sits on top of them
  heartCtx.fillStyle = "#FFFFFF";
  heartSparkles.forEach((s) => {
    heartCtx.globalAlpha = 0.25 + 0.5 * (0.5 + 0.5 * Math.sin(heartFrame * s.speed + s.phase));
    heartCtx.beginPath();
    heartCtx.arc(cx + s.x * scale, cy - s.y * scale, s.size, 0, Math.PI * 2);
    heartCtx.fill();
  });

  // Turn every particle around the heart's upright axis, then sort them into
  // brightness groups (far = darker, near = brighter)
  const cosA = Math.cos(heartAngle);
  const sinA = Math.sin(heartAngle);
  const paletteSize = HEART_PALETTE.length;
  for (let b = 0; b < heartBuckets.length; b++) heartBuckets[b].length = 0;

  for (let i = 0; i < heartCount; i++) {
    const x = pX[i] * beat;
    const y = pY[i] * beat;
    const z = pZ[i] * beat;
    const xr = x * cosA + z * sinA;
    const zr = -x * sinA + z * cosA;          // bigger = closer to her
    const persp = 1 / (1 - HEART_PERSPECTIVE * zr);
    const drift = pDriftRadius[i] * Math.sin(heartFrame * pDriftSpeed[i] + pAngle[i]);

    sX[i] = cx + xr * persp * scale + Math.cos(pAngle[i]) * drift;
    sY[i] = cy - y * persp * scale + Math.sin(pAngle[i]) * drift;
    sSize[i] = pSize[i] * persp;

    let level = Math.floor((zr / 0.75 * 0.5 + 0.5) * HEART_SHADE_LEVELS);
    if (level < 0) level = 0;
    else if (level >= HEART_SHADE_LEVELS) level = HEART_SHADE_LEVELS - 1;
    heartBuckets[level * paletteSize + pColor[i]].push(i);
  }

  // Draw far to near. Squares, not circles — much faster on phones.
  for (let level = 0; level < HEART_SHADE_LEVELS; level++) {
    for (let c = 0; c < paletteSize; c++) {
      const list = heartBuckets[level * paletteSize + c];
      if (!list.length) continue;
      heartCtx.fillStyle = HEART_SHADED[level][c];
      for (let j = 0; j < list.length; j++) {
        const i = list[j];
        heartCtx.globalAlpha = 1 - pTwAmount[i] * (0.5 + 0.5 * Math.sin(heartFrame * 0.05 + pTwPhase[i]));
        heartCtx.fillRect(sX[i], sY[i], sSize[i], sSize[i]);
      }
    }
  }

  heartCtx.restore();

  heartFrame++;
  if (heartAnimating) {
    // turn by time (not by frame count) so it spins at the same speed on any screen
    const t = typeof now === "number" ? now : performance.now();
    const dt = heartLastTime ? Math.min(t - heartLastTime, 50) : 16;
    heartLastTime = t;
    if (HEART_ROTATE_SECONDS > 0) heartAngle += (dt / 1000) * (Math.PI * 2 / HEART_ROTATE_SECONDS);
    requestAnimationFrame(drawHeartFrame);
  }
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
    heartLastTime = 0;
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
  heartLastTime = 0;
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

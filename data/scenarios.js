/* Branching practice reps. Choice score: 2 strong, 1 okay, 0 weak. */
var SCENARIOS = [
  {
    id: "coffee-shop",
    title: "The Coffee Shop Opener",
    emoji: "\u{2615}",
    blurb: "Turn a queue into a conversation, or gracefully not.",
    setting: "Saturday morning, your regular cafe. One other person is waiting for their order, scrolling half-heartedly. The wifi sign has fallen off the wall again.",
    setup: "A low-stakes opener with a stranger. Practice the situational opener, the follow-up fork, and reading whether they want to talk.",
    goal: "Goal: open naturally, keep it alive for a few exchanges, and exit (or not) on a high note.",
    start: "n1",
    resultGreat: "That is how it is done: you opened on the shared world, pulled a thread they offered, and matched their energy. A stranger now has a face and a story.",
    resultOk: "Solid. A couple of moments where 'nice' replaced curiosity, but you kept it human and nobody was harmed. Run it again and hunt the forks.",
    resultLow: "This one stayed on autopilot. The fixes are small: comment on the shared situation, fork their answers, skip the interview mode. Try the Small Talk track, then rerun.",
    nodes: {
      n1: {
        them: "The person glances up from their phone as the wifi sign slides off the wall for the second time.",
        context: "They're not mid-anything. The moment is available if you want it.",
        prompt: "What do you open with?",
        choices: [
          { text: "That sign has given up on life. Third time this week.", why: "Situational opener: specific, shared, zero pressure, slightly funny. The easiest yes in conversation.", score: 2, next: "n2a" },
          { text: "Hey, how are you?", why: "A formality to a stranger gets a formality back: 'fine'. You've spent your opener buying nothing.", score: 0, next: "n2b" },
          { text: "What are you reading there?", why: "Decent if they were reading. They were scrolling; this asks them to account for themselves, which is a heavier first lift.", score: 1, next: "n2a" },
          { text: "Say nothing. Protect the peace.", why: "Sometimes right, but this rep is about practicing the open. Peace will still be there in two minutes.", score: 0, next: "n2c" }
        ]
      },
      n2a: {
        them: "They laugh. \"I'm starting to think it's performance art. I come here for the wifi more than the coffee, honestly.\"",
        context: "They gave you a fork: wifi (fact), 'honestly' (a small confession = feeling-adjacent), and coffee (preference).",
        prompt: "Pick your follow-up.",
        choices: [
          { text: "Wait, for the wifi? With this signal? That is a cry for help. What are you working on?", why: "Pulled their thread, added light tease, opened the 'what do you do' door sideways instead of kicking it in.", score: 2, next: "n3" },
          { text: "Nice. Yeah, the wifi is good.", why: "'Nice' is where threads go to die. You had three forks and paved over all of them.", score: 0, next: "n3" },
          { text: "The coffee here is actually underrated. What do you usually get?", why: "Fine fork (preference), safe and answerable. Slightly less alive than the thread they just handed you.", score: 1, next: "n3" }
        ]
      },
      n2b: {
        them: "\"Uh, good. You?\" They say it politely, the way you answer a survey.",
        context: "Recoverable. Just move to the shared world now.",
        prompt: "Recover with:",
        choices: [
          { text: "Doing well, thanks. Anyway, I'm taking bets on whether that sign survives the hour.", why: "Good save: answered, then pivoted to a situational opener without apologising for the first one.", score: 2, next: "n3" },
          { text: "Good good. So... come here often?", why: "You heard how it sounds. Everyone hears how it sounds.", score: 0, next: "n3" },
          { text: "Fine. What's your name?", why: "Skipping to credentials before any warmth reads as an interview. Build a little shared moment first.", score: 1, next: "n3" }
        ]
      },
      n2c: {
        them: "You stand in comfortable silence. Then the barista calls their order, and they catch your eye with a small 'the sign, again' smile.",
        context: "The world handed you a second chance. This happens constantly once you start noticing.",
        prompt: "Now:",
        choices: [
          { text: "See, it waited for an audience.", why: "You took the shared moment they offered. That's the whole skill: notice, name it, lightly.", score: 2, next: "n3" },
          { text: "Smile back, say nothing.", why: "Warm but inert. A tiny comment converts the smile into a conversation; silence banks it as nothing.", score: 1, next: "n3" },
          { text: "Look at your phone.", why: "They opened a door with their smile and you closed it with a screen. It happens; it's also a choice.", score: 0, next: "n3" }
        ]
      },
      n3: {
        them: "You trade a few lines. Their order gets called. They pick it up, and there's a beat where the conversation could end or continue.",
        context: "The exit (or the extension) is its own move.",
        prompt: "Close it out:",
        choices: [
          { text: "\"I'll let you escape. Enjoy the wifi, such as it is.\"", why: "Callback, warm close, zero cling. You left on the high note, which is the part they'll remember.", score: 2, next: "end" },
          { text: "Ask for their Instagram right now.", why: "Ninety seconds of wifi chat rarely earns the handle. If the vibe was genuinely electric, maybe; usually this converts a nice moment into an ask.", score: 1, next: "end" },
          { text: "Trail off with \"yeah... see you...\" while already turning away.", why: "The drift-off spends all the goodwill the conversation built. Exits are where impressions set.", score: 0, next: "end" }
        ]
      },
      end: { end: true }
    }
  },
  {
    id: "friend-repair",
    title: "The Missed Big News",
    emoji: "\u{1F491}",
    blurb: "Repair a friendship wobble without groveling or dodging.",
    setting: "Your close friend got the internship they wanted. Everyone knew. You somehow didn't, because you never asked, and they've just realised that.",
    setup: "Practice taking a hit to a friendship honestly: owning the miss, no flood of excuses, then a real repair move.",
    goal: "Goal: acknowledge it cleanly, skip the excuse buffet, and end with something that actually repairs.",
    start: "n1",
    resultGreat: "Textbook repair: owned it, no excuse buffet, made it about them, followed with a concrete move. This is how friendships get stronger after a wobble instead of weaker.",
    resultOk: "You got there with some wobble of your own. Less defending, more curiosity about them, and this becomes a non-event.",
    resultLow: "That went defensive or dismissive, which doubles the damage. Run the Real Conversations track, especially the listening lesson, and try again.",
    nodes: {
      n1: {
        them: "\"So... you really didn't know about the internship? I told the group chat two weeks ago. You said congrats to Rahul for his, like, twice.\"",
        context: "They're hurt, not angry. Hurt wants to be seen, not argued with.",
        prompt: "Your first response:",
        choices: [
          { text: "\"You're right. I completely missed it, and that genuinely sucks. Tell me everything - when do you start?\"", why: "Own it in one line, no but, then swing the spotlight to them. Repair is 10% apology, 90% attention.", score: 2, next: "n2" },
          { text: "\"Bro, I've been SO busy, you have no idea what my week's been like.\"", why: "Maybe true, but it makes their hurt about your schedule. The excuse buffet always spends more than it buys.", score: 0, next: "n2" },
          { text: "\"You could have told me directly instead of just the group chat.\"", why: "Counter-attacking when you're the one who missed it converts a small debt into a fight.", score: 0, next: "n2" },
          { text: "\"Wait, seriously? Congrats! Anyway-\"", why: "Skipping past the hurt tells them it didn't register. 'Anyway' is the most expensive word in friendship.", score: 1, next: "n2" }
        ]
      },
      n2: {
        them: "\"It's the Bengaluru office, starts January. I was sure you'd be the first person to react. I was literally waiting for it.\"",
        context: "There's the real wound: not the news, the waiting. Label what you heard.",
        prompt: "Now:",
        choices: [
          { text: "\"You were waiting for my reaction and got nothing. I'd be stung too. For what it's worth: I'm genuinely thrilled, and I'm sorry I made it feel like I wasn't.\"", why: "Label the exact feeling, validate it, apologise for the impact. This is the listening lesson doing real work.", score: 2, next: "n3" },
          { text: "\"You know how I am with the group chat, I mute everything!\"", why: "Explaining the mechanism doesn't touch the feeling. They know how you are; that's the problem.", score: 1, next: "n3" },
          { text: "\"Come on, don't make it a thing. You know I'm happy for you.\"", why: "Telling someone their hurt isn't a thing is telling them they're wrong to have it. That never lands how you hope.", score: 0, next: "n3" }
        ]
      },
      n3: {
        them: "They soften a bit. \"It's fine, really. It's just... it's a big deal for me.\"",
        context: "Almost repaired. Finish with something concrete, not more words.",
        prompt: "Close the repair:",
        choices: [
          { text: "\"Then let's make it a thing. Dinner this week, my treat, and you tell me everything about the role. Thursday?\"", why: "A concrete plan with a date is a repair. Words acknowledge; actions rebuild.", score: 2, next: "end" },
          { text: "\"I promise I'll be better at keeping up with the chat.\"", why: "A promise about future behaviour is cheaper than a plan for this week. Do the plan AND change the habit.", score: 1, next: "end" },
          { text: "\"Great! Glad we're good.\" (subject change)", why: "Rushing to 'we're good' before they've finished feeling it just postpones this exact conversation.", score: 0, next: "end" }
        ]
      },
      end: { end: true }
    }
  },
  {
    id: "first-date",
    title: "The First Date Lull",
    emoji: "\u{1F339}",
    blurb: "Handle the quiet moment, the interview trap, and the interest signal.",
    setting: "Cafe, first date, forty minutes in. It's going okay-ish. You just finished the jobs/college exchange and the air has gone slightly flat.",
    setup: "Practice rescuing a flat patch, showing specific interest, and moving past resume talk into something real.",
    goal: "Goal: break the interview rhythm, create one moment of genuine play or honesty, and gauge interest clearly.",
    start: "n1",
    resultGreat: "You broke the interview script, created a real moment, and showed interest without heaviness. That's the whole game.",
    resultOk: "Decent date skills with a few resume-mode lapses. The fix is play: tease lightly, share honestly, ask about feelings not facts.",
    resultLow: "That stayed in interview mode or went foggy at the key moments. The Dating track covers exactly these three beats. Do it, then rerun.",
    nodes: {
      n1: {
        them: "Silence stretches. They stir their coffee and say, \"So... do you have any hobbies?\"",
        context: "The dreaded interview question. You can answer it in interview mode, or use it as a springboard.",
        prompt: "You answer:",
        choices: [
          { text: "\"Dangerous question. I'm currently obsessed with making the perfect dosa at home. Nine attempts, zero perfection. What's your version of that - the thing you keep failing at happily?\"", why: "Specific, funny, self-deprecating, then forks straight into their inner life. This is the question ladder with charm.", score: 2, next: "n2" },
          { text: "\"I like reading and gym. You?\"", why: "Fact, fork, dead air. 'Reading and gym' is the national anthem of boring date answers.", score: 0, next: "n2" },
          { text: "\"A few things. Anyway, what about your family, where are they from?\"", why: "Dodging plus a heavier interview question. Two exits from a real moment in one sentence.", score: 0, next: "n2" },
          { text: "\"Honestly, work's been eating my life. I'm trying to fix that. What do you do to actually switch off?\"", why: "A small honest share (the 10 percent rule) plus a rung-two question. Good, slightly less playful than the dosa route.", score: 1, next: "n2" }
        ]
      },
      n2: {
        them: "They light up: \"Okay, mine is pottery. I'm genuinely terrible. I made a bowl that my friends call 'the ashtray'.\" They laugh, properly, for the first time.",
        context: "They just showed you a real, playful part of themselves. This is the moment to be specific, not smooth.",
        prompt: "You say:",
        choices: [
          { text: "\"The ashtray. That's the best thing I've heard all week. For the record, I'd proudly keep keys in it.\"", why: "Specific interest: you heard the detail, you played inside their joke, you implied affection for their mess. Light, warm, done.", score: 2, next: "n3" },
          { text: "\"Haha nice. Pottery is cool.\"", why: "They offered their best story of the night and got 'cool'. Energy unmet is energy lost.", score: 0, next: "n3" },
          { text: "\"You should sell them! People love handmade stuff.\"", why: "Turning their joyful failure into a business plan kills the play. They shared a joke, not a pitch.", score: 0, next: "n3" },
          { text: "\"I knew there was something creative about you. You have that energy.\"", why: "Sweet but generic - could be said to anyone. 'The ashtray' could only be said to them. Specific beats smooth.", score: 1, next: "n3" }
        ]
      },
      n3: {
        them: "The date's winding up. They say, \"This was actually really nice,\" in a slightly questioning tone, like they're checking whether you agree.",
        context: "That's an opening. Answer it plainly; fog here reads as disinterest.",
        prompt: "Close the date:",
        choices: [
          { text: "\"It was. I want to see you again - are you free next week? The ashtray can chaperone.\"", why: "Clear interest, concrete next step, callback to your shared joke. Fog-free and warm. This is the three-part ask in the wild.", score: 2, next: "end" },
          { text: "\"Yeah, we should definitely do this again sometime!\"", why: "'Sometime' is fog. If you mean it, name a day. If you don't, be kind and clear instead.", score: 1, next: "end" },
          { text: "\"Yeah, it was fun!\" (then talk about the bill)", why: "They asked a slightly brave question and you answered the words, not the question. The moment passes.", score: 0, next: "end" }
        ]
      },
      end: { end: true }
    }
  },
  {
    id: "the-raise",
    title: "The Raise Conversation",
    emoji: "\u{1F4B8}",
    blurb: "Anchor, hold the silence, and push back once, calmly.",
    setting: "Your manager's room, review week. You've owned two major projects this year. You're paid below market and both of you quietly know it.",
    setup: "Practice making a clear ask, anchoring with a reason, and surviving the pause without discounting yourself.",
    goal: "Goal: state a number with a reason, hold silence, and respond to the counter without folding or fighting.",
    start: "n1",
    resultGreat: "Clean ask, real anchor, comfortable silence, one calm pushback. Even if the answer comes later, you just changed what they think you cost.",
    resultOk: "You asked, which puts you ahead of most people. Tighten the anchor and stop cushioning every sentence.",
    resultLow: "The ask got fogged or folded. Do the Negotiation track, script your number in advance, and run this rep until the silence stops feeling dangerous.",
    nodes: {
      n1: {
        them: "Your manager wraps up the review: \"Solid year. The two projects landed well. Anything from your side before we close?\"",
        context: "This is the window. It stays open for about ten seconds.",
        prompt: "You say:",
        choices: [
          { text: "\"Yes - I want to talk about my pay. Given the two projects I owned, I'm asking for a 20% raise.\"", why: "Clear sentence, real number, reason attached, no apology. You anchored the whole conversation in one breath.", score: 2, next: "n2" },
          { text: "\"I was wondering if maybe there's any possibility of looking at compensation, if the budget allows?\"", why: "Four escape hatches in one sentence. They can close any of them and the conversation never happened.", score: 0, next: "n2" },
          { text: "\"Nothing from my side, all good.\"", why: "The window closed. You'll think of the perfect sentence tonight at 2 AM.", score: 0, next: "n2" },
          { text: "\"I wanted to ask about growth and, um, what's the process for raises here?\"", why: "Asking about the process instead of making the ask. Sometimes a smart first step, often a way to avoid the number.", score: 1, next: "n2" }
        ]
      },
      n2: {
        them: "They pause. \"20% is above our usual band. We were thinking more like 8%.\" Then they look at you and wait.",
        context: "The silence after a number is where raises go to die. Breathe.",
        prompt: "You:",
        choices: [
          { text: "Let the pause sit for a beat, then: \"I understand the band. My ask reflects the two projects - they brought in the two biggest clients this year. What can get us closer to 20?\"", why: "Held silence, restated the reason, asked a problem-solving question instead of conceding. Calm and firm.", score: 2, next: "n3" },
          { text: "\"Okay, 8% works, that's fair, thanks!\"", why: "You folded in one move at the first number. The first offer is a position, not a verdict.", score: 0, next: "n3" },
          { text: "\"8% is honestly insulting given what I delivered.\"", why: "True or not, heat makes them defend the number instead of moving it. Push on the problem, not the person.", score: 0, next: "n3" },
          { text: "\"Hmm, okay. Could we do 12?\"", why: "A pushback, good instinct, but you skipped your reason and dropped your anchor by nearly half in one hop.", score: 1, next: "n3" }
        ]
      },
      n3: {
        them: "\"I can't do 20. I can maybe stretch to 12, and revisit after the next quarter if the new project lands.\"",
        context: "That's a real offer with a real condition. Decide like an adult: accept, or accept-plus-lock-the-condition.",
        prompt: "Finish it:",
        choices: [
          { text: "\"I'll take 12 now, with the revisit in writing - a defined review after the project lands, with the number range we'd discuss. Send me that and we're set.\"", why: "Accepted gracefully AND converted the vague promise into a dated, written checkpoint. The revisit is now an event, not a vibe.", score: 2, next: "end" },
          { text: "\"No. It's 20 or I start looking.\"", why: "Ultimatums work only when you're fully ready to walk, today. If you weren't, you just spent your credibility.", score: 1, next: "end" },
          { text: "\"Okay, I guess 12 is fine. Thanks for your time.\" (deflated)", why: "You got a decent outcome and signed for it like a defeat. How you close sets the tone for the next negotiation.", score: 0, next: "end" }
        ]
      },
      end: { end: true }
    }
  },
  {
    id: "interview-tell-me",
    title: "\"So, Tell Me About Yourself\"",
    emoji: "\u{1F3A4}",
    blurb: "Nail the opener, handle the curveball, close with a question.",
    setting: "Video call, summer internship interview, a friendly but tired engineering manager. You have maybe ninety seconds of full attention before the tab-switching begins.",
    setup: "Practice the trailer answer, recovering from a curveball, and ending with a question that makes you memorable.",
    goal: "Goal: deliver a tight present-past-future trailer, stay calm on a curveball, and ask a real question at the end.",
    start: "n1",
    resultGreat: "Trailer, composure, real question. Interviewers remember candidates who made the conversation easy and interesting. That was both.",
    resultOk: "Good bones. Cut the biography, add evidence, and make your closing question about the actual work.",
    resultLow: "That read as a resume recital. Do the Interviews track, write your 90-second trailer, and rerun until it's muscle.",
    nodes: {
      n1: {
        them: "\"Alright, I've skimmed your resume, but I like hearing it from the person. So - tell me about yourself.\"",
        context: "Ninety seconds. Trailer, not documentary.",
        prompt: "You answer:",
        choices: [
          { text: "\"I build and ship apps. Recently I built a voice assistant app that's live with real users; before that, backend systems projects where I learned to make things reliable. I'm here because this team ships exactly that kind of product at a scale I want to learn.\"", why: "Present, past, future. Two proofs, one direction, under a minute. You also handed them the next question: 'tell me about the app.'", score: 2, next: "n2" },
          { text: "\"So I did my schooling in Hubli, then joined my current college where I study CS and AI, and in my first year I...\"", why: "Chronology. They're holding the resume; they need the story between the lines, not the lines.", score: 0, next: "n2" },
          { text: "\"What would you like to know?\"", why: "Bouncing the question back reads as unprepared, not collaborative. Have the trailer loaded.", score: 0, next: "n2" },
          { text: "\"I'm hardworking, a quick learner, and passionate about technology.\" (then list skills)", why: "Adjectives without evidence are noise. One shipped project outweighs every trait you can name.", score: 1, next: "n2" }
        ]
      },
      n2: {
        them: "\"Nice. So, curveball: your GitHub shows a lot of projects. Which one would you NOT build again, and why?\"",
        context: "They're testing honesty and judgment, not your perfection. 'I'd build everything again!' is the only wrong genre of answer.",
        prompt: "You:",
        choices: [
          { text: "\"My first dashboard app. I built it to learn charts, but it solved nobody's problem and I knew it by week two. It taught me to start from a user's pain, not a technology I want to try.\"", why: "Real answer, real lesson, and it quietly proves you now think about users. Curveball converted into evidence.", score: 2, next: "n3" },
          { text: "\"Honestly, I'd build all of them again. Each one taught me something.\"", why: "Safe, pleasant, forgettable. It answers the question while revealing no judgment.", score: 1, next: "n3" },
          { text: "\"Um... that's a hard one... I haven't really thought about that...\"", why: "Thinking out loud is fine for ten seconds; a full stall says the trailer was a script with nothing behind it.", score: 0, next: "n3" }
        ]
      },
      n3: {
        them: "\"We're at time. Anything you want to ask me?\"",
        context: "'No, I'm good' is the only wrong answer. This is your last impression.",
        prompt: "You ask:",
        choices: [
          { text: "\"What's the problem the team is behind on right now - the one an intern could meaningfully move?\"", why: "About the actual work, shows you're thinking about contributing, and gives them something real to say. Memorable.", score: 2, next: "end" },
          { text: "\"What's the work culture like?\"", why: "So generic it has a Wikipedia page. You'll get the brochure answer and learn nothing.", score: 1, next: "end" },
          { text: "\"No, I think I'm good. Thanks!\"", why: "You just spent your last impression confirming you're done talking to them.", score: 0, next: "end" }
        ]
      },
      end: { end: true }
    }
  }
];

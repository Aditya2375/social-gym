/* Lesson content. Each track: 3 lessons. Keep the voice plain and specific. */
var TRACKS = [
  {
    id: "small-talk",
    title: "Small Talk",
    emoji: "\u{1F4AC}",
    blurb: "Openers, follow-ups and exits that don't feel like a hostage situation.",
    intro: "Small talk gets a bad name because most people do it on autopilot. Done well it is just a warm-up lap: low stakes, quick, and it tells you whether a real conversation is available.",
    scenario: "coffee-shop",
    lessons: [
      {
        id: "st-1",
        title: "Openers that are not 'how are you'",
        minutes: 4,
        hook: "'How are you' gets 'fine' because it asks for nothing. A good opener gives the other person something specific to react to.",
        idea: "Open with the situation you both share. The room, the queue, the event, the weather doing something weird, the thing they are holding. Shared context is free material, and commenting on it is normal human behaviour, not an intrusion.",
        why: [
          "A specific observation is easy to answer. 'Fine' is not an answerable state; 'this line is moving like a sloth' is.",
          "It signals you are present, not running a script. People relax around someone who is actually looking at the same world they are.",
          "It carries zero pressure. If they give a short answer, nothing is lost. If they light up, you have a thread to pull."
        ],
        saynot: [
          ["How are you? (to a stranger, dead tone)", "This playlist is doing a lot for a Tuesday. Have you been here when it's busy?"],
          ["Nice weather, huh?", "I think the barista just judged my order and honestly, fair. What did you get?"]
        ],
        mistakes: [
          "Opening with a compliment about someone's body. Compliment a choice instead: the jacket, the book, the dog's name.",
          "Asking a question that has one polite answer. 'Busy today?' leads nowhere; 'what's good here that isn't on the menu board?' goes somewhere.",
          "Delivering the opener while staring at your phone. Look at the thing you are commenting on, then at them."
        ],
        nd: "If eye contact is costly for you, skip it. Comment on the shared thing while looking at the thing. That reads as natural to almost everyone and costs you far less fuel.",
        drill: "Today, make one situational comment to a stranger. No follow-up required. Cashier, lift, queue. One sentence about the shared situation, then let it go wherever it goes.",
        takeaway: "Open with the world you both share, not with a formality."
      },
      {
        id: "st-2",
        title: "Keep it alive: the follow-up fork",
        minutes: 5,
        hook: "Conversations die when every answer gets met with 'nice' or 'cool'. The follow-up fork is the habit that keeps them breathing.",
        idea: "Every answer you get contains two or three threads: a fact, a feeling, and a next step. Pick one and go deeper on it. 'I just moved here' forks into: where from (fact), how are you finding it (feeling), what made you move (story). Any fork beats 'oh nice'.",
        why: [
          "Follow-ups prove you heard the actual words, not just the noise. People can tell the difference within one exchange.",
          "Each fork gives the other person a choice of depth. They can stay shallow or go real, and they will match the energy you offer.",
          "It takes the weight off you. You stop hunting for your next clever line because their last answer is the material."
        ],
        saynot: [
          ["'I just started a new job.' - 'Oh nice.' (silence)", "'I just started a new job.' - 'Oh, where? And is week one mostly pretending to understand acronyms?'"],
          ["'I'm from Pune.' - 'Cool.'", "'I'm from Pune.' - 'No way, I hear the food scene there is underrated. What do you miss most?'"]
        ],
        mistakes: [
          "Forking into yourself immediately. 'You moved here? I moved here five years ago and...' Let their thread breathe before you share yours.",
          "Interrogation mode. Three questions in a row with nothing from you is a survey. Trade: answer your own question after they do.",
          "Ignoring the feeling fork every time. Facts are safe but feelings are where connection lives. Use both."
        ],
        nd: "If reading which fork to pick feels like guesswork, default to the feeling fork with a light touch: 'how's that been?' It works in almost every context and never requires decoding subtext.",
        drill: "In your next conversation, ban the word 'nice' as a response. Catch every answer and fork it once: fact, feeling or story. You only need to do it three times to feel the difference.",
        takeaway: "Every answer is a fork in the road. Pick a direction, never 'nice'."
      },
      {
        id: "st-3",
        title: "Leaving a conversation without being weird",
        minutes: 4,
        hook: "Most people don't fear starting conversations. They fear being trapped in one. Exits are a skill, and a clean one makes people like you more.",
        idea: "Exit on a high note with three parts: name something real from the conversation, give a reason (any true reason), and close warmly. 'I've got to grab my train, but I'm glad I asked about the trek, that sounded unreal. Enjoy the rest of the fest.' Thirty seconds, no apology spiral.",
        why: [
          "Ending on a specific callback proves the conversation mattered to you, which is the thing people actually remember.",
          "A reason, even a small one, frames the exit as logistics rather than rejection.",
          "Leaving first, kindly, signals social confidence. Lingering until the energy dies signals the opposite."
        ],
        saynot: [
          ["Slowly drifting backwards while saying 'yeah... yeah...'", "'I'm going to circulate, but the point you made about the exam system is going to live in my head. See you around.'"],
          ["'Sorry, sorry, I have to, sorry, my friend is calling, sorry.'", "'I promised myself food before the next session, so I'm off. This was fun, glad we talked.'"]
        ],
        mistakes: [
          "Over-apologising. One warm close is polite; four apologies makes it awkward for both of you.",
          "The fake phone glance. People know. A plain true reason lands better than theatre.",
          "Ghosting mid-story. Let their sentence finish, then exit. The high note needs a landing."
        ],
        nd: "Scripts are allowed. If exits spike your stress, pick two exit lines now, memorise them word for word, and reuse them forever. Nobody tracks your phrasing; they track how the exit felt.",
        drill: "End one conversation this week on purpose, before it dies, using the three parts: callback, reason, warm close. Notice that the other person almost always smiles.",
        takeaway: "Callback, reason, warm close. Exit first and kind."
      }
    ]
  },
  {
    id: "real-talk",
    title: "Real Conversations",
    emoji: "\u{1F9E0}",
    blurb: "Past the weather: questions, listening and sharing that build actual closeness.",
    intro: "The jump from small talk to real talk is where friendships are made or missed. It is not about being deep on demand; it is about trading slightly more than the script requires, at the right pace.",
    scenario: "friend-repair",
    lessons: [
      {
        id: "rt-1",
        title: "The question ladder: safe to real",
        minutes: 5,
        hook: "'What's your deepest fear?' in minute three is creepy. 'What do you do?' for the fortieth time is dead. The ladder fixes both.",
        idea: "Questions have rungs. Rung one is context (what do you do, where are you from). Rung two is preference (what do you like about it, what would you change). Rung three is meaning (what made you choose that, what are you hoping for). Climb one rung at a time, and only when the other person climbs with you.",
        why: [
          "Each rung is a small trust test. Pass it and the next rung feels natural; skip rungs and you feel like an interviewer or a creep.",
          "Preference questions are the underrated middle. 'What do you actually like about your work?' is safe but already personal.",
          "Matching pace matters more than the question. If they stay on rung one twice, enjoy rung one. Connection beats depth."
        ],
        saynot: [
          ["What do you do? ... Cool. So, what's your five-year plan?", "What do you do? ... What's the part of it you'd do even if nobody paid you?"],
          ["Do you have any trauma? (yes, people ask versions of this)", "What's something you've changed your mind about in the last few years?"]
        ],
        mistakes: [
          "Treating the ladder as a speedrun. The goal is a good conversation, not reaching rung three before the food arrives.",
          "Never answering your own questions. Climbing is a two-person activity: ask, listen, then offer your own answer to the same rung.",
          "Mistaking silence for failure. A thoughtful pause after a real question is a sign it landed."
        ],
        drill: "In your next real conversation, ask one rung-two question ('what do you like about...') and one rung-three ('what made you...'). Watch which one the other person grabs.",
        takeaway: "Context, preference, meaning. One rung at a time, together."
      },
      {
        id: "rt-2",
        title: "Listen so people feel it",
        minutes: 5,
        hook: "Most listening is just waiting to talk. The fix is not staring harder; it is proving, out loud, that the words landed.",
        idea: "Use labels and echoes. A label names the emotion you heard: 'that sounds exhausting', 'you seem genuinely proud of that'. An echo repeats their last few words as a question: 'the client rejected it twice?' Both tell the speaker: keep going, I'm actually here.",
        why: [
          "People rarely remember your advice. They remember whether they felt heard, and labels are the receipt.",
          "Echoes buy you time and them space. The most interesting part of a story usually comes right after the echo.",
          "Labels work even when wrong. 'That sounds frustrating' - 'no, more embarrassing actually' - now you know the real feeling."
        ],
        saynot: [
          ["'My manager took credit for my work.' - 'That happened to me once, so...' (your story for five minutes)", "'My manager took credit for my work.' - 'Twice in a row? That would make me furious. What did you do?'"],
          ["'I think I bombed the interview.' - 'I'm sure you did great!'", "'I think I bombed the interview.' - 'Bombed how, what moment is replaying in your head?'"]
        ],
        mistakes: [
          "Topping. Their story is not a trigger for your bigger story. Hold yours until they have fully finished theirs.",
          "Rushing to fix. 'Have you tried...' before they feel heard reads as dismissal. Ask 'do you want thoughts or just ears?' when unsure.",
          "Labelling every single line. Two or three per conversation is powerful; twenty is a therapy impression."
        ],
        nd: "If you process slowly or need scripts, echoes are your best tool: they require no decoding, just repetition with curiosity. 'The third round is tomorrow?' is a complete, valid, caring response.",
        drill: "Next time someone tells you a problem, respond with one label and one echo before offering anything else. Count how many extra minutes they keep talking.",
        takeaway: "Label the feeling, echo the words, then talk."
      },
      {
        id: "rt-3",
        title: "Share something real (the right amount)",
        minutes: 4,
        hook: "Closeness is built out of small risks. Share too little and you stay acquaintances forever; too much too fast and people quietly back away.",
        idea: "Use the 10 percent rule: share things about 10 percent more personal than the current conversation, and watch what comes back. A small embarrassing story, a real opinion, a minor struggle. If they match it, go another 10. If they deflect, stay where you are. Vulnerability is a bid, and bids can be declined politely.",
        why: [
          "People trust people who show a flaw. Perfection is suspicious; a small honest mess is relatable.",
          "Graduated sharing protects both sides. Nobody gets trauma-dumped on, nobody feels exposed alone.",
          "Reciprocity does the work. When you go first, lightly, you give them permission to be real too."
        ],
        saynot: [
          ["Work is great, everything's great, honestly couldn't be better. (to a friend who knows you)", "Honestly, work's been rough this month. I botched a demo and I've been rebuilding confidence since. How about you, really?"],
          ["(Twenty minutes into meeting someone) ...and that's why I don't talk to my father.", "(To a new friend) I was nervous coming here tonight, I almost bailed twice. Glad I didn't."]
        ],
        mistakes: [
          "Confusing vulnerability with volume. One honest sentence beats a monologue.",
          "Sharing to fish for comfort. The goal is connection, not outsourcing your feelings to a near-stranger.",
          "Keeping score. If they never match your bids after three tries, that is information, not a project."
        ],
        drill: "Share one thing this week that is 10 percent more real than the conversation calls for: a small failure, a real preference, a mild embarrassment. Just one. Watch what it unlocks.",
        takeaway: "Go 10 percent more real than the moment, then see who follows."
      }
    ]
  },
  {
    id: "storytelling",
    title: "Storytelling",
    emoji: "\u{1F3AD}",
    blurb: "Turn 'I guess you had to be there' into stories people ask you to finish.",
    intro: "Good storytellers are not born with better lives. They cut better, order better and know where the interesting part is. These are learnable cuts.",
    scenario: null,
    lessons: [
      {
        id: "sy-1",
        title: "Start at the wall, not the driveway",
        minutes: 4,
        hook: "Most stories die in the first thirty seconds because they start with context instead of collision.",
        idea: "Start as close to the moment something changed as you can. Not 'so last month I decided to try surfing, and I booked this class, and the drive there was...' but 'I'm standing on a surfboard for exactly one second, and then the ocean files a complaint.' Backfill context only when a listener asks or when the story stalls without it.",
        why: [
          "Attention is decided early. A change, a problem or a strange image in the first sentence buys you the next minute.",
          "Cutting the driveway forces you to know what the story is actually about. If you can't find the wall, there may be no story yet.",
          "Backfill feels like insider info. Listeners enjoy assembling the past from clues more than being briefed."
        ],
        saynot: [
          ["So, background: I've been learning guitar for like six months, and my friend has this band...", "My fingers are bleeding on stage, the string just snapped, and the crowd thinks it's part of the act. It was not part of the act."],
          ["First let me explain how the project works so this makes sense...", "The client's face when the demo crashed: pure weather. And then it got worse."]
        ],
        mistakes: [
          "Front-loading names, dates and relationships nobody can keep. Introduce people by role ('my landlord', 'this girl from my class') unless the name matters.",
          "Apologising for the story before telling it. 'This is probably boring but...' is a self-fulfilling prophecy.",
          "Confusing chronology with structure. Real time order is rarely the most interesting order."
        ],
        drill: "Take a story you tell often. Write the current first line, then write the moment of highest tension. Move the tension first. Tell it that way once this week.",
        takeaway: "Open at the collision. Context is backfill, not a welcome mat."
      },
      {
        id: "sy-2",
        title: "Tension is a question you don't answer yet",
        minutes: 5,
        hook: "People lean in when a question is open and lean out the moment it closes. Your whole job is managing open questions.",
        idea: "Plant questions, then delay the answers. 'The instructions said one thing, my gut said another' opens a loop. Give a small answer, open a bigger loop. 'I followed my gut. That was the mistake.' The story is over when the last loop closes, not before.",
        why: [
          "Open loops create a mild itch. Listeners stay to scratch it; closed loops release them to check their phones.",
          "Stacking a small loop inside a big one keeps momentum. Every thirty seconds something should resolve and something new should itch.",
          "Delays make the payoff land. A punchline with no setup is a fact; with a delay, it's an event."
        ],
        saynot: [
          ["I got locked out, found the spare key, and came in. Anyway, the door was jammed because the hinge...", "The door won't open. My keys are inside. My phone is inside. And then I remember the one window I never latch."],
          ["It all worked out fine in the end. So the interview was at 9 and I woke up at 8:50...", "I wake up. The interview is in ten minutes, across town. What I did next either saved it or made it legendary, depending on who you ask."]
        ],
        mistakes: [
          "Answering the loop instantly. 'I was so scared, but it was nothing.' Closed. Gone.",
          "Opening five loops and closing two. Listeners track debts; unpaid debts feel like a ramble.",
          "Faking stakes. If the story is small, tell it small and funny. Inflated stakes with a tiny payoff is the 'you had to be there' trap."
        ],
        drill: "Retell a small incident from this week using exactly two loops: one opened and closed early, one held until the last line. Say it out loud once, even alone.",
        takeaway: "Open a question, delay the answer, close it late."
      },
      {
        id: "sy-3",
        title: "Land it: endings and callbacks",
        minutes: 4,
        hook: "A story doesn't end when events stop. It ends when you give the listener a reason it was worth their attention.",
        idea: "End on a point, a joke or a callback. A point: what it changed or proved. A joke: the sharpest image, saved for last. A callback: a detail from the start, returned with new meaning. 'The window I never latch? Latched now. Permanently.' Then stop talking. Silence after the last line is confidence, not absence.",
        why: [
          "The last line is what gets repeated. People retell endings, not middles.",
          "A callback makes the whole story feel designed, which makes you sound sharper than a ramble ever could.",
          "Stopping cleanly invites reaction. Trailing off with 'and... yeah' invites polite nodding."
        ],
        saynot: [
          ["...so yeah, anyway, that's pretty much what happened, haha.", "...and that's why I now own two spare keys and trust no window."],
          ["And then we got home super late. The end, I guess.", "We walked in at 3 AM. My mom was awake. She just said 'worth it?' and honestly? It was."]
        ],
        mistakes: [
          "Adding a second ending. 'And then the next day...' after the landing kills the landing. Save it for next time.",
          "Explaining the point. 'So the moral is...' Trust the listener; a good story states itself.",
          "Laughing at your own last line for ten seconds. Deliver it, small smile, let them react first."
        ],
        drill: "Pick one of your stories and write its last line three ways: as a point, as a joke, as a callback. Keep the best. Use it next time the story comes up.",
        takeaway: "Save the best line for last, then stop talking."
      }
    ]
  }
  ,
  {
    id: "dating",
    title: "Dating and Flirting",
    emoji: "\u{2764}\u{FE0F}",
    blurb: "Showing interest clearly, asking people out, and texting like a person.",
    intro: "Flirting is not a trick. It is making your interest visible enough that the other person can safely respond to it, while keeping the stakes low enough that a no is cheap for both of you.",
    scenario: "first-date",
    lessons: [
      {
        id: "dt-1",
        title: "Interest is specific",
        minutes: 4,
        hook: "'You're cute' could be said to anyone. Specific interest can only be said to one person, and that is exactly why it works.",
        idea: "Notice choices, not bodies. The way they argue for bad movies with total conviction, their ridiculous laugh, the fact they remembered your coffee order. Then say it plainly, lightly, and let it sit. 'You're fun to argue with' lands harder than any line, because it is evidence that you actually see them.",
        why: [
          "Specificity is proof of attention, and attention is the actual compliment.",
          "Light delivery keeps it safe. Said with a smile and a subject change, it is a gift; said with heavy eye contact and expectation, it is an invoice.",
          "Playful teasing about small things (their team loyalty, their pineapple-on-pizza crime) creates a private game, and private games are how inside jokes start."
        ],
        saynot: [
          ["You're really hot. (to someone you've spoken to twice)", "You get very intense about very silly things. It's extremely entertaining, please continue."],
          ["I bet you say that to everyone. (fishing)", "You remembered. Okay, that's annoyingly charming."]
        ],
        mistakes: [
          "Stacking compliments. One lands; three in a row feels like a transaction.",
          "Negging. Backhanded stuff doesn't create attraction, it creates a story they tell their friends about you.",
          "Keeping interest a secret and hoping they psychically detect it. Visible and light beats hidden and intense, every time."
        ],
        nd: "If playful banter feels like a foreign language, skip it and be plainly warm: 'I really enjoy talking to you' is flirting too. Direct sincerity is underrated and impossible to misread.",
        drill: "Give one specific, choice-based compliment this week to someone you like, delivered lightly, with no follow-up expectation. Then change the subject like it cost you nothing.",
        takeaway: "Compliment the choice, say it lightly, move on."
      },
      {
        id: "dt-2",
        title: "Asking someone out without the fog",
        minutes: 5,
        hook: "'We should hang out sometime' is not an invitation; it's fog. Clear asks get clear answers, and clear answers are a kindness either way.",
        idea: "Use the three-part ask: a specific activity, a specific-ish time, and an easy out. 'I'm going to check out that new ramen place Thursday evening, want to come? No worries if the week's packed.' Then accept whatever answer comes at face value. A yes is great. A no with no counter-offer is a no; take it gracefully and keep being normal.",
        why: [
          "Specific plans are easy to say yes to. 'Sometime' requires them to do logistics work just to see you.",
          "The easy out lowers the cost of honesty, which means a yes actually means yes.",
          "Grace under no is the whole reputation. People talk; the person who took a no well gets mentioned kindly."
        ],
        saynot: [
          ["We should totally do something sometime! (never mentioned again)", "Are you free Saturday afternoon? I want to try the pottery place and I'd like the company."],
          ["So... do you maybe want to, like, I don't know, get coffee or whatever, if you're not busy, which you probably are...", "I'm enjoying this. Want to continue it over coffee this week? Totally fine if not."]
        ],
        mistakes: [
          "Asking via hint and calling rejection 'mixed signals'. If you didn't ask, you weren't rejected; you were vague.",
          "Negotiating a no. 'Are you sure? What about next week? Why not?' turns one awkward second into a lasting one.",
          "Treating a yes like a signed contract. Confirm the day before, keep it low-key, stay flexible."
        ],
        drill: "Draft your three-part ask for the person you have in mind, out loud, twice. Activity, time-ish, easy out. When it sounds casual, it's ready.",
        takeaway: "Specific plan, easy out, answer at face value."
      },
      {
        id: "dt-3",
        title: "Texting: momentum over essays",
        minutes: 4,
        hook: "Texting is for spark and logistics, not for proving your personality in paragraphs. The goal of every chat is a plan or a laugh.",
        idea: "Match their rhythm, keep messages short, and convert energy into plans. If they send two lines, send two lines. Reply when you see it; games about waiting exactly 43 minutes fool no one. When the chat is flowing, that's the moment to propose the meet, not after it dies. And if replies shrink to one word for days, let it rest.",
        why: [
          "Essays raise the reply cost. High cost means delayed replies, and delayed replies kill the very momentum you're texting to build.",
          "Asking to meet at peak energy works because the yes happens while the feeling is present.",
          "Letting a dying thread die is attractive. Chasing it with '??' or 'guess you're busy' is the opposite."
        ],
        saynot: [
          ["Hey. Heyyy. So what are you up to? (three bubbles, zero content)", "Just saw a dog wearing a tiny backpack and thought of your rant about lazy dogs. Anyway, ramen Thursday still on?"],
          ["(After two short replies) A nine-line message about your day, your week and your gym routine.", "(After two short replies) One light message. Then space. Then a plan later in the week."]
        ],
        mistakes: [
          "Interview texting: 'how was your day' every evening with no thread. Reference real things from your last conversation instead.",
          "Double-texting anxiety spirals. One follow-up is fine. Three is a monologue.",
          "Living in the chat for weeks. If you like them, aim to meet. Texting is the bridge, not the destination."
        ],
        drill: "Rewrite your most recent long draft text into two lines: one callback to something real, one forward move (a plan or a question). Notice it says more.",
        takeaway: "Short, real, forward-moving. Convert energy into plans."
      }
    ]
  },
  {
    id: "negotiation",
    title: "Negotiation and Assertiveness",
    emoji: "\u{1F91D}",
    blurb: "Asking for more, holding your number, and saying no without the guilt hangover.",
    intro: "Negotiation is not conflict. It is two people finding the real price of something, and it happens everywhere: salary, deadlines, group plans, whose turn it is to call the landlord.",
    scenario: "the-raise",
    lessons: [
      {
        id: "ng-1",
        title: "Ask for the thing, out loud",
        minutes: 4,
        hook: "Most people never get what they want because they only ever think it loudly. The single biggest negotiation skill is making the actual ask.",
        idea: "State what you want as a clear sentence with a number or a noun in it. Not 'I was hoping maybe something could be done about my workload' but 'I want to drop the Friday report, or hand it to Rohan. Which works?' Vague discomfort gets sympathy; specific asks get decisions.",
        why: [
          "People can't say yes to fog. A specific ask is easier to accept than to untangle.",
          "Asking plainly signals self-respect. Chronic hinting signals you'll accept whatever, so whatever is what you get.",
          "The worst realistic outcome is a no, and a clear no is useful: now you can decide what to do with accurate information."
        ],
        saynot: [
          ["It's fine, whatever works for everyone. (then resenting it for weeks)", "I can't do Friday. Any other day works, or we split it."],
          ["If it's not too much trouble, maybe at some point we could possibly discuss my pay?", "I want to talk about my salary. Based on the projects I've owned this year, I'm asking for a 20% raise."]
        ],
        mistakes: [
          "Pre-apologising: 'sorry to ask, sorry, but...' You are allowed to want things; the ask is not an offence.",
          "Asking and instantly backtracking: '...but it's totally fine if not!' Give them the silence to actually consider it.",
          "Only ever asking when you're at breaking point. Small early asks are cheap; resentment-funded explosions are not."
        ],
        nd: "If verbal asks spike your adrenaline, write yours down first and bring the note. Reading a clear ask from a card is infinitely better than ad-libbing a foggy one, and nobody respectable minds.",
        drill: "Make one real ask this week that you would normally swallow. Small is fine: the table you want, the deadline moved by a day, help with one task. Full sentence, number or noun included.",
        takeaway: "A clear ask beats a loud thought. Say the number."
      },
      {
        id: "ng-2",
        title: "The first number, the pause, the silence",
        minutes: 5,
        hook: "Money conversations are won in two unsexy moments: who says the first number, and who can sit in silence after it.",
        idea: "When you have information, anchor: name the first number, slightly above your real target, with a reason attached. 'Given the scope, something in the 8 to 10 range' pulls the whole conversation north. Then the other half: after any number is said, stop talking. Silence feels dangerous; it is actually just space for the other side to respond, and the person who fills it first usually fills it by conceding.",
        why: [
          "First numbers bend the field. A negotiation about whether you get 8 or 10 is a different universe from one about whether you get 4 or 5.",
          "A reason makes the anchor stick. 'Because X' works even when X is ordinary; humans just need a because.",
          "Silence reads as comfort. Panic-filling it ('but I'm flexible! totally negotiable!') discounts your own number before they do."
        ],
        saynot: [
          ["What does the role usually pay? (then accepting whatever they say)", "For this scope I've seen 7 to 9 lakhs, and given my internship work I'm targeting the top of that. What's the band on your side?"],
          ["They offer 6. You, instantly: okay okay, or 5.5 is also fine!", "They offer 6. You: pause. 'Thanks. I was expecting closer to 8 given the on-call part. What's possible there?'"]
        ],
        mistakes: [
          "Anchoring with a range where the bottom is your real target. They will hear only the bottom. Top of range should be your happy number.",
          "Taking the first counter as final. The first offer is a position, not a verdict; one calm pushback is expected, not rude.",
          "Negotiating against yourself in the silence. Their pause is their job, not your cue to discount."
        ],
        drill: "Practice the pause today in a low-stakes spot: a price, a plan, a splitting of the bill. State your position, then count five slow breaths before you speak again. Feel how nothing explodes.",
        takeaway: "Anchor with a reason, then let silence do its shift."
      },
      {
        id: "ng-3",
        title: "Saying no without a five-minute apology",
        minutes: 4,
        hook: "A clean no is a complete sentence. The apology essay you attach to it is for your guilt, not their comfort, and it makes everything worse.",
        idea: "Use the three-part no: appreciate or acknowledge, decline plainly, and (only if true) offer an alternative. 'Thanks for thinking of me. I can't take this on. If it helps, I can review it once it's drafted.' No over-explaining, no fake emergencies, no 'I'll try' when you mean no. The more reasons you stack, the more each one can be argued with.",
        why: [
          "Plainness is kinder than mush. 'Let me see... maybe... I'll try' buys hope and delivers disappointment, which costs more trust than a no.",
          "One real reason is stronger than five soft ones. Each extra excuse is a handle for pushback.",
          "Boundaries read as reliability. People trust the person whose yes means yes, and that requires their no to mean no."
        ],
        saynot: [
          ["Oh god, I'm so sorry, I would LOVE to but this week is insane, my cat has a thing, maybe next time, feel free to ask again, I'm so sorry...", "Can't make Saturday, but have a great time. I'd be up for the next one."],
          ["I guess I could try to finish it by tomorrow... (you cannot)", "Tomorrow isn't realistic. I can have it Wednesday, or today if we drop the second feature."]
        ],
        mistakes: [
          "The excuse buffet. One true reason, stated once, is the whole meal.",
          "Saying no to the person instead of the request. 'I can't take this project' lands fine; 'you always dump things on me' starts a war.",
          "Offering an alternative you don't mean. A fake 'another time!' teaches people your words are decorative."
        ],
        drill: "Decline one thing this week with the three parts, total length under fifteen words. Notice the other person survives, and so do you.",
        takeaway: "Acknowledge, decline, maybe an alternative. Then stop."
      }
    ]
  },
  {
    id: "interviews",
    title: "Interviews and Work",
    emoji: "\u{1F4BC}",
    blurb: "Answer like a trailer, talk to seniors like a peer, and network without the slime.",
    intro: "Professional conversations are still just conversations; the stakes are higher and the costumes are weirder. The edge goes to people who are specific, calm and brief.",
    scenario: "interview-tell-me",
    lessons: [
      {
        id: "in-1",
        title: "'Tell me about yourself' is a trailer, not a documentary",
        minutes: 5,
        hook: "This question is not a request for your biography. It is a ninety-second audition for the next forty minutes, and most people waste it on chronology.",
        idea: "Use present, past, future. One line on what you do now, two lines on the one or two past things that prove you can do this job, one line on why this role is the obvious next step. Then stop. 'I build Android apps and I ship them. Most recently I built a voice app that's live with real users; before that I was deep in backend systems projects. I'm here because this role is exactly that work at a bigger scale.' Ninety seconds, three moves, done.",
        why: [
          "A trailer makes the interviewer want the film. A documentary makes them check the time.",
          "Choosing one or two proofs forces you to know your own pitch, and that clarity reads as competence.",
          "Ending on 'why this role' hands them the next question on a plate: you just steered the interview."
        ],
        saynot: [
          ["So I was born in... I did my schooling at... then in first year of college I...", "I'm a CS student who ships: sixteen projects live, most recently a voice assistant app. I want to work on exactly this kind of problem, at your scale."],
          ["Um, what would you like to know?", "Happy to. Short version: I build things and finish them. Want the two-minute version or the one project I'm proudest of?"]
        ],
        mistakes: [
          "Reciting the resume they are holding. Add the story between the lines: decisions, tastes, what you liked.",
          "Listing traits ('I'm hardworking and passionate') instead of evidence. One shipped thing outweighs ten adjectives.",
          "Talking until interrupted. Ninety seconds, then let them drive."
        ],
        drill: "Write your present-past-future trailer right now, out loud, and time it. Cut until it is under 90 seconds and contains exactly two proofs.",
        takeaway: "Present, past, future. Trailer length, evidence inside."
      },
      {
        id: "in-2",
        title: "Talking to senior people without shrinking",
        minutes: 4,
        hook: "Seniors are not a different species. They are busy people who like being useful, and the fastest way to earn their respect is to be brief, specific and unafraid.",
        idea: "Lead with the point, then context. Not 'sorry to bother you, I know you're busy, this might be stupid...' but 'Quick one: our deploys fail on Fridays and I think it's the cache job. Want me to dig in?' Respect their time with brevity, not with self-erasure. And when you disagree, do it on the idea: 'I see it differently, can I make the case?'",
        why: [
          "Brevity is the currency senior people trade in. The person who saves them thirty seconds gets their attention next time too.",
          "Over-deference ('sorry, stupid question') makes them do emotional work before the actual work. Skip both apologies.",
          "Disagreeing once, calmly and on facts, raises your standing more than a year of nodding. Leaders want signal, not an echo."
        ],
        saynot: [
          ["Hi sir, sorry to disturb, extremely sorry, I had a small doubt, only if you have time, no rush at all...", "Quick question on the deploy job: the Friday failures look like cache invalidation. Ten minutes to confirm?"],
          ["(Agreeing with everything the VP says, visibly)", "I agree with the goal. On the timeline I'd push back: the migration alone is two weeks. Can I walk through the math?"]
        ],
        mistakes: [
          "Performing busyness or knowledge you don't have. 'I don't know, but I'll find out by 5' is a power sentence. Use it.",
          "Burying the ask under six paragraphs of throat-clearing, in chat or in person.",
          "Only ever talking to seniors when you need something. Two useful sentences when you need nothing buys the meeting when you do."
        ],
        drill: "Rewrite your most deferential recent message (email or chat) into two sentences: point first, one line of context. Send that style next time.",
        takeaway: "Point first, context second, no self-erasure."
      },
      {
        id: "in-3",
        title: "Networking that isn't collecting business cards",
        minutes: 5,
        hook: "Networking has a bad name because most people do it as extraction. The version that works is smaller and slower: be genuinely useful to a few people, repeatedly.",
        idea: "Pick five to ten people whose work you honestly find interesting. Engage with what they make: a specific reply to their post, a bug report, a build on their idea with credit. When you eventually ask for something, make it small and easy: 'fifteen minutes on one question', not 'please mentor me'. And keep a light rhythm: one useful touch a month beats a desperate burst when you need a referral.",
        why: [
          "Specific engagement stands out in a sea of 'great post!'. Referencing the actual detail proves you're a peer in waiting, not a fan.",
          "Small asks get yeses. Fifteen minutes is findable; a mentorship is a mortgage.",
          "Giving first (a fix, a summary, a useful intro) creates pull. People remember the person who made their thing better."
        ],
        saynot: [
          ["Hi, I'm a student, please guide me. (to 40 people, same text)", "Your post on caching fixed a bug in my project. One thing you didn't cover: cache stampedes. How do you handle those?"],
          ["Can you refer me? (first message ever)", "Loved the talk. I built a small demo extending your idea, here it is. If you ever have 15 minutes, I'd value one question answered. Either way, thanks for the work."]
        ],
        mistakes: [
          "The copy-paste blast. One lazy message to forty people is spam; one real message to five people is networking.",
          "Only appearing when you need something. Relationships have ledgers; deposit before you withdraw.",
          "Collecting contacts instead of building two or three actual relationships. Depth compounds; breadth evaporates."
        ],
        drill: "Pick one person whose work you use. Send one specific, useful message this week: a detail, a fix, or a real question. Ask for nothing.",
        takeaway: "Few people, real interest, small asks, give first."
      }
    ]
  }
];

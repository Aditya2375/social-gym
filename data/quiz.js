/* Scorecard: 10 questions. Each option points at the tracks it trains. */
var QUIZ = [
  {
    q: "You're at a college fest, standing near a group you half-know. What actually happens?",
    opts: [
      { text: "I hover, say little, and leave wishing I'd said something", tracks: ["small-talk"] },
      { text: "I jump in fine, but the conversation stays at 'so which department are you from'", tracks: ["real-talk", "small-talk"] },
      { text: "I talk, but my stories get polite nods instead of laughs", tracks: ["storytelling"] },
      { text: "I do fine socially, honestly", tracks: ["negotiation", "interviews"] }
    ]
  },
  {
    q: "A friend tells you about a real problem. Your first instinct is to:",
    opts: [
      { text: "Immediately tell them what they should do", tracks: ["real-talk"] },
      { text: "Share my own similar story", tracks: ["real-talk"] },
      { text: "Listen, ask, and let them finish before I say anything", tracks: ["dating", "negotiation"] },
      { text: "Quietly panic about what the right response is", tracks: ["real-talk", "small-talk"] }
    ]
  },
  {
    q: "When you tell a story about your weekend, people usually:",
    opts: [
      { text: "Interrupt with their own story halfway through", tracks: ["storytelling"] },
      { text: "Say 'haha nice' and move on", tracks: ["storytelling"] },
      { text: "Ask what happened next", tracks: ["negotiation", "interviews"] },
      { text: "I rarely tell stories", tracks: ["small-talk", "storytelling"] }
    ]
  },
  {
    q: "There's someone you'd like to ask out. Current status:",
    opts: [
      { text: "I've dropped hints and hope they make the move", tracks: ["dating"] },
      { text: "I've said nothing. They may never know.", tracks: ["dating", "small-talk"] },
      { text: "I asked clearly. Whatever they said, I handled it.", tracks: ["negotiation", "interviews"] },
      { text: "Not applicable right now", tracks: ["interviews"] }
    ]
  },
  {
    q: "A group project deadline is unfair to you. You:",
    opts: [
      { text: "Take the extra work and complain to someone else later", tracks: ["negotiation"] },
      { text: "Say 'it's fine' and quietly rage", tracks: ["negotiation", "small-talk"] },
      { text: "Name it directly: what I'll do, what I can't, and a fix", tracks: ["interviews", "real-talk"] },
      { text: "Send a long message and then soften it with five follow-ups", tracks: ["negotiation"] }
    ]
  },
  {
    q: "Picture an interviewer saying 'tell me about yourself'. Your honest reaction:",
    opts: [
      { text: "I recite my bio and hope it ends soon", tracks: ["interviews"] },
      { text: "I have a tight 90-second answer ready", tracks: ["negotiation", "dating"] },
      { text: "I ramble until they redirect me", tracks: ["interviews", "storytelling"] },
      { text: "Interviews aren't on my radar yet", tracks: ["small-talk", "real-talk"] }
    ]
  },
  {
    q: "In a conversation with someone senior (professor, manager, founder), you tend to:",
    opts: [
      { text: "Over-apologise and take forever to get to the point", tracks: ["interviews", "negotiation"] },
      { text: "Agree with everything they say", tracks: ["interviews", "negotiation"] },
      { text: "Talk to them like a person: brief, specific, honest", tracks: ["storytelling", "dating"] },
      { text: "Avoid talking to them at all", tracks: ["small-talk", "interviews"] }
    ]
  },
  {
    q: "How do your friendships usually deepen?",
    opts: [
      { text: "Slowly, over shared activity. We don't talk about real stuff much.", tracks: ["real-talk"] },
      { text: "I'm the one people open up to, but I don't open up back", tracks: ["real-talk"] },
      { text: "Fast and mutual - we trade real things", tracks: ["negotiation", "interviews"] },
      { text: "I find it hard to get past the acquaintance stage", tracks: ["real-talk", "small-talk"] }
    ]
  },
  {
    q: "Someone offers you less than you asked for (money, time, help). You usually:",
    opts: [
      { text: "Accept immediately to avoid tension", tracks: ["negotiation"] },
      { text: "Pause and calmly push once, with a reason", tracks: ["interviews", "storytelling"] },
      { text: "Accept, then resent it for weeks", tracks: ["negotiation", "real-talk"] },
      { text: "Get visibly annoyed", tracks: ["negotiation"] }
    ]
  },
  {
    q: "Texting someone you like looks like:",
    opts: [
      { text: "Long gaps, then a paragraph I rewrite four times", tracks: ["dating"] },
      { text: "Short, easy messages that turn into plans", tracks: ["negotiation", "interviews"] },
      { text: "'Hey' ... 'hey' ... 'wyd' ... (loop forever)", tracks: ["dating", "small-talk"] },
      { text: "I overthink every reply until the thread dies", tracks: ["dating", "small-talk"] }
    ]
  }
];

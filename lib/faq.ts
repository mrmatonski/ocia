export type FaqItem = {
  question: string;
  answer: string;
};

/*
 * PLACEHOLDER FAQ CONTENT
 * TODO: Replace answers with official parish guidance where pastoral
 * practice (sponsors, paperwork, baptismal records, etc.) is specific
 * to St. Mary, Star of the Sea.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Am I Catholic enough to attend?",
    answer:
      "There is no such thing as being 'Catholic enough' to begin. OCIA is for those who are curious, returning, searching, or standing at the threshold. You do not need a polished faith to walk through the door. You only need a willingness to come and see.",
  },
  {
    question: "Do I need to know anything about Catholicism?",
    answer:
      "No. Some people arrive having grown up around the Church. Others have never opened a Bible or stepped into a Catholic Mass. Both are welcome. The sessions are designed to meet you where you are — and to move at a human pace.",
  },
  {
    question: "What if I'm just curious?",
    answer:
      "Curiosity is a good beginning. Many saints started there. You are not required to decide anything in advance, join anything, or promise a destination. Inquiry is precisely for those who want to look more closely before they know what they will do.",
  },
  {
    question: "What if I'm baptized in another Christian tradition?",
    answer:
      "You are warmly welcome. The Church recognizes Christian baptism when it has been conferred with water in the name of the Father, Son, and Holy Spirit. Your path may look different from that of an unbaptized person, and that is a gift — not a problem. We will walk with you according to your own history.",
  },
  {
    question: "What if I'm not sure whether Catholicism is right for me?",
    answer:
      "Then you are in the right place. Discernment is not a failure of faith; it is a form of it. OCIA gives you time, teaching, prayer, and community so that any decision — if one comes — can be honest, unhurried, and free.",
  },
  {
    question: "How long does the process take?",
    answer:
      "[PLACEHOLDER] The length of OCIA varies with each person. Some walk a full liturgical year; others, depending on their background, may follow a different timeline. No one is rushed. We will talk with you about what makes sense for your life.",
  },
  {
    question: "Will I have to speak in front of people?",
    answer:
      "You will never be put on the spot. Conversation is invited, not demanded. Some people share freely; others listen for months before they say a word. Both ways of being present are honored.",
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "[PLACEHOLDER] There is no tuition for exploring the Catholic faith. If materials are ever needed, the parish will make that clear. No one should stay away because of money.",
  },
  {
    question: "Can I bring my spouse, family, or a friend?",
    answer:
      "Yes. Those who love you are welcome to accompany you. If you are unsure what would be helpful, reach out and we can talk through it together.",
  },
  {
    question: "What happens after I reach out?",
    answer:
      "[PLACEHOLDER] Someone from the OCIA team will respond, listen to your story, and help you take a first step — often by inviting you to a session or a conversation. You will not be added to anything without your knowledge. The first move is simply human: a welcome.",
  },
];

export const faqPreviewItems = faqItems.slice(0, 5);

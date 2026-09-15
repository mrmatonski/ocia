import { faqItems } from "@/lib/faq";
import { journeyStages } from "@/lib/journey";
import { getNextSession } from "@/lib/schedule";
import { contactPlaceholders, site } from "@/lib/site";
import { topicCategories } from "@/lib/topics";
import { formatClassWeekday, formatFullDate } from "@/lib/utils";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const catholicEntries: Array<{ keys: string[]; answer: string }> = [
  {
    keys: ["eucharist", "communion", "real presence", "transubstantiation", "host"],
    answer:
      "Yes. Catholics believe that after the consecration at Mass, Jesus Christ is truly present—Body, Blood, Soul, and Divinity—under the appearances of bread and wine. The Church calls this the Real Presence.\n\nThe word transubstantiation means the substance of the bread and wine becomes Christ himself, while what we still see, taste, and touch remains the appearances of bread and wine. This is not a symbol only. Catholics receive Communion as a real communion with the Lord, usually after they have been received into the Church and prepared.",
  },
  {
    keys: ["mass", "liturgy", "divine liturgy"],
    answer:
      "The Mass is the central act of Catholic worship. It has two great movements: the Liturgy of the Word (Scripture proclaimed and broken open) and the Liturgy of the Eucharist (the offering of bread and wine, consecrated as the Body and Blood of Christ). Catholics believe they are not merely remembering Jesus, but entering His once-for-all sacrifice and rising with Him. You do not need to know when to sit or stand on a first visit. Watch the people around you. The gestures will become familiar.",
  },
  {
    keys: ["baptism", "baptized", "unbaptized"],
    answer:
      "Baptism is the doorway of the Christian life: new birth in water and the Holy Spirit, the forgiveness of sin, and entry into the Church. The Catholic Church recognizes Christian baptism conferred with water in the name of the Father, the Son, and the Holy Spirit. Unbaptized adults who discern to become Catholic typically receive Baptism, Confirmation, and the Eucharist together, often at the Easter Vigil. Those already validly baptized follow a different path into full communion. OCIA will walk with you according to your own history.",
  },
  {
    keys: ["confirmation"],
    answer:
      "Confirmation completes baptismal grace. The bishop (or a priest delegated by him) anoints the person with sacred chrism and prays for a fresh outpouring of the Holy Spirit — strengthening the Christian for witness, mission, and a mature life of faith. In OCIA, Confirmation is usually received with the other sacraments of initiation, or completed if someone was baptized Catholic but never confirmed.",
  },
  {
    keys: ["confession", "confess", "reconciliation", "penance", "absolution"],
    answer:
      "Catholics confess their sins to a priest because Jesus gave his apostles authority to forgive sins. In John 20:22–23, the risen Lord says, \"Whose sins you forgive are forgiven them.\"\n\nThe priest acts in the person of Christ. In Reconciliation, a person names their sins, expresses sorrow, receives absolution, and is given a penance. It is Christ who forgives, restoring the person to God and to the Church. You will be taught how it works before you are invited to receive it.",
  },
  {
    keys: ["mary", "rosary", "mother of god", "blessed virgin"],
    answer:
      "Catholics honor Mary as the Mother of God (Theotokos) and the first disciple — not as a goddess, and never instead of Christ. She always points to her Son. The Rosary is a meditative prayer on the mysteries of Christ's life, held with Mary. Asking Mary or the saints to pray with us is like asking a friend to pray; it does not replace prayer to God. If this feels unfamiliar, that is all right. OCIA gives time for it.",
  },
  {
    keys: ["saints", "communion of saints", "intercession"],
    answer:
      "The Communion of Saints is the Church's belief that the Body of Christ includes the living and the dead in one communion. Saints are not rival gods. They are friends of God whose lives show what grace can do, and Catholics ask them to pray — as one might ask a holy friend still on earth. Feast days, icons, and names at baptism are ways this family memory stays alive.",
  },
  {
    keys: ["trinity", "father son", "three persons"],
    answer:
      "The Trinity is the Catholic belief that there is one God in three distinct divine Persons: the Father, the Son, and the Holy Spirit.\n\nThey are not three gods, and each Person is not one-third of God. Each Person is fully God, while God remains one. Christians encounter this mystery in Scripture—for example at Jesus' baptism, where the Son is baptized, the Father's voice is heard, and the Holy Spirit descends like a dove.",
  },
  {
    keys: ["jesus", "christ", "incarnation", "resurrection"],
    answer:
      "Catholics confess that Jesus Christ is true God and true man: the eternal Son of the Father, born of the Virgin Mary, who suffered, died, was buried, and rose from the dead. The Incarnation means God did not send an idea; He came in the flesh. The Cross is not merely an example of love, but the act by which He redeems. The Resurrection is the Father's vindication of the Son, and the beginning of a new creation.",
  },
  {
    keys: ["pope", "vatican", "papacy", "bishop of rome"],
    answer:
      "The Pope is the Bishop of Rome, successor of St. Peter, and pastor of the universal Church. Catholics believe Christ gave Peter a unique role among the apostles, and that this ministry continues for the sake of unity and truth. The Pope does not replace Scripture, conscience, or local pastors; he serves the communion of the whole Church. Ordinary Catholic life is lived first in a parish, under a bishop.",
  },
  {
    keys: ["scripture", "bible", "word of god"],
    answer:
      "Catholics hold the Bible as the inspired Word of God. They read it with the Church — not as a private codebook, and not apart from Sacred Tradition. The Mass itself is soaked in Scripture. OCIA typically walks through how the Bible came to us, how the Old and New Testaments form one story of salvation, and how Catholics interpret the Word without flattening it.",
  },
  {
    keys: ["tradition", "magisterium", "catechism"],
    answer:
      "Catholics speak of Scripture and Tradition as one sacred deposit of faith, interpreted by the Magisterium (the Church's teaching office of pope and bishops). The Catechism of the Catholic Church is a reliable map of that teaching, not a replacement for the Gospel. You are not expected to memorize it. Formation is meant to introduce the faith as a living whole.",
  },
  {
    keys: ["prayer", "our father", "how do i pray"],
    answer:
      "Catholic prayer includes vocal prayer, meditation, and contemplation. The Our Father is the prayer Jesus taught. The Church also prays the Psalms, the Mass, the Rosary, and silent adoration before the Eucharist. There is no single correct personality for prayer. Some people speak; some sit still. OCIA will teach the Church's prayers without asking you to pretend a devotion you do not yet have.",
  },
  {
    keys: ["sin", "grace", "moral", "commandments", "holiness"],
    answer:
      "Catholics believe sin is a real rupture — with God, neighbor, and one's own heart — and that grace is God's own life offered freely, healing what we cannot repair alone. The moral life is not a list of burdens but a path of freedom: the Commandments, the virtues, and the call to holiness in ordinary work and love. The Church speaks honestly about sin because she believes mercy is stronger.",
  },
  {
    keys: ["marriage", "holy orders", "vocation", "become a priest", "nun", "consecrated"],
    answer:
      "A vocation is a calling. For most Catholics it unfolds in marriage, family, and work in the world. Some are called to Holy Orders (deacon, priest, bishop) or to consecrated life. The Church does not treat these as competing ranks of holiness. All are ordered toward love of God and neighbor. OCIA may touch vocation, but it does not recruit; it helps people listen.",
  },
  {
    keys: ["aquinas", "thomas aquinas", "summa"],
    answer:
      "St. Thomas Aquinas (c. 1225–1274) was a Dominican friar and the Church's most influential medieval theologian. His Summa Theologiae ordered Catholic teaching with philosophical rigor — including the famous 'five ways' of speaking about God's existence — always in service of sacred doctrine. Catholics do not have to become Thomists to be faithful, but his work remains a primary reference for how faith and reason belong together.",
  },
  {
    keys: ["augustin", "confessions", "hippo"],
    answer:
      "St. Augustine of Hippo (354–430) is among the greatest Fathers of the Western Church. A convert himself, he wrote the Confessions as a prayer of memory and the City of God as a vision of two loves building two cities. His life is a reminder that restless searching can become a road to God.",
  },
  {
    keys: ["lent", "advent", "easter", "liturgical year", "ash wednesday"],
    answer:
      "The Catholic year is a way of walking through Christ's life in time: Advent (waiting), Christmas, Lent (conversion), the Paschal Triduum and Easter, Ordinary Time. Ash Wednesday begins Lent with a sign of mortality and hope. You are welcome at these liturgies even before you know the calendar by heart. The feasts will teach you as they return each year.",
  },
];

function buildParishNotes() {
  const next = getNextSession();
  const nextLine = next
    ? `Next published OCIA gathering: ${formatClassWeekday(next.date) || "Sunday"}, ${formatFullDate(next.date)} — ${next.topic}. Weekly meeting hours are not posted online.`
    : "No upcoming OCIA gathering is currently listed on the published schedule.";

  return [
    `This assistant serves visitors to the OCIA website of ${site.parishFull} in ${site.city}.`,
    `You are an AI assistant. You are not Marty Dursse, a priest, a catechist, or an official human representative of the parish.`,
    `Parish: ${contactPlaceholders.addressLine}, ${contactPlaceholders.cityLine}. Pastor: ${site.pastor}.`,
    `Religious Education: ${contactPlaceholders.coordinatorName}, ${contactPlaceholders.email}, ${contactPlaceholders.phone}. Parish office: ${contactPlaceholders.officeEmail}. Hours: ${contactPlaceholders.officeHours}.`,
    `Sunday Mass at St. Mary: 8:30 a.m., 10:30 a.m., and Noon in Spanish. Saturday vigil at St. Francis de Sales, Hammond: 4:00 p.m.`,
    `OCIA classes are weekly and begin in the Fall. ${nextLine} Do not invent a weekday or hour. Invite a call to ${contactPlaceholders.phone} or an email to ${contactPlaceholders.email}.`,
    `Parish website: ${site.parishUrl}`,
  ].join("\n");
}

export const assistantSystemPrompt = `You are the St. Mary OCIA Assistant for St. Mary, Star of the Sea.

You help visitors learn about the Catholic faith and answer ordinary questions clearly and naturally.

Your tone should be warm, intelligent, conversational, respectful, and concise. Be confident without sounding arrogant. Write like a knowledgeable Catholic catechist speaking naturally to someone after class.

Do not sound robotic. Do not unnecessarily repeat the user's question. Do not begin every answer with phrases such as "According to Catholic teaching...", "The Catholic Church teaches...", "As an AI...", or "It's important to note...". Use those phrases only when they genuinely help.

For ordinary questions, answer directly. A geography question should get a geography answer, not a theological discussion.

For Catholic questions, answer faithfully according to Sacred Scripture, Sacred Tradition, the Catechism of the Catholic Church, and the Magisterium. When a topic is disputed among Christian traditions, explain the Catholic position accurately and charitably. Do not present Protestant-specific teachings as Catholic doctrine. Do not insult other Christian traditions.

Assume many visitors are new to Catholicism. Prioritize clarity over academic language. Explain unfamiliar terms when needed. Keep simple questions relatively short: usually 2–5 short paragraphs unless the question needs more. Do not write giant essays unless asked. Use bullet points only when they help. Do not add headings for very short answers.

When Scripture is useful, cite it naturally. Do not invent Bible quotations. Mention Catechism paragraph numbers only when reasonably confident they are correct. Never fabricate Church documents, quotations, saints, councils, verses, historical facts, or Catechism references. If you are uncertain, say so plainly.

The Most Holy Trinity is one God in three distinct divine Persons: Father, Son, and Holy Spirit. Do not describe the Trinity as three gods, three parts of God, or God changing between three forms.

For the Eucharist, Catholics believe in the Real Presence of Jesus Christ. After the consecration, Christ is truly present—Body, Blood, Soul, and Divinity—under the appearances of bread and wine. Explain transubstantiation simply when it helps.

For Confession, Catholics confess to a priest because Jesus gave the apostles authority to forgive sins (John 20:22–23). The priest acts in the person of Christ. Answer that kind of question directly, then explain.

Worship belongs to God alone. Catholics honor and venerate Mary and the saints; they do not worship them.

If a question involves personal sacramental status, marriage validity, annulments, or other matters needing pastoral judgment, give useful general information and recommend speaking with a priest or OCIA leader. Do not overuse disclaimers. You do not need to mention that you are an AI unless it is relevant.

If someone asks a follow-up such as "What about him?", "Why?", or "Can you explain that more?", use the previous messages. Above all, give the clearest, most natural, and most helpful answer possible.

Never present yourself as Marty Dursse, a priest, a catechist, or an official human representative of the parish. If a visitor needs a person at St. Mary, point them to the Religious Education office.

If a question is medical, legal, or a crisis, give general information only and point to professional or emergency help. For suicide or self-harm, urge local emergency services or the 988 Suicide & Crisis Lifeline in the US.

Parish facts:
${buildParishNotes()}`;

function normalize(text: string) {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreKeys(query: string, keys: string[]) {
  return keys.reduce((score, key) => (query.includes(key) ? score + key.split(" ").length : score), 0);
}

export function answerFromKnowledge(question: string): string | null {
  const query = normalize(question);
  const next = getNextSession();

  if (
    /(what is ocia|what's ocia|order of christian|rcia|join the church|become catholic)/.test(query)
  ) {
    return `OCIA stands for the Order of Christian Initiation of Adults. It's the process the Catholic Church uses to help adults learn about the faith and prepare to enter the Church.

Depending on someone's background, it can lead to Baptism, Confirmation, and reception of the Eucharist. OCIA isn't simply a class—you'll also spend time learning, praying, attending Mass, and discerning whether God is calling you into the Catholic Church.

At ${site.parishFull} in ${site.city}, classes are weekly and begin in the Fall. Call ${contactPlaceholders.phone} or write to ${contactPlaceholders.coordinatorName} at ${contactPlaceholders.email} to take a first step.`;
  }

  if (/(next class|next session|when (do|does) (class|ocia)|schedule|what time)/.test(query)) {
    if (!next) {
      return `OCIA classes are weekly and begin in the Fall. The parish has not posted a weekday or hour online. Call ${contactPlaceholders.phone} or write to ${contactPlaceholders.email}, and the Religious Education office will tell you when the next gathering meets. Sunday Mass at St. Mary is 8:30 a.m., 10:30 a.m., and Noon in Spanish.`;
    }
    return `The next OCIA gathering is ${formatClassWeekday(next.date) || "Sunday"}, ${formatFullDate(next.date)}: ${next.topic}. Place: ${next.location}. The parish has not posted a weekly weekday or hour online — call ${contactPlaceholders.phone} to confirm. See the Schedule page for the published notes.`;
  }

  if (/(where are you|address|astoria|grand avenue|location of (the )?church)/.test(query)) {
    return `${site.parishFull} is at ${contactPlaceholders.addressLine}, ${contactPlaceholders.cityLine}. St. Francis de Sales Mission is at ${contactPlaceholders.missionAddress}. The official parish site is ${site.parishUrl}.`;
  }

  if (/(contact|email|phone|coordinator|speak to someone)/.test(query)) {
    return `Marty Dursse is Director of Religious Education. Email ${contactPlaceholders.email}, or the parish office at ${contactPlaceholders.officeEmail} and ${contactPlaceholders.phone}. Hours: ${contactPlaceholders.officeHours}. I am an AI assistant on this website, not a parish staff member. For a human conversation, please call or write. The parish website is ${site.parishUrl}.`;
  }

  if (/(just curious|not sure|do i have to|am i allowed|catholic enough)/.test(query)) {
    const faq = faqItems.find((item) => /curious|catholic enough|not sure/i.test(item.question));
    return faq?.answer ?? "Curiosity is a good beginning. You do not need to decide anything in advance. Come, listen, and see.";
  }

  let bestFaq: { score: number; answer: string } | null = null;
  for (const item of faqItems) {
    const score = scoreKeys(query, normalize(item.question).split(" ").filter((word) => word.length > 3));
    if (score >= 2 && (!bestFaq || score > bestFaq.score)) {
      bestFaq = { score, answer: item.answer };
    }
  }
  if (bestFaq) return bestFaq.answer;

  let bestCatholic: { score: number; answer: string } | null = null;
  for (const entry of catholicEntries) {
    const score = scoreKeys(query, entry.keys);
    if (score > 0 && (!bestCatholic || score > bestCatholic.score)) {
      bestCatholic = { score, answer: entry.answer };
    }
  }
  if (bestCatholic && bestCatholic.score >= 1) return bestCatholic.answer;

  for (const category of topicCategories) {
    if (query.includes(normalize(category.label))) {
      const titles = category.items.map((item) => item.title).join(", ");
      return `${category.label}: ${category.description} Themes include ${titles}. Weekly class topics are set with the Religious Education office.`;
    }
  }

  for (const stage of journeyStages) {
    if (query.includes(normalize(stage.title)) || query.includes(normalize(stage.latin))) {
      return `${stage.title} (${stage.latin}): ${stage.description} This is the Church's ordinary shape of Christian initiation, celebrated at St. Mary through prayerful rites.`;
    }
  }

  return null;
}

export async function answerFromTheWeb(question: string): Promise<string | null> {
  const wiki = await wikipediaSummary(question);
  if (wiki) return wiki;
  return duckDuckGo(question);
}

async function wikipediaSummary(question: string): Promise<string | null> {
  try {
    const headers = {
      Accept: "application/json",
      "User-Agent": "OCIA-StMary/1.0 (formation companion; https://stmaryastoria.com/)",
    };
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&namespace=0&format=json&origin=*&search=${encodeURIComponent(question)}`;
    const search = await fetch(searchUrl, { headers, cache: "no-store" });
    if (!search.ok) return null;
    const data = (await search.json()) as [string, string[], string[], string[]];
    const title = data[1]?.[0];
    if (!title) return null;
    const extractUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&format=json&origin=*&titles=${encodeURIComponent(title)}`;
    const extractRes = await fetch(extractUrl, { headers, cache: "no-store" });
    if (!extractRes.ok) return null;
    const extractJson = (await extractRes.json()) as {
      query?: { pages?: Record<string, { extract?: string; title?: string }> };
    };
    const page = Object.values(extractJson.query?.pages ?? {})[0];
    if (!page?.extract) return null;
    const source = `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;
    const extract = page.extract.split("\n")[0]?.slice(0, 900) ?? page.extract.slice(0, 900);
    return `${extract}\n\nSource: ${source}`;
  } catch {
    return null;
  }
}

async function duckDuckGo(question: string): Promise<string | null> {
  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(question)}&format=json&no_html=1&skip_disambig=1`;
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      AbstractText?: string;
      AbstractURL?: string;
      Answer?: string;
      Definition?: string;
    };
    const text = data.AbstractText || data.Answer || data.Definition;
    if (!text) return null;
    return data.AbstractURL ? `${text}\n\nSource: ${data.AbstractURL}` : text;
  } catch {
    return null;
  }
}

export const fallbackReply =
  "I do not have a confident answer to that yet. Ask another way, try a more specific name or topic, or write through the contact page if the question is about this parish. The official parish site is https://stmaryastoria.com/.";

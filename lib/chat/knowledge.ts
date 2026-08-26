import { faqItems } from "@/lib/faq";
import { journeyStages } from "@/lib/journey";
import { getNextSession, getUpcomingSessions } from "@/lib/schedule";
import { contactPlaceholders, site } from "@/lib/site";
import { topicCategories } from "@/lib/topics";
import { formatClassDate, formatClassWeekday } from "@/lib/utils";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const catholicEntries: Array<{ keys: string[]; answer: string }> = [
  {
    keys: ["eucharist", "communion", "real presence", "transubstantiation", "host"],
    answer:
      "Catholics believe the Eucharist is the Body and Blood of Jesus Christ — not a symbol only, but Christ truly present under the appearances of bread and wine. The Church calls the Eucharist the source and summit of the Christian life: the sacrifice of Calvary made present, and holy communion with the Lord. This is taught most fully at Mass. If you are exploring the faith, you are welcome to attend Mass; reception of Communion itself is for Catholics who are prepared. In OCIA, this mystery is unfolded slowly, not rushed.",
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
    keys: ["confession", "reconciliation", "penance"],
    answer:
      "Reconciliation (Confession) is the sacrament of healing and return. A person names their sins to a priest, expresses sorrow, receives absolution, and is given a penance. Catholics believe it is Christ who forgives, acting through the priest. You will never be forced to go, and you will be taught how it works before you are invited to receive it. Many people find it less frightening in practice than in imagination.",
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
      "The Trinity is the central mystery of Christian faith: one God in three Persons — Father, Son, and Holy Spirit. Not three gods, and not one Person wearing three masks. The Father begets the Son; the Spirit proceeds from the Father and the Son; all are coeternal and consubstantial. Catholics do not claim to exhaust the mystery. They confess it, pray it (in the Sign of the Cross and the Creed), and live from it.",
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
    keys: ["marriage", "holy orders", "vocation", "priest", "nun"],
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

export function buildSiteContext() {
  const next = getNextSession();
  const upcoming = getUpcomingSessions(5);
  const topics = topicCategories
    .map((category) => `${category.label}: ${category.items.map((item) => item.title).join(", ")}`)
    .join("\n");
  const journey = journeyStages
    .map((stage) => `${stage.number} ${stage.title} (${stage.latin}): ${stage.description}`)
    .join("\n");
  const faq = faqItems.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n");

  return [
    `${site.fullName} (${site.name}) at ${site.parishFull}, ${site.city}.`,
    `Official parish website: ${site.parishUrl}`,
    `Parish address: ${contactPlaceholders.addressLine}, ${contactPlaceholders.cityLine}.`,
    `OCIA coordinator, email, phone, and meeting location are placeholders until the parish confirms them: ${contactPlaceholders.coordinatorName}, ${contactPlaceholders.email}, ${contactPlaceholders.phone}, ${contactPlaceholders.location}.`,
    "Do not invent official parish-specific facts. If a detail is marked placeholder, say so and point people to the contact page or the parish website.",
    next
      ? `Next placeholder gathering: ${next.title} on ${formatClassWeekday(next.date)}, ${formatClassDate(next.date)}, ${next.time}, at ${next.location}. Topic: ${next.topic}. Instructor: ${next.instructor}.`
      : "No upcoming placeholder classes remain on the sample calendar.",
    `Upcoming placeholder sessions:\n${upcoming.map((session) => `- ${formatClassDate(session.date)}: ${session.title} (${session.topic})`).join("\n")}`,
    `Topic outline (placeholder curriculum):\n${topics}`,
    `Journey stages (universal OCIA structure, placeholder copy):\n${journey}`,
    `FAQ:\n${faq}`,
  ].join("\n\n");
}

export const assistantSystemPrompt = `You are the formation companion on the OCIA website of ${site.parishFull} in ${site.city}.

Voice: restrained, reverent, clear, warm, never salesy, never cutesy, never a church-bulletin mascot. Write in complete sentences. Prefer short paragraphs.

You may answer any sincere question: Catholic faith, Scripture, sacraments, prayer, history, culture, science, practical life, or the OCIA path. Be accurate. If you are unsure, say so.

Hard limits:
- Do not invent official St. Mary OCIA schedule, fees, coordinator names, emails, or pastoral policies.
- When parish-specific facts are placeholders, say they are not yet confirmed and invite the person to the /contact page or ${site.parishUrl}.
- Do not pressure anyone to convert. Inquiry is welcome. Curiosity is enough.
- If a question is medical, legal, or crisis-related, give general information only and point to appropriate professional or emergency help.
- For suicide or self-harm, urge the person to contact local emergency services or the 988 Suicide & Crisis Lifeline in the US.

Parish and site context:
${buildSiteContext()}`;

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
    return `${site.fullName} is the Church's way of walking with adults who wish to explore the Catholic faith. It is not a test to pass. It is a season of encounter — questions, prayer, teaching, and a community that makes room for people who are still finding their way. At ${site.parishFull} in ${site.city}, some who come are unbaptized, some were baptized in another Christian tradition, and some are Catholic already. All are welcome to begin. If you want a human conversation, use the contact page; the official coordinator details are still placeholders.`;
  }

  if (/(next class|next session|when (do|does) (class|ocia)|schedule|what time)/.test(query)) {
    if (!next) {
      return "The sample calendar on this site has no remaining upcoming sessions. The official St. Mary OCIA schedule has not been published here yet. Please check the Class Schedule page later, or reach out on the contact page. The parish website is stmaryastoria.com.";
    }
    return `On this site's placeholder calendar, the next gathering is “${next.title}” on ${formatClassWeekday(next.date)}, ${formatClassDate(next.date)}, ${next.time}, at ${next.location}. The topic is: ${next.topic}. Instructor is listed as ${next.instructor}. These dates are sample content until the parish confirms the official calendar. See the Schedule page for the full list.`;
  }

  if (/(where are you|address|astoria|grand avenue|location of (the )?church)/.test(query)) {
    return `${site.parishFull} is at ${contactPlaceholders.addressLine}, ${contactPlaceholders.cityLine}. The official parish site is ${site.parishUrl}. The OCIA meeting room is still listed as ${contactPlaceholders.location} until the parish confirms it.`;
  }

  if (/(contact|email|phone|coordinator|speak to someone)/.test(query)) {
    return `You can write through the contact page on this site. The coordinator name, email, and phone are still placeholders (${contactPlaceholders.coordinatorName}, ${contactPlaceholders.email}, ${contactPlaceholders.phone}) until the parish publishes them. The parish website is ${site.parishUrl}.`;
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
      return `${category.label}: ${category.description} In the placeholder outline on this site, that includes ${titles}. This is not the official St. Mary syllabus; it is a representative Catholic formation map.`;
    }
  }

  for (const stage of journeyStages) {
    if (query.includes(normalize(stage.title)) || query.includes(normalize(stage.latin))) {
      return `${stage.title} (${stage.latin}): ${stage.description.replace("[PLACEHOLDER] ", "")} This describes the universal shape of Christian initiation, not a parish-specific pastoral plan.`;
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

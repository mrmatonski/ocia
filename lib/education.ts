import { faqItems, type FaqItem } from "@/lib/faq";
import { classSchedule } from "@/lib/schedule";
import { contactPlaceholders } from "@/lib/site";

export type EducationIcon =
  | "church"
  | "book"
  | "flame"
  | "chalice"
  | "family"
  | "users"
  | "cross"
  | "person"
  | "question";

export type ScheduleEntry = {
  date: string;
  time: string;
  topic: string;
  location: string;
  program?: string;
  instructor?: string;
  notes?: string;
};

export type ProgramTopic = {
  title: string;
  summary: string;
};

export type AudienceGroup = {
  title: string;
  body: string;
};

export type Instructor = {
  name: string;
  title: string;
  note: string;
};

export type ImportantDate = {
  label: string;
  detail: string;
};

export type RelatedLink = {
  href: string;
  label: string;
};

export type EducationProgram = {
  slug: string;
  name: string;
  cardTitle: string;
  tagline: string;
  description: string;
  overview: string[];
  audience: string;
  audienceGroups: AudienceGroup[];
  learnIntro: string;
  topics: ProgramTopic[];
  topicsNote: string;
  schedule: ScheduleEntry[];
  scheduleNote: string;
  scheduleComingSoon: boolean;
  location: string;
  locationNote: string;
  instructor: Instructor;
  importantDates: ImportantDate[];
  registration: string;
  faqs: FaqItem[];
  contactNote: string;
  cardCta: string;
  seoTitle: string;
  seoDescription: string;
  icon: EducationIcon;
  relatedLinks?: RelatedLink[];
};

const comingSoonSchedule: ScheduleEntry[] = [
  {
    date: "TBD",
    time: "Details coming soon",
    topic: "Class schedule coming soon",
    location: "[LOCATION PLACEHOLDER]",
  },
  {
    date: "TBD",
    time: "Details coming soon",
    topic: "Program information will be updated soon",
    location: "[LOCATION PLACEHOLDER]",
  },
  {
    date: "TBD",
    time: "Details coming soon",
    topic: "Official dates will be published here",
    location: "[LOCATION PLACEHOLDER]",
  },
];

const placeholderInstructor: Instructor = {
  name: "[NAME PLACEHOLDER]",
  title: "[TITLE PLACEHOLDER]",
  note: "Instructor information will be updated soon. Please contact the parish office for the current catechist or coordinator.",
};

const placeholderDates: ImportantDate[] = [
  {
    label: "Registration",
    detail: "Details coming soon.",
  },
  {
    label: "First gathering",
    detail: "Class schedule coming soon.",
  },
  {
    label: "Program year",
    detail: "Program information will be updated soon.",
  },
];

const genericFaqs: FaqItem[] = [
  {
    question: "How do I register?",
    answer:
      "[PLACEHOLDER] Registration details will be published here. Until then, please use the contact page and a member of the parish team will help you take the next step.",
  },
  {
    question: "Is there a cost?",
    answer:
      "[PLACEHOLDER] Cost, materials, and any fees have not yet been published. No one should stay away from formation because of money. Contact the parish if this is a concern.",
  },
  {
    question: "When and where does this program meet?",
    answer:
      "[PLACEHOLDER] The official class schedule, time, and location will be updated soon. Placeholder sessions below are structural examples only.",
  },
  {
    question: "Who should I contact with questions?",
    answer:
      "[PLACEHOLDER] Coordinator names and direct parish contacts will be added when they are confirmed. You are welcome to reach out through the contact page in the meantime.",
  },
];

const ociaSchedule: ScheduleEntry[] = classSchedule.map((session) => ({
  date: session.date,
  time: session.time,
  topic: session.topic,
  location: session.location,
  program: "OCIA",
  instructor: session.instructor,
  notes: session.title,
}));

/*
 * PLACEHOLDER PROGRAM DATA
 * TODO: Replace names, schedules, instructors, locations, dates, and
 * parish-specific descriptions with official St. Mary, Star of the Sea
 * Religious Education information. Do not treat this file as a published
 * parish catalog until those details are confirmed.
 */
export const educationPrograms: EducationProgram[] = [
  {
    slug: "ocia",
    name: "OCIA",
    cardTitle: "OCIA",
    tagline: "Order of Christian Initiation of Adults",
    description:
      "Explore the Catholic faith and journey toward full communion with the Church.",
    overview: [
      "OCIA — the Order of Christian Initiation of Adults — is the Church's way of walking with adults who wish to know Jesus Christ in the Catholic Church. It is ordered toward conversion, and toward the sacraments of initiation: Baptism, Confirmation, and the Eucharist.",
      "At St. Mary, Star of the Sea in Astoria, this path is meant to feel human. You will gather, pray, listen, and ask. You will be given time. No one is expected to arrive already certain.",
      "This page is an introduction. The existing OCIA pages on this site — About, Schedule, Topics, and Journey — remain the fuller account of the process.",
    ],
    audience: "Adults interested in learning about Catholicism.",
    audienceGroups: [
      {
        title: "The unbaptized",
        body: "Adults who have never been baptized and wish to explore becoming Catholic.",
      },
      {
        title: "Baptized Christians",
        body: "Those baptized in another Christian tradition who are considering full communion with the Catholic Church.",
      },
      {
        title: "Catholic adults",
        body: "Catholics who wish to complete Confirmation or the Eucharist, or simply to be formed more deeply.",
      },
    ],
    learnIntro:
      "The outline below is representative of Catholic adult initiation. It is not the parish's published syllabus.",
    topics: [
      {
        title: "The Bible",
        summary: "[PLACEHOLDER TOPIC] How Catholics receive Sacred Scripture as the Word of God.",
      },
      {
        title: "The Person of Jesus Christ",
        summary: "[PLACEHOLDER TOPIC] The Incarnation, the Cross, and the Resurrection.",
      },
      {
        title: "The Trinity",
        summary: "[PLACEHOLDER TOPIC] Father, Son, and Holy Spirit — one God in three Persons.",
      },
      {
        title: "The Sacraments",
        summary: "[PLACEHOLDER TOPIC] Visible signs of invisible grace.",
      },
      {
        title: "The Eucharist",
        summary: "[PLACEHOLDER TOPIC] The source and summit of the Christian life.",
      },
      {
        title: "The Mass",
        summary: "[PLACEHOLDER TOPIC] How the Church prays the sacred liturgy.",
      },
      {
        title: "Prayer",
        summary: "[PLACEHOLDER TOPIC] Learning to speak with God as the Church speaks.",
      },
      {
        title: "Catholic moral teaching",
        summary: "[PLACEHOLDER TOPIC] The shape of a life ordered toward God and neighbor.",
      },
      {
        title: "The Church",
        summary: "[PLACEHOLDER TOPIC] The Body of Christ in history, sacrament, and communion.",
      },
      {
        title: "Mary and the Saints",
        summary: "[PLACEHOLDER TOPIC] The family of God across heaven and earth.",
      },
      {
        title: "Salvation",
        summary: "[PLACEHOLDER TOPIC] What Christ has done, and how we are drawn into His life.",
      },
      {
        title: "Christian discipleship",
        summary: "[PLACEHOLDER TOPIC] Following Christ in ordinary life.",
      },
    ],
    topicsNote:
      "A fuller topical outline lives on the Topics page. Replace this list in lib/education.ts when the official OCIA curriculum is confirmed.",
    schedule: ociaSchedule,
    scheduleNote:
      "Placeholder sessions for a formation year. Dates, times, topics, and presenters will be replaced with the official parish calendar.",
    scheduleComingSoon: false,
    location: contactPlaceholders.location,
    locationNote:
      "The regular gathering place will be confirmed with the official calendar. Until then, this field remains a placeholder.",
    instructor: {
      name: contactPlaceholders.coordinatorName,
      title: contactPlaceholders.coordinatorTitle,
      note: "Replace coordinator details in lib/site.ts when official parish contacts are confirmed.",
    },
    importantDates: [
      {
        label: "Inquiry",
        detail: "You may begin with a conversation at any time. No one is rushed.",
      },
      {
        label: "Formation year",
        detail: "[PLACEHOLDER] Official dates will follow the parish calendar.",
      },
      {
        label: "Easter Vigil",
        detail: "[PLACEHOLDER] Those who are ready may receive the sacraments of initiation at Easter.",
      },
    ],
    registration:
      "There is no application to survive. Begin with a conversation on the contact page, or come to an inquiry gathering when the official schedule is posted.",
    faqs: faqItems,
    contactNote:
      "Someone from the OCIA team will respond, listen to your story, and help you take a first step.",
    cardCta: "Explore OCIA",
    seoTitle: "OCIA",
    seoDescription:
      "Explore OCIA — the Order of Christian Initiation of Adults — at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
    icon: "church",
    relatedLinks: [
      { href: "/about", label: "About OCIA" },
      { href: "/schedule", label: "Class schedule" },
      { href: "/topics", label: "Topics" },
      { href: "/journey", label: "Your journey" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Begin your journey" },
    ],
  },
  {
    slug: "adult-faith-formation",
    name: "Adult Faith Formation",
    cardTitle: "Adult Faith Formation",
    tagline: "Ongoing Catholic learning for grown disciples",
    description:
      "Bible studies, Catholic teaching, theology, apologetics, and discussion for adults who wish to keep growing.",
    overview: [
      "Adult faith formation is for Catholics — and for anyone drawn to the Church — who want to keep learning after the first questions have been asked. It may include Scripture study, the Catechism, theology, apologetics, and conversation in community.",
      "Program information will be updated soon. The descriptions, topics, and gatherings below are structural placeholders so the parish can publish official offerings without rebuilding this page.",
    ],
    audience: "Adults seeking ongoing Catholic formation.",
    audienceGroups: [
      {
        title: "Parish adults",
        body: "Catholics who wish to know the faith more deeply in Scripture, doctrine, and prayer.",
      },
      {
        title: "Returning Catholics",
        body: "Those coming home to the Church after time away, looking for a gentle place to begin again.",
      },
      {
        title: "Inquirers",
        body: "Adults who are curious about Catholic teaching and would like to study without yet entering OCIA.",
      },
    ],
    learnIntro:
      "Example themes only. Do not treat this list as the parish's official adult-formation syllabus.",
    topics: [
      { title: "Sacred Scripture", summary: "[PLACEHOLDER TOPIC] Reading the Bible with the Church." },
      { title: "The Catechism", summary: "[PLACEHOLDER TOPIC] A map of Catholic belief and life." },
      { title: "Prayer and the interior life", summary: "[PLACEHOLDER TOPIC] Habits that sustain faith." },
      { title: "Catholic moral teaching", summary: "[PLACEHOLDER TOPIC] Conscience, virtue, and charity." },
      { title: "The Church in the world", summary: "[PLACEHOLDER TOPIC] Catholic social teaching in outline." },
      { title: "Apologetics", summary: "[PLACEHOLDER TOPIC] Giving a reason for the hope that is in you." },
    ],
    topicsNote: "Replace these topics in lib/education.ts when official studies are announced.",
    schedule: comingSoonSchedule,
    scheduleNote: "Class schedule coming soon. Placeholder rows only.",
    scheduleComingSoon: true,
    location: "[LOCATION PLACEHOLDER]",
    locationNote: "Details coming soon.",
    instructor: placeholderInstructor,
    importantDates: placeholderDates,
    registration:
      "Registration information will be updated soon. Use the contact page to express interest in adult formation.",
    faqs: genericFaqs,
    contactNote: "A parish contact for adult formation will be listed here when confirmed.",
    cardCta: "Learn more",
    seoTitle: "Adult Faith Formation",
    seoDescription:
      "Adult faith formation at St. Mary, Star of the Sea in Astoria, Oregon — Bible study, Catholic teaching, and ongoing discipleship. Details coming soon.",
    icon: "book",
  },
  {
    slug: "youth",
    name: "Youth Religious Education",
    cardTitle: "Youth Religious Education",
    tagline: "Formation for children and teenagers",
    description:
      "Religious education for young people growing in friendship with Christ and His Church.",
    overview: [
      "Youth religious education accompanies children and teenagers as they learn the faith, practice prayer, and take their place in the life of the parish.",
      "Ages, grade levels, curriculum, and meeting times have not yet been supplied. What follows is a clear structure the parish can fill in — not an official published program.",
    ],
    audience: "Children and teenagers in the parish community.",
    audienceGroups: [
      {
        title: "Children",
        body: "Age-appropriate introduction to the stories of Scripture, the life of Jesus, and the prayer of the Church.",
      },
      {
        title: "Younger teens",
        body: "Formation that meets the questions of early adolescence with patience and the teaching of the Church.",
      },
      {
        title: "Older teens",
        body: "Deeper study, friendship, and preparation for a mature Catholic life — including Confirmation when that path applies.",
      },
    ],
    learnIntro: "Representative youth-formation themes. Not an official St. Mary curriculum.",
    topics: [
      { title: "The life of Jesus", summary: "[PLACEHOLDER TOPIC] Who Christ is, and why He matters." },
      { title: "Prayer", summary: "[PLACEHOLDER TOPIC] Learning to speak with God." },
      { title: "The Mass", summary: "[PLACEHOLDER TOPIC] How we worship as a Church." },
      { title: "The sacraments", summary: "[PLACEHOLDER TOPIC] Meeting Christ in visible signs." },
      { title: "Friendship and virtue", summary: "[PLACEHOLDER TOPIC] Living the faith among peers." },
      { title: "Service", summary: "[PLACEHOLDER TOPIC] Faith that takes flesh in charity." },
    ],
    topicsNote: "Replace with the parish youth curriculum when it is confirmed.",
    schedule: comingSoonSchedule,
    scheduleNote: "Class schedule coming soon.",
    scheduleComingSoon: true,
    location: "[LOCATION PLACEHOLDER]",
    locationNote: "Details coming soon.",
    instructor: placeholderInstructor,
    importantDates: placeholderDates,
    registration:
      "Program information will be updated soon. Families may inquire through the contact page.",
    faqs: genericFaqs,
    contactNote: "Youth ministry contacts will be added when the parish confirms them.",
    cardCta: "Learn more",
    seoTitle: "Youth Religious Education",
    seoDescription:
      "Youth religious education at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon. Program details coming soon.",
    icon: "users",
  },
  {
    slug: "sacramental-preparation",
    name: "Sacramental Preparation",
    cardTitle: "Sacramental Preparation",
    tagline: "Preparing for the sacraments of the Church",
    description:
      "Formation for children, teens, and adults preparing to receive the sacraments.",
    overview: [
      "Sacramental preparation helps the baptized — and those preparing for Baptism — enter more consciously into the mysteries of the Church: Reconciliation, Confirmation, the Eucharist, and, where applicable, other sacraments.",
      "This page is an umbrella for parish sacramental formation. Dedicated pages for Confirmation and First Communion live beside it. Official requirements, ages, and paperwork will be published here when they are supplied.",
    ],
    audience: "Children, teens, and adults preparing for the sacraments.",
    audienceGroups: [
      {
        title: "Families with children",
        body: "Parents and children walking together toward First Reconciliation, First Communion, or other sacraments.",
      },
      {
        title: "Teens",
        body: "Young people preparing for Confirmation or completing initiation.",
      },
      {
        title: "Adults",
        body: "Adults who need sacramental preparation outside the ordinary OCIA path — details coming soon.",
      },
    ],
    learnIntro: "Example areas of preparation only. Not parish policy.",
    topics: [
      { title: "The meaning of a sacrament", summary: "[PLACEHOLDER TOPIC] Visible signs of invisible grace." },
      { title: "Baptismal life", summary: "[PLACEHOLDER TOPIC] Living the gift already received, or preparing to receive it." },
      { title: "Reconciliation", summary: "[PLACEHOLDER TOPIC] Mercy, conversion, and returning to God." },
      { title: "The Eucharist", summary: "[PLACEHOLDER TOPIC] Christ truly present, and holy communion with His Church." },
      { title: "Confirmation", summary: "[PLACEHOLDER TOPIC] Sealed with the Gift of the Holy Spirit." },
      { title: "Prayer and Mass", summary: "[PLACEHOLDER TOPIC] Learning to worship with the parish." },
    ],
    topicsNote: "See also Confirmation and First Communion for more specific placeholder pages.",
    schedule: comingSoonSchedule,
    scheduleNote: "Class schedule coming soon.",
    scheduleComingSoon: true,
    location: "[LOCATION PLACEHOLDER]",
    locationNote: "Details coming soon.",
    instructor: placeholderInstructor,
    importantDates: placeholderDates,
    registration:
      "Registration information will be updated soon. Please contact the parish to ask about sacramental preparation.",
    faqs: [
      ...genericFaqs,
      {
        question: "Is this the same as OCIA?",
        answer:
          "Not always. OCIA is the Church's path of initiation for adults (and, in some cases, children of catechetical age). Other sacramental preparation may serve families whose children are already baptized, or adults completing a sacrament. The parish will clarify which path fits your situation.",
      },
    ],
    contactNote: "Sacramental-preparation contacts will be listed when confirmed.",
    cardCta: "Learn more",
    seoTitle: "Sacramental Preparation",
    seoDescription:
      "Sacramental preparation at St. Mary, Star of the Sea in Astoria, Oregon — for children, teens, and adults. Details coming soon.",
    icon: "chalice",
    relatedLinks: [
      { href: "/religious-education/confirmation", label: "Confirmation preparation" },
      { href: "/religious-education/first-communion", label: "First Communion preparation" },
      { href: "/religious-education/ocia", label: "OCIA" },
    ],
  },
  {
    slug: "childrens-faith-formation",
    name: "Children's Faith Formation",
    cardTitle: "Children's Faith Formation",
    tagline: "Age-appropriate Catholic formation for children",
    description:
      "Helping children know Jesus, love the Church, and grow in prayer at a pace meant for them.",
    overview: [
      "Children's faith formation offers age-appropriate Catholic teaching for the youngest members of the parish — the stories of Scripture, the person of Jesus, the Mass, and the first habits of prayer.",
      "Grade levels, textbooks, and class times are not yet published. Placeholder content below is easy to replace in lib/education.ts.",
    ],
    audience: "Children and their families.",
    audienceGroups: [
      {
        title: "Young children",
        body: "A first introduction to Jesus, prayer, and the life of the parish — details coming soon.",
      },
      {
        title: "Elementary ages",
        body: "Growing in knowledge of the faith, Scripture, and the sacraments at a child's pace.",
      },
      {
        title: "Parents",
        body: "The first teachers of the faith. Formation for children is meant to support, not replace, the home.",
      },
    ],
    learnIntro: "Example children's themes only. Not an official published curriculum.",
    topics: [
      { title: "God the Father", summary: "[PLACEHOLDER TOPIC] Learning that we are loved by God." },
      { title: "The life of Jesus", summary: "[PLACEHOLDER TOPIC] Stories of Christ told with care." },
      { title: "Prayer", summary: "[PLACEHOLDER TOPIC] The Sign of the Cross, the Our Father, and simple prayer." },
      { title: "The Mass", summary: "[PLACEHOLDER TOPIC] What we see and do when we worship together." },
      { title: "Mary and the saints", summary: "[PLACEHOLDER TOPIC] Friends in heaven who pray for us." },
      { title: "Kindness and love of neighbor", summary: "[PLACEHOLDER TOPIC] The beginnings of a Christian life." },
    ],
    topicsNote: "Replace with the parish children's program when confirmed.",
    schedule: comingSoonSchedule,
    scheduleNote: "Class schedule coming soon.",
    scheduleComingSoon: true,
    location: "[LOCATION PLACEHOLDER]",
    locationNote: "Details coming soon.",
    instructor: placeholderInstructor,
    importantDates: placeholderDates,
    registration:
      "Program information will be updated soon. Families may reach out through the contact page.",
    faqs: genericFaqs,
    contactNote: "Children's formation contacts will be added when confirmed.",
    cardCta: "Learn more",
    seoTitle: "Children's Faith Formation",
    seoDescription:
      "Children's faith formation at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon. Details coming soon.",
    icon: "person",
  },
  {
    slug: "confirmation",
    name: "Confirmation Preparation",
    cardTitle: "Confirmation",
    tagline: "Sealed with the Gift of the Holy Spirit",
    description:
      "A dedicated path of preparation for the sacrament of Confirmation.",
    overview: [
      "Confirmation completes baptismal grace and strengthens the Christian for witness, mission, and a mature life in the Holy Spirit.",
      "Sponsor requirements, age or grade expectations, retreats, and the date of Confirmation have not been supplied. This page holds a reverent structure until the parish publishes official preparation details.",
    ],
    audience: "Youth and adults preparing for Confirmation.",
    audienceGroups: [
      {
        title: "Teens",
        body: "Young people preparing to be confirmed in the Catholic Church — requirements coming soon.",
      },
      {
        title: "Adults",
        body: "Adult Catholics who have not yet been confirmed. In many cases OCIA or a distinct adult path may apply.",
      },
      {
        title: "Sponsors and families",
        body: "Those who accompany a candidate. Sponsor guidelines will be published here when confirmed.",
      },
    ],
    learnIntro: "Representative Confirmation themes. Not the parish's official preparation outline.",
    topics: [
      { title: "The Holy Spirit", summary: "[PLACEHOLDER TOPIC] The Lord and Giver of Life." },
      { title: "Baptism and Confirmation", summary: "[PLACEHOLDER TOPIC] How the sacraments of initiation belong together." },
      { title: "The gifts of the Spirit", summary: "[PLACEHOLDER TOPIC] Wisdom, understanding, and the rest — lived, not merely listed." },
      { title: "Witness", summary: "[PLACEHOLDER TOPIC] What it means to be a disciple in public." },
      { title: "The Church", summary: "[PLACEHOLDER TOPIC] Belonging to the Body of Christ." },
      { title: "Prayer and the sacraments", summary: "[PLACEHOLDER TOPIC] A life that can be confirmed because it is already being lived." },
    ],
    topicsNote: "Replace with official Confirmation preparation when the parish provides it.",
    schedule: comingSoonSchedule,
    scheduleNote: "Class schedule coming soon.",
    scheduleComingSoon: true,
    location: "[LOCATION PLACEHOLDER]",
    locationNote: "Details coming soon.",
    instructor: placeholderInstructor,
    importantDates: [
      { label: "Registration", detail: "Details coming soon." },
      { label: "Retreat", detail: "[PLACEHOLDER] Retreat information will be updated soon." },
      { label: "Confirmation Mass", detail: "[PLACEHOLDER] Date and bishop or celebrant to be announced." },
    ],
    registration:
      "Registration information will be updated soon. Please contact the parish about Confirmation preparation.",
    faqs: genericFaqs,
    contactNote: "Confirmation coordinators will be listed when confirmed.",
    cardCta: "Learn more",
    seoTitle: "Confirmation Preparation",
    seoDescription:
      "Confirmation preparation at St. Mary, Star of the Sea in Astoria, Oregon. Schedule and requirements coming soon.",
    icon: "flame",
    relatedLinks: [
      { href: "/religious-education/sacramental-preparation", label: "Sacramental preparation" },
      { href: "/religious-education/ocia", label: "OCIA" },
    ],
  },
  {
    slug: "first-communion",
    name: "First Communion Preparation",
    cardTitle: "First Communion",
    tagline: "Preparing to receive Jesus in the Eucharist",
    description:
      "A dedicated path of preparation for First Holy Communion.",
    overview: [
      "First Holy Communion is a child's (or, in some cases, an older person's) first reception of the Body and Blood of Christ. Preparation is meant to be patient, beautiful, and close to the Mass.",
      "Grade level, parent sessions, rehearsal, and the date of First Communion are not yet published. Placeholder content below is ready to be replaced.",
    ],
    audience: "Children and families preparing for First Holy Communion.",
    audienceGroups: [
      {
        title: "Children",
        body: "Those preparing to receive the Eucharist for the first time — age or grade to be announced.",
      },
      {
        title: "Parents",
        body: "The child's first teachers. Family sessions, if offered, will be listed when confirmed.",
      },
      {
        title: "Older candidates",
        body: "Those who receive First Communion later in life may follow a different path, including OCIA.",
      },
    ],
    learnIntro: "Example First Communion themes only. Not an official parish syllabus.",
    topics: [
      { title: "The Mass", summary: "[PLACEHOLDER TOPIC] Learning the prayer of the Church." },
      { title: "The Real Presence", summary: "[PLACEHOLDER TOPIC] Jesus truly present in the Eucharist." },
      { title: "Baptism and belonging", summary: "[PLACEHOLDER TOPIC] Why Communion belongs to the life begun at the font." },
      { title: "Reconciliation", summary: "[PLACEHOLDER TOPIC] Preparing the heart through mercy." },
      { title: "How to receive", summary: "[PLACEHOLDER TOPIC] Reverence, posture, and love — details coming soon." },
      { title: "Living from the Eucharist", summary: "[PLACEHOLDER TOPIC] Communion that continues after Mass." },
    ],
    topicsNote: "Replace with official First Communion preparation when provided.",
    schedule: comingSoonSchedule,
    scheduleNote: "Class schedule coming soon.",
    scheduleComingSoon: true,
    location: "[LOCATION PLACEHOLDER]",
    locationNote: "Details coming soon.",
    instructor: placeholderInstructor,
    importantDates: [
      { label: "Registration", detail: "Details coming soon." },
      { label: "First Reconciliation", detail: "[PLACEHOLDER] Date to be announced." },
      { label: "First Holy Communion", detail: "[PLACEHOLDER] Date to be announced." },
    ],
    registration:
      "Registration information will be updated soon. Families may inquire through the contact page.",
    faqs: genericFaqs,
    contactNote: "First Communion contacts will be listed when confirmed.",
    cardCta: "Learn more",
    seoTitle: "First Communion Preparation",
    seoDescription:
      "First Holy Communion preparation at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon. Details coming soon.",
    icon: "chalice",
    relatedLinks: [
      { href: "/religious-education/sacramental-preparation", label: "Sacramental preparation" },
      { href: "/religious-education/childrens-faith-formation", label: "Children's faith formation" },
    ],
  },
  {
    slug: "marriage-family",
    name: "Marriage & Family Formation",
    cardTitle: "Marriage & Family",
    tagline: "Catholic formation for marriage and family life",
    description:
      "Formation related to marriage, family, and the domestic church — if and when the parish offers it.",
    overview: [
      "The Catholic Church calls the family the domestic church. Some parishes offer marriage preparation, groups for parents, or formation for family prayer and life.",
      "St. Mary's official offerings in this area have not been supplied. This page exists so the parish can add marriage preparation, family catechesis, or related ministries without creating a new section later. Until then, treat every detail below as a placeholder.",
    ],
    audience: "Couples, parents, and families — offerings to be confirmed.",
    audienceGroups: [
      {
        title: "Those preparing for marriage",
        body: "If the parish offers marriage preparation, it will be described here. Details coming soon.",
      },
      {
        title: "Married couples",
        body: "Ongoing formation in the sacrament of marriage, if offered.",
      },
      {
        title: "Parents and families",
        body: "Support for passing on the faith at home — program information will be updated soon.",
      },
    ],
    learnIntro: "Possible themes only. Not a confirmation that these classes are currently offered.",
    topics: [
      { title: "The sacrament of marriage", summary: "[PLACEHOLDER TOPIC] The covenant of man and woman in Christ." },
      { title: "The domestic church", summary: "[PLACEHOLDER TOPIC] Prayer, mercy, and faith in the home." },
      { title: "Family and the Mass", summary: "[PLACEHOLDER TOPIC] Worshiping together as a household." },
      { title: "Raising children in the faith", summary: "[PLACEHOLDER TOPIC] Parents as first catechists." },
    ],
    topicsNote: "Remove or rewrite this list when official family ministries are confirmed.",
    schedule: comingSoonSchedule,
    scheduleNote: "Class schedule coming soon — if this ministry is offered.",
    scheduleComingSoon: true,
    location: "[LOCATION PLACEHOLDER]",
    locationNote: "Details coming soon.",
    instructor: placeholderInstructor,
    importantDates: placeholderDates,
    registration:
      "If marriage or family formation is offered, registration details will appear here. Inquire through the contact page.",
    faqs: genericFaqs,
    contactNote: "Marriage and family contacts will be added if this ministry is offered.",
    cardCta: "Learn more",
    seoTitle: "Marriage & Family Formation",
    seoDescription:
      "Catholic marriage and family formation at St. Mary, Star of the Sea in Astoria, Oregon. Program details coming soon.",
    icon: "family",
  },
  {
    slug: "other-classes",
    name: "Other Classes & Parish Education",
    cardTitle: "Other Classes",
    tagline: "Studies, workshops, retreats, and guest speakers",
    description:
      "A flexible home for future classes, Bible studies, workshops, retreats, and special formation events.",
    overview: [
      "Parish education is larger than any one program. This page is reserved for additional classes, seasonal studies, workshops, retreats, and guest speakers as they are announced.",
      "Nothing listed here should be read as a current official offering. When the parish has an event or class to publish, replace the placeholder entries in lib/education.ts.",
    ],
    audience: "Parishioners and guests, according to each offering.",
    audienceGroups: [
      {
        title: "The curious",
        body: "One-time talks and short series for those who want to learn without joining a year-long path.",
      },
      {
        title: "The parish",
        body: "Workshops and retreats that serve the whole community — details coming soon.",
      },
      {
        title: "Visitors",
        body: "Guest speakers and special events, when scheduled.",
      },
    ],
    learnIntro: "Example categories for future offerings. Not a current catalog.",
    topics: [
      { title: "Bible studies", summary: "[PLACEHOLDER] Seasonal or ongoing Scripture studies, to be announced." },
      { title: "Workshops", summary: "[PLACEHOLDER] Practical formation sessions as scheduled." },
      { title: "Retreats", summary: "[PLACEHOLDER] Days or evenings of prayer, when offered." },
      { title: "Guest speakers", summary: "[PLACEHOLDER] Visiting teachers and witnesses, when scheduled." },
    ],
    topicsNote: "Add real events as objects in this program's data rather than hardcoding new pages.",
    schedule: comingSoonSchedule,
    scheduleNote: "No official classes are listed yet. Placeholder rows only.",
    scheduleComingSoon: true,
    location: "[LOCATION PLACEHOLDER]",
    locationNote: "Location will be published with each offering.",
    instructor: placeholderInstructor,
    importantDates: placeholderDates,
    registration:
      "When classes or events are announced, registration details will appear here. You may also use the contact page.",
    faqs: genericFaqs,
    contactNote: "Event contacts will be listed with each offering.",
    cardCta: "Learn more",
    seoTitle: "Other Classes & Parish Education",
    seoDescription:
      "Additional Catholic classes, studies, workshops, and events at St. Mary, Star of the Sea in Astoria, Oregon. Details coming soon.",
    icon: "cross",
  },
];

export function getProgram(slug: string) {
  return educationPrograms.find((program) => program.slug === slug);
}

export function getProgramSlugs() {
  return educationPrograms.map((program) => program.slug);
}

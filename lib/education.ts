import { faqItems, type FaqItem } from "@/lib/faq";
import { classSchedule } from "@/lib/schedule";
import { contactPlaceholders, parishImages } from "@/lib/site";

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
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

const parishLocation = contactPlaceholders.location;
const officeHours = contactPlaceholders.officeHours;

const dre: Instructor = {
  name: contactPlaceholders.coordinatorName,
  title: contactPlaceholders.coordinatorTitle,
  note: `Marty coordinates Religious Education for the parish. Call ${contactPlaceholders.phone} or write to ${contactPlaceholders.email}. Office hours: ${officeHours}.`,
};

const registrationSeason: ScheduleEntry[] = [
  {
    date: "August",
    time: officeHours,
    topic: "Registration begins in August",
    location: "Parish Office, 1465 Grand Avenue",
    instructor: dre.name,
    notes: `Call ${contactPlaceholders.phone} or write to ${contactPlaceholders.email}. If you are new to the parish, please call the office.`,
  },
];

const seasonalDates: ImportantDate[] = [
  {
    label: "Registration",
    detail: "Registration begins in August. Call (503) 325-3671 or write to marty@stmaryastoria.com.",
  },
  {
    label: "Office hours",
    detail: "Tuesday–Friday, 9:00 a.m. – 4:00 p.m. (closed Mondays).",
  },
  {
    label: "New to the parish",
    detail: "Please call the parish office so we can welcome you and help you register.",
  },
];

const parishFaqs: FaqItem[] = [
  {
    question: "How do I register?",
    answer:
      "Registration for Religious Education begins in August. Call the parish office at (503) 325-3671, write to Marty Dursse at marty@stmaryastoria.com, or use the contact page. If you are new to the parish, please call the office.",
  },
  {
    question: "Is there a cost?",
    answer:
      "The parish has not published a fee for these programs. Ask the Religious Education office. No one should stay away from formation because of money.",
  },
  {
    question: "When and where does this program meet?",
    answer:
      "Weekly OCIA classes begin in the Fall; the parish has not published a weekday or hour online. Children's and youth gatherings are arranged through the Religious Education office. Call (503) 325-3671 for the current time and place.",
  },
  {
    question: "Who should I contact with questions?",
    answer:
      "Marty Dursse, Director of Religious Education, at marty@stmaryastoria.com, or the parish office at office@stmaryastoria.com and (503) 325-3671. Office hours are Tuesday–Friday, 9:00 a.m. – 4:00 p.m. (closed Mondays).",
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
 * Formation programs as published by St. Mary, Star of the Sea.
 * Weekly class days and hours are not posted online; do not invent them.
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
      "An adult who has not been baptized and wishes to learn about becoming Catholic may participate in OCIA. Classes are weekly and begin in the Fall. Call the parish office for the current meeting day and time.",
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
      "OCIA at St. Mary is conversion-focused. The Church celebrates that conversion through prayerful rites. Classes are weekly and begin in the Fall.",
    topics: [
      {
        title: "The Bible",
        summary: "How Catholics receive Sacred Scripture as the Word of God.",
      },
      {
        title: "The Person of Jesus Christ",
        summary: "The Incarnation, the Cross, and the Resurrection.",
      },
      {
        title: "The Trinity",
        summary: "Father, Son, and Holy Spirit — one God in three Persons.",
      },
      {
        title: "The Sacraments",
        summary: "Visible signs of invisible grace.",
      },
      {
        title: "The Eucharist",
        summary: "The source and summit of the Christian life.",
      },
      {
        title: "The Mass",
        summary: "How the Church prays the sacred liturgy.",
      },
      {
        title: "Prayer",
        summary: "Learning to speak with God as the Church speaks.",
      },
      {
        title: "Catholic moral teaching",
        summary: "The shape of a life ordered toward God and neighbor.",
      },
      {
        title: "The Church",
        summary: "The Body of Christ in history, sacrament, and communion.",
      },
      {
        title: "Mary and the Saints",
        summary: "The family of God across heaven and earth.",
      },
      {
        title: "Salvation",
        summary: "What Christ has done, and how we are drawn into His life.",
      },
      {
        title: "Christian discipleship",
        summary: "Following Christ in ordinary life.",
      },
    ],
    topicsNote:
      "A fuller topical outline lives on the Topics page. Weekly class topics are set with the Religious Education office.",
    schedule: ociaSchedule,
    scheduleNote:
      "Classes are weekly and begin in the Fall. Call (503) 325-3671 for the current meeting day and time.",
    scheduleComingSoon: false,
    location: contactPlaceholders.location,
    locationNote:
      "OCIA gathers at St. Mary, Star of the Sea, 1465 Grand Avenue. Ask the office for the current room.",
    instructor: dre,
    importantDates: [
      {
        label: "Inquiry",
        detail: "You may begin with a conversation at any time. No one is rushed.",
      },
      {
        label: "Weekly classes",
        detail: "Classes are weekly and begin in the Fall.",
      },
      {
        label: "The rites",
        detail: "The Church celebrates conversion through prayerful rites along the way.",
      },
    ],
    registration:
      "Call the parish office at (503) 325-3671, write to Marty Dursse at marty@stmaryastoria.com, or use the contact page. Registration for Religious Education begins in August.",
    faqs: faqItems,
    contactNote:
      "Marty Dursse, Director of Religious Education, or the parish office will listen to your story and help you take a first step.",
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
    image: parishImages.exterior,
  },
  {
    slug: "adult-faith-formation",
    name: "Adult Faith Formation",
    cardTitle: "Adult Faith Formation",
    tagline: "Ongoing Catholic learning for grown disciples",
    description:
      "Bible studies, Catholic teaching, theology, apologetics, and discussion for adults who wish to keep growing.",
    overview: [
      "Adult faith formation is listed among the ministries of St. Mary, Star of the Sea. It is for Catholics — and for anyone drawn to the Church — who want to keep learning after the first questions have been asked.",
      "Ask the Religious Education office about current studies, conversation groups, and how they relate to OCIA. Adult Education – OCIA is the parish's published path for unbaptized adults wishing to become Catholic.",
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
      "Themes Catholics ordinarily study as they grow in the faith. Current offerings are arranged through Religious Education.",
    topics: [
      { title: "Sacred Scripture", summary: "Reading the Bible with the Church." },
      { title: "The Catechism", summary: "A map of Catholic belief and life." },
      { title: "Prayer and the interior life", summary: "Habits that sustain faith." },
      { title: "Catholic moral teaching", summary: "Conscience, virtue, and charity." },
      { title: "The Church in the world", summary: "Catholic social teaching in outline." },
      { title: "Apologetics", summary: "Giving a reason for the hope that is in you." },
    ],
    topicsNote: "Ask the office which studies are meeting this year.",
    schedule: registrationSeason,
    scheduleNote: "Registration begins in August. Call the office for current adult gatherings.",
    scheduleComingSoon: false,
    location: parishLocation,
    locationNote: "Gatherings take place at St. Mary, Star of the Sea, 1465 Grand Avenue. Call the office for the current room.",
    instructor: dre,
    importantDates: seasonalDates,
    registration:
      "Registration begins in August. Call (503) 325-3671 or write to marty@stmaryastoria.com to ask about adult formation.",
    faqs: parishFaqs,
    contactNote: "Marty Dursse coordinates Religious Education, including adult formation.",
    cardCta: "Learn more",
    seoTitle: "Adult Faith Formation",
    seoDescription:
      "Adult faith formation at St. Mary, Star of the Sea in Astoria, Oregon — ongoing Catholic learning alongside OCIA.",
    icon: "book",
    image: parishImages.statue,
  },
  {
    slug: "youth",
    name: "Youth Religious Education",
    cardTitle: "Youth Religious Education",
    tagline: "Formation for children and teenagers",
    description:
      "Religious education for young people growing in friendship with Christ and His Church.",
    overview: [
      "After First Holy Communion, young people at St. Mary are invited into Youth Group for grades 6 through high school — education, fellowship, and a place to grow in the faith among friends.",
      "Religious Education coordinates sacramental preparation for Confirmation. The Rite of Confirmation occurs every two years. Call the office for the current cycle and gathering times.",
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
    learnIntro: "Youth Group at St. Mary is for grades 6 through high school: education and fellowship, with Confirmation every two years.",
    topics: [
      { title: "The life of Jesus", summary: "Who Christ is, and why He matters." },
      { title: "Prayer", summary: "Learning to speak with God." },
      { title: "The Mass", summary: "How we worship as a Church." },
      { title: "The sacraments", summary: "Meeting Christ in visible signs." },
      { title: "Friendship and virtue", summary: "Living the faith among peers." },
      { title: "Service", summary: "Faith that takes flesh in charity." },
    ],
    topicsNote: "Ask the Religious Education office about the current Youth Group year.",
    schedule: registrationSeason,
    scheduleNote: "Youth Group follows First Communion. Registration begins in August. Call the office for gathering times.",
    scheduleComingSoon: false,
    location: parishLocation,
    locationNote: "Gatherings take place at St. Mary, Star of the Sea, 1465 Grand Avenue. Call the office for the current room.",
    instructor: dre,
    importantDates: seasonalDates,
    registration:
      "Registration begins in August. Families may call (503) 325-3671 or write to marty@stmaryastoria.com.",
    faqs: parishFaqs,
    contactNote: "Marty Dursse, Director of Religious Education, coordinates youth formation.",
    cardCta: "Learn more",
    seoTitle: "Youth Religious Education",
    seoDescription:
      "Youth Group for grades 6 through high school at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
    icon: "users",
    image: parishImages.hammond,
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
      "At St. Mary, children in kindergarten through fifth grade prepare for Penance and First Holy Communion. Youth then continue in Youth Group, with Confirmation every two years. Adults seeking Baptism walk the OCIA path.",
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
        body: "Unbaptized adults ordinarily enter OCIA. Baptized adults completing a sacrament should speak with the Religious Education office.",
      },
    ],
    learnIntro: "The sacraments of initiation and healing as the Church celebrates them in this parish.",
    topics: [
      { title: "The meaning of a sacrament", summary: "Visible signs of invisible grace." },
      { title: "Baptismal life", summary: "Living the gift already received, or preparing to receive it." },
      { title: "Reconciliation", summary: "Mercy, conversion, and returning to God." },
      { title: "The Eucharist", summary: "Christ truly present, and holy communion with His Church." },
      { title: "Confirmation", summary: "Sealed with the Gift of the Holy Spirit." },
      { title: "Prayer and Mass", summary: "Learning to worship with the parish." },
    ],
    topicsNote: "See also Confirmation, First Communion, and OCIA for the path that fits your household.",
    schedule: registrationSeason,
    scheduleNote: "Registration begins in August. Call the office for current sacramental-preparation gatherings.",
    scheduleComingSoon: false,
    location: parishLocation,
    locationNote: "Gatherings take place at St. Mary, Star of the Sea, 1465 Grand Avenue. Call the office for the current room.",
    instructor: dre,
    importantDates: seasonalDates,
    registration:
      "Registration begins in August. Call (503) 325-3671 or write to marty@stmaryastoria.com.",
    faqs: [
      ...parishFaqs,
      {
        question: "Is this the same as OCIA?",
        answer:
          "Not always. OCIA is the Church's path of initiation for adults (and, in some cases, children of catechetical age). Other sacramental preparation may serve families whose children are already baptized, or adults completing a sacrament. The parish will clarify which path fits your situation.",
      },
    ],
    contactNote: "Marty Dursse coordinates sacramental preparation with the parish office.",
    cardCta: "Learn more",
    seoTitle: "Sacramental Preparation",
    seoDescription:
      "Sacramental preparation at St. Mary, Star of the Sea in Astoria, Oregon — First Communion, Confirmation, and OCIA.",
    icon: "chalice",
    relatedLinks: [
      { href: "/religious-education/confirmation", label: "Confirmation preparation" },
      { href: "/religious-education/first-communion", label: "First Communion preparation" },
      { href: "/religious-education/ocia", label: "OCIA" },
    ],
    image: parishImages.crucifix,
  },
  {
    slug: "childrens-faith-formation",
    name: "Children's Faith Formation",
    cardTitle: "Children's Faith Formation",
    tagline: "Age-appropriate Catholic formation for children",
    description:
      "Helping children know Jesus, love the Church, and grow in prayer at a pace meant for them.",
    overview: [
      "Religious Education for kindergarten through fifth grade prepares children for Penance and First Holy Communion.",
      "After First Communion, children are invited into Youth Group. Registration begins in August. If you are new to the parish, please call the office.",
    ],
    audience: "Children and their families.",
    audienceGroups: [
      {
        title: "Young children",
        body: "A first introduction to Jesus, prayer, and the life of the parish, leading toward Penance and First Holy Communion.",
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
    learnIntro: "Kindergarten through fifth grade: the stories of Scripture, the person of Jesus, the Mass, and preparation for the sacraments.",
    topics: [
      { title: "God the Father", summary: "Learning that we are loved by God." },
      { title: "The life of Jesus", summary: "Stories of Christ told with care." },
      { title: "Prayer", summary: "The Sign of the Cross, the Our Father, and simple prayer." },
      { title: "The Mass", summary: "What we see and do when we worship together." },
      { title: "Mary and the saints", summary: "Friends in heaven who pray for us." },
      { title: "Kindness and love of neighbor", summary: "The beginnings of a Christian life." },
    ],
    topicsNote: "Ask the Religious Education office about the current children's year.",
    schedule: registrationSeason,
    scheduleNote: "Registration begins in August. Call the office for class times.",
    scheduleComingSoon: false,
    location: parishLocation,
    locationNote: "Gatherings take place at St. Mary, Star of the Sea, 1465 Grand Avenue. Call the office for the current room.",
    instructor: dre,
    importantDates: seasonalDates,
    registration:
      "Registration begins in August. Call (503) 325-3671 or write to marty@stmaryastoria.com. If you are new to the parish, please call the office.",
    faqs: parishFaqs,
    contactNote: "Marty Dursse, Director of Religious Education, welcomes families.",
    cardCta: "Learn more",
    seoTitle: "Children's Faith Formation",
    seoDescription:
      "Kindergarten through fifth grade Religious Education at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon.",
    icon: "person",
    image: parishImages.grotto,
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
      "At St. Mary, Religious Education coordinates sacramental preparation for Confirmation. The Rite of Confirmation occurs every two years. Ask the office for the current cycle.",
    ],
    audience: "Youth and adults preparing for Confirmation.",
    audienceGroups: [
      {
        title: "Teens",
        body: "Young people in Youth Group preparing to be confirmed. Confirmation occurs every two years.",
      },
      {
        title: "Adults",
        body: "Adult Catholics who have not yet been confirmed. In many cases OCIA or a distinct adult path may apply.",
      },
      {
        title: "Sponsors and families",
        body: "Those who accompany a candidate. Ask the Religious Education office about sponsor guidelines.",
      },
    ],
    learnIntro: "Preparation for Confirmation includes the gifts of the Holy Spirit as the Church has received them.",
    topics: [
      { title: "The Holy Spirit", summary: "The Lord and Giver of Life." },
      { title: "Baptism and Confirmation", summary: "How the sacraments of initiation belong together." },
      { title: "The gifts of the Spirit", summary: "Wisdom, understanding, and the rest — lived, not merely listed." },
      { title: "Witness", summary: "What it means to be a disciple in public." },
      { title: "The Church", summary: "Belonging to the Body of Christ." },
      { title: "Prayer and the sacraments", summary: "A life that can be confirmed because it is already being lived." },
    ],
    topicsNote: "The gifts of the Holy Spirit: wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord.",
    schedule: registrationSeason,
    scheduleNote: "Confirmation occurs every two years. Registration begins in August. Call the office for the current cycle.",
    scheduleComingSoon: false,
    location: parishLocation,
    locationNote: "Gatherings take place at St. Mary, Star of the Sea, 1465 Grand Avenue. Call the office for the current room.",
    instructor: dre,
    importantDates: [
      { label: "Registration", detail: "Registration begins in August. Call the parish office." },
      { label: "Youth Group", detail: "Grades 6 through high school: education and fellowship." },
      { label: "Confirmation", detail: "The Rite of Confirmation occurs every two years." },
    ],
    registration:
      "Registration begins in August. Call (503) 325-3671 or write to marty@stmaryastoria.com about Confirmation preparation.",
    faqs: parishFaqs,
    contactNote: "Marty Dursse coordinates Confirmation preparation with the parish office.",
    cardCta: "Learn more",
    seoTitle: "Confirmation Preparation",
    seoDescription:
      "Confirmation preparation at St. Mary, Star of the Sea in Astoria, Oregon. The Rite of Confirmation occurs every two years.",
    icon: "flame",
    relatedLinks: [
      { href: "/religious-education/sacramental-preparation", label: "Sacramental preparation" },
      { href: "/religious-education/ocia", label: "OCIA" },
    ],
    image: parishImages.statue,
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
      "At St. Mary, kindergarten through fifth grade Religious Education prepares children for Penance and First Holy Communion. Ask the office for the current year's gatherings.",
    ],
    audience: "Children and families preparing for First Holy Communion.",
    audienceGroups: [
      {
        title: "Children",
        body: "Children in kindergarten through fifth grade preparing for Penance and First Holy Communion.",
      },
      {
        title: "Parents",
        body: "The child's first teachers. Registration begins in August; the office will tell you how families are involved.",
      },
      {
        title: "Older candidates",
        body: "Those who receive First Communion later in life may follow a different path, including OCIA.",
      },
    ],
    learnIntro: "Preparation for Penance and First Holy Communion, as Religious Education offers it for kindergarten through fifth grade.",
    topics: [
      { title: "The Mass", summary: "Learning the prayer of the Church." },
      { title: "The Real Presence", summary: "Jesus truly present in the Eucharist." },
      { title: "Baptism and belonging", summary: "Why Communion belongs to the life begun at the font." },
      { title: "Reconciliation", summary: "Preparing the heart through mercy." },
      { title: "How to receive", summary: "Reverence, posture, and love as the Church receives the Eucharist." },
      { title: "Living from the Eucharist", summary: "Communion that continues after Mass." },
    ],
    topicsNote: "Ask the Religious Education office about the current First Communion year.",
    schedule: registrationSeason,
    scheduleNote: "Registration begins in August. Call the office for class times.",
    scheduleComingSoon: false,
    location: parishLocation,
    locationNote: "Gatherings take place at St. Mary, Star of the Sea, 1465 Grand Avenue. Call the office for the current room.",
    instructor: dre,
    importantDates: [
      { label: "Registration", detail: "Registration begins in August. Call the parish office." },
      { label: "Penance", detail: "Kindergarten through fifth grade prepare for First Reconciliation." },
      { label: "First Holy Communion", detail: "Ask the Religious Education office for the current year's celebration." },
    ],
    registration:
      "Registration begins in August. Call (503) 325-3671 or write to marty@stmaryastoria.com.",
    faqs: parishFaqs,
    contactNote: "Marty Dursse coordinates First Communion preparation with the parish office.",
    cardCta: "Learn more",
    seoTitle: "First Communion Preparation",
    seoDescription:
      "First Holy Communion preparation at St. Mary, Star of the Sea Catholic Church in Astoria, Oregon — kindergarten through fifth grade.",
    icon: "chalice",
    relatedLinks: [
      { href: "/religious-education/sacramental-preparation", label: "Sacramental preparation" },
      { href: "/religious-education/childrens-faith-formation", label: "Children's faith formation" },
    ],
    image: parishImages.crucifix,
  },
  {
    slug: "marriage-family",
    name: "Marriage & Family Formation",
    cardTitle: "Marriage & Family",
    tagline: "Catholic formation for marriage and family life",
    description:
      "Catholic marriage and family life at St. Mary, Star of the Sea.",
    overview: [
      "The Catholic Church calls the family the domestic church. Those preparing for Matrimony at St. Mary are asked to contact the parish office at least six months prior to the intended wedding.",
      "Baptism of children also requires preparation for parents and godparents. Call the office so we can walk with your household.",
    ],
    audience: "Couples, parents, and families of the parish.",
    audienceGroups: [
      {
        title: "Those preparing for marriage",
        body: "Contact the parish office at least six months before the intended wedding.",
      },
      {
        title: "Married couples",
        body: "The sacrament of marriage is lived in the parish through prayer, the Mass, and the support of the community.",
      },
      {
        title: "Parents and families",
        body: "Parents are the first teachers of the faith. Children's Religious Education is meant to support the home.",
      },
    ],
    learnIntro: "The Church's teaching on marriage and the family, as this parish accompanies couples and households.",
    topics: [
      { title: "The sacrament of marriage", summary: "The covenant of man and woman in Christ." },
      { title: "The domestic church", summary: "Prayer, mercy, and faith in the home." },
      { title: "Family and the Mass", summary: "Worshiping together as a household." },
      { title: "Raising children in the faith", summary: "Parents as first catechists." },
    ],
    topicsNote: "For a wedding date or baptismal preparation, begin with a call to the parish office.",
    schedule: registrationSeason,
    scheduleNote: "Contact the office at least six months before a wedding. Office hours are Tuesday–Friday, 9:00 a.m. – 4:00 p.m.",
    scheduleComingSoon: false,
    location: parishLocation,
    locationNote: "Gatherings take place at St. Mary, Star of the Sea, 1465 Grand Avenue. Call the office for the current room.",
    instructor: dre,
    importantDates: seasonalDates,
    registration:
      "Call the parish office at (503) 325-3671 at least six months before a wedding. For children's formation, registration begins in August.",
    faqs: parishFaqs,
    contactNote: "The parish office and Religious Education will help you take the next step.",
    cardCta: "Learn more",
    seoTitle: "Marriage & Family Formation",
    seoDescription:
      "Catholic marriage and family life at St. Mary, Star of the Sea in Astoria, Oregon. Contact the office at least six months before a wedding.",
    icon: "family",
    image: parishImages.grotto,
  },
  {
    slug: "other-classes",
    name: "Other Classes & Parish Education",
    cardTitle: "Other Classes",
    tagline: "Studies, workshops, retreats, and guest speakers",
    description:
      "A flexible home for future classes, Bible studies, workshops, retreats, and special formation events.",
    overview: [
      "Parish education is larger than any one program. Adult Faith Formation is a listed ministry of St. Mary, and Religious Education publishes notices as the year unfolds.",
      "For the latest word on studies, workshops, or special gatherings, check announcements or call the parish office.",
    ],
    audience: "Parishioners and guests, according to each offering.",
    audienceGroups: [
      {
        title: "The curious",
        body: "One-time talks and short series for those who want to learn without joining a year-long path.",
      },
      {
        title: "The parish",
        body: "Seasonal studies and special gatherings, as the parish announces them.",
      },
      {
        title: "Visitors",
        body: "Guest speakers and special events, when scheduled.",
      },
    ],
    learnIntro: "Ways the parish continues to teach beyond the ordinary Religious Education year.",
    topics: [
      { title: "Bible studies", summary: "Reading Sacred Scripture with the Church." },
      { title: "Adult Faith Formation", summary: "A listed ministry of St. Mary, Star of the Sea." },
      { title: "Prayer", summary: "The Rosary is prayed a half hour before weekend Mass; Adoration is offered at St. Mary and at Hammond." },
      { title: "Parish life", summary: "Watch announcements and the parish website for special gatherings." },
    ],
    topicsNote: "See announcements and stmaryastoria.com for current parish notices.",
    schedule: registrationSeason,
    scheduleNote: "Registration for Religious Education begins in August. Call the office about other studies.",
    scheduleComingSoon: false,
    location: parishLocation,
    locationNote: "Most gatherings are at St. Mary, Star of the Sea, 1465 Grand Avenue.",
    instructor: dre,
    importantDates: seasonalDates,
    registration:
      "Call (503) 325-3671 or write to marty@stmaryastoria.com. Watch announcements for special studies.",
    faqs: parishFaqs,
    contactNote: "Marty Dursse and the parish office can point you to what is meeting now.",
    cardCta: "Learn more",
    seoTitle: "Other Classes & Parish Education",
    seoDescription:
      "Additional Catholic classes and parish education at St. Mary, Star of the Sea in Astoria, Oregon.",
    icon: "cross",
    image: parishImages.exterior,
  },
];

export function getProgram(slug: string) {
  return educationPrograms.find((program) => program.slug === slug);
}

export function getProgramSlugs() {
  return educationPrograms.map((program) => program.slug);
}

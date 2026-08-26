export type TopicItem = {
  title: string;
  summary: string;
};

export type TopicCategory = {
  id: string;
  label: string;
  description: string;
  items: TopicItem[];
};

/*
 * PLACEHOLDER TOPIC DATA
 * TODO: Replace with the official St. Mary OCIA curriculum.
 * These categories reflect a typical Catholic formation outline and
 * are not the parish's published syllabus.
 */
export const topicCategories: TopicCategory[] = [
  {
    id: "creed",
    label: "The Creed",
    description: "The heart of what Catholics believe about God.",
    items: [
      {
        title: "Who is God?",
        summary:
          "[PLACEHOLDER TOPIC] An introduction to the God who reveals Himself — not as an idea, but as a living mystery who seeks communion with us.",
      },
      {
        title: "Who is Jesus Christ?",
        summary:
          "[PLACEHOLDER TOPIC] The Incarnation, the Cross, and the Resurrection: why the Church proclaims Jesus as Lord.",
      },
      {
        title: "The Trinity",
        summary:
          "[PLACEHOLDER TOPIC] Father, Son, and Holy Spirit — one God in three Persons, the central mystery of Christian faith.",
      },
      {
        title: "The Holy Spirit",
        summary:
          "[PLACEHOLDER TOPIC] The Spirit who gives life, dwells in the Church, and leads each person into truth.",
      },
    ],
  },
  {
    id: "scripture",
    label: "Scripture",
    description: "How the Church receives and reads the Word of God.",
    items: [
      {
        title: "The Bible",
        summary:
          "[PLACEHOLDER TOPIC] What the Scriptures are, how they came to us, and why Catholics call them the Word of God.",
      },
      {
        title: "Old and New Testament",
        summary:
          "[PLACEHOLDER TOPIC] The one story of salvation — promise, fulfillment, and the covenant that holds them together.",
      },
      {
        title: "How Catholics interpret Scripture",
        summary:
          "[PLACEHOLDER TOPIC] Reading with the Church: tradition, context, and the living voice of the Magisterium.",
      },
    ],
  },
  {
    id: "church",
    label: "The Church",
    description: "The Body of Christ in history, sacrament, and communion.",
    items: [
      {
        title: "What is the Church?",
        summary:
          "[PLACEHOLDER TOPIC] More than a building or a gathering — the Church as mystery, communion, and sacrament of salvation.",
      },
      {
        title: "The Apostolic Tradition",
        summary:
          "[PLACEHOLDER TOPIC] What has been handed down from the apostles, and why it still lives in the Church today.",
      },
      {
        title: "The Magisterium",
        summary:
          "[PLACEHOLDER TOPIC] How the Church teaches with authority — and why that authority is meant to serve the truth.",
      },
      {
        title: "The Sacraments",
        summary:
          "[PLACEHOLDER TOPIC] Visible signs of invisible grace: an overview of the sacramental economy.",
      },
    ],
  },
  {
    id: "sacraments",
    label: "The Sacraments",
    description: "The seven sacraments as encounters with the living Christ.",
    items: [
      {
        title: "Baptism",
        summary:
          "[PLACEHOLDER TOPIC] New birth in Christ, the doorway of the Christian life, and the forgiveness of sin.",
      },
      {
        title: "Confirmation",
        summary:
          "[PLACEHOLDER TOPIC] Strengthened by the Holy Spirit for witness, mission, and a mature Christian life.",
      },
      {
        title: "Eucharist",
        summary:
          "[PLACEHOLDER TOPIC] The Real Presence, the sacrifice of the Mass, and holy communion with Christ and His Church.",
      },
      {
        title: "Reconciliation",
        summary:
          "[PLACEHOLDER TOPIC] Confession as healing, mercy, and the restoration of baptismal grace.",
      },
      {
        title: "Anointing of the Sick",
        summary:
          "[PLACEHOLDER TOPIC] Christ's tenderness toward the suffering, and the sacrament of strength in illness.",
      },
      {
        title: "Holy Orders",
        summary:
          "[PLACEHOLDER TOPIC] The priesthood, diaconate, and episcopacy as a gift for the Church's life.",
      },
      {
        title: "Marriage",
        summary:
          "[PLACEHOLDER TOPIC] The covenant of man and woman as a living sign of Christ's love for the Church.",
      },
    ],
  },
  {
    id: "moral",
    label: "The Moral Life",
    description: "The shape of a life ordered toward God.",
    items: [
      {
        title: "The Ten Commandments",
        summary:
          "[PLACEHOLDER TOPIC] Not a list of burdens, but a path of freedom and love of God and neighbor.",
      },
      {
        title: "Virtue",
        summary:
          "[PLACEHOLDER TOPIC] The cardinal and theological virtues as habits that form a holy life.",
      },
      {
        title: "Sin",
        summary:
          "[PLACEHOLDER TOPIC] What sin is, what it does, and why the Church speaks of it with both honesty and hope.",
      },
      {
        title: "Grace",
        summary:
          "[PLACEHOLDER TOPIC] God's own life offered to us — unearned, transforming, and always first.",
      },
      {
        title: "Christian discipleship",
        summary:
          "[PLACEHOLDER TOPIC] Following Christ in ordinary life: work, family, charity, and the call to holiness.",
      },
    ],
  },
  {
    id: "prayer",
    label: "Prayer",
    description: "Learning to speak with God as the Church speaks.",
    items: [
      {
        title: "How Catholics Pray",
        summary:
          "[PLACEHOLDER TOPIC] Vocal prayer, meditation, and contemplation — a simple map of the interior life.",
      },
      {
        title: "The Mass",
        summary:
          "[PLACEHOLDER TOPIC] The highest prayer of the Church, and how to enter it more fully.",
      },
      {
        title: "The Our Father",
        summary:
          "[PLACEHOLDER TOPIC] The prayer Jesus taught, and what each petition reveals about the Christian life.",
      },
      {
        title: "Devotional Prayer",
        summary:
          "[PLACEHOLDER TOPIC] The Rosary, Eucharistic Adoration, and the quiet practices that sustain faith.",
      },
    ],
  },
  {
    id: "mary",
    label: "Mary & the Saints",
    description: "The family of God across heaven and earth.",
    items: [
      {
        title: "Mary",
        summary:
          "[PLACEHOLDER TOPIC] The Mother of God, the first disciple, and her place in Catholic faith and devotion.",
      },
      {
        title: "The Communion of Saints",
        summary:
          "[PLACEHOLDER TOPIC] Why Catholics believe the Church includes the living and the dead in one communion.",
      },
      {
        title: "Intercession",
        summary:
          "[PLACEHOLDER TOPIC] Asking the saints to pray with us — not instead of Christ, but in Him.",
      },
      {
        title: "Catholic devotion",
        summary:
          "[PLACEHOLDER TOPIC] Icons, feast days, and the texture of a faith that is both ancient and alive.",
      },
    ],
  },
];

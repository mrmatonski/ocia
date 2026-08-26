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
 * Formation themes for OCIA inquiry. These follow the Church's ordinary
 * outline of the faith; weekly class topics are set with the Religious
 * Education office.
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
          "An introduction to the God who reveals Himself — not as an idea, but as a living mystery who seeks communion with us.",
      },
      {
        title: "Who is Jesus Christ?",
        summary:
          "The Incarnation, the Cross, and the Resurrection: why the Church proclaims Jesus as Lord.",
      },
      {
        title: "The Trinity",
        summary:
          "Father, Son, and Holy Spirit — one God in three Persons, the central mystery of Christian faith.",
      },
      {
        title: "The Holy Spirit",
        summary:
          "The Spirit who gives life, dwells in the Church, and leads each person into truth.",
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
          "What the Scriptures are, how they came to us, and why Catholics call them the Word of God.",
      },
      {
        title: "Old and New Testament",
        summary:
          "The one story of salvation — promise, fulfillment, and the covenant that holds them together.",
      },
      {
        title: "How Catholics interpret Scripture",
        summary:
          "Reading with the Church: tradition, context, and the living voice of the Magisterium.",
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
          "More than a building or a gathering — the Church as mystery, communion, and sacrament of salvation.",
      },
      {
        title: "The Apostolic Tradition",
        summary:
          "What has been handed down from the apostles, and why it still lives in the Church today.",
      },
      {
        title: "The Magisterium",
        summary:
          "How the Church teaches with authority — and why that authority is meant to serve the truth.",
      },
      {
        title: "The Sacraments",
        summary:
          "Visible signs of invisible grace: an overview of the sacramental economy.",
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
          "New birth in Christ, the doorway of the Christian life, and the forgiveness of sin.",
      },
      {
        title: "Confirmation",
        summary:
          "Strengthened by the Holy Spirit for witness, mission, and a mature Christian life.",
      },
      {
        title: "Eucharist",
        summary:
          "The Real Presence, the sacrifice of the Mass, and holy communion with Christ and His Church.",
      },
      {
        title: "Reconciliation",
        summary:
          "Confession as healing, mercy, and the restoration of baptismal grace.",
      },
      {
        title: "Anointing of the Sick",
        summary:
          "Christ's tenderness toward the suffering, and the sacrament of strength in illness.",
      },
      {
        title: "Holy Orders",
        summary:
          "The priesthood, diaconate, and episcopacy as a gift for the Church's life.",
      },
      {
        title: "Marriage",
        summary:
          "The covenant of man and woman as a living sign of Christ's love for the Church.",
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
          "Not a list of burdens, but a path of freedom and love of God and neighbor.",
      },
      {
        title: "Virtue",
        summary:
          "The cardinal and theological virtues as habits that form a holy life.",
      },
      {
        title: "Sin",
        summary:
          "What sin is, what it does, and why the Church speaks of it with both honesty and hope.",
      },
      {
        title: "Grace",
        summary:
          "God's own life offered to us — unearned, transforming, and always first.",
      },
      {
        title: "Christian discipleship",
        summary:
          "Following Christ in ordinary life: work, family, charity, and the call to holiness.",
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
          "Vocal prayer, meditation, and contemplation — a simple map of the interior life.",
      },
      {
        title: "The Mass",
        summary:
          "The highest prayer of the Church, and how to enter it more fully.",
      },
      {
        title: "The Our Father",
        summary:
          "The prayer Jesus taught, and what each petition reveals about the Christian life.",
      },
      {
        title: "Devotional Prayer",
        summary:
          "The Rosary, Eucharistic Adoration, and the quiet practices that sustain faith.",
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
          "The Mother of God, the first disciple, and her place in Catholic faith and devotion.",
      },
      {
        title: "The Communion of Saints",
        summary:
          "Why Catholics believe the Church includes the living and the dead in one communion.",
      },
      {
        title: "Intercession",
        summary:
          "Asking the saints to pray with us — not instead of Christ, but in Him.",
      },
      {
        title: "Catholic devotion",
        summary:
          "Icons, feast days, and the texture of a faith that is both ancient and alive.",
      },
    ],
  },
];

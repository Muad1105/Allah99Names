const allahNames = [
  {
    nameNumber: 0,
    allahNameArabic: "الله",
    allahNameEnglish: "Allah",
    meaning: "The Greatest Name",
    description: [
      "Who repeats this name at least 1000 times his heart will be free from doubts and suspicions.",
      "If anybody suffering from some incurable disease repeats this name many ties, then prays to allah for recovery, he will recover from the disease, by the grace of Allah.",
    ],
  },
  {
    nameNumber: 1,
    allahNameArabic: "ٱلْرَّحْمَـانُ",
    allahNameEnglish: "AR-RAHMAAN",
    meaning: "The Most or Entirely Merciful",
    description: [
      "Who repeat this name 100 times after each fard (Obligatory) prayer wil have good memory.",
    ],
  },
  {
    nameNumber: 2,
    allahNameArabic: "ٱلْرَّحِيْمُ",
    allahNameEnglish: "AR-RAHEEM",
    meaning: "The Bestower of Mercy",
    description: [
      "He who repeats this name 100 times after each Fajr (Early Morning) prayer will find everyone to be friendly towards him and he will be safe from all worldly calamities.",
    ],
  },
  {
    nameNumber: 3,
    allahNameArabic: "ٱلْمَلِكُ",
    allahNameEnglish: "AL-MALIK",
    meaning: "The King and Owner of Dominion",
    description: [
      "He who repeates this name many times every day after the Morning Prayer, will become rich by the grace of Allah.",
    ],
  },
  {
    nameNumber: 4,
    allahNameArabic: "ٱلْقُدُّوسُ",
    allahNameEnglish: "AL-QUDDUS",
    meaning: "The Absolutely Pure",
    description: [
      "The heart of those who repeat this name 100 times each day will be free from anxiety.",
    ],
  },
  {
    nameNumber: 5,
    allahNameArabic: "ٱلْسَّلَامُ",
    allahNameEnglish: "AS-SALAM",
    meaning: "The Perfection and Giver of Peace",
    description: [
      "He who repeate this name 160 times to a sick person, will help him to regain health.",
      "He who repeats this name frequently will be free from all calanities.",
    ],
  },
  {
    nameNumber: 6,
    allahNameArabic: " ٱلْمُؤْمِنُ ",
    allahNameEnglish: "AL-MU’MIN",
    meaning: "The One Who gives Emaan and Security",
    description: ["He who repeats this name 631 ties will be safe from harm."],
  },
  {
    nameNumber: 7,
    allahNameArabic: "ٱلْمُهَيْمِنُ",
    allahNameEnglish: "AL-MUHAYMIN",
    meaning: "The Guardian, The Witness, The Overseer",
    description: [
      "He who takes bath and offer two rak'ats of prayer and repeats this name 100 times with sincere concentration, Allah will purify his internal as well as external conditions.",
    ],
  },
  {
    nameNumber: 8,
    allahNameArabic: "ٱلْعَزِيزُ",
    allahNameEnglish: "AL-AZEEZ",
    meaning: "The All Mighty, The Victorious",
    description: [
      "He who repeats this 41 times after each farz prayer will be independent of need from others and gain honor after disgrace.",
    ],
  },
  {
    nameNumber: 9,
    allahNameArabic: "ٱلْجَبَّارُ",
    allahNameEnglish: "AL-JABBAR",
    meaning: "The Compeller, The Restorer",
    description: [
      "He who repeates this name will not be exposed to violence, severity or hardness.",
    ],
  },
  {
    nameNumber: 10,
    allahNameArabic: "ٱلْمُتَكَبِّرُ",
    allahNameEnglish: "AL-MUTAKABBIR",
    meaning: "The Supreme, The Majestic",
    description: [
      "He who repeats this name will be granted status and respect.",
      "If he repeats this Name frequently at the commencement of every act, he will achieve success by the grace of Allah.",
    ],
  },
  {
    nameNumber: 11,
    allahNameArabic: "ٱلْخَالِقُ",
    allahNameEnglish: "AL-KHAALIQ",
    meaning: "The Creator, The Maker",
    description: [
      "He who repeats this name 100 times for seven days without a break, Allah will create an angel whose duty will be act righteously for this person until the day of Judgement. The reward for the angel will be given for that person.",
    ],
  },
  {
    nameNumber: 12,
    allahNameArabic: "ٱلْبَارِئُ",
    allahNameEnglish: "AL-BAARI’",
    meaning: "The Originator",
    description: ["He, who creates all things in proportion."],
  },
  {
    nameNumber: 13,
    allahNameArabic: " ٱلْمُصَوِّرُ ",
    allahNameEnglish: "AL-MUSAWWIR",
    meaning: "The Fashioner, THe Shaper of Beauty",
    description: [
      "If a woman desires to give a birth, but cannot, fasts seven days, and each day at the breaking of the fast(iftaar) she repeats this Name twenty-one times, breathes into a glass of water, anf then breaks the fast eith this water, Allah will bless her with a child. ",
    ],
  },
  {
    nameNumber: 14,
    allahNameArabic: "ٱلْغَفَّارُ",
    allahNameEnglish: "AL-GHAFFAR",
    meaning: "The All- and Oft-Forgiving",
    description: ["He who repeats this Name will be forgiven of his sins."],
  },
  {
    nameNumber: 15,
    allahNameArabic: "ٱلْقَهَّارُ",
    allahNameEnglish: "AL-QAHHAR",
    meaning: "The Subduer, The Ever-Dominating",
    description: [
      "The soul of him who rep[eats this Name will conquer the desires of the flesh, and his heart will be made free from attractions of the worls and gain innner peace.",
    ],
  },
  {
    nameNumber: 16,
    allahNameArabic: "ٱلْوَهَّابُ",
    allahNameEnglish: "AL-WAHHAAB",
    meaning: "The Giver of Gifts",
    description: [
      "If a man suffering from poverty or starvation repeats this name frequently or keeps it with him written on a piece of paper or repeats this name 40 times in the last sajda in the Chasht prayer, Allah will relieve him of his poverty, want and starvation in a wonderful way.",
    ],
  },
  {
    nameNumber: 17,
    allahNameArabic: "ٱلْرَّزَّاقُ",
    allahNameEnglish: "AR-RAZZAAQ",
    meaning: "The Provider",
    description: [
      "He who repeats this name will be provided with sustenance by Allah.",
    ],
  },
  {
    nameNumber: 18,
    allahNameArabic: " ٱلْفَتَّاحُ ",
    allahNameEnglish: "AL-FATTAAH",
    meaning: "The Opener, The Judge",
    description: [
      "The heart of him who repeats this Name will be open, and he will be given victory.",
    ],
  },
  {
    nameNumber: 19,
    allahNameArabic: "ٱلْعَلِيمُ",
    allahNameEnglish: "AL-‘ALEEM",
    meaning: "The All-Knowing, The Omniscient",
    description: [
      "He who repeats this Name, his heart will become luminous, revealing devine light(Noor)",
    ],
  },
  {
    nameNumber: 20,
    allahNameArabic: "ٱلْقَابِضُ",
    allahNameEnglish: "AL-QAABID",
    meaning: "The Withholder",
    description: [
      "He who writes this name on 4 pieces of food (fruit, bread,etc.) and eats then for 40 days will be free from hunger.",
    ],
  },
  {
    nameNumber: 21,
    allahNameArabic: "ٱلْبَاسِطُ",
    allahNameEnglish: "AL-BAASIT",
    meaning: "The Extender",
    description: [
      "He who repeats this Name 10 times after Chasht prayer with open hands (palms up), then rubs his face with his hands, will be free of need from others.",
    ],
  },
  {
    nameNumber: 22,
    allahNameArabic: " ٱلْخَافِضُ ",
    allahNameEnglish: "AL-KHAAFIDH",
    meaning: "The Reducer, The Abaser",
    description: [
      "Those who fast three days, and on the fourth day repeats this Name 70 times in a gathering, Allah will free them from harm by their enemy.",
      "Allah will fulfill the need of one who repeats this name 500 times daily.",
    ],
  },
  {
    nameNumber: 23,
    allahNameArabic: " ٱلْرَّافِعُ ",
    allahNameEnglish: "AR-RAAFI’",
    meaning: "The Exalter, The Elevator",
    description: [
      "He who repeats this name 101 times day and noght, Allah will make him higher, as far as honour, richness and merit are concerned.",
    ],
  },
  {
    nameNumber: 24,
    allahNameArabic: "ٱلْمُعِزُّ",
    allahNameEnglish: "AL-MU’IZZ",
    meaning: "The Honourer, The Bestower",
    description: [
      "He who repeats this Name 140 times after magrib prayer on monday or Friday nights, Allah will make him dignified in the eyes of others. That person will fear no one but Allah",
    ],
  },
  {
    nameNumber: 25,
    allahNameArabic: "ٱلْمُذِلُّ",
    allahNameEnglish: "AL-MUZIL",
    meaning: "The Dishonourer, The Humiliator",
    description: [
      "He who repeats this Name 75 times will be free from harm by those who are jealous of himand wish to harm him. Allah will protect him.",
    ],
  },
  {
    nameNumber: 26,
    allahNameArabic: "ٱلْسَّمِيعُ",
    allahNameEnglish: "AS-SAMEE’",
    meaning: "The All-Hearing",
    description: [
      "He who repeats this Name 500, 100 or 50 times without speaking to anyone on Thursday after the chasht prayer, Allah will bestow him anything he desires.",
    ],
  },
  {
    nameNumber: 27,
    allahNameArabic: "ٱلْبَصِيرُ",
    allahNameEnglish: "AL-BASEER",
    meaning: "The All-Seeing",
    description: [
      "He who repeats this Name 100 times after Friday afternoon prayer, Allal will give this person light in his sight and enlighten his heart.",
    ],
  },
  {
    nameNumber: 28,
    allahNameArabic: "ٱلْحَكَمُ",
    allahNameEnglish: "AL-HAKAM",
    meaning: "The Judge, The Giver of Justice",
    description: [
      "He who repeats this Name many times at night, many secrets (sirr) will be revealed to him.",
    ],
  },
  {
    nameNumber: 29,
    allahNameArabic: "ٱلْعَدْلُ",
    allahNameEnglish: "AL-‘ADL",
    meaning: "The Utterly Just",
    description: [
      "On Friday night or day, if you write this Name on a piece of bread and eat it, people will obey you.",
    ],
  },
  {
    nameNumber: 30,
    allahNameArabic: "ٱلْلَّطِيفُ",
    allahNameEnglish: "AL-LATEEF",
    meaning: "The Subtle One, The Most Gentle",
    description: [
      "He who repeats this Name 133 times daily will have increase in sustenance and all his affairs will be settled to his satisfaction.",
    ],
  },
  {
    nameNumber: 31,
    allahNameArabic: "ٱلْخَبِيرُ",
    allahNameEnglish: "AL-KHABEER",
    meaning: "The Acquainted, the All-Aware",
    description: [
      "If a man is a victim of selfish desires and bad habits, he will be relieved of these if he repeats this Name regularly.",
    ],
  },
  {
    nameNumber: 32,
    allahNameArabic: "ٱلْحَلِيمُ",
    allahNameEnglish: "AL-HALEEM",
    meaning: "The Most Forbearing",
    description: [
      "He who writes this Name on a piece of paper, washes it with water and sprinkles that water on anything - that will become safe from loss and calamiities.",
    ],
  },
  {
    nameNumber: 33,
    allahNameArabic: " ٱلْعَظِيمُ ",
    allahNameEnglish: "AL-‘ATHEEM",
    meaning: "The Magnificent, The Supreme",
    description: ["Those who repeat this Name many times will be respected."],
  },
  {
    nameNumber: 34,
    allahNameArabic: "ٱلْغَفُورُ",
    allahNameEnglish: "AL-GHAFOOR",
    meaning: "The Forgiver, The Exceedingly Forgiving",
    description: [
      "He who has a headche, fever and despondent, and continuously repeats this Name will be relieved of his ailment and will have Allah's forgiveness.",
    ],
  },
  {
    nameNumber: 35,
    allahNameArabic: " ٱلْشَّكُورُ ",
    allahNameEnglish: "ASH-SHAKOOR",
    meaning: "The Most Appreciative",
    description: [
      "If a person is in very Problem or has different kind of pain, he should read this Name 41 times every day and God will bless him.",
    ],
  },
  {
    nameNumber: 36,
    allahNameArabic: " ٱلْعَلِيُّ ",
    allahNameEnglish: "AL-‘ALEE",
    meaning: "The Most High, The Exalted",
    description: [
      "Any person who keeps this Name with him written on a piece of paper and reads this Name as much as he can God will give him high place and happiness.",
    ],
  },
  {
    nameNumber: 37,
    allahNameArabic: "ٱلْكَبِيرُ",
    allahNameEnglish: "AL-KABEER",
    meaning: "The Greatest, The Most Grand",
    description: [
      "He who repeats this Name 100 times each day will have self esteem.",
    ],
  },
  {
    nameNumber: 38,
    allahNameArabic: "ٱلْحَفِيظُ",
    allahNameEnglish: "AL-HAFEEDH",
    meaning: "The Preserver, The All-Heedful and All-Protecting",
    description: [
      "Any Person who keeps this name with him written on a piece of paper or reads it as much as he can he will always be prevented from dangers.",
    ],
  },
  {
    nameNumber: 39,
    allahNameArabic: " ٱلْمُقِيتُ ",
    allahNameEnglish: "AL-MUQEET",
    meaning: "The Sustainer",
    description: [
      "Any person who reads this Name on an empty glass and then fills it with waternand then drinks himself or make it drink to anyone else, God will give him desired need (In sha Allah).",
    ],
  },
  {
    nameNumber: 40,
    allahNameArabic: "ٱلْحَسِيبُ",
    allahNameEnglish: "AL-HASEEB",
    meaning: "The Reckoner, The Sufficient ",
    description: [
      "He who faces any problem should repeat this Name many times.",
    ],
  },
  {
    nameNumber: 41,
    allahNameArabic: " ٱلْجَلِيلُ ",
    allahNameEnglish: "AL-JALEEL",
    meaning: "The Majestic",
    description: [
      "Any person who reads this name as much as he can God will bless him with great respect.",
    ],
  },
  {
    nameNumber: 42,
    allahNameArabic: " ٱلْكَرِيمُ ",
    allahNameEnglish: "AL-KAREEM",
    meaning: "The Most Generous, The Most Esteemed",
    description: [
      "He who repeats this Name many times at bedtime will have esottem in this world (and Hereafter among the learned and righteous people).",
    ],
  },
  {
    nameNumber: 43,
    allahNameArabic: "ٱلْرَّقِيبُ",
    allahNameEnglish: "AR-RAQEEB",
    meaning: "The Watchful",
    description: [
      "He who repeats this Name seven times on himself, his family and property, all will be under Allah's protection.",
    ],
  },
  {
    nameNumber: 44,
    allahNameArabic: "ٱلْمُجِيبُ",
    allahNameEnglish: "AL-MUJEEB",
    meaning: "The Responsive One",
    description: ["The appeal of him who repeats this name will be answered."],
  },
  {
    nameNumber: 45,
    allahNameArabic: "ٱلْوَاسِعُ",
    allahNameEnglish: "AL-WAASI’",
    meaning: "The All-Encompassing, the Boundless",
    description: [
      "If one who has difficulty in earning, repeats this Name frequently, will have good earnings.",
    ],
  },
  {
    nameNumber: 46,
    allahNameArabic: "ٱلْحَكِيمُ",
    allahNameEnglish: "AL-HAKEEM",
    meaning: "The All-Wise",
    description: [
      "He who repeats this Name continuously (from time to time) will not have difficulties in his work, and Allah will open to himthe door of wisdom.",
    ],
  },
  {
    nameNumber: 47,
    allahNameArabic: "ٱلْوَدُودُ",
    allahNameEnglish: "AL-WADOOD",
    meaning: "The Most Loving",
    description: [
      "Any person who reads this Name 1000 times on a food and eats it with his wife, then God will remove all the tensions and fights between husband and wife (In Sha Allah).",
    ],
  },
  {
    nameNumber: 48,
    allahNameArabic: "ٱلْمَجِيدُ",
    allahNameEnglish: "AL-MAJEED",
    meaning: "The Glorious, The Most Honorable",
    description: ["He who repeats this Name gain glory."],
  },
  {
    nameNumber: 49,
    allahNameArabic: "ٱلْبَاعِثُ",
    allahNameEnglish: "AL-BA’ITH",
    meaning: "The Resurrector, The Raiser of the Dead",
    description: ["He who repeats this Name gains fear of Allah."],
  },
  {
    nameNumber: 50,
    allahNameArabic: "ٱلْشَّهِيدُ",
    allahNameEnglish: "ASH-SHAHEED",
    meaning: "The All- and Ever Witnessings",
    description: [
      "If any person's wife or children are irrespectable then he should keep his hand on his forehead and read this Name 21 times, they will become respectable.",
    ],
  },
  {
    nameNumber: 51,
    allahNameArabic: "ٱلْحَقُّ",
    allahNameEnglish: "AL-HAQQ",
    meaning: "The Truth",
    description: [
      "If one has something and repeats this Name, he will find what is lost.",
    ],
  },
  {
    nameNumber: 52,
    allahNameArabic: "ٱلْوَكِيلُ",
    allahNameEnglish: "AL-WAKEEL",
    meaning: "The Trustee, The Disposer of Affairs",
    description: [
      "He who afraid of being burnt in fire or any similar danger, repeats this name continously (from time to time), will be under protection of Allah",
    ],
  },
  {
    nameNumber: 53,
    allahNameArabic: "ٱلْقَوِيُّ",
    allahNameEnglish: "AL-QAWIYY",
    meaning: "The All-Strong",
    description: [
      "Any person who is really miserable he only should read this name so to let enimies go.",
    ],
  },
  {
    nameNumber: 54,
    allahNameArabic: "ٱلْمَتِينُ",
    allahNameEnglish: "AL-MATEEN",
    meaning: "The Firm, The Steadfast, The forseful one",
    description: [
      "If one has troubles and repeats this Name, his troubles will disappear.",
    ],
  },
  {
    nameNumber: 55,
    allahNameArabic: "ٱلْوَلِيُّ",
    allahNameEnglish: "AL-WALIYY",
    meaning: "The Protecting Associate, The Governer",
    description: [
      "If a person is not happy with the habits of his wife, should repeat this Name whenevwr he goes in front of her and his wife will become a good responsible wife.",
    ],
  },
  {
    nameNumber: 56,
    allahNameArabic: "ٱلْحَمِيدُ",
    allahNameEnglish: "AL-HAMEED",
    meaning: "The Praiseworthy",
    description: ["He who repeats this Name will be loved and praised."],
  },
  {
    nameNumber: 57,
    allahNameArabic: "ٱلْمُحْصِيُ",
    allahNameEnglish: "AL-MUHSEE",
    meaning: "The All-Enumerating, The Counter, The Appraiser",
    description: [
      "He who is afraid of being quiestioned on the Judgement Day, repeats this Name 100 times daily, will have ease and clement.",
    ],
  },
  {
    nameNumber: 58,
    allahNameArabic: "ٱلْمُبْدِئُ",
    allahNameEnglish: "AL-MU’ID",
    meaning: "The Restorer, The Reinstater, The Originator",
    description: [
      "If this name is repeated and breathed into a pregnant woman who is afraid of aborting, she will be free of danger.",
    ],
  },
  {
    nameNumber: 59,
    allahNameArabic: "ٱلْمُعِيدُ",
    allahNameEnglish: "AL-MU’ID",
    meaning: "The Restorer, The Reinstater",
    description: [
      "If this name is repeated 70 times for someone who is away from his family, that person will return safely in seven days.",
    ],
  },
  {
    nameNumber: 60,
    allahNameArabic: "ٱلْمُحْيِى",
    allahNameEnglish: "AL-MUHYEE",
    meaning: "The Giver of Life",
    description: [
      "If any person is not healthy he should read this nameas much as he can and he will become healthy.",
    ],
  },
  {
    nameNumber: 61,
    allahNameArabic: "ٱلْمُمِيتُ",
    allahNameEnglish: "AL-MUMEET",
    meaning: "The Bringer of Death, The Destroyer, The Taker Of Life",
    description: ["This Name is repeated to destroy one's enemy."],
  },
  {
    nameNumber: 62,
    allahNameArabic: "ٱلْحَىُّ",
    allahNameEnglish: "AL-HAYY",
    meaning: "The Ever-Living",
    description: ["He who repeats this Name will have a long life."],
  },
  {
    nameNumber: 63,
    allahNameArabic: " ٱلْقَيُّومُ ",
    allahNameEnglish: "AL-QAYYOOM",
    meaning: "The Sustainer, The Self-Subsisting",
    description: ["He who repeats this Name will not fall into inadversity."],
  },
  {
    nameNumber: 64,
    allahNameArabic: "ٱلْوَاجِدُ",
    allahNameEnglish: "AL-WAAJID",
    meaning: "The Perceiver",
    description: ["He who repeats this Name will have richness of heart."],
  },
  {
    nameNumber: 65,
    allahNameArabic: "ٱلْمَاجِدُ",
    allahNameEnglish: "AL-MAAJID",
    meaning: "The Illustrious, the Magnificent",
    description: [
      "He who repeats this Name in privacy and sincierely, his heart will be enlighted.",
    ],
  },
  {
    nameNumber: 66,
    allahNameArabic: "ٱلْوَاحِدُ",
    allahNameEnglish: "AL-WAAHID",
    meaning: "The One",
    description: [
      "He who repeats this Name 1000 times in privacy and in a quiet place will be free from fear and delusion.",
    ],
  },
  {
    nameNumber: 67,
    allahNameArabic: "ٱلْأَحَد",
    allahNameEnglish: "AL-AHAD",
    meaning: "The Unique, The Only One ",
    description: [
      "He who repeats this Name 1000 times will have certainm secrets opened to him.",
    ],
  },
  {
    nameNumber: 68,
    allahNameArabic: "ٱلْصَّمَدُ",
    allahNameEnglish: "AS-SAMAD",
    meaning: "The Eternal, Satisfier of Needs",
    description: [
      "He who repeats this Name many times, Allah will provide his need and as a result he will not need others, but they will need him.",
    ],
  },
  {
    nameNumber: 69,
    allahNameArabic: "ٱلْقَادِرُ",
    allahNameEnglish: "AL-QADIR",
    meaning: "The Capable, The Powerful",
    description: ["He who repeats this Name, all his desires will be filled."],
  },
  {
    nameNumber: 70,
    allahNameArabic: "ٱلْمُقْتَدِر",
    allahNameEnglish: "AL-MUQTADIR",
    meaning: "The Omnipotent",
    description: ["He who repeats this Name will be aware of the truth."],
  },
  {
    nameNumber: 71,
    allahNameArabic: " ٱلْمُقَدِّمُ ",
    allahNameEnglish: "AL-MUQADDIM",
    meaning: "The Expediter, The Promoter",
    description: [
      "The one who repeats this Name on the battlefield, or who has fear of being alone in an awe inspiring place, no harm will come to him and will become obedient to Allah.",
    ],
  },
  {
    nameNumber: 72,
    allahNameArabic: "ٱلْمُؤَخِّرُ",
    allahNameEnglish: "AL-MU’AKHKHIR",
    meaning: "The Delayer, the Retarder",
    description: [
      "Any person who is a traveller should read this Name 1000 times so he will return home very soon without zny loss.",
    ],
  },
  {
    nameNumber: 73,
    allahNameArabic: "ٱلأَوَّلُ",
    allahNameEnglish: "AL-AWWAL",
    meaning: "The First ",
    description: [
      "He who repeats this many times will lead a good life and at the end of this life will have a good death.",
    ],
  },
  {
    nameNumber: 74,
    allahNameArabic: "ٱلْآخِرُ",
    allahNameEnglish: "AL-AAKHIR",
    meaning: "The Last",
    description: [
      "He who repeats this name many times will lead good life and at the end of his life will have a good death.",
    ],
  },
  {
    nameNumber: 75,
    allahNameArabic: "ٱلْظَّاهِرُ",
    allahNameEnglish: "AZ-DHAAHIR",
    meaning: "The Manifest",
    description: [
      "He who recites this name 15 times afre Friday (Jumma Prayer) divine light (Noor) will enter his heart.",
    ],
  },
  {
    nameNumber: 76,
    allahNameArabic: "ٱلْبَاطِنُ",
    allahNameEnglish: "AL-BAATIN",
    meaning: "The Hidden One, Knower of the Hidden",
    description: [
      "He who repeats this name three times each day will be able to see the truth in things.",
    ],
  },
  {
    nameNumber: 77,
    allahNameArabic: " ٱلْوَالِي ",
    allahNameEnglish: "AL-WAALI",
    meaning: "The Governor, The Patron, The protecting Friend",
    description: [
      "He who repeats this name and breaths into his house, his house will be free from danger.",
    ],
  },
  {
    nameNumber: 78,
    allahNameArabic: "ٱلْمُتَعَالِي",
    allahNameEnglish: "AL-MUTA’ALI",
    meaning: "The Most Exalted",
    description: [
      "Any person who reads this name as much as he can then all his problems will be gone.",
    ],
  },
  {
    nameNumber: 79,
    allahNameArabic: "ٱلْبَرُّ",
    allahNameEnglish: "AL-BARR",
    meaning: "The Source of Goodness, the Kind Benefactor",
    description: [
      "He who repeats this name to his child, this child willl be free from misfortune.",
    ],
  },
  {
    nameNumber: 80,
    allahNameArabic: " ٱلْتَّوَّابُ ",
    allahNameEnglish: "AT-TAWWAB",
    meaning: "The Ever-Pardoning, The Relenting, The Guide To rependance",
    description: [
      "He who repeats this name many times, his rependace willl be accepted.",
    ],
  },
  {
    nameNumber: 81,
    allahNameArabic: " ٱلْمُنْتَقِمُ ",
    allahNameEnglish: "AL-MUNTAQIM",
    meaning: "The Avenger",
    description: [
      "He who repeats this name for three fridays many times will be victorious against enemies.",
    ],
  },
  {
    nameNumber: 82,
    allahNameArabic: " ٱلْعَفُوُّ ",
    allahNameEnglish: "AL-‘AFUWW",
    meaning: "The Pardoner, The Forgiver",
    description: [
      "He who repeats this name many times, all his sins will be forgiven.",
    ],
  },
  {
    nameNumber: 83,
    allahNameArabic: " ٱلْرَّؤُفُ ",
    allahNameEnglish: "AR-RA’OOF",
    meaning: "The Most Kind, The Clement",
    description: ["He who repeats this many times will be blessed by Allah."],
  },
  {
    nameNumber: 84,
    allahNameArabic: "مَالِكُ ٱلْمُلْكُ",
    allahNameEnglish: "MAALIK-UL-MULK",
    meaning: "Master of the Kingdom, Owner of the Dominion",
    description: ["He who repeats this name will have esteem among people."],
  },
  {
    nameNumber: 85,
    allahNameArabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ",
    allahNameEnglish: "DHUL-JALAALI WAL-IKRAAM",
    meaning: "Possessor of Glory and Honour, Lord of Majesty and Generosity",
    description: ["He who repeats this name many times will be rich."],
  },
  {
    nameNumber: 86,
    allahNameArabic: "ٱلْمُقْسِطُ",
    allahNameEnglish: "AL-MUQSIT",
    meaning: "The Equitable, the Requiter",
    description: [
      "He who repeats this name will be freee from the harm of the devil.",
    ],
  },
  {
    nameNumber: 87,
    allahNameArabic: "ٱلْجَامِعُ",
    allahNameEnglish: "AL-JAAMI’",
    meaning: "The Gatherer, the Uniter",
    description: [
      "He who repeats this name will find the things that he lost.",
    ],
  },
  {
    nameNumber: 88,
    allahNameArabic: "ٱلْغَنيُّ",
    allahNameEnglish: "AL-GHANIYY",
    meaning: "The Self-Sufficient, The Wealthy",
    description: [
      "Any person who reads this name 70 times Allah will give him profit",
    ],
  },
  {
    nameNumber: 89,
    allahNameArabic: " ٱلْمُغْنِيُّ ",
    allahNameEnglish: "AL-MUGHNI",
    meaning: "The Enricher",
    description: [
      "He who repeats this name 1000 times daily for ten Fridays will become self-sufficient.",
    ],
  },
  {
    nameNumber: 90,
    allahNameArabic: "ٱلْمَانِعُ",
    allahNameEnglish: "AL-MANI’",
    meaning: "The Withholder, The preventer of harm",
    description: [
      "One should repeat this name 20 times at bedtimes for a peaceful and happy family life.",
    ],
  },
  {
    nameNumber: 91,
    allahNameArabic: "ٱلْضَّارُ",
    allahNameEnglish: "AD-DHARR",
    meaning: "The Distresser",
    description: [
      "He who does not enjoy peace and tranquility in life should repeat this name 100 times in Friday nights. He will find peace and tranquility by the grace of Allah.",
    ],
  },
  {
    nameNumber: 92,
    allahNameArabic: "ٱلْنَّافِعُ",
    allahNameEnglish: "AN-NAFI’",
    meaning: "The Propitious, the Benefactor",
    description: [
      "He who repeats this name 41 times at the beginning of every act, will be successfull in all his good acts.",
    ],
  },
  {
    nameNumber: 93,
    allahNameArabic: "ٱلْنُّورُ",
    allahNameEnglish: "AN-NUR",
    meaning: "The Light, The Illuminator ",
    description: [
      "Those who repeat this name God will fill his heart with Noor.",
    ],
  },
  {
    nameNumber: 94,
    allahNameArabic: " ٱلْهَادِي ",
    allahNameEnglish: "AL-HAADI",
    meaning: "The Guide",
    description: [
      "He who repeats this sacred name 1100 times after Isha prayer will be free from all needs.",
    ],
  },
  {
    nameNumber: 95,
    allahNameArabic: "ٱلْبَدِيعُ",
    allahNameEnglish: "AL-BADEE’",
    meaning: "The Incomparable Originator",
    description: [
      "Any person who reads this name after offering prayer of isha 1200 times for 11 days for any special reason, his work will be done before 11 days.",
    ],
  },
  {
    nameNumber: 96,
    allahNameArabic: "ٱلْبَاقِي",
    allahNameEnglish: "AL-BAAQI",
    meaning: "The Ever-Surviving, The Everlasting",
    description: [
      "He who repeats this name every Friday night 100 times all his good deeds will be accepted, by the grace of Allah.",
    ],
  },
  {
    nameNumber: 97,
    allahNameArabic: "ٱلْوَارِثُ",
    allahNameEnglish: "AL-WAARITH",
    meaning: "The Inheritor, The Heir",
    description: [
      "He who repeats this name after sunrise 100 times, will be free from all sorrows, by the grace of Allah.",
    ],
  },
  {
    nameNumber: 98,
    allahNameArabic: "ٱلْرَّشِيدُ",
    allahNameEnglish: "AR-RASHEED",
    meaning: "The Guide, Infallible Teacher",
    description: [
      "Any person who reads this name everyday will get a good running business.",
    ],
  },
  {
    nameNumber: 99,
    allahNameArabic: "ٱلْصَّبُورُ",
    allahNameEnglish: "AS-SABOOR",
    meaning: "The Forbearing, The Patient",
    description: [
      "Any person who is in any kind of problem should read this name 1020 times and his problem wil;l be solved.",
    ],
  },
];

export default allahNames;

const allahNames = [
  {
    nameNumber: 0,
    allahNameArabic: "الله",
    allahNameEnglish: "അല്ലാഹു",
    meaning: "ഏറ്റവും വലിയ പേര്",
    description: [
      "ഈ നാമം 1000 തവണയെങ്കിലും ആവർത്തിച്ചാൽ അവൻ്റെ ഹൃദയം സംശയങ്ങളിൽ നിന്നും മുക്തമാകും.",
      "ഭേദമാക്കാനാവാത്ത രോഗങ്ങളാൽ ബുദ്ധിമുട്ടുന്ന ആരെങ്കിലും ഈ നാമം പല തവണ ആവർത്തിച്ച് സുഖം പ്രാപിക്കാൻ അല്ലാഹുവിനോട് പ്രാർത്ഥിച്ചാൽ, അല്ലാഹുവിൻ്റെ അനുഗ്രഹത്താൽ അവൻ രോഗത്തിൽ നിന്ന് മുക്തി നേടും.",
    ],
  },
  {
    nameNumber: 1,
    allahNameArabic: "ٱلْرَّحْمَـانُ",
    allahNameEnglish: "അർ-റഹ്മാൻ",
    meaning: "പരമകാരുണികൻ അല്ലെങ്കിൽ പൂർണ്ണ കരുണയുള്ളവൻ",
    description: [
      "ഓരോ ഫർദ് (നിർബന്ധം) നമസ്കാരത്തിനു ശേഷവും ഈ നാമം 100 പ്രാവശ്യം ആവർത്തിക്കുന്നവർക്ക് നല്ല ഓർമ്മയുണ്ടാകും.",
    ],
  },
  {
    nameNumber: 2,
    allahNameArabic: "ٱلْرَّحِيْمُ",
    allahNameEnglish: "അർ-റഹീം",
    meaning: "കാരുണ്യത്തിൻ്റെ ദാതാവ്",
    description: [
      "ഓരോ ഫജ്ർ നമസ്കാരത്തിനു ശേഷവും 100 പ്രാവശ്യം ഈ നാമം ആവർത്തിക്കുന്നയാൾക് എല്ലാവരും അവനോട് സൗഹാർദ്ദപരമായി പെരുമാറുകയും എല്ലാ ലൗകിക വിപത്തുകളിൽ നിന്നും സുരക്ഷിതനായിരിക്കുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 3,
    allahNameArabic: "ٱلْمَلِكُ",
    allahNameEnglish: "അൽ-മലിക്",
    meaning: "ആധിപത്യത്തിൻ്റെ രാജാവും ഉടമയും",
    description: [
      "എല്ലാ ദിവസവും പ്രഭാത നമസ്കാരത്തിന് ശേഷം ഈ നാമം പലതവണ ആവർത്തിക്കുന്നവൻ അല്ലാഹുവിൻ്റെ അനുഗ്രഹത്താൽ സമ്പന്നനാകും.",
    ],
  },
  {
    nameNumber: 4,
    allahNameArabic: "ٱلْقُدُّوسُ",
    allahNameEnglish: "അൽ-ഖുദ്ദൂസ്",
    meaning: "തികച്ചും ശുദ്ധമായത്",
    description: [
      "ഓരോ ദിവസവും 100 തവണ ഈ നാമം ആവർത്തിക്കുന്നവരുടെ ഹൃദയം ഉത്കണ്ഠയിൽ നിന്ന് മുക്തമാകും.",
    ],
  },
  {
    nameNumber: 5,
    allahNameArabic: "ٱلْسَّلَامُ",
    allahNameEnglish: "അസ്സലാം",
    meaning: "പൂർണതയും സമാധാനവും നൽകുന്നവൻ",
    description: [
      "ഒരു രോഗിയോട് ഈ നാമം 160 തവണ ആവർത്തിച്ചാൽ, അവൻ ആരോഗ്യം വീണ്ടെടുക്കാൻ സഹായിക്കും.",
      "ഈ നാമം ഇടയ്ക്കിടെ ആവർത്തിക്കുന്നവൻ എല്ലാ വിപത്തുകളിൽ നിന്നും മുക്തനാകുന്നു.",
    ],
  },
  {
    nameNumber: 6,
    allahNameArabic: "ٱلْمُؤْمِنُ",
    allahNameEnglish: "അൽ-മു’മിൻ",
    meaning: "ഈമാനും സുരക്ഷയും നൽകുന്നവൻ",
    description: [
      "ഈ നാമം 631 പ്രാവശ്യം ആവർത്തിക്കുന്നവൻ അപകടത്തിൽ നിന്ന് സുരക്ഷിതനായിരിക്കും.",
    ],
  },
  {
    nameNumber: 7,
    allahNameArabic: "ٱلْمُهَيْمِنُ",
    allahNameEnglish: "അൽ-മുഹൈമിൻ",
    meaning: "കാവൽക്കാരൻ, സാക്ഷി, മേൽനോട്ടക്കാരൻ",
    description: [
      "കുളിച്ച് രണ്ട് റക്അത്ത് നമസ്കരിക്കുകയും ഈ നാമം 100 തവണ ആത്മാർത്ഥമായ ഏകാഗ്രതയോടെ ആവർത്തിക്കുകയും ചെയ്യുന്നവൻ്റെ ആന്തരികവും ബാഹ്യവുമായ അവസ്ഥകൾ അല്ലാഹു ശുദ്ധീകരിക്കും.",
    ],
  },
  {
    nameNumber: 8,
    allahNameArabic: "ٱلْعَزِيزُ",
    allahNameEnglish: "അൽ-അസീസ്",
    meaning: "സർവ്വശക്തൻ, വിജയി",
    description: [
      "ഓരോ ഫർസ് നമസ്കാരത്തിനു ശേഷവും ഇത് 41 പ്രാവശ്യം ആവർത്തിക്കുന്നവൻ മറ്റുള്ളവരുടെ ആവശ്യങ്ങളിൽ നിന്ന് സ്വതന്ത്രനാകുകയും അപമാനത്തിന് ശേഷം ബഹുമാനം നേടുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 9,
    allahNameArabic: "ٱلْجَبَّارُ",
    allahNameEnglish: "അൽ-ജബ്ബാർ",
    meaning: "നിർബന്ധിതൻ, പുനഃസ്ഥാപകൻ",
    description: [
      "ഈ പേര് ആവർത്തിക്കുന്നയാൾ അക്രമമോ തീവ്രതയോ കാഠിന്യമോ കാണിക്കില്ല.",
    ],
  },
  {
    nameNumber: 10,
    allahNameArabic: "ٱلْمُتَكَبِّرُ",
    allahNameEnglish: "അൽ-മുതകബ്ബിർ",
    meaning: "പരമോന്നത, മഹത്തായ",
    description: [
      "ഈ പേര് ആവർത്തിക്കുന്നവന് പദവിയും ബഹുമാനവും നൽകും.",
      "ഓരോ പ്രവൃത്തിയുടെയും ആരംഭത്തിൽ അവൻ ഈ നാമം ഇടയ്ക്കിടെ ആവർത്തിച്ചാൽ, അല്ലാഹുവിൻ്റെ അനുഗ്രഹത്താൽ അവൻ വിജയം കൈവരിക്കും.",
    ],
  },
  {
    nameNumber: 11,
    allahNameArabic: "ٱلْخَالِقُ",
    allahNameEnglish: "അൽ-ഖാലിഖ്",
    meaning: "സ്രഷ്ടാവ്, നിർമ്മാതാവ്",
    description: [
      "ഏഴു ദിവസം ഇടവേളയില്ലാതെ ഈ നാമം 100 പ്രാവശ്യം ആവർത്തിച്ചാൽ, അല്ലാഹു ഒരു മാലാഖയെ സൃഷ്ടിക്കും, അവൻ്റെ കർത്തവ്യം ന്യായവിധി ദിവസം വരെ ഈ വ്യക്തിക്ക് നീതിയോടെ പ്രവർത്തിക്കും. മാലാഖക്കുള്ള പ്രതിഫലം ആ വ്യക്തിക്ക് നൽകും.",
    ],
  },
  {
    nameNumber: 12,
    allahNameArabic: "ٱلْبَارِئُ",
    allahNameEnglish: "അൽ-ബാരി'",
    meaning: "ഉപജ്ഞാതാവ്",
    description: ["എല്ലാ വസ്തുക്കളെയും ആനുപാതികമായി സൃഷ്ടിക്കുന്നവൻ."],
  },
  {
    nameNumber: 13,
    allahNameArabic: " ٱلْمُصَوِّرُ ",
    allahNameEnglish: "അൽ-മുസവ്വിർ",
    meaning: "പരിഷ്കാരി, സൗന്ദര്യത്തിൻ്റെ രൂപപ്പെടുത്തുന്നവൻ",
    description: [
      "ഒരു സ്ത്രീക്ക് പ്രസവിക്കാൻ ആഗ്രഹമുണ്ടെങ്കിലും, കഴിയുന്നില്ലെങ്കിൽ, ഏഴ് ദിവസം ഉപവസിക്കുകയും, ഓരോ ദിവസവും നോമ്പ് തുറക്കുമ്പോൾ (ഇഫ്താർ) അവൾ ഈ നാമം ഇരുപത്തിയൊന്ന് തവണ ആവർത്തിക്കുകയും ഒരു ഗ്ലാസ് വെള്ളത്തിൽ ശ്വസിക്കുകയും ചെയ്യുക, തുടർന്ന് നോമ്പ് തുറക്കുക. ഈ വെള്ളം, അല്ലാഹു അവൾക്ക് ഒരു കുഞ്ഞിനെ നൽകി അനുഗ്രഹിക്കും.",
    ],
  },
  {
    nameNumber: 14,
    allahNameArabic: "ٱلْغَفَّارُ",
    allahNameEnglish: "അൽ-ഗഫാർ",
    meaning: "എല്ലാം ക്ഷമിക്കുന്നവൻ",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവൻ്റെ പാപങ്ങൾ പൊറുക്കപ്പെടും."],
  },
  {
    nameNumber: 15,
    allahNameArabic: "ٱلْقَهَّارُ",
    allahNameEnglish: "അൽ-ഖഹാർ",
    meaning: "കീഴടക്കുന്നവൻ, എക്കാലത്തെയും ആധിപത്യം പുലർത്തുന്നവൻ",
    description: [
      "ഈ നാമം ആവർത്തിക്കുന്നവൻ്റെ ആത്മാവ് ജഡത്തിൻ്റെ ആഗ്രഹങ്ങളെ കീഴടക്കും, അവൻ്റെ ഹൃദയം ലോകത്തിൻ്റെ ആകർഷണങ്ങളിൽ നിന്ന് സ്വതന്ത്രമാക്കപ്പെടുകയും ആന്തരിക സമാധാനം നേടുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 16,
    allahNameArabic: "ٱلْوَهَّابُ",
    allahNameEnglish: "അൽ-വഹാബ്",
    meaning: "സമ്മാനങ്ങൾ നൽകുന്നവൻ",
    description: [
      "ദാരിദ്ര്യമോ പട്ടിണിയോ മൂലം ബുദ്ധിമുട്ടുന്ന ഒരാൾ ഈ പേര് ഇടയ്ക്കിടെ ആവർത്തിക്കുകയോ ഒരു കടലാസിൽ എഴുതി സൂക്ഷിക്കുകയോ ചെയ്താൽ അല്ലെങ്കിൽ ചാസ്ത് നമസ്കാരത്തിന്റെ അവസാന സജ്ദയിൽ 40 തവണ ഈ പേര് ചൊല്ലിയാൽ, അല്ലാഹു അവൻ്റെ ദാരിദ്ര്യവും ദാരിദ്ര്യവും പട്ടിണിയും ഒഴിവാക്കും. ഒരു അത്ഭുതകരമായ വഴി.",
    ],
  },
  {
    nameNumber: 17,
    allahNameArabic: "ٱلْرَّزَّاقُ",
    allahNameEnglish: "അർ-റസാഖ്",
    meaning: "ദാതാവ്",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവന് അല്ലാഹു ഉപജീവനം നൽകും."],
  },
  {
    nameNumber: 18,
    allahNameArabic: " ٱلْفَتَّاحُ ",
    allahNameEnglish: "അൽ-ഫത്താഹ്",
    meaning: "ഓപ്പണർ, ജഡ്ജി",
    description: [
      "ഈ നാമം ആവർത്തിക്കുന്നവൻ്റെ ഹൃദയം തുറന്നിരിക്കും, അവന് വിജയം നൽകപ്പെടും.",
    ],
  },
  {
    nameNumber: 19,
    allahNameArabic: "ٱلْعَلِيمُ",
    allahNameEnglish: "അൽ-അലീം",
    meaning: "എല്ലാം അറിയുന്നവൻ, സർവ്വജ്ഞൻ",
    description: [
      "ഈ നാമം ആവർത്തിക്കുന്നവൻ്റെ ഹൃദയം പ്രകാശപൂരിതമായിത്തീരുകയും ദേവപ്രകാശം വെളിപ്പെടുത്തുകയും ചെയ്യും (നൂർ)",
    ],
  },
  {
    nameNumber: 20,
    allahNameArabic: "ٱلْقَابِضُ",
    allahNameEnglish: "അൽ-ഖാബിദ്",
    meaning: "തടഞ്ഞുവയ്ക്കുന്നവൻ",
    description: [
      "4 കഷണങ്ങൾ (പഴം, റൊട്ടി മുതലായവ) ഈ നാമം എഴുതി 40 ദിവസം ഭക്ഷിക്കുന്നവൻ വിഷപ്പിൽ നിന്നു രക്ഷ നേടും.",
    ],
  },
  {
    nameNumber: 21,
    allahNameArabic: "ٱلْبَاسِطُ",
    allahNameEnglish: "അൽ-ബാസിത്",
    meaning: "നീട്ടുന്നവൻ",
    description: [
      "ഈ നാമം 10 പ്രാവശ്യം ചാഷ്‌ത്ത് നമസ്‌കാരത്തിന് ശേഷം തുറന്ന കൈകളാൽ (കൈകൾ മുകളിലേക്ക്) ആവർത്തിച്ച്, തുടർന്ന് കൈകൊണ്ട് മുഖം തടവുന്നയാൾക്ക് മറ്റുള്ളവരിൽ നിന്ന് ആവശ്യമില്ല.",
    ],
  },
  {
    nameNumber: 22,
    allahNameArabic: " ٱلْخَافِضُ ",
    allahNameEnglish: "അൽ-ഖാഫിദ്",
    meaning: "കുറയ്ക്കുന്നവൻ, താഴ്ത്തുന്നവൻ",
    description: [
      "മൂന്ന് ദിവസം വ്രതമനുഷ്ഠിക്കുകയും നാലാം ദിവസം ഈ നാമം ഒരു സദസ്സിൽ 70 തവണ ആവർത്തിക്കുകയും ചെയ്താൽ, ശത്രുവിൻ്റെ ഉപദ്രവത്തിൽ നിന്ന് അല്ലാഹു അവരെ മോചിപ്പിക്കും.",
      "ദിവസവും 500 പ്രാവശ്യം ഈ നാമം ചൊല്ലുന്നവൻ്റെ ആവശ്യം അല്ലാഹു നിറവേറ്റും.",
    ],
  },
  {
    nameNumber: 23,
    allahNameArabic: " ٱلْرَّافِعُ ",
    allahNameEnglish: "അർ-റാഫി",
    meaning: "ഉയർത്തുനവൻ",
    description: [
      "ഈ നാമം പകലും രാത്രിയും 101 തവണ ആവർത്തിച്ചാൽ, അള്ളാഹു അവനെ ഉന്നതനാക്കും, ബഹുമാനവും സമ്പത്തും യോഗ്യതയും ലഭിക്കും.",
    ],
  },
  {
    nameNumber: 24,
    allahNameArabic: "ٱلْمُعِزُّ",
    allahNameEnglish: "അൽ-മുഇസ്",
    meaning: "ആദരണീയൻ, ദാതാവ്",
    description: [
      "തിങ്കൾ അല്ലെങ്കിൽ വെള്ളിയാഴ്ച രാത്രികളിൽ മഗ്‌രിബ് നമസ്‌കാരത്തിന് ശേഷം 140 തവണ ഈ നാമം ആവർത്തിച്ചാൽ, അല്ലാഹു അവനെ മറ്റുള്ളവരുടെ ദൃഷ്ടിയിൽ മാന്യനാക്കും. ആ വ്യക്തി അല്ലാഹുവിനെയല്ലാതെ മറ്റാരെയും ഭയപ്പെടുകയില്ല",
    ],
  },
  {
    nameNumber: 25,
    allahNameArabic: "ٱلْمُذِلُّ",
    allahNameEnglish: "അൽ-മുദില്ലു",
    meaning: "അപമാനികുന്നവൻ",
    description: [
      "ഈ നാമം 75 പ്രാവശ്യം ആവർത്തിച്ചാൽ അവനോട് അസൂയയുള്ളവരും അവനെ ഉപദ്രവിക്കാൻ ആഗ്രഹിക്കുന്നവരും ഉപദ്രവങ്ങളിൽ നിന്ന് മുക്തനാകും. അല്ലാഹു അവനെ സംരക്ഷിക്കും.",
    ],
  },
  {
    nameNumber: 26,
    allahNameArabic: "ٱلْسَّمِيعُ",
    allahNameEnglish: "അസ്-സമീ'",
    meaning: "എല്ലാം കേൾക്കുന്നവൻ",
    description: [
      "വ്യാഴാഴ്ച പ്രാർത്ഥനയ്ക്ക് ശേഷം ആരോടും സംസാരിക്കാതെ ഈ നാമം 500, 100, 50 തവണ ആവർത്തിക്കുന്നയാൾക്ക് അവൻ ആഗ്രഹിക്കുന്നതെന്തും അല്ലാഹു നൽകും.",
    ],
  },
  {
    nameNumber: 27,
    allahNameArabic: "ٱلْبَصِيرُ",
    allahNameEnglish: "അൽ-ബസീർ",
    meaning: "എല്ലാം കാണുന്നവൻ",
    description: [
      "വെള്ളിയാഴ്ച ഉച്ചകഴിഞ്ഞുള്ള പ്രാർത്ഥനയ്ക്ക് ശേഷം ഈ നാമം 100 തവണ ആവർത്തിക്കുന്നയാൾ, അള്ള ഈ വ്യക്തിക്ക് അവൻ്റെ ദൃഷ്ടിയിൽ പ്രകാശം നൽകുകയും അവൻ്റെ ഹൃദയത്തെ പ്രകാശിപ്പിക്കുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 28,
    allahNameArabic: "ٱلْحَكَمُ",
    allahNameEnglish: "അൽ-ഹകം",
    meaning: "ന്യായാധിപൻ, നീതിയുടെ ദാതാവ്",
    description: [
      "രാത്രിയിൽ ഈ നാമം പല പ്രാവശ്യം ആവർത്തിക്കുന്നവന് പല രഹസ്യങ്ങളും (സർ) വെളിപ്പെടും.",
    ],
  },
  {
    nameNumber: 29,
    allahNameArabic: "ٱلْعَدْلُ",
    allahNameEnglish: "അൽ -‘ആദില്ലു",
    meaning: "തികച്ചും ന്യായം",
    description: [
      "വെള്ളിയാഴ്ച രാത്രിയോ പകലോ, നിങ്ങൾ ഒരു കഷണം റൊട്ടിയിൽ ഈ പേര് എഴുതി കഴിച്ചാൽ, ആളുകൾ നിങ്ങളെ അനുസരിക്കും.",
    ],
  },
  {
    nameNumber: 30,
    allahNameArabic: "ٱلْلَّطِيفُ",
    allahNameEnglish: "അൽ-ലത്തീഫ്",
    meaning: "സൂക്ഷ്മമായവൻ, ഏറ്റവും സൗമ്യനായവൻ",
    description: [
      "ദിവസവും 133 പ്രാവശ്യം ഈ നാമം ആവർത്തിക്കുന്നവന് ഉപജീവനം വർദ്ധിക്കുകയും അവൻ്റെ എല്ലാ കാര്യങ്ങളും തൃപ്തികരമായി പരിഹരിക്കപ്പെടുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 31,
    allahNameArabic: "ٱلْخَبِيرُ",
    allahNameEnglish: "അൽ-ഖബീർ",
    meaning: "പരിചിതൻ, എല്ലാം അറിയുന്നവൻ",
    description: [
      "ഒരു മനുഷ്യൻ സ്വാർത്ഥ മോഹങ്ങൾക്കും ദുശ്ശീലങ്ങൾക്കും ഇരയാണെങ്കിൽ, ഈ നാമം പതിവായി ആവർത്തിച്ചാൽ അയാൾക്ക് ഇവയിൽ നിന്ന് മോചനം ലഭിക്കും.",
    ],
  },
  {
    nameNumber: 32,
    allahNameArabic: "ٱلْحَلِيمُ",
    allahNameEnglish: "അൽ - ഹലീം",
    meaning: "ഏറ്റവും ക്ഷമാശീലൻ",
    description: [
      "ഈ നാമം ഒരു കടലാസിൽ എഴുതുകയും, അത് വെള്ളത്തിൽ കഴുകുകയും, ആ വെള്ളം എന്തിലും തളിക്കുകയും ചെയ്യുന്നു - അത് നഷ്ടങ്ങളിൽ നിന്നും വിപത്തുകളിൽ നിന്നും സുരക്ഷിതമാകും.",
    ],
  },
  {
    nameNumber: 33,
    allahNameArabic: " ٱلْعَظِيمُ ",
    allahNameEnglish: "അൽ-‘അഥീം",
    meaning: "ഗംഭീരം, പരമോന്നത",
    description: ["ഈ നാമം പലതവണ ആവർത്തിക്കുന്നവർ ബഹുമാനിക്കപ്പെടും."],
  },
  {
    nameNumber: 34,
    allahNameArabic: "ٱلْغَفُورُ",
    allahNameEnglish: "അൽ-ഗഫൂർ",
    meaning: "ക്ഷമിക്കുന്നവൻ, അമിതമായി ക്ഷമിക്കുന്നവൻ",
    description: [
      "തലവേദനയും പനിയും നിരാശയും ഉള്ളവനും ഈ നാമം തുടർച്ചയായി ആവർത്തിക്കുന്നവനു അസുഖം മാറുകയും അല്ലാഹുവിൻ്റെ പാപമോചനം ലഭിക്കുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 35,
    allahNameArabic: " ٱلْشَّكُورُ ",
    allahNameEnglish: "ആഷ്-ഷക്കൂർ",
    meaning: "ഏറ്റവും അഭിനന്ദിക്കുന്നവൻ",
    description: [
      "ഒരു വ്യക്തി വളരെ പ്രശ്നത്തിലാണെങ്കിൽ അല്ലെങ്കിൽ വ്യത്യസ്ത തരത്തിലുള്ള വേദനകൾ ഉണ്ടെങ്കിൽ, അവൻ ഈ നാമം ദിവസവും 41 തവണ വായിക്കണം, ദൈവം അവനെ അനുഗ്രഹിക്കും.",
    ],
  },
  {
    nameNumber: 36,
    allahNameArabic: " ٱلْعَلِيُّ ",
    allahNameEnglish: "അൽ-‘അലിയ്യു",
    meaning: "അത്യുന്നതൻ, ഉന്നതൻ",
    description: [
      "ഈ പേര് ഒരു കടലാസിൽ എഴുതി സൂക്ഷിക്കുകയും ഈ നാമം തന്നാൽ കഴിയുന്നത്ര വായിക്കുകയും ചെയ്യുന്ന ഏതൊരു വ്യക്തിയും അവന് ഉയർന്ന സ്ഥാനവും സന്തോഷവും നൽകും.",
    ],
  },
  {
    nameNumber: 37,
    allahNameArabic: "ٱلْكَبِيرُ",
    allahNameEnglish: "അൽ-കബീർ",
    meaning: "ഏറ്റവും വലിയ, ഏറ്റവും മഹത്തായ",
    description: [
      "ഈ നാമം ദിവസവും 100 തവണ ആവർത്തിക്കുന്ന വ്യക്തിക്ക് ആത്മാഭിമാനം ഉണ്ടാകും.",
    ],
  },
  {
    nameNumber: 38,
    allahNameArabic: "ٱلْحَفِيظُ",
    allahNameEnglish: "അൽ-ഹഫീദ്",
    meaning: "സംരക്ഷകൻ, സർവ്വശ്രദ്ധയുള്ളവനും എല്ലാം സംരക്ഷിക്കുന്നവനും",
    description: [
      "ഈ പേര് ഒരു കടലാസിൽ എഴുതി സൂക്ഷിക്കുകയോ കഴിയുന്നത്ര വായിക്കുകയോ ചെയ്യുന്ന ഏതൊരു വ്യക്തിയും അപകടങ്ങളിൽ നിന്ന് എല്ലായ്പ്പോഴും തടയപ്പെടും.",
    ],
  },
  {
    nameNumber: 39,
    allahNameArabic: " ٱلْمُقِيتُ ",
    allahNameEnglish: "അൽ-മുഖീത്",
    meaning: "സുസ്ഥിരൻ",
    description: [
      "ഒരു ഒഴിഞ്ഞ ഗ്ലാസിൽ ഈ പേര് വായിച്ച് അതിൽ വെള്ളം നിറച്ച് സ്വയം കുടിക്കുകയോ മറ്റാർക്കെങ്കിലും കുടിക്കുകയോ ചെയ്താൽ, ദൈവം അവന് ആവശ്യമുള്ള ആവശ്യം നൽകും (ഇൻ ഷാ അല്ലാഹ്).",
    ],
  },
  {
    nameNumber: 40,
    allahNameArabic: "ٱلْحَسِيبُ",
    allahNameEnglish: "അൽ - ഹസീബ്",
    meaning: "കണക്കു കൂട്ടുന്നവൻ, മതിയായവൻ",
    description: ["ഏത് പ്രശ്‌നവും നേരിടുന്നയാൾ ഈ നാമം പലതവണ ആവർത്തിക്കണം."],
  },
  {
    nameNumber: 41,
    allahNameArabic: " ٱلْجَلِيلُ ",
    allahNameEnglish: "അൽ - ജലീൽ",
    meaning: "ഗംഭീരൻ",
    description: [
      "ഈ നാമം കഴിയുന്നത്ര വായിക്കുന്ന ഏതൊരു വ്യക്തിയും അവനെ വളരെ ബഹുമാനത്തോടെ ദൈവം അനുഗ്രഹിക്കും.",
    ],
  },
  {
    nameNumber: 42,
    allahNameArabic: " ٱلْكَرِيمُ ",
    allahNameEnglish: "അൽ-കരീം",
    meaning: "ഏറ്റവും ഉദാരമതി, ഏറ്റവും ആദരണീയൻ",
    description: [
      "ഉറക്കസമയം ഈ നാമം പലതവണ ആവർത്തിക്കുന്നവന് ഇഹലോകത്തും (പരലോകത്തും പണ്ഡിതന്മാരും നീതിമാനും ആയ ആളുകളുടെ ഇടയിൽ) ബഹുമാനം ലഭിക്കും.",
    ],
  },
  {
    nameNumber: 43,
    allahNameArabic: "ٱلْرَّقِيبُ",
    allahNameEnglish: "അർ-റഖീബ്",
    meaning: "കാവൽക്കാരൻ",
    description: [
      "ഈ നാമം തനിക്കും കുടുംബത്തിനും സ്വത്തിനും മേലായി ഏഴു പ്രാവശ്യം ചൊല്ലുന്നവൻ എല്ലാം അല്ലാഹുവിൻ്റെ സംരക്ഷണത്തിലായിരിക്കും.",
    ],
  },
  {
    nameNumber: 44,
    allahNameArabic: "ٱلْمُجِيبُ",
    allahNameEnglish: "അൽ-മുജീബ്",
    meaning: "പ്രതികരിക്കുന്നവൻ",
    description: ["ഈ പേര് ആവർത്തിക്കുന്നവൻ്റെ അപ്പീലിന് ഉത്തരം ലഭിക്കും."],
  },
  {
    nameNumber: 45,
    allahNameArabic: "ٱلْوَاسِعُ",
    allahNameEnglish: "അൽ-വാസി",
    meaning: "എല്ലാം ഉൾക്കൊള്ളുന്ന, അതിരുകളില്ലാത്ത",
    description: [
      "സമ്പാദിക്കാൻ ബുദ്ധിമുട്ടുള്ള ഒരാൾ ഈ പേര് ഇടയ്ക്കിടെ ആവർത്തിച്ചാൽ നല്ല വരുമാനം ഉണ്ടാകും.",
    ],
  },
  {
    nameNumber: 46,
    allahNameArabic: "ٱلْحَكِيمُ",
    allahNameEnglish: "അൽ-ഹക്കീം",
    meaning: "സർവ്വജ്ഞാനി",
    description: [
      "ഈ നാമം തുടർച്ചയായി (കാലാകാലങ്ങളിൽ) ആവർത്തിക്കുന്നവന് അവൻ്റെ ജോലിയിൽ ബുദ്ധിമുട്ടുകൾ ഉണ്ടാകില്ല, അല്ലാഹു അവനു ജ്ഞാനത്തിൻ്റെ വാതിൽ തുറക്കും.",
    ],
  },
  {
    nameNumber: 47,
    allahNameArabic: "ٱلْوَدُودُ",
    allahNameEnglish: "അൽ-വദൂദ്",
    meaning: "ഏറ്റവും സ്നേഹമുള്ളവൻ",
    description: [
      "ഏതൊരു വ്യക്തിയും 1000 തവണ ഈ നാമം ഒരു ഭക്ഷണത്തിൽ വായിക്കുകയും ഭാര്യയോടൊപ്പം കഴിക്കുകയും ചെയ്യുന്നു, അപ്പോൾ ഭാര്യയും ഭർത്താവും തമ്മിലുള്ള എല്ലാ പിരിമുറുക്കങ്ങളും വഴക്കുകളും ദൈവം നീക്കും (ഇൻ ഷാ അല്ലാഹ്).",
    ],
  },
  {
    nameNumber: 48,
    allahNameArabic: "ٱلْمَجِيدُ",
    allahNameEnglish: "അൽ-മജീദ്",
    meaning: "മഹത്വമുള്ള, ഏറ്റവും ആദരണീയൻ",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവൻ മഹത്വം നേടുന്നു."],
  },
  {
    nameNumber: 49,
    allahNameArabic: "ٱلْبَاعِثُ",
    allahNameEnglish: "അൽ-ബായിദ്",
    meaning: "ഉയിർത്തെഴുന്നേൽപിക്കുന്നവൻ",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവൻ അല്ലാഹുവിനെ ഭയപ്പെടുന്നു."],
  },
  {
    nameNumber: 50,
    allahNameArabic: "ٱلْشَّهِيدُ",
    allahNameEnglish: "അഷ്-ഷഹീദ്",
    meaning: "എക്കാലത്തും സാക്ഷികൾ",
    description: [
      "ഏതെങ്കിലും വ്യക്തിയുടെ ഭാര്യയോ മക്കളോ അനാദരവാണെങ്കിൽ നെറ്റിയിൽ കൈവച്ച് ഈ നാമം 21 തവണ വായിച്ചാൽ അവർ മാന്യരാകും.",
    ],
  },
  {
    nameNumber: 51,
    allahNameArabic: "ٱلْحَقُّ",
    allahNameEnglish: "അൽ-ഹഖ്",
    meaning: "സത്യം",
    description: [
      "ഒരാൾക്ക് എന്തെങ്കിലും ഉണ്ടെങ്കിൽ, ഈ പേര് ആവർത്തിക്കുകയാണെങ്കിൽ, നഷ്ടപ്പെട്ടത് അവൻ കണ്ടെത്തും.",
    ],
  },
  {
    nameNumber: 52,
    allahNameArabic: "ٱلْوَكِيلُ",
    allahNameEnglish: "അൽ-വക്കീൽ",
    meaning: "ചുമതലക്കാരൻ, കാര്യങ്ങൾ ക്രമീകരിക്കുന്നവൻ",
    description: [
      "തീയിലോ സമാനമായ എന്തെങ്കിലും അപകടത്തിലോ പൊള്ളലേൽക്കുമെന്ന് ഭയപ്പെടുന്നവൻ, ഈ നാമം തുടർച്ചയായി (ഇടയ്ക്കിടെ) ആവർത്തിക്കുന്നവൻ അല്ലാഹുവിൻ്റെ സംരക്ഷണത്തിലായിരിക്കും.",
    ],
  },
  {
    nameNumber: 53,
    allahNameArabic: "ٱلْقَوِيُّ",
    allahNameEnglish: "അൽ-ഖവിയൂ",
    meaning: "സർവ്വശക്തൻ",
    description: [
      "യഥാർത്ഥത്തിൽ ദയനീയമായ ഏതൊരു വ്യക്തിയും ശത്രുക്കളെ വിട്ടയക്കാൻ ഈ പേര് മാത്രം വായിക്കണം.",
    ],
  },
  {
    nameNumber: 54,
    allahNameArabic: "ٱلْمَتِينُ",
    allahNameEnglish: "അൽ-മത്തീൻ",
    meaning: "ദൃഢം, ദൃഢതയുള്ളവൻ, ധൈര്യശാലി",
    description: [
      "ഒരാൾക്ക് കഷ്ടതകൾ ഉണ്ടാകുകയും ഈ നാമം ആവർത്തിക്കുകയും ചെയ്താൽ അവൻ്റെ കഷ്ടതകൾ ഇല്ലാതാകും.",
    ],
  },
  {
    nameNumber: 55,
    allahNameArabic: "ٱلْوَلِيُّ",
    allahNameEnglish: "അൽ-വലിയ്യു",
    meaning: "പ്രൊട്ടക്റ്റിംഗ് അസോസിയേറ്റ്, ഗവർണർ",
    description: [
      "ഒരു വ്യക്തി തൻ്റെ ഭാര്യയുടെ ശീലങ്ങളിൽ സന്തുഷ്ടനല്ലെങ്കിൽ, അയാൾ അവളുടെ മുമ്പിൽ പോകുമ്പോഴെല്ലാം ഈ നാമം ആവർത്തിക്കണം, അവൻ്റെ ഭാര്യ നല്ല ഉത്തരവാദിത്തമുള്ള ഭാര്യയായി മാറും.",
    ],
  },
  {
    nameNumber: 56,
    allahNameArabic: "ٱلْحَمِيدُ",
    allahNameEnglish: "അൽ - ഹമീദ്",
    meaning: "സ്തുത്യർഹൻ",
    description: [
      "ഈ നാമം ആവർത്തിക്കുന്നവൻ സ്നേഹിക്കപ്പെടുകയും പ്രശംസിക്കപ്പെടുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 57,
    allahNameArabic: "ٱلْمُحْصِيُ",
    allahNameEnglish: "അൽ-മുഹ്സി",
    meaning: "എല്ലാം എണ്ണുന്നവൻ, മൂല്യനിർണ്ണയക്കാരൻ",
    description: [
      "ന്യായവിധി ദിനത്തിൽ ചോദ്യം ചെയ്യപ്പെടുമെന്ന് ഭയപ്പെടുന്നവൻ, ഈ നാമം ദിവസവും 100 പ്രാവശ്യം ആവർത്തിച്ചാൽ, അയാൾക്ക് എളുപ്പവും ശാന്തതയും ലഭിക്കും.",
    ],
  },
  {
    nameNumber: 58,
    allahNameArabic: "ٱلْمُبْدِئُ",
    allahNameEnglish: "അൽ-മുബ്ദിയു",
    meaning: "പുനഃസ്ഥാപകൻ, ഉപജ്ഞാതാവ്",
    description: [
      "ഗർഭച്ഛിദ്രം ഭയക്കുന്ന ഗർഭിണിയായ സ്ത്രീയിൽ ഈ പേര് ആവർത്തിക്കുകയും ശ്വസിക്കുകയും ചെയ്താൽ, അവൾ അപകടത്തിൽ നിന്ന് മുക്തയാകും.",
    ],
  },
  {
    nameNumber: 59,
    allahNameArabic: "ٱلْمُعِيدُ",
    allahNameEnglish: "അൽ-മുഘിദ്",
    meaning: "പുനഃസ്ഥാപകൻ",
    description: [
      "കുടുംബത്തിൽ നിന്ന് അകന്ന് കഴിയുന്ന ഒരാൾക്ക് ഈ പേര് 70 തവണ ആവർത്തിച്ചാൽ, ആ വ്യക്തി ഏഴ് ദിവസത്തിനുള്ളിൽ സുരക്ഷിതമായി തിരിച്ചെത്തും.",
    ],
  },
  {
    nameNumber: 60,
    allahNameArabic: "ٱلْمُحْيِى",
    allahNameEnglish: "അൽ-മുഹിയീ",
    meaning: "ജീവദാതാവ്",
    description: [
      "ആർക്കെങ്കിലും ആരോഗ്യമില്ലെങ്കിൽ ഈ നാമം കഴിയുന്നത്ര വായിച്ചാൽ മതിയാകും.",
    ],
  },
  {
    nameNumber: 61,
    allahNameArabic: "ٱلْمُمِيتُ",
    allahNameEnglish: "അൽ-മുമീത്",
    meaning: "മരണം കൊണ്ടുവരുന്നവൻ, നശിപ്പിക്കുന്നവൻ, ജീവൻ എടുക്കുന്നവൻ",
    description: ["ശത്രുവിനെ നശിപ്പിക്കാനാണ് ഈ നാമം ആവർത്തിക്കുന്നത്."],
  },
  {
    nameNumber: 62,
    allahNameArabic: "ٱلْحَىُّ",
    allahNameEnglish: "അൽ-ഹയ്",
    meaning: "എന്നേക്കും ജീവിക്കുന്നത്",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവന് ദീർഘായുസ്സുണ്ടാകും."],
  },
  {
    nameNumber: 63,
    allahNameArabic: " ٱلْقَيُّومُ ",
    allahNameEnglish: "അൽ-ഖയൂം",
    meaning: "പരിപാലകൻ, സ്വയം-ഉപജീവനം",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവൻ ദുരന്തത്തിൽ വീഴുകയില്ല."],
  },
  {
    nameNumber: 64,
    allahNameArabic: "ٱلْوَاجِدُ",
    allahNameEnglish: "അൽ-വാജിദ്",
    meaning: "ഗ്രഹിക്കുന്നവൻ",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവന് ഹൃദയ സമൃദ്ധി ഉണ്ടാകും."],
  },
  {
    nameNumber: 65,
    allahNameArabic: "ٱلْمَاجِدُ",
    allahNameEnglish: "അൽ-മാജിദ്",
    meaning: "പ്രസിദ്ധൻ, ഗംഭീരൻ",
    description: [
      "ഈ നാമം സ്വകാര്യതയിലും ആത്മാർത്ഥമായും ആവർത്തിക്കുന്നവൻ്റെ ഹൃദയം പ്രബുദ്ധമാകും.",
    ],
  },
  {
    nameNumber: 66,
    allahNameArabic: "ٱلْوَاحِدُ",
    allahNameEnglish: "അൽ-വാഹിദ്",
    meaning: "ഒന്ന്",
    description: [
      "ഈ നാമം 1000 പ്രാവശ്യം സ്വകാര്യതയിലും ശാന്തമായ സ്ഥലത്തും ആവർത്തിക്കുന്നവൻ ഭയത്തിൽ നിന്നും വ്യാമോഹത്തിൽ നിന്നും മുക്തനാകും.",
    ],
  },
  {
    nameNumber: 67,
    allahNameArabic: "ٱلْأَحَد",
    allahNameEnglish: "അൽ-അഹദ്",
    meaning: "അതുല്യനായ, ഒരേയൊരു",
    description: [
      "ഈ നാമം 1000 പ്രാവശ്യം ആവർത്തിച്ചാൽ അയാൾക്ക് ചില രഹസ്യങ്ങൾ തുറക്കപ്പെടും.",
    ],
  },
  {
    nameNumber: 68,
    allahNameArabic: "ٱلْصَّمَدُ",
    allahNameEnglish: "അസ്-സമദ്",
    meaning: "ശാശ്വതമായ, ആവശ്യങ്ങൾ തൃപ്തിപ്പെടുത്തുന്നവൻ",
    description: [
      "ഈ നാമം പലതവണ ആവർത്തിച്ചാൽ, അല്ലാഹു അവൻ്റെ ആവശ്യം നൽകും, തൽഫലമായി അയാൾക്ക് മറ്റുള്ളവരെ ആവശ്യമില്ല, പക്ഷേ അവർക്ക് അവനെ ആവശ്യമാണ്.",
    ],
  },
  {
    nameNumber: 69,
    allahNameArabic: "ٱلْقَادِرُ",
    allahNameEnglish: "അൽ-ഖാദിർ",
    meaning: "കഴിവുള്ളവൻ, ശക്തൻ",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവൻ്റെ ആഗ്രഹങ്ങളെല്ലാം നിറവേറും."],
  },
  {
    nameNumber: 70,
    allahNameArabic: "ٱلْمُقْتَدِر",
    allahNameEnglish: "അൽ-മുഖുതദിർ",
    meaning: "സർവ്വശക്തൻ",
    description: [
      "ഈ നാമം ആവർത്തിക്കുന്നവൻ സത്യത്തെക്കുറിച്ച് ബോധവാനായിരിക്കും.",
    ],
  },
  {
    nameNumber: 71,
    allahNameArabic: " ٱلْمُقَدِّمُ ",
    allahNameEnglish: "അൽ-മുഖദ്ദിം",
    meaning: "വേഗത്തിലാക്കുനവൻ, പ്രമോട്ട് ചെയ്യുന്നവൻ",
    description: [
      "യുദ്ധക്കളത്തിൽ ഈ നാമം ആവർത്തിക്കുന്നവനോ, അല്ലെങ്കിൽ വിസ്മയിപ്പിക്കുന്ന സ്ഥലത്ത് തനിച്ചായിരിക്കാൻ ഭയപ്പെടുന്നവനോ, അവന് ഒരു ദോഷവും സംഭവിക്കുകയില്ല, മാത്രമല്ല അല്ലാഹുവിനെ അനുസരിക്കുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 72,
    allahNameArabic: "ٱلْمُؤَخِّرُ",
    allahNameEnglish: "അൽ-മുഅഖ്ഖിർ",
    meaning: "കാലതാമസം വരുത്തുന്നയാൾ",
    description: [
      "ഒരു യാത്രികനായ ഏതൊരു വ്യക്തിയും ഈ പേര് 1000 തവണ വായിക്കണം, അതിനാൽ അവൻ നഷ്ടമില്ലാതെ വളരെ വേഗം വീട്ടിലേക്ക് മടങ്ങും.",
    ],
  },
  {
    nameNumber: 73,
    allahNameArabic: "ٱلأَوَّلُ",
    allahNameEnglish: "അൽ-അവ്വൽ",
    meaning: "ആദ്യത്തേത്",
    description: [
      "നിങ്ങൾ ആൺ മക്കളെ ആഗ്രഹിക്കുന്നുവെങ്കിൽ, 40 ദിവസത്തേക്ക് ദിവസവും 40 തവണ അല്ലാഹുവിൻ്റെ ഈ നാമം ചൊല്ലുക, നിങ്ങളുടെ ആഗ്രഹം അല്ലാഹു നിറവേറ്റും",
    ],
  },
  {
    nameNumber: 74,
    allahNameArabic: "ٱلْآخِرُ",
    allahNameEnglish: "അൽ-ആഖിർ",
    meaning: "അവസാനത്തെ",
    description: [
      "ഈ നാമം പല പ്രാവശ്യം ആവർത്തിക്കുന്നവൻ നല്ല ജീവിതം നയിക്കുകയും ജീവിതാവസാനം നല്ല മരണം സംഭവിക്കുകയും ചെയ്യും.",
    ],
  },
  {
    nameNumber: 75,
    allahNameArabic: "ٱلْظَّاهِرُ",
    allahNameEnglish: "അസ്-ദാഹിർ",
    meaning: "പ്രകടമായത്",
    description: [
      "വെള്ളിയാഴ്ച (ജുമ്മ നമസ്കാരം ശേഷം) ദിവ്യപ്രകാശം (നൂർ) 15 തവണ ഈ നാമം ചൊല്ലുന്നവൻ അവൻ്റെ ഹൃദയത്തിൽ പ്രവേശിക്കും.",
    ],
  },
  {
    nameNumber: 76,
    allahNameArabic: "ٱلْبَاطِنُ",
    allahNameEnglish: "അൽ-ബാത്തിൻ",
    meaning: "മറഞ്ഞിരിക്കുന്നവൻ, മറഞ്ഞിരിക്കുന്നതിനെ അറിയുന്നവൻ",
    description: [
      "ഈ നാമം ദിവസവും മൂന്നു പ്രാവശ്യം ആവർത്തിക്കുന്നവന് കാര്യങ്ങളിൽ സത്യം കാണാൻ കഴിയും.",
    ],
  },
  {
    nameNumber: 77,
    allahNameArabic: " ٱلْوَالِي ",
    allahNameEnglish: "അൽ-വാലി]",
    meaning: "ഗവർണർ, രക്ഷാധികാരി, സംരക്ഷിക്കുന്ന സുഹൃത്ത്",
    description: [
      "ഈ നാമം ആവർത്തിച്ച് വീട്ടിൽ ശ്വസിക്കുന്നവൻ്റെ വീട് അപകടത്തിൽ നിന്ന് മുക്തമാകും.",
    ],
  },
  {
    nameNumber: 78,
    allahNameArabic: "ٱلْمُتَعَالِي",
    allahNameEnglish: "അൽ-മുത്തആലി",
    meaning: "ഏറ്റവും ഉന്നതൻ",
    description: [
      "ഏതൊരു വ്യക്തിയും ഈ പേര് പരമാവധി വായിച്ചാൽ അവൻ്റെ എല്ലാ പ്രശ്നങ്ങളും ഇല്ലാതാകും.",
    ],
  },
  {
    nameNumber: 79,
    allahNameArabic: "ٱلْبَرُّ",
    allahNameEnglish: "അൽ-ബറ്‍റു",
    meaning: "നന്മയുടെ ഉറവിടം, ദയയുള്ള ഉപകാരി",
    description: [
      "ഈ പേര് തൻ്റെ കുട്ടിക്ക് ആവർത്തിച്ചാൽ, ഈ കുട്ടി നിർഭാഗ്യങ്ങളിൽ നിന്ന് മുക്തമാകും.",
    ],
  },
  {
    nameNumber: 80,
    allahNameArabic: " ٱلْتَّوَّابُ ",
    allahNameEnglish: "അത്തവ്വാബ്",
    meaning:
      "എക്കാലവും ക്ഷമിക്കുന്ന, അനുതപിക്കുന്ന, മാനസാന്തരത്തിലേക്കുള്ള വഴികാട്ടി",
    description: [
      "ഈ നാമം പലതവണ ആവർത്തിച്ചാൽ അവൻ്റെ പശ്ചാത്താപം സ്വീകരിക്കപ്പെടും.",
    ],
  },
  {
    nameNumber: 81,
    allahNameArabic: " ٱلْمُنْتَقِمُ ",
    allahNameEnglish: "അൽ-മുന്തഖിം",
    meaning: "പ്രതികാരം ചെയ്യുന്നവൻ",
    description: [
      "ഈ നാമം മൂന്ന് വെള്ളിയാഴ്ചകളിൽ പല പ്രാവശ്യം ആവർത്തിക്കുന്നവൻ ശത്രുക്കൾക്കെതിരെ വിജയിക്കും.",
    ],
  },
  {
    nameNumber: 82,
    allahNameArabic: " ٱلْعَفُوُّ ",
    allahNameEnglish: "അൽ-‘അഫ്വ്വു",
    meaning: "ക്ഷമിക്കുന്നവൻ",
    description: [
      "ഈ നാമം പലതവണ ആവർത്തിച്ചാൽ അവൻ്റെ എല്ലാ പാപങ്ങളും പൊറുക്കപ്പെടും.",
    ],
  },
  {
    nameNumber: 83,
    allahNameArabic: " ٱلْرَّؤُفُ ",
    allahNameEnglish: "അര്‍-റഊഫ്",
    meaning: "ഏറ്റവും ദയയുള്ള",
    description: ["ഇത് പല പ്രാവശ്യം ആവർത്തിക്കുന്നവൻ അള്ളാഹു അനുഗ്രഹിക്കും."],
  },
  {
    nameNumber: 84,
    allahNameArabic: "مَالِكُ ٱلْمُلْكُ",
    allahNameEnglish: "മാലിക്-ഉൽ-മുൽക്ക്",
    meaning: "രാജ്യത്തിൻ്റെ യജമാനൻ, ആധിപത്യത്തിൻ്റെ ഉടമ",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവൻ ആളുകൾക്കിടയിൽ ബഹുമാനം നേടും."],
  },
  {
    nameNumber: 85,
    allahNameArabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ",
    allahNameEnglish: "ദുൽ-ജലാലി വൽ-ഇക്രം",
    meaning:
      "മഹത്വത്തിൻ്റെയും ബഹുമാനത്തിൻ്റെയും ഉടമ, മഹത്വത്തിൻ്റെയും ഔദാര്യത്തിൻ്റെയും നാഥൻ",
    description: ["ഈ നാമം പലതവണ ആവർത്തിക്കുന്നവൻ ധനികനായിരിക്കും."],
  },
  {
    nameNumber: 86,
    allahNameArabic: "ٱلْمُقْسِطُ",
    allahNameEnglish: "അൽ-മുക്സിത്",
    meaning: "സമത്വമുള്ളവൻ, ആവശ്യപ്പെടുന്നവൻ",
    description: [
      "ഈ നാമം ആവർത്തിക്കുന്നവൻ പിശാചിൻ്റെ ഉപദ്രവത്തിൽ നിന്ന് മുക്തനാകും.",
    ],
  },
  {
    nameNumber: 87,
    allahNameArabic: "ٱلْجَامِعُ",
    allahNameEnglish: "അൽ ജാമി’",
    meaning: "ശേഖരിക്കുന്നയാൾ, ഒന്നിപ്പിക്കുന്നവന്‍",
    description: ["ഈ പേര് ആവർത്തിക്കുന്നവൻ നഷ്ടപ്പെട്ടവ കണ്ടെത്തും."],
  },
  {
    nameNumber: 88,
    allahNameArabic: "ٱلْغَنيُّ",
    allahNameEnglish: "അൽ-ഘനി",
    meaning: "സ്വയംപര്യാപ്തൻ, ധനികൻ",
    description: [
      "ഈ നാമം 70 തവണ വായിക്കുന്ന ഏതൊരു വ്യക്തിക്കും അല്ലാഹു ലാഭം നൽകും",
    ],
  },
  {
    nameNumber: 89,
    allahNameArabic: " ٱلْمُغْنِيُّ ",
    allahNameEnglish: "അൽ-മുഖ്നി",
    meaning: "സമ്പന്നമാക്കുന്നവന്‍",
    description: [
      "പത്ത് വെള്ളിയാഴ്ചകളിൽ ദിവസവും 1000 തവണ ഈ നാമം ആവർത്തിക്കുന്നവൻ സ്വയം പര്യാപ്തനാകുന്നു.",
    ],
  },
  {
    nameNumber: 90,
    allahNameArabic: "ٱلْمَانِعُ",
    allahNameEnglish: "അൽ-മാനി’",
    meaning: "തടഞ്ഞുവയ്ക്കുന്നവൻ, ഉപദ്രവം തടയുന്നവൻ",
    description: [
      "സമാധാനപൂർണവും സന്തുഷ്ടവുമായ കുടുംബജീവിതത്തിനായി ഒരാൾ ഉറക്കസമയം 20 തവണ ഈ പേര് ആവർത്തിക്കണം.",
    ],
  },
  {
    nameNumber: 91,
    allahNameArabic: "ٱلْضَّارُ",
    allahNameEnglish: "എഡി-ധാർ",
    meaning: "ദുരിതം നീക്കം ചെയ്യുന്നവൻ",
    description: [
      "ജീവിതത്തിൽ ശാന്തിയും സമാധാനവും ആസ്വദിക്കാത്തവർ വെള്ളിയാഴ്ച രാത്രിയിൽ ഈ നാമം 100 തവണ ആവർത്തിക്കണം. അല്ലാഹുവിൻ്റെ അനുഗ്രഹത്താൽ അവൻ ശാന്തിയും സമാധാനവും കണ്ടെത്തും.",
    ],
  },
  {
    nameNumber: 92,
    allahNameArabic: "ٱلْنَّافِعُ",
    allahNameEnglish: "അൻ-നാഫി’",
    meaning: "ദയയുള്ളവൻ, ഗുണഭോക്താവ്",
    description: [
      "ഓരോ പ്രവൃത്തിയുടെയും തുടക്കത്തിൽ ഈ നാമം 41 തവണ ആവർത്തിക്കുന്നവൻ തൻ്റെ എല്ലാ നല്ല പ്രവൃത്തികളിലും വിജയിക്കും.",
    ],
  },
  {
    nameNumber: 93,
    allahNameArabic: "ٱلْنُّورُ",
    allahNameEnglish: "അൻ - നൂർ",
    meaning: "പ്രകാശം, പ്രകാശകൻ",
    description: ["ഈ നാമം ആവർത്തിക്കുന്നവർ അവൻ്റെ ഹൃദയത്തിൽ നൂർ നിറയ്ക്കും."],
  },
  {
    nameNumber: 94,
    allahNameArabic: " ٱلْهَادِي ",
    allahNameEnglish: "അൽ-ഹാദി",
    meaning: "വഴികാട്ടി",
    description: [
      "ഇശാ നമസ്കാരത്തിന് ശേഷം 1100 തവണ ഈ വിശുദ്ധ നാമം ആവർത്തിക്കുന്നവൻ എല്ലാ ആവശ്യങ്ങളിൽ നിന്നും മുക്തനായിരിക്കും.",
    ],
  },
  {
    nameNumber: 95,
    allahNameArabic: "ٱلْبَدِيعُ",
    allahNameEnglish: "അൽ-ബദീ’",
    meaning: "സമാനതകളില്ലാത്ത ഉപജ്ഞാതാവ്",
    description: [
      "ഏതെങ്കിലും പ്രത്യേക കാരണത്താൽ 11 ദിവസത്തേക്ക് 1200 തവണ ഇഷാ പ്രാർത്ഥന നടത്തിയ ശേഷം ഈ പേര് വായിക്കുന്ന ഏതൊരു വ്യക്തിയും 11 ദിവസത്തിന് മുമ്പ് അവൻ്റെ ജോലി പൂർത്തിയാക്കും.",
    ],
  },
  {
    nameNumber: 96,
    allahNameArabic: "ٱلْبَاقِي",
    allahNameEnglish: "അൽ-ബാഖി",
    meaning: "എക്കാലവും നിലനിൽക്കുന്ന",
    description: [
      "എല്ലാ വെള്ളിയാഴ്ച രാത്രിയിലും ഈ നാമം 100 പ്രാവശ്യം ആവർത്തിക്കുന്നവൻ്റെ എല്ലാ സൽകർമ്മങ്ങളും അല്ലാഹുവിൻ്റെ അനുഗ്രഹത്താൽ സ്വീകരിക്കപ്പെടും.",
    ],
  },
  {
    nameNumber: 97,
    allahNameArabic: "ٱلْوَارِثُ",
    allahNameEnglish: "അൽ-വാരിസു",
    meaning: "അവകാശി",
    description: [
      "സൂര്യോദയത്തിനു ശേഷം 100 പ്രാവശ്യം ഈ നാമം ആവർത്തിക്കുന്നവൻ അല്ലാഹുവിൻ്റെ അനുഗ്രഹത്താൽ എല്ലാ ദുഃഖങ്ങളിൽ നിന്നും മുക്തനാകുന്നു.",
    ],
  },
  {
    nameNumber: 98,
    allahNameArabic: "ٱلْرَّشِيدُ",
    allahNameEnglish: "ആർ-റഷീദ്",
    meaning: "തെറ്റുപറ്റാത്ത അധ്യാപകൻ",
    description: [
      "എല്ലാ ദിവസവും ഈ പേര് വായിക്കുന്ന ഏതൊരു വ്യക്തിക്കും ഒരു നല്ല ബിസിനസ്സ് ലഭിക്കും.",
    ],
  },
  {
    nameNumber: 99,
    allahNameArabic: "ٱلْصَّبُورُ",
    allahNameEnglish: "അസ്-സബൂർ",
    meaning: "ക്ഷമാശീലൻ",
    description: [
      "ഏതെങ്കിലും തരത്തിലുള്ള പ്രശ്‌നങ്ങൾ നേരിടുന്ന ഏതൊരു വ്യക്തിയും ഈ പേര് 1020 തവണ വായിക്കണം, അവൻ്റെ പ്രശ്നം പരിഹരിക്കപ്പെടും.",
    ],
  },
];

export default allahNames;

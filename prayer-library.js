"use strict";
const PRAYER_LIBRARY=[
  {
    "id": "word-1",
    "category": "Gratitude",
    "title": "Every Good Gift",
    "scripture": "James 1:17",
    "prayer": "Father, I give thanks for what I have received without earning and for mercies I have failed to notice. Teach me to recognize Your goodness without mistaking gifts for their Giver. Through Jesus Christ our Lord. Amen.",
    "question": "What do I receive daily without considering its source?",
    "context": "James 1:12–18",
    "related": "Psalm 103; 1 Chronicles 29:10–14"
  },
  {
    "id": "word-2",
    "category": "Gratitude",
    "title": "Remembering Mercy",
    "scripture": "Psalm 103:1–5",
    "prayer": "Heavenly Father, keep me from forgetting Your mercy. Let thanksgiving arise not only from comfort, but from the remembrance of Your patience with me. Through Jesus Christ our Lord. Amen.",
    "question": "What does the psalmist tell his soul not to forget?",
    "context": "Psalm 103",
    "related": "Luke 17:11–19; Exodus 34:6–7"
  },
  {
    "id": "word-3",
    "category": "Gratitude",
    "title": "Enough for Today",
    "scripture": "Matthew 6:25–34",
    "prayer": "Father, You know what I need before I ask. Free me from the fear that turns tomorrow into a burden today. Teach me to seek first Your kingdom. In Jesus’ name. Amen.",
    "question": "What does Jesus distinguish between need and worry?",
    "context": "Matthew 6:19–34",
    "related": "Exodus 16; Philippians 4:10–13"
  },
  {
    "id": "word-4",
    "category": "Gratitude",
    "title": "The Work of Our Hands",
    "scripture": "Psalm 90:12–17",
    "prayer": "Lord, establish the work of our hands. Give us wisdom to number our days and humility to know that our labor is brief before You. Amen.",
    "question": "How does the brevity of life change the meaning of work?",
    "context": "Psalm 90",
    "related": "Colossians 3:22–24; Ecclesiastes 3:9–15"
  },
  {
    "id": "word-5",
    "category": "Love",
    "title": "Love as Commandment",
    "scripture": "John 13:34–35",
    "prayer": "Lord Jesus Christ, You loved Your own to the end. Teach me to love in deeds rather than words alone, without seeking recognition or reward. Amen.",
    "question": "What makes the commandment Jesus gives here new?",
    "context": "John 13:1–35",
    "related": "1 John 3:16–18; Leviticus 19:17–18"
  },
  {
    "id": "word-6",
    "category": "Love",
    "title": "The Neighbor",
    "scripture": "Luke 10:25–37",
    "prayer": "Merciful Lord, forgive the ways I make compassion conditional. Give me eyes to see the person before me and the courage to act with mercy. Amen.",
    "question": "Which question does Jesus answer—and which does He change?",
    "context": "Luke 10:25–37",
    "related": "Micah 6:6–8; James 2:14–17"
  },
  {
    "id": "word-7",
    "category": "Love",
    "title": "Love Without Display",
    "scripture": "1 Corinthians 13:1–13",
    "prayer": "Lord Jesus, purify the motives of my heart. May even my strongest convictions and greatest efforts be governed by love. Amen.",
    "question": "Why does Paul describe great gifts as nothing without love?",
    "context": "1 Corinthians 12:27–13:13",
    "related": "John 15:9–17; 1 John 4:7–21"
  },
  {
    "id": "word-8",
    "category": "Love",
    "title": "Forgiving a Debt",
    "scripture": "Matthew 18:21–35",
    "prayer": "Father, You have shown mercy beyond my measure. Do not let me hold others to a standard of forgiveness I refuse to apply to myself. Through Christ our Lord. Amen.",
    "question": "What does the servant understand about his own debt?",
    "context": "Matthew 18:21–35",
    "related": "Matthew 6:9–15; Ephesians 4:25–32"
  },
  {
    "id": "word-9",
    "category": "Humility",
    "title": "The Mind of Christ",
    "scripture": "Philippians 2:1–11",
    "prayer": "Lord Jesus Christ, You humbled Yourself and took the form of a servant. Deliver me from the need to be first. Teach me the obedience of love. Amen.",
    "question": "What does Paul mean by having the mind of Christ?",
    "context": "Philippians 2:1–18",
    "related": "Mark 10:35–45; Isaiah 53"
  },
  {
    "id": "word-10",
    "category": "Humility",
    "title": "The Pharisee and the Tax Collector",
    "scripture": "Luke 18:9–14",
    "prayer": "Lord Jesus Christ, Son of God, have mercy on me, a sinner. Save me from measuring my righteousness against another person. Amen.",
    "question": "What does each man bring before God in his prayer?",
    "context": "Luke 18:9–14",
    "related": "Psalm 51; James 4:6–10"
  },
  {
    "id": "word-11",
    "category": "Humility",
    "title": "Learning to Listen",
    "scripture": "James 1:19–27",
    "prayer": "Holy Spirit, restrain my haste to speak and my eagerness to defend myself. Grant me the humility to hear the Word and to do what it commands. Amen.",
    "question": "What is the difference between hearing the Word and doing it?",
    "context": "James 1:19–27",
    "related": "Proverbs 18:13; Luke 6:46–49"
  },
  {
    "id": "word-12",
    "category": "Humility",
    "title": "Strength in Weakness",
    "scripture": "2 Corinthians 12:7–10",
    "prayer": "Lord, I confess my desire to appear sufficient in myself. Teach me to depend on Your grace without despising my limitations. Amen.",
    "question": "Why does Paul say he can boast in weakness?",
    "context": "2 Corinthians 12:1–10",
    "related": "1 Corinthians 1:18–31; Isaiah 40:27–31"
  },
  {
    "id": "word-13",
    "category": "Thanksgiving",
    "title": "Praise Beyond Circumstance",
    "scripture": "Habakkuk 3:17–19",
    "prayer": "God of our salvation, when circumstances offer little comfort, teach me to remember who You are. Let my praise be truthful and steadfast. Amen.",
    "question": "What remains when the things named by Habakkuk are taken away?",
    "context": "Habakkuk 3",
    "related": "Psalm 13; Philippians 4:4–9"
  },
  {
    "id": "word-14",
    "category": "Thanksgiving",
    "title": "A Song in the Night",
    "scripture": "Acts 16:22–34",
    "prayer": "Father, keep my worship from depending on ease. In hardship, give me the grace to remain faithful and attentive to those around me. Through Jesus Christ. Amen.",
    "question": "What changes in this account before anyone is set free?",
    "context": "Acts 16:16–40",
    "related": "Psalm 42; 1 Peter 1:3–9"
  },
  {
    "id": "word-15",
    "category": "Thanksgiving",
    "title": "Creation Speaks",
    "scripture": "Psalm 19:1–14",
    "prayer": "Creator of heaven and earth, awaken my attention to the world You have made and to the Word You have spoken. Let both lead me to reverence. Amen.",
    "question": "How does this psalm move from creation to the law of the Lord?",
    "context": "Psalm 19",
    "related": "Romans 1:18–23; Genesis 1"
  },
  {
    "id": "word-16",
    "category": "Thanksgiving",
    "title": "The Bread of Life",
    "scripture": "John 6:25–40",
    "prayer": "Lord Jesus Christ, keep me from seeking only what satisfies for a moment. Draw me toward the life that comes from You. Amen.",
    "question": "What are the people seeking from Jesus, and what does He offer?",
    "context": "John 6:22–59",
    "related": "Deuteronomy 8:1–10; Exodus 16"
  },
  {
    "id": "word-17",
    "category": "Repentance",
    "title": "A Clean Heart",
    "scripture": "Psalm 51:1–17",
    "prayer": "Merciful Father, I have sinned in thought, word, and deed. Do not let me hide behind excuses. Create in me a clean heart and renew a right spirit within me. Amen.",
    "question": "What does David ask God to do that he cannot do for himself?",
    "context": "Psalm 51",
    "related": "2 Samuel 11–12; 1 John 1:5–10"
  },
  {
    "id": "word-18",
    "category": "Repentance",
    "title": "Return to Me",
    "scripture": "Joel 2:12–17",
    "prayer": "Lord, call me back from divided loyalties. Give me a repentance deeper than appearances and a heart willing to return to You. Amen.",
    "question": "Why does Joel contrast the heart with outward signs?",
    "context": "Joel 2:1–17",
    "related": "Isaiah 58:1–12; Luke 15:11–32"
  },
  {
    "id": "word-19",
    "category": "Repentance",
    "title": "The Narrow Gate",
    "scripture": "Matthew 7:13–27",
    "prayer": "Lord Jesus, save me from hearing Your words without obeying them. Give me the courage to examine the foundation on which I build my life. Amen.",
    "question": "What distinguishes the two builders in Jesus’ parable?",
    "context": "Matthew 7:13–29",
    "related": "James 1:22–25; Ezekiel 36:25–27"
  },
  {
    "id": "word-20",
    "category": "Repentance",
    "title": "The Weight of Words",
    "scripture": "James 3:1–12",
    "prayer": "Holy Spirit, guard my tongue. Expose the pride and anger beneath careless speech, and teach me to speak truth with restraint and love. Amen.",
    "question": "Why does James treat speech as a matter of such consequence?",
    "context": "James 3:1–18",
    "related": "Proverbs 12:18; Matthew 12:33–37"
  },
  {
    "id": "word-21",
    "category": "Intercession",
    "title": "Teach Us to Pray",
    "scripture": "Luke 11:1–13",
    "prayer": "Our Father in heaven, teach us to pray. Give us trust in Your goodness, perseverance in asking, and care for the needs of others. Through Jesus Christ. Amen.",
    "question": "What does Jesus reveal about the Father through His teaching on prayer?",
    "context": "Luke 11:1–13",
    "related": "Matthew 6:5–15; Romans 8:26–27"
  },
  {
    "id": "word-22",
    "category": "Intercession",
    "title": "For Those Who Suffer",
    "scripture": "Romans 12:9–21",
    "prayer": "Father of mercies, remember those who suffer in body, mind, or spirit. Give them comfort, and make me ready to share their burdens in practical love. Amen.",
    "question": "What does Paul mean by rejoicing and weeping with others?",
    "context": "Romans 12:9–21",
    "related": "2 Corinthians 1:3–7; Galatians 6:1–10"
  },
  {
    "id": "word-23",
    "category": "Intercession",
    "title": "For Our Children",
    "scripture": "Deuteronomy 6:4–9",
    "prayer": "Heavenly Father, entrust our children to Your care. Teach us to speak of Your Word honestly, to live what we teach, and to love them with patience. In Jesus’ name. Amen.",
    "question": "What does this passage require of parents before it speaks of teaching children?",
    "context": "Deuteronomy 6:1–25",
    "related": "Psalm 78:1–8; Ephesians 6:1–4"
  },
  {
    "id": "word-24",
    "category": "Intercession",
    "title": "For Those in Authority",
    "scripture": "1 Timothy 2:1–6",
    "prayer": "Lord, grant wisdom and justice to those entrusted with authority. Restrain evil, protect the vulnerable, and teach us to seek peace without surrendering truth. Amen.",
    "question": "Why does Paul connect prayer for rulers with the knowledge of truth?",
    "context": "1 Timothy 2:1–7",
    "related": "Jeremiah 29:4–7; Romans 13:1–7"
  },
  {
    "id": "word-25",
    "category": "Faith",
    "title": "Faith and What Is Unseen",
    "scripture": "Hebrews 11:1–16",
    "prayer": "Father, strengthen my faith when the way ahead is not plain. Help me walk in obedience to what You have revealed, without demanding certainty about all that follows. Amen.",
    "question": "How do the people in this passage act without seeing the outcome?",
    "context": "Hebrews 11:1–16",
    "related": "Genesis 12:1–9; 2 Corinthians 5:6–10"
  },
  {
    "id": "word-26",
    "category": "Faith",
    "title": "Lord, I Believe",
    "scripture": "Mark 9:14–29",
    "prayer": "Lord Jesus Christ, I bring You my faith and my doubt. Have mercy on me, and teach me to ask for help without pretending certainty I do not possess. Amen.",
    "question": "What is the father asking for when he says, “Help my unbelief”?",
    "context": "Mark 9:14–29",
    "related": "Psalm 73; John 20:24–29"
  },
  {
    "id": "word-27",
    "category": "Wisdom",
    "title": "The Beginning of Wisdom",
    "scripture": "Proverbs 9:1–12",
    "prayer": "Lord, grant me a teachable heart. Free me from the pride that resists correction and lead me toward the wisdom that begins in reverence for You. Amen.",
    "question": "Why does Proverbs connect wisdom with the fear of the Lord?",
    "context": "Proverbs 9",
    "related": "Job 28; James 3:13–18"
  },
  {
    "id": "word-28",
    "category": "Wisdom",
    "title": "Ask for Wisdom",
    "scripture": "James 1:2–8",
    "prayer": "Heavenly Father, when I lack wisdom, teach me to ask You rather than trust only my own judgment. Give me steadiness in trial and honesty in prayer. Amen.",
    "question": "Why does James introduce wisdom in the middle of a discussion of trials?",
    "context": "James 1:1–18",
    "related": "1 Kings 3:5–14; Proverbs 2"
  },
  {
    "id": "word-29",
    "category": "Peace",
    "title": "Peace and the Mind",
    "scripture": "Philippians 4:4–9",
    "prayer": "Lord Jesus, turn my anxious thoughts toward what is true. Teach me to bring my needs before the Father and to practice what Your Word commands. Amen.",
    "question": "How are prayer, thought, and practice connected in this passage?",
    "context": "Philippians 4:4–9",
    "related": "Matthew 6:25–34; Isaiah 26:1–4"
  },
  {
    "id": "word-30",
    "category": "Peace",
    "title": "Be Still",
    "scripture": "Psalm 46",
    "prayer": "God our refuge and strength, quiet the fears that govern my attention. Remind me that Your presence does not depend on the absence of trouble. Amen.",
    "question": "What does “be still” mean in the setting of this psalm?",
    "context": "Psalm 46",
    "related": "Mark 4:35–41; Exodus 14:10–14"
  },
  {
    "id": "word-31",
    "category": "Stewardship",
    "title": "Entrusted with Much",
    "scripture": "Matthew 25:14–30",
    "prayer": "Father, everything I hold is entrusted to me for a time. Give me faithfulness, courage, and wisdom in the use of what belongs to You. Through Christ our Lord. Amen.",
    "question": "What does this parable suggest about responsibility and fear?",
    "context": "Matthew 25:14–30",
    "related": "Luke 12:35–48; 1 Peter 4:7–11"
  },
  {
    "id": "word-32",
    "category": "Stewardship",
    "title": "Faithful in Little",
    "scripture": "Luke 16:1–13",
    "prayer": "Lord, teach me integrity in small matters and freedom from the mastery of possessions. Let my decisions reflect whom I truly serve. Amen.",
    "question": "Why does Jesus connect faithfulness in small things with greater trust?",
    "context": "Luke 16:1–13",
    "related": "Proverbs 11:1; Colossians 3:17–24"
  },
  {
    "id": "word-33",
    "category": "Perseverance",
    "title": "The Testing of Faith",
    "scripture": "James 1:2–18",
    "prayer": "Father, do not let suffering make me careless or bitter. Give me endurance, and help me discern what Your Word actually promises in trials. Amen.",
    "question": "What does James say trials produce, and what does he not say?",
    "context": "James 1:2–18",
    "related": "Romans 5:1–5; 1 Peter 1:3–9"
  },
  {
    "id": "word-34",
    "category": "Perseverance",
    "title": "Waiting",
    "scripture": "Psalm 37:1–11",
    "prayer": "Lord, teach me to wait without abandoning what is right. Guard me from envy, resentment, and the temptation to answer evil with evil. Amen.",
    "question": "How does this psalm distinguish waiting from doing nothing?",
    "context": "Psalm 37:1–11",
    "related": "James 5:7–11; Isaiah 40:27–31"
  },
  {
    "id": "word-35",
    "category": "Family",
    "title": "A House of Service",
    "scripture": "Joshua 24:14–24",
    "prayer": "Father, grant our household a sincere faith. May our words and ordinary choices show whom we serve, without pride or pretense. Amen.",
    "question": "What does Joshua ask the people to choose, and what does that choice require?",
    "context": "Joshua 24:14–24",
    "related": "Deuteronomy 6:4–9; Psalm 127"
  },
  {
    "id": "word-36",
    "category": "Family",
    "title": "Bearing with One Another",
    "scripture": "Colossians 3:12–17",
    "prayer": "Lord Jesus Christ, clothe us with compassion, patience, and forgiveness. Help us bear with one another without denying the truth. Amen.",
    "question": "What does it mean for the peace of Christ to rule in a household?",
    "context": "Colossians 3:12–21",
    "related": "Ephesians 4:25–32; Romans 12:9–18"
  },
  {
    "id": "word-37",
    "category": "Suffering",
    "title": "The Questions of Job",
    "scripture": "Job 38:1–18",
    "prayer": "Lord of all creation, I confess the limits of my understanding. Give me honesty in grief and reverence before mysteries I cannot resolve. Amen.",
    "question": "What does God’s answer to Job address, and what does it leave unanswered?",
    "context": "Job 38–42",
    "related": "Job 1–2; Psalm 88"
  },
  {
    "id": "word-38",
    "category": "Suffering",
    "title": "A Psalm of Lament",
    "scripture": "Psalm 13",
    "prayer": "Father, receive even the prayers I struggle to speak. Teach me to bring sorrow before You rather than hide it or pretend it is gone. Amen.",
    "question": "How does this psalm hold complaint and trust together?",
    "context": "Psalm 13",
    "related": "Psalm 22; Lamentations 3:19–33"
  },
  {
    "id": "word-39",
    "category": "Scripture",
    "title": "Open My Eyes",
    "scripture": "Psalm 119:17–24",
    "prayer": "Holy Spirit, open my understanding as I read. Correct my assumptions, strengthen my attention, and lead me into the truth of God’s Word. Amen.",
    "question": "What does the psalmist ask for before asking for understanding?",
    "context": "Psalm 119:17–40",
    "related": "Luke 24:13–35; 2 Timothy 3:14–17"
  },
  {
    "id": "word-40",
    "category": "Scripture",
    "title": "The Word Made Flesh",
    "scripture": "John 1:1–18",
    "prayer": "Lord Jesus Christ, eternal Word of the Father, draw me beyond familiarity with sacred words into a truer knowledge of You. Amen.",
    "question": "What does John claim about the Word before describing His coming into the world?",
    "context": "John 1:1–18",
    "related": "Genesis 1; Colossians 1:15–20"
  }
];

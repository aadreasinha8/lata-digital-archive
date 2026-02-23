/* ===================================================
   CHITRALEKHA — Script
   =================================================== */

// ── Song Data ──────────────────────────────────────
const songs = {
  "1940s": [
    {
      title: "Aayega Aanewala",
      film: "Mahal",
      year: 1949,
      composer: "Khemchand Prakash",
      lyricist: "Nakshab Jarchavi",
      language: "Hindi",
      theme: "Mystery · Longing",
      note: "Lata's breakthrough performance, her voice floating through the fog of a haunted haveli. The song became an overnight sensation and catapulted her to national fame. A landmark in Hindi film music's history.",
      youtube: "https://www.youtube.com/results?search_query=Aayega+Aanewala+Mahal+1949+Lata"
    },
    {
      title: "Janani Janambhoohmi Tum Maa Ho Badi Maa",
      film: "Badi Maa",
      year: 1945,
      composer: "K. Dutta",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Devotional",
      note: "Lata's debut Hindi song. Also, it featured young Lata Mangeshkar in an early acting role alongside a minor appearance by Asha.",
      youtube: "https://www.youtube.com/results?search_query=janani+janmabhoomi+tum+maa+o+badi+maa"
    },
    {
      title: "Mata Tere Charnon Men",
      film: "Badi Maa",
      year: 1945,
      composer: "K. Dutta",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Devotion",
      note: "The song is a heartfelt prayer dedicated to the divine mother (Mata), expressing surrender, faith, and deep devotion. Its lyrics focus on seeking refuge at the goddess’s feet (“charanon mein”), a common motif in Indian bhakti (devotional) traditions, symbolizing humility and spiritual surrender.",
      youtube: "https://www.youtube.com/results?search_query=mata+tere+charno+mein+lata+1945"
    },
    {
      title: "Chidiya Bole Choon Choon Maina Bole Hoon",
      film: "Jeven Yatra",
      year: 1946,
      composer: "Vasant Desai",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Love · Romance",
      note: "A light, playful Hindi song, known for its childlike innocence. Lata's soft and melodious voice enhances the sweetness and simplicity of the composition.",
      youtube: "https://www.youtube.com/watch?v=8MVABHW6trY&list=RD8MVABHW6trY&start_radio=1"
    },
    {
      title: "Pyare Bapu Ki",
      film: "Sona Chandni",
      year: 1946,
      composer: "Tufail Farooqi",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Patriotic",
      note: "The song is a tribute to “Bapu”, referring to Mahatma Gandhi, and reflects the deep reverence people had for him during the final years of India’s freedom struggle. Its lyrics carry a tone of admiration, love, and emotional connection, portraying Gandhi as a guiding moral force and a symbol of hope.",
      youtube: "https://www.youtube.com/watch?v=qax8OhiWA28&list=RDqax8OhiWA28&start_radio=1"
    },
    {
      title: "Main Khili Khili Phulvari",
      film: "Subhadra",
      year: 1946,
      composer: "Vasant Desai",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Love · Romance",
      note: "The song is a part of the phase when Lata was still establishing herself in the industry, and it showcases the simplicity and lyrical charm of pre-independence Hindi cinema music, where melody and poetic imagery were central.",
      youtube: "https://www.youtube.com/watch?v=MizXgpeXc2k&list=RDMizXgpeXc2k&start_radio=1"
    },
    {
      title: "Piya Aayega Gori Shudh Na Bisaar",
      film: "Subhadra",
      year: 1946,
      composer: "Vasant Desai",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Raag-Based · Romance",
      note: "The song is rooted in the theme of longing and anticipation, where the female voice expresses hope for the return of her beloved (“piya”). The phrase “shudh na bisaar” suggests a plea not to be forgotten, adding emotional depth and a sense of gentle yearning. It reflects a common motif in Indian poetry and music—viraha (separation), where love is intensified through distance and waiting.",
      youtube: "https://www.youtube.com/results?search_query=piya+aayega+gori+shudh+na+bisaar+lata+mangeshkar"  
    },     
    {
      title: "Sanwariya O Basuriya O Bajaai Gayo Re",
      film: "Subhadra",
      year: 1946,
      composer: "Vasant Desai",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Devotion",
      note: "The song draws heavily from Krishna-bhakti imagery, where “Sanwariya” (the dark-complexioned beloved, often referring to Lord Krishna) and the “basuriya” (flute) evoke the iconic image of Krishna enchanting everyone with his music. The lyrics suggest a sense of divine attraction and emotional surrender, where the sound of the flute captivates the heart of the listener.",
      youtube: "https://www.youtube.com/watch?v=nt7lXi_eiz8&list=RDnt7lXi_eiz8&start_radio=1" 
    },
    {
      title: "Paa Laguu Kar Joda Jodi Hori Shyam Mose Na",
      film: "Shadi Se Pehle",
      year: 1946,
      composer: "Paigankar and Karnard",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Devotion",
      note: "The song is deeply rooted in traditional and devotional-romantic themes, drawing from the imagery of Radha–Krishna lore. The mention of “Shyam” points to Lord Krishna, while the context of “Hori” (Holi) brings in the festive, playful spirit associated with Krishna and Radha’s divine love. The lyrics reflect a mix of devotion, teasing affection, and emotional surrender.",
      youtube: "https://www.youtube.com/watch?v=ai6CjZHO5hc&list=RDai6CjZHO5hc&start_radio=1"  
    },
    {
      title: "Jawani Ki Rel Chali",
      film: "Shehnai",
      year: 1947,
      composer: "C. Ramchandra",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Joy · Celebration",
      note: "Lata Mangeshkar’s voice, still in its early phase, combines with C. Ramchandra’s to create a vibrant, engaging sound. The song stands out as an example of how 1940s Hindi cinema began experimenting with modern, urban musical styles while still maintaining Indian lyrical sensibilities.",
      youtube: "https://www.youtube.com/watch?v=oVU-LNCiHWc&list=RDoVU-LNCiHWc&start_radio=1"
    },  
    {
      title: "Aye Dil Meri Wafa Men",
      film: "Anokha Pyar",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Heartbreak · Emotional",
      note: "The song revolves around themes of love, devotion, and emotional pain, where the singer addresses the heart (“aye dil”) and reflects on loyalty (“wafa”) in love. This song is also significant because Anokha Pyar (1948) featured music by Anil Biswas, who played a crucial role in shaping early Hindi film music and in giving Lata Mangeshkar opportunities to establish herself.",
      youtube: "https://www.youtube.com/watch?v=yWj_zTXgKwk&list=RDyWj_zTXgKwk&start_radio=1"
    },
    {
      title: "Ek Dil Ka Lagana",
      film: "Anokha Pyar",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Heartbreak · Romance",
      note: "The song explores the emotional vulnerability of falling in love—“ek dil ka lagana” (giving one’s heart away) is portrayed as something both beautiful and risky. It reflects themes of romantic attachment, innocence, and the pain that can accompany love, suggesting that love is not just joy but also carries the possibility of heartbreak.",
      youtube: "https://www.youtube.com/watch?v=YqZX26o95rg&list=RDYqZX26o95rg&start_radio=1" 
    },
    {
      title: "Bhola Bhala Ri Mera",
      film: "Anokha Pyar",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Love · Romance",
      note: "The song carries a tone of innocent love and simplicity, with “bhola bhala” suggesting purity and naivety, often describing a beloved who is simple-hearted and sincere. The lyrics reflect a soft, affectionate emotion, focusing more on tenderness than intensity. Lata Mangeshkar’s voice here sounds increasingly refined and controlled, moving closer to the signature clarity and sweetness that would soon define her career.",
      youtube: "https://www.youtube.com/watch?v=ollnhDinCWk&list=RDollnhDinCWk&start_radio=1"
    },
    {
      title: "Ghadi Ghadi Poocho Na",
      film: "Anokha Pyar",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Love · Romance",
      note: "The song carries a tone of gentle romance mixed with playful hesitation. The phrase “ghadi ghadi poochho na” (don’t keep asking again and again) suggests a conversation between lovers, where one expresses mild shyness or teasing reluctance. It reflects the early stages of love, where emotions are present but not openly declared.",
      youtube: "https://www.youtube.com/watch?v=aSQdzp04pac&list=RDaSQdzp04pac&start_radio=1"
    },
    {
      title: "Jevan Sapna Toot Gaya",
      film: "Anokha Pyar",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Heartbreak · Romance",
      note: "The song is centered on deep sorrow and heartbreak, with the line “jeevan sapna toot gaya” (the dream of life has shattered) expressing a sense of complete emotional collapse. It reflects themes of loss, disillusionment, and the fragility of happiness, where love or hope has been broken beyond repair.",
      youtube: "https://www.youtube.com/watch?v=lxumNBeCBWw&list=RDlxumNBeCBWw&start_radio=1" 
    },
    {
      title: "Baras Baras Badli",
      film: "Gajre",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Joy · Emotional",
      note: "The song is built around the imagery of rain and clouds (“badli”), a classic motif in Indian poetry and music. It expresses longing and emotional yearning, where the falling rain often symbolizes tears, separation, or the intensity of unspoken feelings. The repetition of “baras baras” (rain again and again) adds to the sense of continuous emotion, whether it is love, sadness, or remembrance.",
      youtube: "https://www.youtube.com/watch?v=WzhsexsZ9dI&list=RDWzhsexsZ9dI&start_radio=1"
    },
    {
      title: "Chali Dulhan Baratiyon Ke",
      film: "Gajre",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Celebration · Emotional",
      note: "The song is centered around a wedding (bidaai) moment, where the bride (“dulhan”) departs with the wedding procession (“baratiyon”). It captures the bittersweet emotions of Indian marriages, joy of union mixed with the sorrow of separation from one’s family. The composition is strongly influenced by Indian folk traditions, especially those associated with wedding songs across North India.",
      youtube: "https://www.youtube.com/watch?v=wft_1SUgryE&list=RDwft_1SUgryE&start_radio=1" 
    },
    {
      title: "Ghar Yahan Basane Aaye The",
      film: "Gajre",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Heartbreak · Emotional",
      note: "The song expresses a sense of disillusionment and sorrow, built around the idea that one came with hopes of building a home (“ghar basane”) but instead faced heartbreak or loss. It reflects themes of broken dreams, emotional struggle, and the fragility of expectations. Lata Mangeshkar’s singing adds a haunting softness, capturing the feeling of resignation and inner pain. Her ability to convey subtle emotional shifts is particularly evident here.",
      youtube: "https://www.youtube.com/watch?v=PHXGOYGVd04&list=RDPHXGOYGVd04&start_radio=1" 
    },
    {
      title: "Kab Tak Kategi Zindagi Kinare Kinare",
      film: "Gajre",
      year: 1948,
      composer: "Anil Biswas",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Virah · Emotional",
      note: "The song revolves around a philosophical sense of longing and incompleteness. The line “kinare kinare” (staying at the shore) metaphorically suggests living life on the sidelines—never fully immersing in its experiences. It expresses a quiet frustration and sadness about unfulfilled desires, hesitation, or emotional distance.",
      youtube: "https://www.youtube.com/watch?v=8SPRzvY33fc&list=RD8SPRzvY33fc&start_radio=1"
    },
    {
      title: "Meri Ankhon Men Bas Gaya Koi",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Love · Romance",
      note: "The song expresses the feeling of deep emotional absorption in love, where the beloved has “settled” in the singer’s eyes, symbolizing constant remembrance and presence. It reflects a mood of quiet devotion, longing, and tender attachment, where love becomes an all-encompassing experience. Lyrically, the imagery is intimate and poetic, suggesting that the beloved is not just remembered but lives within the heart and vision of the lover. There is a gentle blend of happiness and yearning, typical of early romantic expression.",
      youtube: "https://www.youtube.com/watch?v=ge0XncMF_CY&list=RDge0XncMF_CY&start_radio=1"
    },
    {
      title: "Mujhe Kisi Se Pyar Ho Gaya",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Love · Romance",
      note: "The song beautifully captures the innocent realization of falling in love. The line itself, “mujhe kisi se pyar ho gaya”, expresses a moment of emotional awakening, where the singer acknowledges a new and overwhelming feeling of love. It carries a sense of wonder, shyness, and quiet happiness, typical of early-stage romance. This song is especially significant in Hindi cinema history because Barsaat (1949) played a major role in establishing Lata Mangeshkar as the leading female playback singer of the industry. Her voice here sounds more refined, with the signature sweetness and clarity that would soon become her hallmark.",
      youtube: "https://www.youtube.com/watch?v=2OV5Xiiy61I&list=RD2OV5Xiiy61I&start_radio=1"
    },
    {
      title: "Ab Mera Kaun Sahara",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Heartbreak · Pain",
      note: "The song expresses a profound sense of loneliness and abandonment. The line “ab mera kaun sahara” (who is my support now?) reflects a moment of emotional collapse, where the singer feels left alone without love, protection, or hope. It carries themes of loss, helplessness, and emotional dependence. Lyrically, the song is intense yet simple, focusing on the vulnerability of the human heart when it loses its anchor. The emotion is raw and direct, making it highly relatable.",
      youtube: "https://www.youtube.com/watch?v=oYtFZQzxTfY&list=RDoYtFZQzxTfY&start_radio=1"
    },
    {
      title: "Bichhde Hue Pardesi",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Virah · Pain",
      note: "The song is built around the theme of separation and longing. The phrase “bichhde hue pardesi” refers to a beloved who is far away, emphasizing the pain of distance and emotional disconnect. It reflects the classic idea of viraha (separation in love), where absence intensifies feelings.",
      youtube: "https://www.youtube.com/watch?v=0Q02KD0Dtfk&list=RD0Q02KD0Dtfk&start_radio=1"
    },
    {
      title: "Hawa Men Udta Jae Mera Lal Dupatta",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Youth · Celebration",
      note: "The song is full of playfulness and youthful energy, using the image of a “laal dupatta” flying in the wind as a symbol of carefree joy and flirtation. It reflects a light-hearted romantic mood, where the heroine expresses her emotions in a teasing, spirited manner. It remains one of the most iconic and recognizable tracks from Barsaat.",
      youtube: "https://www.youtube.com/watch?v=OyDr1zTy7Ek&list=RDOyDr1zTy7Ek&start_radio=1"
    },
    {
      title: "Jiya Beqarar Hai Chhayi Bahaar Hai",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Love · Romance",
      note: "The song beautifully captures the feeling of restlessness in love (“beqarari”) combined with the arrival of spring (“bahaar”), symbolizing emotional blossoming. It reflects a state where the heart is overwhelmed with new feelings, excitement, anticipation, and longing all at once. Lyrically, the use of seasonal imagery enhances the romantic mood, suggesting that just as nature comes alive in spring, the heart too awakens with love. There is a sense of joy mixed with gentle बेचैनी (restlessness) that defines early romance.",
      youtube: "https://www.youtube.com/watch?v=cJyvMRPQe-k&list=RDcJyvMRPQe-k&start_radio=1"
    },
    {
      title: "Hans Mukh Phoolon Yeh Mat Bhoolo",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Joy · Emotion",
      note: "The song uses the imagery of smiling flowers (“hans mukh phoolon”) to convey a deeper message about life and its fleeting nature. The line “yeh mat bhoolo” (don’t forget this) suggests a gentle reminder, often interpreted as a reflection on the impermanence of beauty, happiness, and youth. Lyrically, it blends nature imagery with philosophical undertones, a common feature in classic Hindi film songs. Beneath its pleasant surface lies a subtle awareness that joy is temporary, encouraging a sense of reflection.",
      youtube: "https://www.youtube.com/watch?v=4SVySGNzqLA&list=RD4SVySGNzqLA&start_radio=1"
    },
    {
      title: "Patli Kamar Hai",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Joy · Playful",
      note: "The song has a distinctly light-hearted, teasing, and flirtatious tone, celebrating youthful charm and physical grace, particularly highlighted through the phrase “patli kamar” (slender waist). It reflects a carefree romantic mood, where admiration is expressed in a fun, rhythmic manner. Lyrically, the song leans more towards playful admiration and social festivity rather than deep emotion. It fits well into scenes of celebration, dance, or cheerful interaction between characters.",
      youtube: "https://www.youtube.com/watch?v=xVR0YV2n4yw&list=RDxVR0YV2n4yw&start_radio=1" 
    },
    {
      title: "Chhod Gaye Balam",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Heartbreak · Virah",
      note: "The song expresses deep heartbreak and abandonment, with the line “chhod gaye balam” (my beloved has left me) capturing a raw sense of loss. It reflects intense viraha (separation), grief, and emotional emptiness, where love has turned into sorrow. Lyrically, the song is simple yet deeply moving, focusing on the pain of being left behind. The emotions are direct and powerful, making the listener feel the depth of the character’s despair.",
      youtube: "https://www.youtube.com/watch?v=k5GDiXMB__g&list=RDk5GDiXMB__g&start_radio=1" 
    },   
    { 
      title: "Dil Mera Toda",
      film: "Andaz",
      year: 1949,
      composer: "Naushad",
      lyricist: "Majrooh Sultanpuri",
      language: "Hindi",
      theme: "Heartbreak · Romance",
      note: "A desolate expression of romantic betrayal, sung with characteristic restraint. This early collaboration with Naushad established a partnership that would define Indian film music for two decades.",
      youtube: "https://www.youtube.com/results?search_query=Dil+Mera+Toda+Andaz+1949+Lata"
    },
    {
      title: "Barsaat Mein Humse Mile",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar-Jaikishan",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Romance · Monsoon",
      note: "An early collaboration with Shankar-Jaikishan, whose lush orchestrations suited Lata's clear soprano perfectly. The rain as metaphor for romantic renewal is established here with youthful exuberance.",
      youtube: "https://www.youtube.com/results?search_query=Barsaat+1949+Lata+Shankar+Jaikishan"
    }
  ],
  "1950s": [
    {
      title: "Aaja Re Pardesi",
      film: "Madhumati",
      year: 1958,
      composer: "Salil Chaudhary",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Viraha · Folk",
      note: "Rooted in the folk traditions of Bengal and Uttar Pradesh, this song is an aching call to the beloved across mountains and seasons. Salil Chaudhary's genius for weaving folk melody into filmic form is evident throughout.",
      youtube: "https://www.youtube.com/results?search_query=Aaja+Re+Pardesi+Madhumati+1958"
    },
    {
      title: "Ghar Aaya Mera Pardesi",
      film: "Awaara",
      year: 1951,
      composer: "Shankar Jaikishan",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Love · Romance",
      note: "The song appears in the famous dream sequence of the film and is deeply symbolic rather than just narrative. It represents the inner emotional world of the characters—especially longing, redemption, and the desire for love. The phrase “pardesi” (outsider/stranger) reflects separation, while “ghar aaya” suggests reunion, making the song about emotional return and belonging. ",
      youtube: "https://www.youtube.com/watch?v=h98PfNvo_lI&list=RDh98PfNvo_lI&start_radio=1"
    },   
    {
      title: "Dam Bhar Jo Udhar Munh Phere",
      film: "Awaara",
      year: 1951,
      composer: "Shankar Jaikishan",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Romantic",
      note: "The song is picturised on Raj Kapoor and Nargis, and it captures a playful and romantic moment between the two characters. In the song, the lovers tease each other gently, expressing affection through light-hearted dialogue and melody. The title roughly means “If you turn your face away for just a moment,” symbolising the emotional vulnerability and longing present in romantic relationships.",
      youtube: "https://www.youtube.com/watch?v=d1ZGmRZvgc0&list=RDd1ZGmRZvgc0&start_radio=1"
    },
      {
      title: "Dam Bhar Jo Udhar Munh Phere",
      film: "Awaara",
      year: 1951,
      composer: "Shankar Jaikishan",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Romantic",
      note: "The song is picturised on Raj Kapoor and Nargis, and it captures a playful and romantic moment between the two characters. In the song, the lovers tease each other gently, expressing affection through light-hearted dialogue and melody. The title roughly means “If you turn your face away for just a moment,” symbolising the emotional vulnerability and longing present in romantic relationships.",
      youtube: "https://www.youtube.com/watch?v=d1ZGmRZvgc0&list=RDd1ZGmRZvgc0&start_radio=1"
    }, 
    {
      title: "Tere Bina Aag Yeh Chandni",
      film: "Awaara",
      year: 1951,
      composer: "Shankar Jaikishan",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Emotional intensity",
      note: "The song beautifully expresses longing and emotional dependence in love. The line “Tere bina aag yeh chandni” suggests that without the beloved, even the soothing moonlight feels like fire  a poetic metaphor highlighting how love transforms one’s emotional world. The melody is soft yet deeply expressive, reflecting the intensity of separation and desire.",
      youtube: "https://www.youtube.com/watch?v=nf4reYrFrVI&list=RDnf4reYrFrVI&start_radio=1"
    },
    {
      title: "Ek Bewafa Se Pyar Kiya",
      film: "Awaara",
      year: 1951,
      composer: "Shankar Jaikishan",
      lyricist: "Hasrat Jaipuri",
      language: "Hindi",
      theme: "Heartbreak· Emotional suffering",
      note: "This song expresses deep sorrow, betrayal, and heartbreak. The title means “I fell in love with someone unfaithful,” and the lyrics convey the pain of loving someone who does not return that love sincerely. The emotional intensity of the song reflects feelings of disappointment, vulnerability, and loneliness.",
      youtube: "https://www.youtube.com/watch?v=W05zN8gstgo&list=RDW05zN8gstgo&start_radio=1"
    },
    {
      title: "Ab Raat Guzarne Wali Hai",
      film: "Awaara",
      year: 1951,
      composer: "Shankar Jaikishan",
      lyricist: "Hasrat Jaipuri",
      language: "Hindi",
      theme: "Hope after emotional suffering",
      note: "The soft and emotional melody that highlights Lata Mangeshkar’s ability to express delicate emotions through her voice. Her gentle and soothing tone enhances the emotional atmosphere of the song. The music by Shankar–Jaikishan complements the lyrics with a calm and slow rhythm, reinforcing the theme of emotional transition. Overall, the song contributes to the emotional depth of Awaara and remains memorable for its poetic beauty, emotional sincerity, and timeless appeal.",
      youtube: "https://www.youtube.com/watch?v=6mPgJG-ZFzQ&list=RD6mPgJG-ZFzQ&start_radio=1"
    },
    {
      title: "Jab Se Balam Ghar Aaye",
      film: "Awaara",
      year: 1951,
      composer: "Shankar Jaikishan",
      lyricist: "Hasrat Jaipuri",
      language: "Hindi",
      theme: "Joy , Fullfillment in love",
      note: "The melodious and expressive song that beautifully conveys feelings of love and emotional contentment. Lata Mangeshkar’s sweet and graceful voice enhances the emotional warmth of the song. The music composed by Shankar–Jaikishan uses gentle rhythm and soothing melody to reflect the emotional joy of reunion. The song adds emotional richness to Awaara and remains memorable for its simplicity, tenderness, and expressive beauty.",
      youtube: "https://www.youtube.com/watch?v=loxPMWyu7Tg&list=RDloxPMWyu7Tg&start_radio=1"
    },
    {
      title: "Kahe Ko Der Lagayi Re",
      film: "Daag",
      year: 1952,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Longing , Emotional anticipation",
      note: "“Kahe Ko Der Lagayi Re” is a melodious and emotional song that highlights Lata Mangeshkar’s ability to convey longing and emotional sensitivity. Her soft and expressive voice captures the pain of waiting and the intensity of love. The music composed by Shankar–Jaikishan complements the emotional tone with a gentle and flowing melody. The song remains memorable for its emotional depth, poetic lyrics, and Lata Mangeshkar’s soulful performance.",
      youtube: "https://www.youtube.com/watch?v=-QU9NANirW4&list=RD-QU9NANirW4&start_radio=1"
    },
    {
      title: "Dekho Aaya Ye Kaisa",
      film: "Daag",
      year: 1952,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Disappointment , Emotional pain",
      note: "Deeply emotional song that highlights Lata Mangeshkar’s exceptional ability to convey sorrow and emotional vulnerability. Her soft yet powerful voice adds depth and sincerity to the lyrics. The music composed by Shankar–Jaikishan enhances the emotional tone with a slow and expressive melody. The song plays an important role in expressing the inner emotional state of the character and remains memorable for its emotional intensity, poetic beauty, and timeless appeal.",
      youtube: "https://www.youtube.com/watch?v=Sf6dbWkCEHg&list=RDSf6dbWkCEHg&start_radio=1"
    },
    {
      title: "Lage Jabse Nain",
      film: "Daag",
      year: 1952,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Awakening of love",
      note: " A romantic song that beautifully captures the innocence and intensity of falling in love. Lata Mangeshkar’s soft and expressive voice adds charm and emotional delicacy to the composition. The music by Shankar–Jaikishan enhances the romantic mood with a flowing and graceful melody. The song remains memorable for its poetic imagery, emotional warmth, and timeless romantic appeal.",
      youtube: "https://www.youtube.com/watch?v=RukfltwzDOM&list=RDRukfltwzDOM&start_radio=1"
    },
    {
      title: "Preet Yeh Kaisi",
      film: "Daag",
      year: 1952,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Confusion and emotional pain",
      note: " A Deeply emotional song that highlights Lata Mangeshkar’s ability to convey emotional sensitivity and inner turmoil. Her expressive and delicate voice brings out the pain and questioning present in the lyrics. The music composed by Shankar–Jaikishan complements the emotional tone with a slow and meaningful melody. The song remains memorable for its emotional depth, poetic expression, and powerful portrayal of the complexities of love.",
      youtube: "https://www.youtube.com/watch?v=xjdQL-Pysis&list=RDxjdQL-Pysis&start_radio=1"
    },
    {
      title: "Aye Mere Dil Kahin Aur Chal",
      film: "Daag",
      year: 1952,
      composer: "Shankar Jaikishan",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Heartbreak and emotional escape",
      note: "One of the most emotional and memorable songs from Daag (1952). Both Talat Mahmood and Lata Mangeshkar bring deep emotional expression to their versions. Talat Mahmood’s soft, melancholic voice and Lata Mangeshkar’s delicate, expressive tone beautifully convey the pain of heartbreak. The music by Shankar–Jaikishan enhances the sadness through a slow and haunting melody. The song remains timeless for its emotional intensity, poetic lyrics, and powerful portrayal of sorrow and longing.",
      youtube: "https://www.youtube.com/watch?v=4gm9tfzt7-U&list=RD4gm9tfzt7-U&start_radio=1"
    },
    {
      title: "Mere Chand Mere Lal",
      film: "Diwana",
      year: 1952,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Maternal affection and protective love",
      note: "Tender and emotionally soothing song that showcases Lata Mangeshkar’s gentle and expressive singing style. Her soft voice enhances the nurturing and affectionate tone of the song. The music composed by Naushad beautifully complements the emotional warmth through a calm and melodious arrangement. The lyrics by Shakeel Badayuni add poetic grace and depth.",
      youtube: "https://www.youtube.com/watch?v=YYgTPDEPWjw&list=RDYYgTPDEPWjw&start_radio=1"
    },
    {
      title: "Teer Khate Jayenge",
      film: "Diwana",
      year: 1952,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Pain and sacrifice in love",
      note: "Emotional and expressive song that showcases Lata Mangeshkar’s exceptional ability to convey sorrow and vulnerability. Her delicate and soulful voice enhances the emotional weight of the lyrics. The music composed by Naushad complements the tragic theme with a slow and haunting melody. The lyrics by Shakeel Badayuni add poetic depth and emotional richness.",
      youtube: "https://www.youtube.com/watch?v=UYqT1q4KHnE&list=RDUYqT1q4KHnE&start_radio=1"
    },
    {
      title: "Aaja Ab To Aaja",
      film: "Anarkali",
      year: 1953,
      composer: "C. Ramchandra, Vasant Prakash",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Longing and emotional yearning for reunion",
      note: " A deeply emotional and expressive song that showcases Lata Mangeshkar’s exceptional ability to convey longing and sorrow. Her soft, soulful voice beautifully expresses the pain and devotion present in the lyrics. The music composed by C. Ramchandra enhances the emotional depth through a slow and haunting melody, while the lyrics by Rajendra Krishan add poetic richness.",
      youtube: "https://www.youtube.com/watch?v=NDROweqcixk&list=RDNDROweqcixk&start_radio=1"
    },
    {
      title: "Dua Kar Gham-E-Dil",
      film: "Anarkali",
      year: 1953,
      composer: "C. Ramchandra, Vasant Prakash",
      lyricist: "Unknown",
      language: "Urdu",
      theme: "Prayerful sorrow and helpless love",
      note: " A emotionally powerful songs from Anarkali. Lata Mangeshkar’s haunting and delicate voice intensifies the feeling of sorrow and devotion. The music by C. Ramchandra complements the lyrical depth with a slow, dramatic composition that enhances the tragic mood.",
      youtube: "https://www.youtube.com/watch?v=sLgwVMGKMqs&list=RDsLgwVMGKMqs&start_radio=1"
    },
    {
      title: "Mujhse Mat Poochh",
      film: "Anarkali",
      year: 1953,
      composer: "C. Ramchandra, Vasant Prakash",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Emotional suffering and helplessness in love.",
      note: "A deeply emotional and expressive song that showcases Lata Mangeshkar’s extraordinary ability to convey pain and sensitivity. Her soft and sorrowful voice enhances the emotional intensity of the lyrics. The music composed by C. Ramchandra complements the tragic theme with a slow and haunting melody, while the lyrics by Rajendra Krishan add poetic beauty and emotional richness.",
      youtube: "https://www.youtube.com/watch?v=Prb-H-f4jHQ&list=RDPrb-H-f4jHQ&start_radio=1"
    },
    {
      title: "Mohabbat Aisi Dhadkan Hai",
      film: "Anarkali",
      year: 1953,
      composer: "C. Ramchandra, Vasant Prakash",
      lyricist: "Unknown",
      language: "Hindi",
      theme: "Love as an inseparable part of life.",
      note: "“Mohabbat Aisi Dhadkan Hai” highlights Lata Mangeshkar’s ability to convey sincerity and grace through her voice. Her smooth tonal quality brings clarity and warmth to the composition. The music by C. Ramchandra supports the lyrical meaning with a balanced and flowing arrangement. The lyrics by Rajendra Krishan present love as an enduring and meaningful experience. The song remains notable for its poetic imagery, graceful composition, and expressive vocal performance.",
      youtube: "https://www.youtube.com/watch?v=09uo2EdhkhE&list=RD09uo2EdhkhE&start_radio=1"
    },
    {
      title: "Pyar Hua Iqrar Hua",
      film: "Shree 420",
      year: 1955,
      composer: "Shankar Jaikishan",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Love confession",
      note: "The most recognised romantic duets in Hindi cinema. The harmonious voices of Lata Mangeshkar and Mukesh create a balanced and pleasing musical experience. The composition by Shankar–Jaikishan features a gentle rhythm that complements the romantic mood. The lyrics by Shailendra emphasise honesty, unity, and emotional connection. The song remains admired for its memorable melody, meaningful lyrics, and its portrayal of sincere affection.",
      youtube: "https://www.youtube.com/watch?v=xkl1QwNEuYs&list=RDxkl1QwNEuYs&start_radio=1"
    },
    {
      title: "Ramaiya Vastavaiya",
      film: "Shree 420",
      year: 1955,
      composer: "Shankar Jaikishan",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Hopeful reunion",
      note: "A lively and expressive song that reflects collective emotion and longing. The voices of Lata Mangeshkar, Mukesh, and Mohammed Rafi create a rich choral effect. The composition by Shankar–Jaikishan blends folk rhythm with cinematic melody, while the lyrics by Shailendra express longing, patience, and faith in love. The song remains memorable for its vibrant energy, cultural blend, and emotional warmth.",
      youtube: "https://www.youtube.com/watch?v=DvFYplCzqPk&list=RDDvFYplCzqPk&start_radio=1"
    },
    {
      title: "Ichak Dana Beechak Dana",
      film: "Shree 420",
      year: 1955,
      composer: "Shankar Jaikishan",
      lyricist: "Hasrat Jaipuri",
      language: "Hindi",
      theme: "Playful innocence",
      note: "It stands out for its cheerful rhythm and childlike simplicity. Lata Mangeshkar’s bright and clear voice complements Mukesh’s warm tone, creating a friendly musical exchange. The composition by Shankar–Jaikishan carries a light, folk-inspired arrangement that matches the playful lyrics written by Shailendra. The song remains memorable for its engaging structure, joyful mood, and its representation of simplicity within the narrative of the film.",
      youtube: "https://www.youtube.com/watch?v=FZ6QkAR0Jnw&list=RDFZ6QkAR0Jnw&start_radio=1"
    },
    {
      title: "O Janewale",
      film: "Shree 420",
      year: 1955,
      composer: "Shankar Jaikishan",
      lyricist: "Hasrat Jaipuri",
      language: "Hindi",
      theme: "Emotional farewell",
      note: "It reflects a moment of separation and quiet sorrow. Lata Mangeshkar delivers the song with softness and control, allowing the listener to feel the character’s sense of loss. The composition by Shankar–Jaikishan uses a slow tempo and restrained instrumentation to support the reflective mood. The lyrics by Hasrat Jaipuri emphasise remembrance and longing. The song remains notable for its graceful melody, expressive delivery, and portrayal of parting.",
      youtube: "https://www.youtube.com/watch?v=lyAjrEdTf4w&list=RDlyAjrEdTf4w&start_radio=1"
    },
    {
      title: "Sham Gayi Raat Aayi",
      film: "Shree 420",
      year: 1955,
      composer: "Shankar Jaikishan",
      lyricist: "Hasrat Jaipuri",
      language: "Hindi",
      theme: "Romantic anticipation",
      note: "A graceful musical expression of waiting and expectation. The voices of Lata Mangeshkar and Asha Bhosle create a pleasing vocal harmony that enhances the atmosphere of the song. The composition by Shankar–Jaikishan uses a gentle tempo and melodic flow to reflect the quiet passage of time. The lyrics by Shailendra connect natural imagery with human emotion. The song is appreciated for its lyrical beauty, soothing melody, and expressive presentation.",
      youtube: "https://www.youtube.com/watch?v=NYNCVOwmC6g&list=RDNYNCVOwmC6g&start_radio=1"
    },
    {
      title: "Jise Tu Kabool Karle",
      film: "Devdas",
      year: 1955,
      composer: "S.D. Burman",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Selfless surrender",
      note: "It reflects acceptance, sacrifice, and quiet devotion. Lata Mangeshkar delivers the song with controlled modulation and clarity, capturing the character’s restrained anguish. The composition by S. D. Burman features a measured tempo and subtle orchestration, supporting the contemplative mood. The lyrics by Sahir Ludhianvi present love as dignified endurance rather than possession. The song remains significant for its poetic depth, restrained intensity, and classical elegance.",
      youtube: "https://www.youtube.com/watch?v=dMFbmp4oNpc&list=RDdMFbmp4oNpc&start_radio=1"
    },
    {
      title: "Ab Aage Teri Marzi",
      film: "Devdas",
      year: 1955,
      composer: "S.D. Burman",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Resigned acceptance",
      note: "It conveys a sense of surrender and emotional restraint. Lata Mangeshkar presents the composition with measured clarity and subtle variation, highlighting the character’s quiet strength. The musical arrangement by S. D. Burman maintains a controlled tempo with minimal ornamentation, reinforcing the reflective mood. The lyrics by Sahir Ludhianvi emphasise dignity in suffering and the acceptance of destiny. The song is remembered for its lyrical refinement, restrained performance, and thematic seriousness.",
      youtube: "https://www.youtube.com/watch?v=jPbNrIa-5h4&list=RDjPbNrIa-5h4&start_radio=1"
    },
    {
      title: "O Aane Wale Ruk Ja",
      film: "Devdas",
      year: 1955,
      composer: "S.D. Burman",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Hopeful longing",
      note: "It expresses anticipation and emotional appeal. Lata Mangeshkar delivers the song with clarity and expressive control, capturing the character’s sense of expectation. The composition by S. D. Burman uses a slow and flowing melody that enhances the reflective atmosphere. The lyrics by Sahir Ludhianvi emphasise waiting, uncertainty, and emotional vulnerability. The song remains notable for its graceful structure, poetic language, and expressive vocal interpretation.",
      youtube: "https://www.youtube.com/watch?v=W7VaPMGiQh4&list=RDW7VaPMGiQh4&start_radio=1"
    },
    {
      title: "Jhanak Jhanak Payal Baaje",
      film: "Jhanak Jhanak Payal Baaje",
      year: 1955,
      composer: "Vasant Desai",
      lyricist: "Hasrat Jaipuri",
      language: "Hindi",
      theme: "Classical devotion",
      note: "This song celebrates the elegance and discipline of classical Indian dance, particularly Kathak. The rhythmic sound of the ankle bells (payal) symbolises movement, precision, and artistic training. The lyrics reflect dedication, cultural pride, and the deep connection between music and physical expression. It conveys refinement, perseverance, and the structured beauty of tradition, while also highlighting the importance of practice, focus, and commitment in mastering an art form.",
      youtube: "https://www.youtube.com/watch?v=W7VaPMGiQh4&list=RDW7VaPMGiQh4&start_radio=1"
    },
    {
      title: "Pyaasa (Jaane Woh Kaise Log The)",
      film: "Pyaasa",
      year: 1957,
      composer: "S.D. Burman",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Existential · Loss",
      note: "Set against Guru Dutt's meditation on artistic alienation, Lata's voice conveys a philosophical sorrow beyond mere romantic sadness. S.D. Burman's spare arrangement amplifies the existential weight of Sahir's verse.",
      youtube: "https://www.youtube.com/results?search_query=Jaane+Woh+Kaise+Log+The+Pyaasa+1957"
    },
    {
      title: "Jhanak Jhanak Tori Baaje Payaliya",
      film: "Baiju Bawra",
      year: 1952,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Classical · Devotion",
      note: "One of the finest classical-based songs in Hindi cinema, rendered in Raag Desh. The song showcases Lata's ability to handle the demanding ornamentation of Hindustani classical music within the popular film idiom.",
      youtube: "https://www.youtube.com/results?search_query=Jhanak+Jhanak+Tori+Baaje+Payaliya+Baiju+Bawra"
    },
    {
      title: "Aye Mere Watan Ke Logo",
      film: "Live Performance",
      year: 1963,
      composer: "C. Ramchandra",
      lyricist: "Kavi Pradeep",
      language: "Hindi",
      theme: "Patriotic · Memorial",
      note: "Composed as a tribute to soldiers who fell in the 1962 Sino-Indian war, this song moved Prime Minister Nehru to tears at its live premiere. Considered among the most emotionally consequential songs ever performed in India.",
      youtube: "https://www.youtube.com/results?search_query=Aye+Mere+Watan+Ke+Logo+Lata+Mangeshkar"
    }
  ],
  "1960s": [
    {
      title: "Lag Ja Gale",
      film: "Woh Kaun Thi",
      year: 1964,
      composer: "Madan Mohan",
      lyricist: "Raja Mehdi Ali Khan",
      language: "Hindi",
      theme: "Viraha · Mystery",
      note: "Widely regarded as one of the most perfectly realised songs in Hindi cinema, this collaboration between Lata and Madan Mohan distils viraha into its purest musical form. The opening phrase alone is among the most recognised in Indian music.",
      youtube: "https://www.youtube.com/results?search_query=Lag+Ja+Gale+Woh+Kaun+Thi+1964"
    },
    {
      title: "Pyaar Kiya To Darna Kya",
      film: "Mughal-e-Azam",
      year: 1960,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Defiance · Romance",
      note: "Sung in the mirror-encrusted Sheesh Mahal set, this is one of cinema's supreme declarations of love as resistance. Lata's projection — full, commanding, triumphant — was a deliberate choice to match the grandeur of Naushad's orchestration.",
      youtube: "https://www.youtube.com/results?search_query=Pyaar+Kiya+To+Darna+Kya+Mughal+e+Azam+1960"
    },
    {
      title: "Allah Tero Naam",
      film: "Hum Dono",
      year: 1961,
      composer: "Jaidev",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Devotion · Universalism",
      note: "A prayer that transcends religious boundaries, affirming the unity underlying diverse names for the divine. Jaidev's spare composition and Lata's meditative delivery make this one of Hindi cinema's most spiritually resonant songs.",
      youtube: "https://www.youtube.com/results?search_query=Allah+Tero+Naam+Hum+Dono+1961+Lata"
    },
    {
      title: "Tere Bin Soone Nain Hamare",
      film: "Waqt",
      year: 1965,
      composer: "Ravi",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Longing · Separation",
      note: "From one of the defining melodramas of Hindi cinema's middle period, this song captures the poignancy of domestic separation with an intimacy rare in the grander productions of the era.",
      youtube: "https://www.youtube.com/results?search_query=Tere+Bin+Soone+Nain+Hamare+Waqt+1965"
    },
    {
       title: "Mele Hain Chiragon Ki Diwali",
      film: "Nazrana",
      year: 1961,
      composer: "Ravi",
      lyricist: "Rajendra Krishan",
      language: "Hindi",
      theme: "Longing · Separation",
      note: "It celebrates the joy, lights, and spirit of Diwali, describing homes glowing with lamps and a mood of happiness and togetherness. Lata Mangeshkar’s melodious voice adds warmth and devotion to the festive atmosphere.",
      youtube: "https://www.youtube.com/watch?v=kEith3woK0I&list=RDkEith3woK0I&start_radio=1"
    },
    {
      title: "Bikhra Ke Zulfen Chaman Mein",
      film: "Nazrana",
      year: 1961,
      composer: "Ravi",
      lyricist: "SRajendra Krishan",
      language: "Hindi",
      theme: "Poetic · Love",
      note: "The song uses poetic imagery—like flowing hair in a garden—to express beauty, love, and admiration. Its soft melody and Lata Mangeshkar’s expressive voice give it a dreamy, graceful feel.",
      youtube: "https://www.youtube.com/watch?v=7EC-A6aYsuo&list=RD7EC-A6aYsuo&start_radio=1"
    },
    {
      title: "Dhoondo Dhoondo Re Saajna",
      film: "Gunga Jumna",
      year: 1961,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Longing · Playfulness",
      note: "Is a lively romantic duet from the film Ganga Jamuna, sung by Lata Mangeshkar and Mohammed Rafi. It features a playful hide-and-seek style exchange between lovers, with a folk-inspired melody and energetic rhythm that makes it cheerful and memorable.",
      youtube: "https://www.youtube.com/results?search_query=Dhoondo+Dhoondo+Re+Saajna"
    },
    {
      title: "Dagabaaz Tori Batiyan Na Maanun Re",
      film: "Gunga Jumna",
      year: 1961,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Betrayal · Longing",
      note: "The song expresses emotional hurt and playful reproach toward a lover accused of being deceitful. Its folk and semi-classical style adds depth and intensity to the feelings portrayed.",
      youtube: "https://www.youtube.com/results?search_query=Dagabaaz+Tori+Batiyan+Na+Maanun+Re" 
    },
    {
      title: "Do Hanson Ka Joda Bichhad Gayo Re",
      film: "Gunga Jumna",
      year: 1961,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Seperation · Heartbreak",
      note: "The song uses the metaphor of two swans separated to express deep sorrow and the pain of lovers being parted. Its emotional melody enhances the feeling of heartbreak and separation..",
      youtube: "https://www.youtube.com/results?search_query=Do+Hanson+Ka+Joda+Bichhad+Gayo+Re"  
    },
    {
      title: "Jhanan Ghoongar Baaje",
      film: "Gunga Jumna",
      year: 1961,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Celebration · Rhythm",
      note: "TThe song highlights rhythmic ankle bells (ghoongroo) and carries a vibrant folk-classical flavour, celebrating movement, music, and festive energy.",
      youtube: "https://www.youtube.com/results?search_query=Jhanan+Ghoongar+Baaje"
    },
    {
      title: "Allah Tero Nam",
      film: "Hum Dono",
      year: 1961,
      composer: "Jaidev",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Faith · Harmony",
      note: "The song is a prayer for peace and harmony, invoking both “Allah” and “Ishwar,” symbolizing unity beyond religious boundaries. Its serene melody and soulful rendition create a deeply spiritual atmosphere.",
      youtube: "https://www.youtube.com/results?search_query=Allah+Tero+Name"
    },
    {
      title: "Prabhu Tero Naam",
      film: "Hum Dono",
      year: 1961,
      composer: "Jaidev",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Devation · Serenity",
      note: "The song is a heartfelt prayer seeking divine guidance, compassion, and inner peace. Its calm, meditative melody enhances the spiritual depth of the lyrics.",
      youtube: "https://www.youtube.com/results?search_query=Prabhu+Tero+Naam"
    },
    {
      title: "Aap Ki Nazron Ne Samjha",
      film: "Anpadh",
      year: 1962,
      composer: "Madan Mohan Kohli",
      lyricist: "Raja Mehdi Ali Khan",
      language: "Hindi",
      theme: "Love · Appreciation",
      note: "A soulful romantic song expressing gratitude and emotional surrender in love. Lata Mangeshkar’s tender voice and Madan Mohan’s delicate composition give it timeless elegance.",
      youtube: "https://www.youtube.com/results?search_query=Aap+Ki+Nazron+Ne+Samjha+Anpadh+1962"
    },
    {
      title: "Hai Isi Mein Pyar Ki Aabroo",
      film: "Anpadh",
      year: 1962,
      composer: "Madan Mohan Kohli",
      lyricist: "Raja Mehdi Ali Khan",
      language: "Hindi",
      theme: "Devotion · Emotional Restraint",
      note: "A poignant melody about preserving the dignity of love through patience and sacrifice. The song carries a deep emotional undercurrent with graceful orchestration.",
      youtube: "https://www.youtube.com/results?search_query=Hai+Isi+Mein+Pyar+Ki+Aabroo+Anpadh+1962"
    },
    {
     title: "Rang Birangi Rakhi Leke Aayi",
     film: "Anpadh",
     year: 1962,
     composer: "Madan Mohan Kohli",
     lyricist: "Raja Mehdi Ali Khan",
     language: "Hindi",
     theme: "Sibling Bond · Celebration",
     note: "A festive Raksha Bandhan song celebrating the affectionate bond between brother and sister, filled with warmth and traditional sentiment.",
     youtube: "https://www.youtube.com/results?search_query=Rang+Birangi+Rakhi+Leke+Aayi+Anpadh+1962"
   },
   {
     title: "Woh Dekho Jala Ghar Kisi Ka",
     film: "Anpadh",
     year: 1962,
     composer: "Madan Mohan Kohli",
     lyricist: "Raja Mehdi Ali Khan",
     language: "Hindi",
     theme: "Tragedy · Social Commentary",
     note: "A melancholic song reflecting pain and loss, using powerful imagery to convey emotional devastation and societal indifference.",
     youtube: "https://www.youtube.com/results?search_query=Woh+Dekho+Jala+Ghar+Kisi+Ka+Anpadh+1962"
   },
   {
     title: "Jiya Le Gayo Ji Mora",
     film: "Anpadh",
     year: 1962,
     composer: "Madan Mohan Kohli",
     lyricist: "Raja Mehdi Ali Khan",
     language: "Hindi",
     theme: "Playful Romance · Longing",
     note: "A light yet expressive romantic number capturing the excitement and emotional pull of newfound love.",
     youtube: "https://www.youtube.com/results?search_query=Jiya+Le+Gayo+Ji+Mora+Anpadh+1962"
   },
   {
     title: "Tujhe Jeevan Ki Dor Se",
     film: "Asli-Naqli",
     year: 1962,
     composer: "Shankar–Jaikishan",
     lyricist: "Hasrat Jaipuri",
     language: "Hindi",
     theme: "Commitment · Eternal Love",
     note: "A romantic duet symbolizing lifelong togetherness, beautifully expressing emotional bonding and commitment.",
     youtube: "https://www.youtube.com/results?search_query=Tujhe+Jeevan+Ki+Dor+Se+Asli+Naqli+1962"
   },
   {
     title: "Lakh Chhupao Chhup Na Sakega",
     film: "Asli-Naqli",
     year: 1962,
     composer: "Shankar–Jaikishan",
     lyricist: "Hasrat Jaipuri",
     language: "Hindi",
     theme: "Romantic Teasing · Emotional Truth",
     note: "A playful romantic song suggesting that true feelings cannot be hidden, carried by a charming melody.",
     youtube: "https://www.youtube.com/results?search_query=Lakh+Chhupao+Chhup+Na+Sakega+Asli+Naqli+1962"
   },
   {
     title: "Tera Mera Pyar Amar",
     film: "Asli-Naqli",
     year: 1962,
     composer: "Shankar–Jaikishan",
     lyricist: "Hasrat Jaipuri",
     language: "Hindi",
     theme: "Eternal Love · Devotion",
     note: "A deeply romantic song celebrating everlasting love, remembered for its melodious composition and emotional depth.",
     youtube: "https://www.youtube.com/results?search_query=Tera+Mera+Pyar+Amar+Asli+Naqli+1962"
    },
           {
        title: "Sawan Ki Raaton Mein Aisa",
        film: "Prem Patra",
        year: 1962,
        composer: "Salil Chowdhury",
        lyricist: "Rajendra Krishan",
        language: "Hindi",
        theme: "Romance · Longing",
        note: "A soft romantic melody expressing the emotional intensity of love during monsoon nights.",
        youtube: "https://www.youtube.com/results?search_query=Sawan+Ki+Raaton+Mein+Aisa+Prem+Patra+1962"
      },
      {
        title: "Yeh Mere Andhere Ujaale Na Hote",
        film: "Prem Patra",
        year: 1962,
        composer: "Salil Chowdhury",
        lyricist: "Rajendra Krishan",
        language: "Hindi",
        theme: "Love · Emotional Awakening",
        note: "A poetic expression of how love transforms darkness into light, carried by a tender composition.",
        youtube: "https://www.youtube.com/results?search_query=Yeh+Mere+Andhere+Ujaale+Na+Hote+Prem+Patra+1962"
      },
      {
        title: "Ab Aur Na Kucch Bhi Yaad Raha",
        film: "Prem Patra",
        year: 1962,
        composer: "Salil Chowdhury",
        lyricist: "Rajendra Krishan",
        language: "Hindi",
        theme: "Love · Emotional Immersion",
        note: "A romantic number where love consumes all other thoughts, highlighting emotional surrender.",
        youtube: "https://www.youtube.com/results?search_query=Ab+Aur+Na+Kucch+Bhi+Yaad+Raha+Prem+Patra+1962"
      },
      {
        title: "Do Ankhiyan Jhuki Jhuki Si",
        film: "Prem Patra",
        year: 1962,
        composer: "Salil Chowdhury",
        lyricist: "Rajendra Krishan",
        language: "Hindi",
        theme: "Shyness · Romance",
        note: "A gentle romantic song capturing the innocence and charm of shy glances in love.",
        youtube: "https://www.youtube.com/results?search_query=Do+Ankhiyan+Jhuki+Jhuki+Si+Prem+Patra+1962"
      },
      {
        title: "Wo Jab Yaad Aaye",
        film: "Parasmani",
        year: 1963,
        composer: "Laxmikant–Pyarelal",
        lyricist: "Asad Bhopali",
        language: "Hindi",
        theme: "Separation · Yearning",
        note: "A melodious duet reflecting the pain of remembering a beloved during separation.",
        youtube: "https://www.youtube.com/results?search_query=Wo+Jab+Yaad+Aaye+Parasmani+1963"
      },
      {
        title: "Jo Vada Kiya Wo Nibhana Padega",
        film: "Taj Mahal",
        year: 1963,
        composer: "Roshan",
        lyricist: "Sahir Ludhianvi",
        language: "Hindi",
        theme: "Promise · Eternal Love",
        note: "An iconic romantic duet about commitment and fulfilling promises in love.",
        youtube: "https://www.youtube.com/results?search_query=Jo+Vada+Kiya+Wo+Nibhana+Padega+Taj+Mahal+1963"
      },
      {
        title: "Dekho Rootha Na Karo",
        film: "Tere Ghar Ke Samne",
        year: 1963,
        composer: "S. D. Burman",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Playful Romance",
        note: "A charming, light-hearted romantic song urging the beloved not to stay upset.",
        youtube: "https://www.youtube.com/results?search_query=Dekho+Rootha+Na+Karo+Tere+Ghar+Ke+Samne+1963"
      },
      {
        title: "Tere Ghar Ke Samne",
        film: "Tere Ghar Ke Samne",
        year: 1963,
        composer: "S. D. Burman",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Romance · Admiration",
        note: "A lively romantic number celebrating youthful love and admiration.",
        youtube: "https://www.youtube.com/results?search_query=Tere+Ghar+Ke+Samne+1963+title+song"
      },
      {
        title: "Yeh Tanhai Hai Re Hai",
        film: "Tere Ghar Ke Samne",
        year: 1963,
        composer: "S. D. Burman",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Loneliness · Longing",
        note: "A melodious song expressing the ache of loneliness in love.",
        youtube: "https://www.youtube.com/results?search_query=Yeh+Tanhai+Hai+Re+Hai+Tere+Ghar+Ke+Samne+1963"
      },
      {
        title: "Tere Pyar Mein Dildar",
        film: "Mere Mehboob",
        year: 1963,
        composer: "Naushad",
        lyricist: "Shakeel Badayuni",
        language: "Hindi",
        theme: "Devotion · Passion",
        note: "A passionate romantic number expressing deep surrender in love.",
        youtube: "https://www.youtube.com/results?search_query=Tere+Pyar+Mein+Dildar+Mere+Mehboob+1963"
      },
      {
        title: "Allah Bachaaye",
        film: "Mere Mehboob",
        year: 1963,
        composer: "Naushad",
        lyricist: "Shakeel Badayuni",
        language: "Hindi",
        theme: "Playful Romance",
        note: "A lively song filled with youthful energy and romantic teasing.",
        youtube: "https://www.youtube.com/results?search_query=Allah+Bachaaye+Mere+Mehboob+1963"
      },
      {
        title: "Mere Mehboob Tujhe",
        film: "Mere Mehboob",
        year: 1963,
        composer: "Naushad",
        lyricist: "Shakeel Badayuni",
        language: "Hindi",
        theme: "Admiration · Devotion",
        note: "A timeless romantic ghazal praising the beauty and grace of the beloved.",
        youtube: "https://www.youtube.com/results?search_query=Mere+Mehboob+Tujhe+Mere+Mehboob+1963"
      },
      {
        title: "Mere Mehboob Mein Kya Nahin",
        film: "Mere Mehboob",
        year: 1963,
        composer: "Naushad",
        lyricist: "Shakeel Badayuni",
        language: "Hindi",
        theme: "Praise · Romantic Awe",
        note: "A celebratory romantic number admiring every quality of the beloved.",
        youtube: "https://www.youtube.com/results?search_query=Mere+Mehboob+Mein+Kya+Nahin+1963"
      },
      {
        title: "Jaaneman Ek Nazar Dekh Le",
        film: "Mere Mehboob",
        year: 1963,
        composer: "Naushad",
        lyricist: "Shakeel Badayuni",
        language: "Hindi",
        theme: "Romantic Appeal",
        note: "A heartfelt plea for one glance from the beloved, filled with emotional longing.",
        youtube: "https://www.youtube.com/results?search_query=Jaaneman+Ek+Nazar+Dekh+Le+Mere+Mehboob+1963"
      },
      {
        title: "Yaad Mein Teri",
        film: "Mere Mehboob",
        year: 1963,
        composer: "Naushad",
        lyricist: "Shakeel Badayuni",
        language: "Hindi",
        theme: "Separation · Devotion",
        note: "A soulful song about remembering a beloved with deep emotional attachment.",
        youtube: "https://www.youtube.com/results?search_query=Yaad+Mein+Teri+Mere+Mehboob+1963"
      },
      {
        title: "Aaja Aayi Bahaar",
        film: "Rajkumar",
        year: 1964,
        composer: "Shankar–Jaikishan",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Celebration · Romance",
        note: "A vibrant song celebrating the arrival of spring and blossoming love.",
        youtube: "https://www.youtube.com/results?search_query=Aaja+Aayi+Bahaar+Rajkumar+1964"
      },
      {
        title: "Naach Re Man",
        film: "Rajkumar",
        year: 1964,
        composer: "Shankar–Jaikishan",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Joy · Festivity",
        note: "An energetic and rhythmic number celebrating joy and movement.",
        youtube: "https://www.youtube.com/results?search_query=Naach+Re+Man+Rajkumar+1964"
      },
      {
        title: "Har Dil Jo Pyaar Karega",
        film: "Sangam",
        year: 1964,
        composer: "Shankar–Jaikishan",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Love · Universality",
        note: "A grand romantic anthem declaring that every heart will one day fall in love.",
        youtube: "https://www.youtube.com/results?search_query=Har+Dil+Jo+Pyaar+Karega+Sangam+1964"
      },
      {
        title: "O Mere Sanam",
        film: "Sangam",
        year: 1964,
        composer: "Shankar–Jaikishan",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Romantic Confession",
        note: "A deeply emotional romantic song filled with longing and heartfelt confession.",
        youtube: "https://www.youtube.com/results?search_query=O+Mere+Sanam+Sangam+1964"
      },
      {
        title: "Lag Ja Gale Se Phir Ye Haseen Raat Ho Na Ho",
        film: "Woh Kaun Thi?",
        year: 1964,
        composer: "Madan Mohan",
        lyricist: "Raja Mehdi Ali Khan",
        language: "Hindi",
        theme: "Ephemeral Love · Intensity",
        note: "An iconic haunting melody expressing the fear of fleeting moments in love.",
        youtube: "https://www.youtube.com/results?search_query=Lag+Ja+Gale+Woh+Kaun+Thi+1964"
      },
      {
        title: "Naina Barase Rimjhim Rimjhim",
        film: "Woh Kaun Thi?",
        year: 1964,
        composer: "Madan Mohan",
        lyricist: "Raja Mehdi Ali Khan",
        language: "Hindi",
        theme: "Mystery · Longing",
        note: "A hauntingly beautiful song blending romance with suspense and melancholy.",
        youtube: "https://www.youtube.com/results?search_query=Naina+Barase+Rimjhim+Rimjhim+Woh+Kaun+Thi+1964"
      },
      {
        title: "Jo Hamne Daastaan Apnee Sunaaee",
        film: "Woh Kaun Thi?",
        year: 1964,
        composer: "Madan Mohan",
        lyricist: "Raja Mehdi Ali Khan",
        language: "Hindi",
        theme: "Confession · Emotional Pain",
        note: "A reflective melody about revealing one's love story and hidden sorrow.",
        youtube: "https://www.youtube.com/results?search_query=Jo+Hamne+Daastaan+Apnee+Sunaaee+Woh+Kaun+Thi+1964"
      },
      {
        title: "Chhod Kar Tere Pyaar Kaa Daaman",
        film: "Woh Kaun Thi?",
        year: 1964,
        composer: "Madan Mohan",
        lyricist: "Raja Mehdi Ali Khan",
        language: "Hindi",
        theme: "Separation · Heartbreak",
        note: "A deeply emotional song expressing the pain of letting go of a cherished love.",
        youtube: "https://www.youtube.com/results?search_query=Chhod+Kar+Tere+Pyaar+Kaa+Daaman+Woh+Kaun+Thi+1964"
      },
      {
        title: "Aji Rooth Kar Ab Kahan Jaiyega",
        film: "Arzoo",
        year: 1965,
        composer: "Shankar–Jaikishan",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Romantic Pleading",
        note: "A playful yet emotional romantic song requesting the beloved not to stay upset.",
        youtube: "https://www.youtube.com/results?search_query=Aji+Rooth+Kar+Ab+Kahan+Jaiyega+Arzoo+1965"
      },
      {
        title: "Bedardi Balma Tujhko",
        film: "Arzoo",
        year: 1965,
        composer: "Shankar–Jaikishan",
        lyricist: "Hasrat Jaipuri",
        language: "Hindi",
        theme: "Heartbreak · Longing",
        note: "A deeply emotional melody expressing pain caused by an indifferent lover.",
        youtube: "https://www.youtube.com/results?search_query=Bedardi+Balma+Tujhko+Arzoo+1965"
      },
      {
        title: "Dil Jo Na Kah Saka",
        film: "Bheegi Raat",
        year: 1965,
        composer: "Roshan",
        lyricist: "Majrooh Sultanpuri",
        language: "Hindi",
        theme: "Unspoken Love",
        note: "A soulful song about feelings that remain unexpressed yet deeply felt.",
        youtube: "https://www.youtube.com/results?search_query=Dil+Jo+Na+Kah+Saka+Bheegi+Raat+1965"
      },
      {
         title: "Aji Rooth Kar Ab Kahan Jaiyega",
         film: "Arzoo",
         year: 1965,
         composer: "Shankar–Jaikishan",
         lyricist: "Hasrat Jaipuri",
         language: "Hindi",
         theme: "Romantic Pleading",
         note: "A playful yet emotional romantic song requesting the beloved not to stay upset.",
         youtube: "https://www.youtube.com/results?search_query=Aji+Rooth+Kar+Ab+Kahan+Jaiyega+Arzoo+1965"
       },
       {
         title: "Bedardi Balma Tujhko",
         film: "Arzoo",
         year: 1965,
         composer: "Shankar–Jaikishan",
         lyricist: "Hasrat Jaipuri",
         language: "Hindi",
         theme: "Heartbreak · Longing",
         note: "A deeply emotional melody expressing pain caused by an indifferent lover.",
         youtube: "https://www.youtube.com/results?search_query=Bedardi+Balma+Tujhko+Arzoo+1965"
       },
       {
       title: "Dil Jo Na Kah Saka",
         film: "Bheegi Raat",
         year: 1965,
         composer: "Roshan",
         lyricist: "Majrooh Sultanpuri",
         language: "Hindi",
         theme: "Unspoken Love",
         note: "A soulful song about feelings that remain unexpressed yet deeply felt.",
         youtube: "https://www.youtube.com/results?search_query=Dil+Jo+Na+Kah+Saka+Bheegi+Raat+1965"
       }
  ],
  "1970s": [
    {
      title: "Tere Bina Zindagi Se",
      film: "Aandhi",
      year: 1975,
      composer: "R.D. Burman",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Separation · Political",
      note: "From Gulzar's landmark film about a woman politician and her estranged husband, this duet with Kishore Kumar achieves an extraordinary intimacy within a story about public and private life. R.D. Burman's arrangement is characteristically inventive.",
      youtube: "https://www.youtube.com/results?search_query=Tere+Bina+Zindagi+Se+Aandhi+1975+Lata"
    },
    {
      title: "Teri Bindiya Re",
      film: "Abhimaan",
      year: 1973,
      composer: "S.D. Burman",
      lyricist: "Majrooh Sultanpuri",
      language: "Hindi",
      theme: "Romance · Domesticity",
      note: "A gentle, intimate song of conjugal love, suffused with the warmth of small moments. S.D. Burman's late-period work here demonstrates a maturity and economy that rewards close listening.",
      youtube: "https://www.youtube.com/results?search_query=Teri+Bindiya+Re+Abhimaan+1973+Lata"
    },
    {
      title: "Bhooli Re",
      film: "Parichay",
      year: 1972,
      composer: "R.D. Burman",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Folk · Memory",
      note: "An evocation of rural memory and the irretrievability of the past, drawn from Gulzar's adaptation of Satyajit Ray's Aranyer Din Ratri. R.D. Burman's use of folk idioms is both scholarly and deeply felt.",
      youtube: "https://www.youtube.com/results?search_query=Bhooli+Re+Parichay+1972+Lata"
    }
  ],
  "1980s": [
    {
      title: "Tujhse Naraz Nahi Zindagi",
      film: "Masoom",
      year: 1983,
      composer: "R.D. Burman",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Acceptance · Grief",
      note: "One of the most philosophically complex songs in mainstream Hindi cinema, articulating an acceptance of life's injustices without bitterness. Lata's restraint here — no embellishment, no theatrical climax — is the performance of a consummate artist.",
      youtube: "https://www.youtube.com/results?search_query=Tujhse+Naraz+Nahi+Zindagi+Masoom+1983+Lata"
    },
    {
      title: "Yaara Seeli Seeli",
      film: "Lekin",
      year: 1990,
      composer: "Hridaynath Mangeshkar",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Ghost · Longing",
      note: "Composed by her younger brother Hridaynath, this atmospheric song for a ghost-story film is one of Lata's most haunting recordings. The National Award recognised both the composition and performance.",
      youtube: "https://www.youtube.com/results?search_query=Yaara+Seeli+Seeli+Lekin+Lata+Mangeshkar"
    },
    {
      title: "Mera Kuch Saaman",
      film: "Ijaazat",
      year: 1987,
      composer: "R.D. Burman",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Memory · Loss",
      note: "Gulzar's extraordinary lyric — cataloguing the detritus of a failed love affair — demands a singer who can hold a long, discursive line with absolute emotional truth. Lata's almost conversational delivery here is among her most technically impressive.",
      youtube: "https://www.youtube.com/results?search_query=Mera+Kuch+Saaman+Ijaazat+1987+Lata"
    },
    {
         title: "Dhak Dhak Kaise Chalti Hai Gaadi",
         film: "Haathi Mere Saathi",
         year: 1971,
         composer: "Laxmikant–Pyarelal",
         lyricist: "Anand Bakshi",
         language: "Hindi",
         theme: "Playful · Lighthearted",
         note: "A cheerful song filled with rhythm and fun energy.",
         youtube: "https://www.youtube.com/results?search_query=Dhak+Dhak+Kaise+Chalti+Hai+Gaadi+Haathi+Mere+Saathi+1971"
       },
       {
         title: "Sun Jaa Aa Thandi Hawa",
         film: "Haathi Mere Saathi",
         year: 1971,
         composer: "Laxmikant–Pyarelal",
         lyricist: "Anand Bakshi",
         language: "Hindi",
         theme: "Romantic · Breeze Motif",
         note: "A soft romantic melody carried by soothing orchestration.",
         youtube: "https://www.youtube.com/results?search_query=Sun+Jaa+Aa+Thandi+Hawa+Haathi+Mere+Saathi+1971"
       },
       {
         title: "Dilbar Jaani Chali Hawa Mastaani",
         film: "Haathi Mere Saathi",
         year: 1971,
         composer: "Laxmikant–Pyarelal",
         lyricist: "Anand Bakshi",
         language: "Hindi",
         theme: "Romantic · Joy",
         note: "A breezy romantic number celebrating youthful love.",
         youtube: "https://www.youtube.com/results?search_query=Dilbar+Jaani+Chali+Hawa+Mastaani+Haathi+Mere+Saathi+1971"
       },
       {
         title: "Jagi Raat Bhari Yaad Me Balam",
         film: "Kajal",
         year: 1965,
         composer: "Ravi",
         lyricist: "Sahir Ludhianvi",
         language: "Hindi",
         theme: "Longing · Separation",
         note: "A deeply emotional song about sleepless nights in remembrance of a beloved.",
         youtube: "https://www.youtube.com/results?search_query=Jagi+Raat+Bhari+Yaad+Me+Balam+Kajal+1965"
       },
       {
         title: "Aaja Re Aaja Mere Sajana Aa",
         film: "Anpadh",
         year: 1962,
         composer: "Madan Mohan",
         lyricist: "Raja Mehdi Ali Khan",
         language: "Hindi",
         theme: "Romantic Yearning",
         note: "A tender plea inviting the beloved with emotional intensity.",
         youtube: "https://www.youtube.com/results?search_query=Aaja+Re+Aaja+Mere+Sajana+Anpadh+1962"
       },
       {
         title: "Beeti Na Bitai Raina",
         film: "Parichay",
         year: 1972,
         composer: "R. D. Burman",
         lyricist: "Gulzar",
         language: "Hindi",
         theme: "Classical · Longing",
         note: "A hauntingly beautiful semi-classical piece expressing restless yearning.",
         youtube: "https://www.youtube.com/results?search_query=Beeti+Na+Bitai+Raina+Parichay+1972"
       },
       {
         title: "Chalte Chalte",
         film: "Pakeezah",
         year: 1972,
         composer: "Ghulam Mohammed",
         lyricist: "Kaifi Azmi",
         language: "Hindi",
         theme: "Grace · Melancholy",
         note: "A graceful and emotional song filled with poetic elegance.",
         youtube: "https://www.youtube.com/results?search_query=Chalte+Chalte+Pakeezah+1972"
       },
       {
         title: "Mausam Hai Aashiqana",
         film: "Pakeezah",
         year: 1972,
         composer: "Ghulam Mohammed",
         lyricist: "Kamal Amrohi",
         language: "Hindi",
         theme: "Romantic · Poetic",
         note: "A timeless melody celebrating love in its most poetic form.",
         youtube: "https://www.youtube.com/results?search_query=Mausam+Hai+Aashiqana+Pakeezah+1972"
       },
       {
         title: "Inhi Logon Ne",
         film: "Pakeezah",
         year: 1972,
         composer: "Ghulam Mohammed",
         lyricist: "Majrooh Sultanpuri",
         language: "Hindi",
         theme: "Classical · Dance",
         note: "A lively mujra number known for its expressive performance.",
         youtube: "https://www.youtube.com/results?search_query=Inhi+Logon+Ne+Pakeezah+1972"
       },
       {
         title: "Ek Pyar Ka Naghma Hai",
         film: "Shor",
         year: 1972,
         composer: "Laxmikant–Pyarelal",
         lyricist: "Santosh Anand",
         language: "Hindi",
         theme: "Philosophical · Love",
         note: "A deeply meaningful song reflecting on life and love as a flowing melody.",
         youtube: "https://www.youtube.com/results?search_query=Ek+Pyar+Ka+Naghma+Hai+Shor+1972"
       },
       {
         title: "Bahon Mein Chale Aao",
         film: "Anamika",
         year: 1973,
         composer: "R. D. Burman",
         lyricist: "Majrooh Sultanpuri",
         language: "Hindi",
         theme: "Intimate · Romance",
         note: "A soft, intimate romantic song inviting closeness and warmth.",
         youtube: "https://www.youtube.com/results?search_query=Bahon+Mein+Chale+Aao+Anamika+1973"
       },
       {
         title: "Tere Bina Jiya Jaye Naa",
         film: "Ghar",
         year: 1978,
         composer: "R. D. Burman",
         lyricist: "Gulzar",
         language: "Hindi",
         theme: "Emotional Dependence · Love",
         note: "A powerful expression of longing and emotional attachment.",
         youtube: "https://www.youtube.com/results?search_query=Tere+Bina+Jiya+Jaye+Naa+Ghar+1978"
       },
       {
         title: "Jiya Jale",
         film: "Dil Se",
         year: 1998,
         composer: "A. R. Rahman",
         lyricist: "Gulzar",
         language: "Hindi",
         theme: "Passionate Love",
         note: "A sensuous and rhythmically vibrant song expressing intense love.",
         youtube: "https://www.youtube.com/results?search_query=Jiya+Jale+Dil+Se+1998"
       },
       {
         title: "Luka Chuppi",
         film: "Rang De Basanti",
         year: 2006,
         composer: "A. R. Rahman",
         lyricist: "Prasoon Joshi",
         language: "Hindi",
         theme: "Motherly Love · Separation",
         note: "A deeply emotional song about a mother’s longing for her son.",
         youtube: "https://www.youtube.com/results?search_query=Luka+Chuppi+Rang+De+Basanti+2006"
       },
       {
         title: "Hole Hole Ek Bhi Na Ghungru Bole",
         film: "Jheel Ke Us Paar",
         year: 1973,
         composer: "R. D. Burman",
         lyricist: "Anand Bakshi",
         language: "Hindi",
         theme: "Dance · Playful Romance",
         note: "A rhythmic and graceful song built around delicate dance movements.",
         youtube: "https://www.youtube.com/results?search_query=Hole+Hole+Ek+Bhi+Na+Ghungru+Bole+Jheel+Ke+Us+Paar+1973"
       },
       {
         title: "Mera Jwala Naam Jiya Jalana Kaam",
         film: "Zanjeer",
         year: 1973,
         composer: "Kalyanji–Anandji",
         lyricist: "Gulshan Bawra",
         language: "Hindi",
         theme: "Cabaret · Bold",
         note: "A fiery cabaret-style number full of dramatic flair.",
         youtube: "https://www.youtube.com/results?search_query=Mera+Jwala+Naam+Jiya+Jalana+Kaam+Zanjeer+1973"
       },
       {
         title: "Suno Suno Ek Baat Kahu",
         film: "Memsaab",
         year: 1971,
         composer: "Sonik–Omi",
         lyricist: "Indeevar",
         language: "Hindi",
         theme: "Romantic Conversation",
         note: "A light romantic exchange set to a melodious tune.",
         youtube: "https://www.youtube.com/results?search_query=Suno+Suno+Ek+Baat+Kahu+Memsaab+1971"
       },
       {
         title: "Mujhe Dhund Le Aa Kar Saiya",
         film: "Bhupinder Singh Collection",
         year: 1970,
         composer: "Madan Mohan",
         lyricist: "Raja Mehdi Ali Khan",
         language: "Hindi",
         theme: "Longing · Devotion",
         note: "A soft emotional plea filled with yearning.",
         youtube: "https://www.youtube.com/results?search_query=Mujhe+Dhund+Le+Aa+Kar+Saiya+Madan+Mohan"
       },
       {
         title: "Megha Chhaye Aadhi Raat",
         film: "Sharmilee",
         year: 1971,
         composer: "S. D. Burman",
         lyricist: "Neeraj",
         language: "Hindi",
         theme: "Monsoon · Longing",
         note: "A haunting melody set against a rainy night atmosphere.",
         youtube: "https://www.youtube.com/results?search_query=Megha+Chhaye+Aadhi+Raat+Sharmilee+1971"
       },
       {
         title: "Rimjhim Rimjhim Dekho Baras Rahee Hai",
         film: "Shehzada",
         year: 1972,
         composer: "R. D. Burman",
         lyricist: "Majrooh Sultanpuri",
         language: "Hindi",
         theme: "Rain · Romance",
         note: "A joyful monsoon song celebrating love in the rain.",
         youtube: "https://www.youtube.com/results?search_query=Rimjhim+Rimjhim+Dekho+Baras+Rahee+Hai+Shehzada+1972"
       },
       {
         title: "Naa Jaeeyo Naa Jaeeyo Chhod Ke Naa",
         film: "Mujhe Jeene Do",
         year: 1963,
         composer: "Jaidev",
         lyricist: "Sahir Ludhianvi",
         language: "Hindi",
         theme: "Pleading · Separation",
         note: "A soulful plea asking the beloved not to leave.",
         youtube: "https://www.youtube.com/results?search_query=Naa+Jaeeyo+Naa+Jaeeyo+Chhod+Ke+Naa+Mujhe+Jeene+Do+1963"
       },
       {
         title: "Apna Hari Hai Hazaar Hath Wala",
         film: "Hari Darshan",
         year: 1972,
         composer: "Kalyanji–Anandji",
         lyricist: "Pradeep",
         language: "Hindi",
         theme: "Devotional",
         note: "A bhajan praising the divine power of Lord Vishnu.",
         youtube: "https://www.youtube.com/results?search_query=Apna+Hari+Hai+Hazaar+Hath+Wala+Hari+Darshan+1972"
       },
       {
         title: "Jai Jai Narayan",
         film: "Hari Darshan",
         year: 1972,
         composer: "Kalyanji–Anandji",
         lyricist: "Pradeep",
         language: "Hindi",
         theme: "Devotional",
         note: "A celebratory bhajan filled with spiritual devotion.",
         youtube: "https://www.youtube.com/results?search_query=Jai+Jai+Narayan+Hari+Darshan+1972"
       },
       {
         title: "Marne Wala Hai Bhagwan",
         film: "Hari Darshan",
         year: 1972,
         composer: "Kalyanji–Anandji",
         lyricist: "Pradeep",
         language: "Hindi",
         theme: "Spiritual Reflection",
         note: "A devotional song reflecting on faith and destiny.",
         youtube: "https://www.youtube.com/results?search_query=Marne+Wala+Hai+Bhagwan+Hari+Darshan+1972"
       }
  ],
  "1990s": [
    {
      title: "Didi Tera Dewar Deewana",
      film: "Hum Aapke Hain Koun",
      year: 1994,
      composer: "Raam Laxman",
      lyricist: "Dev Kohli",
      language: "Hindi",
      theme: "Celebration · Family",
      note: "A playful, exuberant song of domestic festivity that became one of the decade's defining popular recordings. The film's enormous commercial success made this among the most-heard songs of the 1990s.",
      youtube: "https://www.youtube.com/results?search_query=Didi+Tera+Dewar+Deewana+Hum+Aapke+Hain+Koun+Lata"
    },
    {
      title: "Mere Haath Mein",
      film: "Fanaa",
      year: 1997,
      composer: "Jatin-Lalit",
      lyricist: "Majrooh Sultanpuri",
      language: "Hindi",
      theme: "Romance · Tenderness",
      note: "A tender duet from Lata's later period, demonstrating the continued purity and clarity of her voice into her late sixties — a remarkable feat of vocal preservation across a half-century of recording.",
      youtube: "https://www.youtube.com/results?search_query=Lata+Mangeshkar+1990s+romantic+song"
    },
    {
      title: "O Paalanhaare",
      film: "Lagaan",
      year: 2001,
      composer: "A.R. Rahman",
      lyricist: "Javed Akhtar",
      language: "Hindi",
      theme: "Devotion · Courage",
      note: "A late-career recording that demonstrates Lata's enduring ability to inhabit devotional compositions. Her collaboration with A.R. Rahman in the internationally acclaimed Lagaan introduced her voice to a new global audience.",
      youtube: "https://www.youtube.com/results?search_query=O+Paalanhaare+Lagaan+Lata+Mangeshkar"
    }
  ]
};

// ── Navigation ─────────────────────────────────────
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
  const link = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeNav();
}

function closeNav() {
  document.getElementById('mainNav').classList.remove('open');
}

// ── Nav links ──────────────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

// ── Site title ──────────────────────────────────────
document.querySelector('.site-title').addEventListener('click', e => {
  e.preventDefault();
  showPage('home');
});

// ── Mobile nav toggle ─────────────────────────────
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});

// ── Home decade cards → archive page ──────────────
document.querySelectorAll('.decade-card').forEach(card => {
  card.addEventListener('click', () => {
    const decade = card.dataset.decade;
    showPage('archive');
    setTimeout(() => activateDecade(decade), 50);
  });
});

// ── Decade tabs ────────────────────────────────────
function activateDecade(decade) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.decade === decade);
  });
  renderSongs(decade);
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => activateDecade(btn.dataset.decade));
});

// ── Render song cards ─────────────────────────────
function renderSongs(decade) {
  const grid = document.getElementById('songsGrid');
  const list = songs[decade] || [];
  if (!list.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;color:var(--ink-muted);font-style:italic;">No entries yet for this decade. Coming soon.</p>';
    return;
  }
  grid.innerHTML = list.map(song => `
    <article class="song-card">
      <div>
        <div class="song-film">${song.film} · ${song.year}</div>
        <h3 class="song-title">${song.title}</h3>
      </div>
      <div class="song-meta">
        <span><span class="meta-label">Composer</span><span class="meta-value">${song.composer}</span></span>
        <span><span class="meta-label">Lyricist</span><span class="meta-value">${song.lyricist}</span></span>
        <span><span class="meta-label">Language</span><span class="meta-value">${song.language}</span></span>
        <span><span class="meta-label">Decade</span><span class="meta-value">${decade}</span></span>
      </div>
      <span class="song-theme">${song.theme}</span>
      <p class="song-note">${song.note}</p>
      <a class="song-link" href="${song.youtube}" target="_blank" rel="noopener">Listen on YouTube</a>
    </article>
  `).join('');
}

// ── Initial load ───────────────────────────────────
renderSongs('1940s');

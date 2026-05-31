import { useState, useEffect, useRef } from "react";

const ALL = {"en":{"nav":{"home":"Home","about":"About","profile":"Profile","credits":"Credits","events":"Events","parayana":"Pārāyaṇa","support":"Sponsor","testimonials":"Testimonials","contact":"Contact","youtube":"YouTube","logo_name":"Samskruti","logo_tag":"సంస్కృతి • संस्कृति"},"hero":{"greeting":"Śrī Gaṇeśāya Namaḥ","name":"Karthikeya Pidaparthy","age_location":"Age 10 · Sydney, Australia","description":"A young scholar of Sanskrit, Telugu and English — who memorised all 700 verses of the Bhagavad Gītā and received the Gold Medal from Mysore Datta Peetham; laureate of the Sanskrit Olympiad (1st in Australia); devoted pārāyaṇa seeker in the grand tradition of Sanātana Dharma.","btn_achievements":"View Achievements","btn_youtube":"▶ YouTube Channel","badges":["🏅 Gold Medal — Mysore Datta Peetham","🥇 Sanskrit Olympiad — 1st in Australia","📖 Bhagavad Gītā · 700 Verses","🕉 Soundaryalaharī · 100 Verses","🎤 Śivapadams by Samavedam"]},"about":{"section_title":"About Karthikeya","para1":"Born in Sydney, Australia into a family deeply rooted in the Vedic tradition, Karthikeya Pidaparthy has been immersed in the world of Sanskrit, scripture and classical Telugu literature from his earliest years. Far from the land of his ancestors yet firmly anchored in their wisdom, he embodies the living continuity of Sanātana Dharma.","para2":"At the remarkable age of 10, he balances the demands of a modern Australian schooling with daily devotional practice, regular temple pārāyaṇa, and serious academic engagement with Sanskrit — a feat that has drawn the admiration of revered scholars from across India and the diaspora.","quote_sa":"विद्या ददाति विनयम् ।","quote_iast":"vidyā dadāti vinayam","quote_te":"విద్య వినయమిస్తుంది.","quote_en":"Knowledge bestows humility.","cards":[{"title":"Languages","body":"Fluent in Telugu, English and profoundly versed in Sanskrit. He reads and writes in Devanāgarī, Telugu and Roman IAST scripts. His Telugu is so pure that at age 3–4 he won the 'Para Bhāṣa Lekundā Telugu Lo' competition — spoken Telugu free of foreign words."},{"title":"Scriptural Depth","body":"Has listened to the complete Rāmāyaṇa and Mahābhārata pravachanams of Chaganti Koteswara Rao in their entirety. Familiar with stories from the Bhāgavata, Upaniṣads and all major Itihāsas. He has also explored the 'Stories Behind Temples' series by Vyoma Linguistics Labs."},{"title":"Community & Devotion","body":"Regularly performs Viṣṇu Sahasranāma and Lalitā Sahasranāma pārāyaṇa at Sydney Murugan Temple. Performed Soundaryalaharī at Navarātri in Sydney Ayyappa Temple. Chanted the complete Bhagavad Gītā at Helensburgh Temple."}]},"profile":{"section_title":"Profile & Achievements","journey_title":"The Sanskrit Journey","journey":"Karthikeya's love for Sanskrit was kindled at home from a very young age. Long before formal schooling, he was immersed in the sounds and rhythms of Sanskrit verses, listening to his family recite stotras and prayers. This early immersion laid the foundation for what would become an extraordinary academic and spiritual journey.\n\nHis formal Sanskrit examinations through the Saṃskṛta Bhāratī programme trace a remarkable arc of excellence — each year he has not merely passed but mastered each level with distinction:\n\n• Āyanam (2022) — 100%\n• Sāriṇī (2023) — 98%\n• Saralā (2024) — 94%\n• Sugamā (2025) — 98%\n• Sarasā (2026) — 96%\n\nAcross five consecutive years, he has maintained an average of 97.2% — a testament to consistent dedication and genuine love for the language of the Vedas. He also explored the rich 'Stories Behind Temples' video series by Vyoma Linguistics Labs, deepening his understanding of the cultural and mythological heritage woven into India's sacred geography.","achievements":[{"icon":"🥇","title":"Gold Medal — Bhagavad Gītā","desc":"Awarded the prestigious Gold Medal by Mysore Datta Peetham for memorising and flawlessly reciting all 700 verses of the Śrīmad Bhagavad Gītā — a monumental feat of memory, devotion and discipline.","year":"Mysore Datta Peetham","tag":"gold"},{"icon":"📖","title":"Bhagavad Gītā — Helensburgh Temple","desc":"Chanted the complete Śrīmad Bhagavad Gītā (all 18 chapters, 700 verses) at Helensburgh Temple on the auspicious occasion of Paṇḍit Rishikesh Bhattar's Ṣaṣṭipūrti Mahōtsavam — a rare honour and a deeply moving devotional offering.","year":"Helensburgh Temple · Ṣaṣṭipūrti Mahōtsavam","tag":"gold"},{"icon":"🏆","title":"Sanskrit Olympiad — 1st in Australia","desc":"Secured 1st place in Australia in the Central Sanskrit University's National Sanskrit Olympiad for two consecutive years. In the previous year he achieved All India Rank 266 — competing against thousands of students across India.","year":"Central Sanskrit University · 2 consecutive years","tag":"olympiad"},{"icon":"📊","title":"Sanskrit Examinations — 5 Years of Excellence","desc":"Āyanam 2022 (100%) · Sāriṇī 2023 (98%) · Saralā 2024 (94%) · Sugamā 2025 (98%) · Sarasā 2026 (96%). Five years of consecutive excellence with a 97.2% average — each level progressively more advanced.","year":"Saṃskṛta Bhāratī Programme · 2022–2026","tag":"olympiad"},{"icon":"🕉","title":"Soundaryalaharī Pārāyaṇa","desc":"Memorised all 100 verses of Ādi Śaṅkarācārya's Soundaryalaharī — one of the most celebrated Sanskrit hymns on the Divine Mother — and performed the complete pārāyaṇa at Sydney Ayyappa Temple during Navarātri.","year":"Sydney Ayyappa Temple · Navarātri","tag":"parayana"},{"icon":"📜","title":"Viṣṇu & Lalitā Sahasranāma","desc":"Regularly performs the complete Viṣṇu Sahasranāma and Lalitā Sahasranāma pārāyaṇa at Sydney Murugan Temple, contributing to the devotional life of Sydney's Hindu community.","year":"Sydney Murugan Temple · Regular","tag":"parayana"},{"icon":"🎤","title":"Śivapadams — Samavedam Shanmukha Sharma","desc":"Recited 10 Śivapadam poems composed by the renowned scholar Samavedam Shanmukha Sharma in his presence during his Sydney visit. The great scholar was moved and presented Karthikeya with a special memento in appreciation.","year":"Sydney · April · Samavedam Shanmukha Sharma's visit","tag":"scholar"},{"icon":"✍","title":"Saṅkaṭanāśana Ganeśa Stotram — Offered to Scholars","desc":"Personally transcribed and offered a handwritten copy of the Saṅkaṭanāśana Ganeśa Stotram to three eminent scholars: Vaddiparti Padmakar, Samavedam Shanmukha Sharma and Madugula Naga Phani Sharma.","year":"Personal offering to three great scholars","tag":"scholar"},{"icon":"🎭","title":"Avadānam — Aprastuta Prasaṅga","desc":"Participated as the Aprastuta Prasaṅga Pṛcchakudu (off-topic questioner) in the prestigious avadānam performed by the celebrated poet-scholar Taṭavarti Kalyāṇ — a role requiring sharp wit and spontaneous creativity.","year":"Taṭavarti Kalyāṇ Avadānam · Sydney","tag":"scholar"},{"icon":"🏅","title":"Mānava Kathā & Gajendra Mokṣam — Winner","desc":"Won prizes in the Mānava Kathā and Gajendra Mokṣam competitions organised by Pranava Peetham under the guidance of Vaddiparti Padmakar.","year":"Pranava Peetham · Vaddiparti Padmakar","tag":"competition"},{"icon":"🎊","title":"Cultural Competitions — Multiple Prizes","desc":"Won multiple prizes in Rāmāyaṇa and Daśāvatāra storytelling competitions organised by Sydney Jana Ranjani, and in poetry competitions organised by Pranava Peetham.","year":"Sydney Jana Ranjani · Pranava Peetham","tag":"competition"},{"icon":"🗣","title":"'Para Bhāṣa Lekundā Telugu Lo' — Winner","desc":"At the extraordinary age of 3–4 years, won the 'Para Bhāṣa Lekundā Telugu Lo' competition — speaking pure Telugu entirely free of borrowed foreign words. A remarkable early indication of his linguistic gifts.","year":"Age ~3–4 years · Telugu language competition","tag":"competition"},{"icon":"📺","title":"Bhāratam Laghu Prasaṅgālu","desc":"Delivered a published series of short discourses on the Mahābhārata on YouTube, demonstrating a depth of understanding of the great Itihāsa far beyond his years. He has listened to the complete Bhārata and Rāmāyaṇa pravachanams of Chaganti Koteswara Rao.","year":"YouTube Series · samskruti.info.1","tag":"discourse"}],"exam_table_title":"Sanskrit Examination Record","exam_table":[{"year":"2022","exam":"Āyanam","score":"100%","grade":"🌟"},{"year":"2023","exam":"Sāriṇī","score":"98%","grade":"🌟"},{"year":"2024","exam":"Saralā","score":"94%","grade":"⭐"},{"year":"2025","exam":"Sugamā","score":"98%","grade":"🌟"},{"year":"2026","exam":"Sarasā","score":"96%","grade":"🌟"}],"photo_placeholder":"Certificate & Achievement Photos","photo_placeholder_sub":"Certificates and event photographs will be displayed here"},"credits":{"section_title":"Credits & Gratitude","intro":"Karthikeya's remarkable journey has been shaped by the grace and guidance of great scholars, revered organisations and a loving community. With deep gratitude:","list":[{"name":"Mysore Datta Peetham","role":"Gold Medal — Bhagavad Gītā Pārāyaṇa"},{"name":"Central Sanskrit University","role":"Sanskrit Olympiad — organiser & recognition"},{"name":"Samavedam Shanmukha Sharma","role":"Śivapadam composer · Inspiration · Memento"},{"name":"Vaddiparti Padmakar","role":"Pranava Peetham · Poetry mentor · Competitions"},{"name":"Madugula Naga Phani Sharma","role":"Scholar · Blessing · Encouragement"},{"name":"Paṇḍit Rishikesh Bhattar","role":"Ṣaṣṭipūrti Mahōtsavam · Helensburgh Temple"},{"name":"Taṭavarti Kalyāṇ","role":"Avadānam — Aprastuta Prasaṅga honour"},{"name":"Chaganti Koteswara Rao","role":"Rāmāyaṇa & Mahābhārata pravachanams"},{"name":"Vyoma Linguistics Labs","role":"Stories Behind Temples · Sanskrit learning"},{"name":"Sydney Jana Ranjani","role":"Cultural competitions & recognition"},{"name":"Sydney Murugan Temple","role":"Pārāyaṇa venue & spiritual community"},{"name":"Sydney Ayyappa Temple","role":"Soundaryalaharī pārāyaṇa · Navarātri"},{"name":"Helensburgh Temple","role":"Bhagavad Gītā pārāyaṇa venue"},{"name":"Pranava Peetham","role":"Mānava Kathā · Gajendra Mokṣam · Poetry"}]},"events":{"section_title":"Events & Milestones","events_placeholder":"Event photographs will appear here","list":[{"date":"Sydney · April","title":"Śivapadam Recitation — Samavedam Shanmukha Sharma","desc":"Recited 10 Śivapadam poems composed by the renowned scholar in his presence during his Sydney visit. Received a special memento in recognition.","has_photo":true},{"date":"Sydney · Navarātri","title":"Soundaryalaharī Pārāyaṇa — Ayyappa Temple","desc":"Performed the complete pārāyaṇa of Soundaryalaharī (100 verses) at Sydney Ayyappa Temple across the nine sacred nights of Navarātri.","has_photo":true},{"date":"Helensburgh Temple","title":"Bhagavad Gītā — Ṣaṣṭipūrti Mahōtsavam","desc":"Chanted the complete Śrīmad Bhagavad Gītā on the occasion of Paṇḍit Rishikesh Bhattar's Ṣaṣṭipūrti (60th Birthday) Mahōtsavam — all 700 verses as a devotional offering.","has_photo":true},{"date":"Central Sanskrit University · This Year","title":"Sanskrit Olympiad — 1st Place in Australia","desc":"Achieved 1st place in Australia in the National Sanskrit Olympiad. Previously secured All India Rank 266 — two consecutive years of national-level recognition.","has_photo":true},{"date":"Mysore Datta Peetham","title":"Gold Medal — Bhagavad Gītā 700 Verses","desc":"Awarded the Gold Medal for memorising and reciting all 700 verses of the Śrīmad Bhagavad Gītā by the revered Mysore Datta Peetham.","has_photo":true},{"date":"Sydney · Avadānam","title":"Taṭavarti Kalyāṇ Avadānam","desc":"Participated as the Aprastuta Prasaṅga Pṛcchakudu (off-topic questioner) in the celebrated scholar's prestigious avadānam performance.","has_photo":true},{"date":"Pranava Peetham","title":"Mānava Kathā & Gajendra Mokṣam — Winner","desc":"Won prizes in both Mānava Kathā and Gajendra Mokṣam competitions under the guidance of Vaddiparti Padmakar.","has_photo":false},{"date":"Sydney Jana Ranjani","title":"Rāmāyaṇa & Daśāvatāra — Prizes","desc":"Multiple prizes in Rāmāyaṇa and Daśāvatāra storytelling competitions, and poetry competitions by Pranava Peetham.","has_photo":false},{"date":"Age ~3–4 years","title":"'Para Bhāṣa Lekundā Telugu Lo' — Winner","desc":"Won this Telugu language purity competition at the remarkable age of 3–4 — the earliest sign of his extraordinary linguistic gift.","has_photo":false}]},"parayana":{"section_title":"Pārāyaṇa","intro":"Karthikeya regularly performs these sacred pārāyaṇas. Each Sanskrit verse is displayed in three scripts — select your preferred script using the tabs below.","tab_te":"Telugu","tab_dev":"Devanāgarī","tab_iast":"IAST","stotras":[{"id":"bg","title":"Bhagavad Gītā · 700 Verses","te":"యదా యదా హి ధర్మస్య గ్లానిర్భవతి భారత ।\nఅభ్యుత్థానమధర్మస్య తదాత్మానం సృజామ్యహమ్ ॥","dev":"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥","iast":"yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||","attribution":"Bhagavad Gītā 4.7 — \"Whenever righteousness declines, I manifest myself.\" Memorised all 700 verses; Gold Medal, Mysore Datta Peetham."},{"id":"vs","title":"Viṣṇu Sahasranāma","te":"విశ్వం విష్ణుర్వషట్కారో భూతభవ్యభవత్ప్రభుః ।\nభూతకృద్భూతభృద్భావో భూతాత్మా భూతభావనః ॥","dev":"विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः ।\nभूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः ॥","iast":"viśvaṁ viṣṇur vaṣaṭkāro bhūtabhavyabhavatprabhuḥ |\nbhūtakṛd bhūtabhṛd bhāvo bhūtātmā bhūtabhāvanaḥ ||","attribution":"Opening śloka — performed regularly at Sydney Murugan Temple."},{"id":"ls","title":"Lalitā Sahasranāma","te":"శ్రీమాతా శ్రీమహారాజ్ఞీ శ్రీమత్సింహాసనేశ్వరీ ।\nచిదగ్నికుండసంభూతా దేవకార్యసముద్యతా ॥","dev":"श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी ।\nचिदग्निकुण्डसम्भूता देवकार्यसमुद्यता ॥","iast":"śrīmātā śrīmahārājñī śrīmatsinhāsaneśvarī |\ncidagnikuṇḍasambhūtā devakāryasamudyatā ||","attribution":"Opening nāmas — performed regularly at Sydney Murugan Temple."},{"id":"sl","title":"Soundaryalaharī · 100 Verses","te":"శివః శక్త్యా యుక్తో యది భవతి శక్తః ప్రభవితుం\nన చేదేవం దేవో న ఖలు కుశలః స్పందితుమపి ।","dev":"शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि ।","iast":"śivaḥ śaktyā yukto yadi bhavati śaktaḥ prabhavituṁ\nna cedevaṁ devo na khalu kuśalaḥ spanditum api |","attribution":"Opening verse of Soundaryalaharī by Ādi Śaṅkarācārya — all 100 verses memorised and performed at Navarātri, Sydney Ayyappa Temple."},{"id":"sg","title":"Saṅkaṭanāśana Ganeśa Stotram","te":"ప్రణమ్య శిరసా దేవం గౌరీపుత్రం వినాయకమ్ ।\nభక్తావాసం స్మరేన్నిత్యమాయుఃకామార్థసిద్ధయే ॥","dev":"प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।\nभक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये ॥","iast":"praṇamya śirasā devaṁ gaurīputraṁ vināyakam |\nbhaktāvāsaṁ smaren nityam āyuḥkāmārthasiddhaye ||","attribution":"Handwritten copy offered personally to Vaddiparti Padmakar, Samavedam Shanmukha Sharma and Madugula Naga Phani Sharma."}]},"support":{"section_title":"Support & Sponsor","intro":"Encouraging Karthikeya's spiritual and academic journey is a noble act of dharma. Your support enables him to participate in competitions, travel to events and produce more devotional and educational content.","cards":[{"icon":"🙏","title":"Blessings & Encouragement","desc":"Send your blessings, words of encouragement, or share his achievements within your community. Every message of support inspires him to continue forward."},{"icon":"📚","title":"Sponsor His Education","desc":"Support Sanskrit exam registrations, study materials, books, and his participation in competitions across Australia and India."},{"icon":"🎬","title":"Subscribe & Share","desc":"Subscribe to his YouTube channel @samskruti.info.1 and share his videos to help spread the beauty of Sanskrit and the living tradition of Sanātana Dharma."},{"icon":"🤝","title":"Invite to Your Event","desc":"Invite Karthikeya to perform pārāyaṇa, deliver a discourse, or participate in competitions and festivals at your temple, school or cultural organisation."}]},"testimonials":{"section_title":"Testimonials","list":[{"text":"Karthikeya's recitation of the Śivapadams was truly remarkable. The clarity of pronunciation, the depth of feeling, and the devotion in one so young is a rare and precious gift. May he continue to illuminate the tradition.","by":"Samavedam Shanmukha Sharma","role":"Renowned Telugu Scholar & Poet · Sydney Visit"},{"text":"It is heartening to see the next generation embrace Sanskrit with such commitment and joy. His performance in the Olympiad reflects both extraordinary natural talent and deeply disciplined practice.","by":"Central Sanskrit University","role":"Sanskrit Olympiad — 1st Place in Australia"},{"text":"During Navarātri, Karthikeya's pārāyaṇa of Soundaryalaharī filled our temple with a truly sacred vibration. Such devotion and memorisation from a 10-year-old is nothing short of divine grace.","by":"Sydney Ayyappa Temple","role":"Navarātri Soundaryalaharī Pārāyaṇa"}]},"youtube":{"section_title":"YouTube Channel","channel_name":"Samskruti · @samskruti.info.1","channel_sub":"Sanskrit · Telugu · Devotional · Pārāyaṇa · Discourses","channel_url":"https://www.youtube.com/@samskruti.info.1","bharatam_title":"Bhāratam Laghu Prasaṅgālu","bharatam_desc":"A YouTube series of short discourses on the Mahābhārata — watch the full playlist","bharatam_url":"https://www.youtube.com/watch?v=xB1CT8539J0&list=PL-V59KU-Q6hdZckKaiR-W8U7WNjyCiUiZ","videos":[{"title":"Bhagavad Gītā Pārāyaṇa","meta":"700 Verses · Karthikeya Pidaparthy"},{"title":"Sanskrit Recitations","meta":"Stotras · Sahasranāmas · Devotional Hymns"},{"title":"Bhāratam Laghu Prasaṅgālu","meta":"Mahābhārata Discourses · Full Series"}]},"contact":{"section_title":"Contact","intro":"To invite Karthikeya for events, pārāyaṇa, competitions or discourses — or simply to send your blessings and enquiries — please write to us.","location_city":"Sydney, New South Wales","location_country":"Australia","youtube_label":"YouTube Channel","form_name":"Your Name","form_email":"Your Email","form_subject":"Subject","form_message":"Your message, blessings or enquiry…","form_submit":"Send Message ✉","form_thanks":"🙏 Thank you! We will respond soon.","quote_sa":"सर्वे भवन्तु सुखिनः ।","quote_en":"May all be happy."},"footer":{"sa":"ॐ तत्सत् । श्रीकृष्णार्पणमस्तु ।","iast":"Oṃ tat sat · Śrī Kṛṣṇārpaṇam astu","copy":"© 2025 Karthikeya Pidaparthy · Sydney, Australia"},"settings":{"title":"Settings","theme":"Theme","theme_light":"☀ Light","theme_dark":"☽ Dark","font_size":"Font Size","accent":"Accent Colour","language":"Language"}},"te":{"nav":{"home":"హోమ్","about":"పరిచయం","profile":"ప్రొఫైల్","credits":"కృతజ్ఞతలు","events":"కార్యక్రమాలు","parayana":"పారాయణ","support":"సహకారం","testimonials":"అభిప్రాయాలు","contact":"సంప్రదించండి","youtube":"యూట్యూబ్","logo_name":"సంస్కృతి","logo_tag":"Samskruti • संस्कृति"},"hero":{"greeting":"శ్రీ గణేశాయ నమః","name":"కార్తికేయ పీడపర్తి","age_location":"వయసు 10 · సిడ్నీ, ఆస్ట్రేలియా","description":"సంస్కృతం, తెలుగు మరియు ఇంగ్లీషులో అసమాన పాండిత్యం కలిగిన యువ విద్వాంసుడు — భగవద్గీత 700 శ్లోకాలు కంఠస్థం చేసి మైసూర్ దత్త పీఠం నుండి స్వర్ణపతకం అందుకున్నాడు; సంస్కృత ఒలింపియాడ్‌లో ఆస్ట్రేలియా ప్రథముడు; సనాతన ధర్మ మహాసంప్రదాయంలో నిష్ఠావంతమైన పారాయణ సాధకుడు.","btn_achievements":"విజయాలు చూడండి","btn_youtube":"▶ యూట్యూబ్ చానెల్","badges":["🏅 స్వర్ణపతకం — మైసూర్ దత్త పీఠం","🥇 సంస్కృత ఒలింపియాడ్ — ఆస్ట్రేలియా ప్రథమ","📖 భగవద్గీత · 700 శ్లోకాలు","🕉 సౌందర్యలహరి · 100 శ్లోకాలు","🎤 సమవేదం రచించిన శివపదాలు"]},"about":{"section_title":"కార్తికేయ గురించి","para1":"సిడ్నీ, ఆస్ట్రేలియాలో వేద సంప్రదాయాన్ని లాలించే కుటుంబంలో జన్మించిన కార్తికేయ పీడపర్తి, చిన్నప్పటి నుండే సంస్కృతం, శాస్త్రం మరియు శాస్త్రీయ తెలుగు సాహిత్య ప్రపంచంలో నిమగ్నమయ్యాడు. పితరుల భూమికి దూరంగా ఉన్నా వారి జ్ఞానంలో దృఢంగా నిలబడి, సనాతన ధర్మ జీవన్ నిరంతరతకు మూర్తీభవించాడు.","para2":"10 సంవత్సరాల అద్భుతమైన వయసులో, ఆధునిక ఆస్ట్రేలియా పాఠశాల విద్యతోపాటు నిత్య భక్తి సాధన, నిత్య ఆలయ పారాయణ మరియు సంస్కృతంలో తీవ్ర విద్యా ప్రమేయం సమతుల్యంగా నిర్వహిస్తున్నాడు — భారతదేశం నలుమూలల విద్వాంసుల మన్ననలు అందుకుంటున్నాడు.","quote_sa":"विद्या ददाति विनयम् ।","quote_iast":"vidyā dadāti vinayam","quote_te":"విద్య వినయమిస్తుంది.","quote_en":"జ్ఞానం వినయాన్ని ప్రసాదిస్తుంది.","cards":[{"title":"భాషలు","body":"తెలుగు, ఇంగ్లీషులో ప్రవాహంగా మాట్లాడతాడు; సంస్కృతంలో అపారమైన పాండిత్యం ఉంది. దేవనాగరి, తెలుగు మరియు Roman IAST లిపులు చదువుతాడు. 3-4 ఏళ్ళకే 'పర భాష లేకుండా తెలుగులో' పోటీ గెలుచుకున్నాడు."},{"title":"శాస్త్రజ్ఞానం","body":"చాగంటి కోటేశ్వర రావు గారి పూర్తి రామాయణ మరియు మహాభారత ప్రవచనాలు మొత్తం విన్నాడు. భాగవత, ఉపనిషత్తులు, ఇతిహాసాల కథలు తెలుసు. వ్యోమ లింగ్విస్టిక్స్ లాబ్స్ 'ఆలయాల వెనుక కథలు' శ్రేణిని కూడా అభ్యసించాడు."},{"title":"సమాజ సేవ & భక్తి","body":"సిడ్నీ మురుగన్ ఆలయంలో విష్ణు సహస్రనామ, లలితా సహస్రనామ పారాయణ నిత్యం నిర్వహిస్తాడు. నవరాత్రిలో సిడ్నీ అయ్యప్ప ఆలయంలో సౌందర్యలహరి పారాయణ చేశాడు. హెలెన్స్‌బర్గ్ ఆలయంలో సమగ్ర భగవద్గీత పఠించాడు."}]},"profile":{"section_title":"విజయాలు & ప్రొఫైల్","journey_title":"సంస్కృత యాత్ర","journey":"కార్తికేయ సంస్కృతంపై ప్రేమ చాలా చిన్న వయసులోనే ఇంట్లో మొదలైంది. అతను పాఠశాలకు వెళ్ళే ముందే, సంస్కృత శ్లోకాల శబ్దాలు మరియు లయలతో నిండిపోయాడు — కుటుంబసభ్యులు స్తోత్రాలు మరియు ప్రార్థనలు పఠించడం వినేవాడు. ఈ ప్రారంభ నిమజ్జనం అసాధారణమైన ఆధ్యాత్మిక మరియు విద్యా ప్రయాణానికి పునాది వేసింది.\n\nసంస్కృత భారతీ పరీక్షా కార్యక్రమం ద్వారా అతని అధికారిక సంస్కృత పరీక్షలు అద్భుతమైన శ్రేష్ఠతను సాధించాయి:\n\n• ఆయనమ్ (2022) — 100%\n• సారిణీ (2023) — 98%\n• సరళా (2024) — 94%\n• సుగమా (2025) — 98%\n• సరసా (2026) — 96%\n\nవరుసగా ఐదు సంవత్సరాల పాటు 97.2% సగటుతో విజయం సాధించాడు — వేదాల భాషపై నిజమైన ప్రేమకు నిదర్శనం. వ్యోమ లింగ్విస్టిక్స్ లాబ్స్ వారి 'ఆలయాల వెనుక కథలు' వీడియో శ్రేణిని చూసి భారతదేశ పవిత్ర భూగోళంతో ముడిపడిన సాంస్కృతిక మరియు పౌరాణిక వారసత్వాన్ని లోతుగా అర్థం చేసుకున్నాడు.","achievements":[{"icon":"🥇","title":"స్వర్ణపతకం — భగవద్గీత","desc":"శ్రీమద్భగవద్గీత 700 శ్లోకాలు కంఠస్థం చేసి అప్రమేయంగా పఠించినందుకు మైసూర్ దత్త పీఠం నుండి ప్రతిష్ఠాత్మక స్వర్ణపతకం అందుకున్నాడు — జ్ఞాపకశక్తి, భక్తి మరియు శిక్షణకు మహాసాధన.","year":"మైసూర్ దత్త పీఠం","tag":"gold"},{"icon":"📖","title":"భగవద్గీత — హెలెన్స్‌బర్గ్ ఆలయం","desc":"పండిట్ రిషికేష్ భట్టర్ గారి షష్టిపూర్తి మహోత్సవం శుభ సందర్భంగా హెలెన్స్‌బర్గ్ ఆలయంలో సమగ్ర శ్రీమద్భగవద్గీత (18 అధ్యాయాలు, 700 శ్లోకాలు) పఠించాడు — అపూర్వమైన గౌరవం మరియు హృదయస్పర్శి భక్తి నివేదన.","year":"హెలెన్స్‌బర్గ్ ఆలయం · షష్టిపూర్తి మహోత్సవం","tag":"gold"},{"icon":"🏆","title":"సంస్కృత ఒలింపియాడ్ — ఆస్ట్రేలియా ప్రథమ","desc":"కేంద్ర సంస్కృత విశ్వవిద్యాలయం జాతీయ సంస్కృత ఒలింపియాడ్‌లో వరుసగా రెండు సంవత్సరాలు ఆస్ట్రేలియాలో ప్రథమ స్థానం. గత సంవత్సరం భారతదేశంలో వేలాది విద్యార్థులతో పోటీపడి అఖిల భారత స్థానం 266.","year":"కేంద్ర సంస్కృత విశ్వవిద్యాలయం · వరుసగా 2 సంవత్సరాలు","tag":"olympiad"},{"icon":"📊","title":"సంస్కృత పరీక్షలు — 5 సంవత్సరాల శ్రేష్ఠత","desc":"ఆయనమ్ 2022 (100%) · సారిణీ 2023 (98%) · సరళా 2024 (94%) · సుగమా 2025 (98%) · సరసా 2026 (96%). వరుసగా ఐదు సంవత్సరాలు 97.2% సగటుతో — ప్రతి స్థాయి మరింత అభివృద్ధి చెందిన కోర్సు.","year":"సంస్కృత భారతీ కార్యక్రమం · 2022–2026","tag":"olympiad"},{"icon":"🕉","title":"సౌందర్యలహరి పారాయణ","desc":"ఆదిశంకరాచార్యుల సౌందర్యలహరి 100 శ్లోకాలు కంఠస్థం చేసి — దైవమాతపై అత్యంత ప్రశస్తమైన సంస్కృత స్తోత్రాలలో ఒకటి — నవరాత్రి సందర్భంగా సిడ్నీ అయ్యప్ప ఆలయంలో పూర్తి పారాయణ చేశాడు.","year":"సిడ్నీ అయ్యప్ప ఆలయం · నవరాత్రి","tag":"parayana"},{"icon":"📜","title":"విష్ణు & లలితా సహస్రనామ","desc":"సిడ్నీ మురుగన్ ఆలయంలో విష్ణు సహస్రనామ మరియు లలితా సహస్రనామ పారాయణ నిత్యం నిర్వహిస్తాడు — సిడ్నీ హిందూ సమాజ ఆధ్యాత్మిక జీవనానికి సేవ.","year":"సిడ్నీ మురుగన్ ఆలయం · నిత్యం","tag":"parayana"},{"icon":"🎤","title":"శివపదాలు — సమవేదం శంఖముఖ శర్మ","desc":"ప్రఖ్యాత పండితుడు సమవేదం శంఖముఖ శర్మ గారి సిడ్నీ సందర్శన సందర్భంలో వారి సమక్షంలో వారు రచించిన 10 శివపదాలు పఠించాడు. మహాపండితుడు హృదయపూర్వకంగా స్వాగతించి ప్రత్యేక స్మారక చిహ్నం అందించారు.","year":"సిడ్నీ · ఏప్రిల్ · సమవేదం శంఖముఖ శర్మ సందర్శన","tag":"scholar"},{"icon":"✍","title":"సంకటనాశన గణేశ స్తోత్రం — పండితులకు అర్పణ","desc":"సంకటనాశన గణేశ స్తోత్రం స్వహస్తాలతో లిఖించి ముగ్గురు విద్వాంసులకు — వద్దిపర్తి పద్మకర్, సమవేదం శంఖముఖ శర్మ మరియు మడుగుల నాగఫణి శర్మలకు — వ్యక్తిగతంగా అర్పించాడు.","year":"ముగ్గురు మహాపండితులకు వ్యక్తిగత అర్పణ","tag":"scholar"},{"icon":"🎭","title":"అవధానం — అప్రస్తుత ప్రసంగ పృచ్ఛకుడు","desc":"ప్రఖ్యాత కవి-పండితుడు తటవర్తి కళ్యాణ్ గారి ప్రతిష్ఠాత్మక అవధానంలో అప్రస్తుత ప్రసంగ పృచ్ఛకునిగా పాల్గొన్నాడు — తక్షణ తెలివి మరియు సృజనాత్మకత అవసరమైన పాత్ర.","year":"తటవర్తి కళ్యాణ్ అవధానం · సిడ్నీ","tag":"scholar"},{"icon":"🏅","title":"మానవ కథ & గజేంద్ర మోక్షం — విజేత","desc":"వద్దిపర్తి పద్మకర్ మార్గదర్శనంలో ప్రణవ పీఠం నిర్వహించిన మానవ కథ మరియు గజేంద్ర మోక్షం రెండు పోటీలలో బహుమతులు గెలుచుకున్నాడు.","year":"ప్రణవ పీఠం · వద్దిపర్తి పద్మకర్","tag":"competition"},{"icon":"🎊","title":"సాంస్కృతిక పోటీలు — అనేక బహుమతులు","desc":"సిడ్నీ జన రంజని నిర్వహించిన రామాయణ మరియు దశావతార కథా పోటీలలో, ప్రణవ పీఠం కవిత్వ పోటీలలో అనేక బహుమతులు గెలుచుకున్నాడు.","year":"సిడ్నీ జన రంజని · ప్రణవ పీఠం","tag":"competition"},{"icon":"🗣","title":"'పర భాష లేకుండా తెలుగులో' — విజేత","desc":"3-4 సంవత్సరాల అద్భుతమైన వయసులో 'పర భాష లేకుండా తెలుగులో' పోటీలో విజేతగా నిలిచాడు — విదేశీ పదాలు లేకుండా స్వచ్ఛమైన తెలుగులో మాట్లాడడం. అతని అసాధారణ భాషా ప్రతిభకు తొలి నిదర్శనం.","year":"వయసు ~3–4 సంవత్సరాలు · తెలుగు భాషా పోటీ","tag":"competition"},{"icon":"📺","title":"భారతం లఘు ప్రసంగాలు","desc":"మహాభారతంపై యూట్యూబ్‌లో లఘు ప్రసంగాల శ్రేణి ప్రచురించాడు — మహేతిహాసంపై అతని వయసుకు మించిన అర్థం లోతును ప్రదర్శిస్తుంది. చాగంటి కోటేశ్వర రావు గారి పూర్తి భారత మరియు రామాయణ ప్రవచనాలు విన్నాడు.","year":"యూట్యూబ్ శ్రేణి · samskruti.info.1","tag":"discourse"}],"exam_table_title":"సంస్కృత పరీక్షా రికార్డు","exam_table":[{"year":"2022","exam":"ఆయనమ్","score":"100%","grade":"🌟"},{"year":"2023","exam":"సారిణీ","score":"98%","grade":"🌟"},{"year":"2024","exam":"సరళా","score":"94%","grade":"⭐"},{"year":"2025","exam":"సుగమా","score":"98%","grade":"🌟"},{"year":"2026","exam":"సరసా","score":"96%","grade":"🌟"}],"photo_placeholder":"సర్టిఫికేట్లు & విజయ ఫోటోలు","photo_placeholder_sub":"సర్టిఫికేట్లు మరియు కార్యక్రమ ఫోటోలు ఇక్కడ చూపబడతాయి"},"credits":{"section_title":"కృతజ్ఞతలు","intro":"కార్తికేయ అసాధారణ ప్రయాణంలో మహాపండితుల అనుగ్రహం, గురువుల మార్గదర్శనం మరియు ప్రేమాస్పదమైన సమాజం తోడ్పడింది. అందరికీ హృదయపూర్వక కృతజ్ఞతలు:","list":[{"name":"మైసూర్ దత్త పీఠం","role":"స్వర్ణపతకం — భగవద్గీత పారాయణ"},{"name":"కేంద్ర సంస్కృత విశ్వవిద్యాలయం","role":"సంస్కృత ఒలింపియాడ్ — నిర్వాహకులు & గుర్తింపు"},{"name":"సమవేదం శంఖముఖ శర్మ","role":"శివపద రచయిత · ప్రేరణ · స్మారక చిహ్నం"},{"name":"వద్దిపర్తి పద్మకర్","role":"ప్రణవ పీఠం · కవిత్వ గురువు · పోటీలు"},{"name":"మడుగుల నాగఫణి శర్మ","role":"పండితుడు · ఆశీర్వాదం · ప్రోత్సాహం"},{"name":"పండిట్ రిషికేష్ భట్టర్","role":"షష్టిపూర్తి మహోత్సవం · హెలెన్స్‌బర్గ్ ఆలయం"},{"name":"తటవర్తి కళ్యాణ్","role":"అవధానం — అప్రస్తుత ప్రసంగ గౌరవం"},{"name":"చాగంటి కోటేశ్వర రావు","role":"రామాయణ & మహాభారత ప్రవచనాలు"},{"name":"వ్యోమ లింగ్విస్టిక్స్ లాబ్స్","role":"ఆలయాల వెనుక కథలు · సంస్కృత అభ్యాసం"},{"name":"సిడ్నీ జన రంజని","role":"సాంస్కృతిక పోటీలు & గుర్తింపు"},{"name":"సిడ్నీ మురుగన్ ఆలయం","role":"పారాయణ వేదిక & ఆధ్యాత్మిక సమాజం"},{"name":"సిడ్నీ అయ్యప్ప ఆలయం","role":"సౌందర్యలహరి పారాయణ · నవరాత్రి"},{"name":"హెలెన్స్‌బర్గ్ ఆలయం","role":"భగవద్గీత పారాయణ వేదిక"},{"name":"ప్రణవ పీఠం","role":"మానవ కథ · గజేంద్ర మోక్షం · కవిత్వ పోటీలు"}]},"events":{"section_title":"కార్యక్రమాలు & మైలురాళ్ళు","events_placeholder":"కార్యక్రమ ఫోటోలు ఇక్కడ చూపబడతాయి","list":[{"date":"సిడ్నీ · ఏప్రిల్","title":"శివపదాలు — సమవేదం శంఖముఖ శర్మ సమక్షంలో","desc":"మహాపండితుడు సమవేదం శంఖముఖ శర్మ గారి సిడ్నీ సందర్శన సందర్భంలో వారి సమక్షంలో 10 శివపదాలు పఠించాడు. ప్రత్యేక స్మారక చిహ్నం అందుకున్నాడు.","has_photo":true},{"date":"సిడ్నీ · నవరాత్రి","title":"సౌందర్యలహరి పారాయణ — అయ్యప్ప ఆలయం","desc":"నవరాత్రి సందర్భంగా సిడ్నీ అయ్యప్ప ఆలయంలో సౌందర్యలహరి (100 శ్లోకాలు) పూర్తి పారాయణ నిర్వహించాడు.","has_photo":true},{"date":"హెలెన్స్‌బర్గ్ ఆలయం","title":"భగవద్గీత — షష్టిపూర్తి మహోత్సవం","desc":"పండిట్ రిషికేష్ భట్టర్ గారి షష్టిపూర్తి మహోత్సవం సందర్భంగా సమగ్ర శ్రీమద్భగవద్గీత — 18 అధ్యాయాలు, 700 శ్లోకాలు — పఠించాడు.","has_photo":true},{"date":"కేంద్ర సంస్కృత విశ్వవిద్యాలయం","title":"సంస్కృత ఒలింపియాడ్ — ఆస్ట్రేలియా ప్రథమ","desc":"జాతీయ సంస్కృత ఒలింపియాడ్‌లో ఆస్ట్రేలియాలో ప్రథమ స్థానం. గత సంవత్సరం అఖిల భారత స్థానం 266 — వరుసగా రెండు సంవత్సరాలు.","has_photo":true},{"date":"మైసూర్ దత్త పీఠం","title":"స్వర్ణపతకం — భగవద్గీత 700 శ్లోకాలు","desc":"శ్రీమద్భగవద్గీత 700 శ్లోకాలు కంఠస్థం చేసి పఠించినందుకు స్వర్ణపతకం అందుకున్నాడు.","has_photo":true},{"date":"సిడ్నీ · అవధానం","title":"తటవర్తి కళ్యాణ్ అవధానం — అప్రస్తుత ప్రసంగం","desc":"తటవర్తి కళ్యాణ్ గారి ప్రతిష్ఠాత్మక అవధానంలో అప్రస్తుత ప్రసంగ పృచ్ఛకునిగా పాల్గొన్నాడు.","has_photo":true},{"date":"ప్రణవ పీఠం","title":"మానవ కథ & గజేంద్ర మోక్షం — విజేత","desc":"వద్దిపర్తి పద్మకర్ నిర్వహించిన మానవ కథ, గజేంద్ర మోక్షం పోటీలలో బహుమతులు గెలుచుకున్నాడు.","has_photo":false},{"date":"వయసు ~3–4 సంవత్సరాలు","title":"'పర భాష లేకుండా తెలుగులో' — విజేత","desc":"మూడు నాలుగేళ్ళ వయసులో 'పర భాష లేకుండా తెలుగులో' పోటీలో విజేతగా నిలిచాడు — అసాధారణ భాషాప్రతిభ.","has_photo":false}]},"parayana":{"section_title":"పారాయణ","intro":"కార్తికేయ ఈ పవిత్ర పారాయణలు నిత్యం నిర్వహిస్తాడు. ప్రతి సంస్కృత శ్లోకం మూడు లిపులలో చూపబడింది — మీకు నచ్చిన లిపి ఎంచుకోండి.","tab_te":"తెలుగు","tab_dev":"దేవనాగరి","tab_iast":"IAST","stotras":[{"id":"bg","title":"భగవద్గీత · 700 శ్లోకాలు","te":"యదా యదా హి ధర్మస్య గ్లానిర్భవతి భారత ।\nఅభ్యుత్థానమధర్మస్య తదాత్మానం సృజామ్యహమ్ ॥","dev":"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥","iast":"yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||","attribution":"భగవద్గీత 4.7 — \"ధర్మం క్షీణించినప్పుడల్లా నేను అవతరిస్తాను.\" 700 శ్లోకాలు కంఠస్థం; మైసూర్ దత్త పీఠం స్వర్ణపతకం."},{"id":"vs","title":"విష్ణు సహస్రనామం","te":"విశ్వం విష్ణుర్వషట్కారో భూతభవ్యభవత్ప్రభుః ।\nభూతకృద్భూతభృద్భావో భూతాత్మా భూతభావనః ॥","dev":"विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः ।\nभूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः ॥","iast":"viśvaṁ viṣṇur vaṣaṭkāro bhūtabhavyabhavatprabhuḥ |\nbhūtakṛd bhūtabhṛd bhāvo bhūtātmā bhūtabhāvanaḥ ||","attribution":"మొదటి శ్లోకం — సిడ్నీ మురుగన్ ఆలయంలో నిత్య పారాయణ."},{"id":"ls","title":"లలితా సహస్రనామం","te":"శ్రీమాతా శ్రీమహారాజ్ఞీ శ్రీమత్సింహాసనేశ్వరీ ।\nచిదగ్నికుండసంభూతా దేవకార్యసముద్యతా ॥","dev":"श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी ।\nचिदग्निकुण्डसम्भूता देवकार्यसमुद्यता ॥","iast":"śrīmātā śrīmahārājñī śrīmatsinhāsaneśvarī |\ncidagnikuṇḍasambhūtā devakāryasamudyatā ||","attribution":"మొదటి నామాలు — సిడ్నీ మురుగన్ ఆలయంలో నిత్య పారాయణ."},{"id":"sl","title":"సౌందర్యలహరి · 100 శ్లోకాలు","te":"శివః శక్త్యా యుక్తో యది భవతి శక్తః ప్రభవితుం\nన చేదేవం దేవో న ఖలు కుశలః స్పందితుమపి ।","dev":"शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि ।","iast":"śivaḥ śaktyā yukto yadi bhavati śaktaḥ prabhavituṁ\nna cedevaṁ devo na khalu kuśalaḥ spanditum api |","attribution":"ఆదిశంకరాచార్యుల మొదటి శ్లోకం — నవరాత్రి, సిడ్నీ అయ్యప్ప ఆలయం."},{"id":"sg","title":"సంకటనాశన గణేశ స్తోత్రం","te":"ప్రణమ్య శిరసా దేవం గౌరీపుత్రం వినాయకమ్ ।\nభక్తావాసం స్మరేన్నిత్యమాయుఃకామార్థసిద్ధయే ॥","dev":"प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।\nभक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये ॥","iast":"praṇamya śirasā devaṁ gaurīputraṁ vināyakam |\nbhaktāvāsaṁ smaren nityam āyuḥkāmārthasiddhaye ||","attribution":"వద్దిపర్తి పద్మకర్, సమవేదం శంఖముఖ శర్మ & మడుగుల నాగఫణి శర్మలకు వ్యక్తిగతంగా స్వహస్తాలతో లిఖించి అర్పించాడు."}]},"support":{"section_title":"సహకారం & స్పాన్సర్‌షిప్","intro":"కార్తికేయ ఆధ్యాత్మిక మరియు విద్యా ప్రయాణాన్ని ప్రోత్సహించడం ధర్మకార్యం. మీ సహకారం పోటీలలో పాల్గొనడానికి, కార్యక్రమాలకు హాజరవడానికి మరియు మరిన్ని భక్తి-విద్యా కంటెంట్ సృష్టించడానికి తోడ్పడుతుంది.","cards":[{"icon":"🙏","title":"ఆశీర్వాదాలు & ప్రోత్సాహం","desc":"మీ ఆశీర్వాదాలు, ప్రోత్సాహ వచనాలు పంపండి లేదా అతని విజయాలను మీ సమాజంలో పంచుకోండి. ప్రతి సందేశం అతనికి స్ఫూర్తినిస్తుంది."},{"icon":"📚","title":"విద్యకు సహకారం","desc":"సంస్కృత పరీక్షా నమోదు, అధ్యయన సామగ్రి, పుస్తకాలు మరియు ఆస్ట్రేలియా-భారతదేశ పోటీలలో పాల్గొనడానికి సహకరించండి."},{"icon":"🎬","title":"సబ్‌స్క్రైబ్ & షేర్","desc":"@samskruti.info.1 యూట్యూబ్ చానెల్ సబ్‌స్క్రైబ్ చేసి అతని వీడియోలు షేర్ చేయండి — సంస్కృత మరియు సనాతన ధర్మ సౌందర్యం వ్యాప్తి చేయండి."},{"icon":"🤝","title":"కార్యక్రమాలకు ఆహ్వానించండి","desc":"మీ ఆలయం లేదా సంస్థలో పారాయణ, ప్రసంగం, పోటీలకు కార్తికేయను ఆహ్వానించండి."}]},"testimonials":{"section_title":"అభిప్రాయాలు","list":[{"text":"కార్తికేయ శివపదాల పఠనం నిజంగా అద్భుతంగా ఉంది. ఇంత చిన్న వయసులో ఉచ్చారణ స్పష్టత, భావగాంభీర్యం మరియు భక్తి అరుదైన దైవానుగ్రహం. ఈ సంప్రదాయాన్ని ప్రకాశవంతం చేస్తూ ముందుకు సాగాలని ఆశీర్వదిస్తున్నాను.","by":"సమవేదం శంఖముఖ శర్మ","role":"ప్రఖ్యాత తెలుగు పండితుడు & కవి · సిడ్నీ సందర్శన"},{"text":"తర్వాత తరం ఇంత నిబద్ధత మరియు ఆనందంతో సంస్కృతాన్ని స్వీకరించడం హర్షదాయకం. ఒలింపియాడ్‌లో అతని ప్రదర్శన అసాధారణ సహజ ప్రతిభ మరియు లోతైన క్రమశిక్షణాభ్యాసం రెండింటినీ ప్రతిబింబిస్తుంది.","by":"కేంద్ర సంస్కృత విశ్వవిద్యాలయం","role":"సంస్కృత ఒలింపియాడ్ — ఆస్ట్రేలియా ప్రథమ స్థానం"},{"text":"నవరాత్రిలో కార్తికేయ సౌందర్యలహరి పారాయణ మా ఆలయాన్ని నిజంగా పవిత్రమైన వాతావరణంతో నింపింది. 10 సంవత్సరాల బాలుడిలో ఇంతటి భక్తి మరియు కంఠస్థం నిజంగా దైవకృప.","by":"సిడ్నీ అయ్యప్ప ఆలయం","role":"నవరాత్రి సౌందర్యలహరి పారాయణ"}]},"youtube":{"section_title":"యూట్యూబ్ చానెల్","channel_name":"సంస్కృతి · @samskruti.info.1","channel_sub":"సంస్కృతం · తెలుగు · భక్తి · పారాయణ · ప్రసంగాలు","channel_url":"https://www.youtube.com/@samskruti.info.1","bharatam_title":"భారతం లఘు ప్రసంగాలు","bharatam_desc":"మహాభారతంపై లఘు ప్రసంగాల యూట్యూబ్ శ్రేణి — పూర్తి ప్లేలిస్ట్ చూడండి","bharatam_url":"https://www.youtube.com/watch?v=xB1CT8539J0&list=PL-V59KU-Q6hdZckKaiR-W8U7WNjyCiUiZ","videos":[{"title":"భగవద్గీత పారాయణ","meta":"700 శ్లోకాలు · కార్తికేయ పీడపర్తి"},{"title":"సంస్కృత స్తోత్రాలు","meta":"స్తోత్రాలు · సహస్రనామాలు · భక్తి గీతాలు"},{"title":"భారతం లఘు ప్రసంగాలు","meta":"మహాభారత ప్రసంగాలు · పూర్తి శ్రేణి"}]},"contact":{"section_title":"సంప్రదించండి","intro":"కార్తికేయను కార్యక్రమాలు, పారాయణ, పోటీలు లేదా ప్రసంగాలకు ఆహ్వానించడానికి — లేదా మీ ఆశీర్వాదాలు మరియు విచారణలు పంపడానికి — దయచేసి మాకు రాయండి.","location_city":"సిడ్నీ, న్యూ సౌత్ వేల్స్","location_country":"ఆస్ట్రేలియా","youtube_label":"యూట్యూబ్ చానెల్","form_name":"మీ పేరు","form_email":"మీ ఈమెయిల్","form_subject":"విషయం","form_message":"మీ సందేశం, ఆశీర్వాదాలు లేదా విచారణ…","form_submit":"సందేశం పంపండి ✉","form_thanks":"🙏 ధన్యవాదాలు! మేము త్వరలో స్పందిస్తాము.","quote_sa":"सर्वे भवन्तु सुखिनः ।","quote_en":"అందరూ సుఖంగా ఉండాలని కోరుకుందాం."},"footer":{"sa":"ॐ तत्सत् । श्रीकृष्णार्पणमस्तु ।","iast":"ఓం తత్సత్ · శ్రీ కృష్ణార్పణమస్తు","copy":"© 2025 కార్తికేయ పీడపర్తి · సిడ్నీ, ఆస్ట్రేలియా"},"settings":{"title":"సెట్టింగ్స్","theme":"థీమ్","theme_light":"☀ వెలుతురు","theme_dark":"☽ చీకటి","font_size":"అక్షరాల పరిమాణం","accent":"యాక్సెంట్ రంగు","language":"భాష"}},"sa":{"nav":{"home":"गृहम्","about":"परिचयः","profile":"प्रोफाइल्","credits":"कृतज्ञता","events":"कार्यक्रमाः","parayana":"पारायणम्","support":"सहायता","testimonials":"अभिप्रायाः","contact":"सम्पर्कः","youtube":"यूट्यूब्","logo_name":"संस्कृतिः","logo_tag":"సంస్కృతి • Samskruti"},"hero":{"greeting":"श्रीगणेशाय नमः","name":"कार्तिकेयः पीडपर्ति","age_location":"वयः दश वर्षाणि · सिडनी, ऑस्ट्रेलिया","description":"संस्कृत-तेलुगु-आङ्ग्लभाषाकुशलः युवविद्वान् — भगवद्गीतायाः सप्तशतश्लोकान् कण्ठस्थीकृत्य मैसूरु-दत्तपीठात् स्वर्णपदकं प्राप्तवान्; संस्कृत-ओलिम्पियाड्-स्पर्धायाम् ऑस्ट्रेलियादेशे प्रथमस्थानं प्राप्तवान्; सनातनधर्म-महासम्प्रदाये निष्ठावन्तः पारायणसाधकः।","btn_achievements":"उपलब्धयः पश्यतु","btn_youtube":"▶ यूट्यूब्-वाहिनी","badges":["🏅 स्वर्णपदकम् — मैसूरु-दत्तपीठम्","🥇 संस्कृत-ओलिम्पियाड् — ऑस्ट्रेलिया-प्रथमः","📖 भगवद्गीता · सप्तशतश्लोकाः","🕉 सौन्दर्यलहरी · शतश्लोकाः","🎤 समवेदं-रचितानि शिवपदानि"]},"about":{"section_title":"कार्तिकेयविषये","para1":"सिडनी-नगरे ऑस्ट्रेलियादेशे वैदिकसम्प्रदायं पोषयन्त्यां कुटुम्बे जातः कार्तिकेयः पीडपर्तिः बाल्यादेव संस्कृत-शास्त्र-शास्त्रीय-तेलुगु-साहित्यप्रपञ्चे निमग्नः अस्ति। पितृभूमितः दूरे स्थितोऽपि तेषां प्राज्ञस्य ज्ञाने दृढतया स्थित्वा सनातनधर्मस्य जीवन्तं निरन्तरत्वं मूर्तिभूतम् अस्ति।","para2":"दशवर्षीयः अयं बालः आधुनिक-ऑस्ट्रेलियन-पाठशालाविद्यायाः सह नित्यभक्तिसाधनं, नित्यमन्दिर-पारायणं, संस्कृते च गम्भीरं विद्याप्रमेयं समतुलितरूपेण निर्वहति — भारतस्य नानादिग्भ्यः विद्वद्भिः प्रशंसितः।","quote_sa":"विद्या ददाति विनयम् ।","quote_iast":"vidyā dadāti vinayam","quote_te":"విద్య వినయమిస్తుంది.","quote_en":"विद्या विनयं ददाति।","cards":[{"title":"भाषाः","body":"तेलुगु-आङ्ग्लभाषयोः प्रवाहेण वदति; संस्कृते च अपारं पाण्डित्यम् अस्ति। देवनागरी-तेलुगु-IAST-लिपीः पठति। त्रि-चतुर्वर्षीयः सन् 'परभाषालेकुण्डा तेलुगुलो' प्रतियोगितायां विजयं प्राप्तवान्।"},{"title":"शास्त्रज्ञानम्","body":"चागन्ति-महोदयस्य रामायण-महाभारत-प्रवचनानि सम्पूर्णानि श्रुतवान्। भागवत-उपनिषत्-इतिहासकथाः जानाति। व्योम-लिंग्विस्टिक्स्-लाब्स्-संस्थायाः 'ऑलयाल वेनुक कथलु' श्रेणीम् अध्यगीत।"},{"title":"समाजसेवा भक्तिश्च","body":"सिडनी-मुरुगन्-मन्दिरे विष्णुसहस्रनाम-ललितासहस्रनाम-पारायणं नित्यं करोति। नवरात्रौ सिडनी-अय्यप्प-मन्दिरे सौन्दर्यलहरी-पारायणं कृतवान्। हेलेन्स्बर्ग्-मन्दिरे सम्पूर्णभगवद्गीतां पठितवान्।"}]},"profile":{"section_title":"उपलब्धयः प्रोफाइलश्च","journey_title":"संस्कृतयात्रा","journey":"कार्तिकेयस्य संस्कृताभिरुचिः बाल्येऽतिलघुवयसि गृहे एव प्रज्वलिता। विद्यालयं गच्छन् पूर्वमेव संस्कृतश्लोकानां शब्दैः लयैश्च परिपूर्णः अभवत् — कुटुम्बसदस्याः स्तोत्राणि प्रार्थनाश्च पठन्तः तेन श्रुताः। एषा प्रारम्भिका निमज्जना असाधारणस्य आध्यात्मिक-विद्यायात्रायाः पुनाद् भवत्।\n\nसंस्कृतभारती-कार्यक्रमेण तस्य औपचारिकाः संस्कृतपरीक्षाः श्रेष्ठताया अद्भुतम् आर्यं दर्शयन्ति:\n\n• आयनम् (२०२२) — १००%\n• सारिणी (२०२३) — ९८%\n• सरला (२०२४) — ९४%\n• सुगमा (२०२५) — ९८%\n• सरसा (२०२६) — ९६%\n\nक्रमेण पञ्चसु वर्षेषु ९७.२% सरासरीं प्राप्तवान् — वेदानां भाषायाम् अस्य सत्यप्रीतेः प्रमाणम्। व्योम-लिंग्विस्टिक्स्-लाब्स्-संस्थायाः 'मन्दिराणां वेनुक कथाः' इति वीडियो-श्रेणीम् अपि दृष्ट्वा भारतस्य पवित्रभूगोलेन सम्बद्धं सांस्कृतिक-पौराणिक-वारसत्यं गाढरूपेण अवागच्छत्।","achievements":[{"icon":"🥇","title":"स्वर्णपदकम् — भगवद्गीता","desc":"श्रीमद्भगवद्गीतायाः सप्तशतश्लोकान् कण्ठस्थीकृत्य अप्रमेयरूपेण पठित्वा मैसूरु-दत्तपीठात् प्रतिष्ठितं स्वर्णपदकं प्राप्तवान् — स्मृति-भक्ति-शिक्षणयोः महासाधनम्।","year":"मैसूरु-दत्तपीठम्","tag":"gold"},{"icon":"📖","title":"भगवद्गीता — हेलेन्स्बर्ग्-मन्दिरम्","desc":"पण्डित-ऋषिकेश-भट्टर-महोदयस्य षष्टिपूर्ति-महोत्सव-अवसरे हेलेन्स्बर्ग्-मन्दिरे सम्पूर्णां श्रीमद्भगवद्गीतां (१८ अध्यायाः, ७०० श्लोकाः) पठितवान्।","year":"हेलेन्स्बर्ग्-मन्दिरम् · षष्टिपूर्ति-महोत्सवः","tag":"gold"},{"icon":"🏆","title":"संस्कृत-ओलिम्पियाड् — ऑस्ट्रेलिया-प्रथमः","desc":"केन्द्र-संस्कृत-विश्वविद्यालयस्य राष्ट्रीय-संस्कृत-ओलिम्पियाड्-स्पर्धायाम् ऑस्ट्रेलियादेशे क्रमेण द्विवर्षं प्रथमस्थानं प्राप्तवान्। पूर्वे वर्षे भारतसहस्र-विद्यार्थिभिः सह स्पर्धित्वा अखिलभारतीयस्थानं २६६।","year":"केन्द्र-संस्कृत-विश्वविद्यालयः · क्रमेण २ वर्षाणि","tag":"olympiad"},{"icon":"📊","title":"संस्कृत-परीक्षाः — ५ वर्षाणि श्रेष्ठता","desc":"आयनम् २०२२ (१००%) · सारिणी २०२३ (९८%) · सरला २०२४ (९४%) · सुगमा २०२५ (९८%) · सरसा २०२६ (९६%)। क्रमेण पञ्चसु वर्षेषु ९७.२% सरासरी — प्रत्येकस्तरः अधिकोन्नतः।","year":"संस्कृत-भारती-कार्यक्रमः · २०२२–२०२६","tag":"olympiad"},{"icon":"🕉","title":"सौन्दर्यलहरी-पारायणम्","desc":"आदिशङ्कराचार्यविरचितायाः सौन्दर्यलहर्याः शतश्लोकान् कण्ठस्थीकृत्य नवरात्रि-पर्वणि सिडनी-अय्यप्प-मन्दिरे सम्पूर्णपारायणं कृतवान्।","year":"सिडनी-अय्यप्प-मन्दिरम् · नवरात्रिः","tag":"parayana"},{"icon":"📜","title":"विष्णुसहस्रनाम-ललितासहस्रनामपारायणम्","desc":"सिडनी-मुरुगन्-मन्दिरे विष्णुसहस्रनाम-ललितासहस्रनाम-पारायणं नित्यं करोति।","year":"सिडनी-मुरुगन्-मन्दिरम् · नित्यम्","tag":"parayana"},{"icon":"🎤","title":"शिवपदानि — समवेदं-शङ्खमुखशर्मणः समक्षम्","desc":"प्रसिद्धस्य पण्डितस्य समवेदं-शङ्खमुखशर्मणः सिडनी-सन्दर्शने तत्समक्षं दश शिवपदानि पठितवान्। महाविद्वान् तुष्टः विशेषं स्मारकचिह्नं प्रदत्तवान्।","year":"सिडनी · अप्रैल् · समवेदं-शङ्खमुखशर्मणः सन्दर्शनम्","tag":"scholar"},{"icon":"✍","title":"सङ्कटनाशन-गणेशस्तोत्रम् — पण्डितेभ्यः अर्पणम्","desc":"सङ्कटनाशन-गणेशस्तोत्रं स्वहस्तेन लिखित्वा त्रिभ्यः विद्वद्भ्यः — वद्दिपर्ति-पद्मकर-समवेदं-शङ्खमुखशर्म-मडुगुल-नागफणिशर्मभ्यः — व्यक्तिगतरूपेण अर्पितवान्।","year":"त्रिभ्यः महापण्डितेभ्यः व्यक्तिगत-अर्पणम्","tag":"scholar"},{"icon":"🎭","title":"अवधानम् — अप्रस्तुतप्रसङ्गपृच्छकः","desc":"तटवर्ति-कल्याण-महोदयस्य प्रतिष्ठित-अवधाने अप्रस्तुतप्रसङ्गपृच्छकरूपेण भागं गृहीत्वा प्रशंसां प्राप्तवान् — तात्कालिक-बुद्धि-सृजनात्मकता-आवश्यकं पात्रम्।","year":"तटवर्ति-कल्याण-अवधानम् · सिडनी","tag":"scholar"},{"icon":"🏅","title":"मानवकथा-गजेन्द्रमोक्षम् — विजेता","desc":"वद्दिपर्ति-पद्मकर-महोदयस्य मार्गदर्शने प्रणवपीठेन आयोजितयोः मानवकथा-गजेन्द्रमोक्षम्-प्रतियोगितयोः पुरस्काराः प्राप्ताः।","year":"प्रणवपीठम् · वद्दिपर्ति-पद्मकरः","tag":"competition"},{"icon":"🎊","title":"सांस्कृतिक-प्रतियोगितासु अनेके पुरस्काराः","desc":"सिडनी-जनरञ्जनी-संस्थया आयोजितासु रामायण-दशावतार-प्रतियोगितासु तथा प्रणवपीठस्य काव्यप्रतियोगितासु अनेके पुरस्काराः प्राप्ताः।","year":"सिडनी-जनरञ्जनी · प्रणवपीठम्","tag":"competition"},{"icon":"🗣","title":"'परभाषालेकुण्डा तेलुगुलो' — विजेता","desc":"त्रि-चतुर्वर्षीयः सन् परभाषाविरहित-शुद्ध-तेलुगु-प्रतियोगितायां विजयं प्राप्तवान् — अस्य असाधारण-भाषाप्रतिभायाः प्रथमं प्रमाणम्।","year":"वयः ~३–४ वर्षाणि","tag":"competition"},{"icon":"📺","title":"भारतं-लघुप्रसङ्गाः","desc":"महाभारतविषये यूट्यूब्-माध्यमेन लघुप्रसङ्गानां श्रेणी प्रकाशिता। चागन्ति-महोदयस्य सम्पूर्णभारत-रामायण-प्रवचनानि श्रुतवान्।","year":"यूट्यूब्-श्रेणी · samskruti.info.1","tag":"discourse"}],"exam_table_title":"संस्कृत-परीक्षा-अभिलेखः","exam_table":[{"year":"२०२२","exam":"आयनम्","score":"१००%","grade":"🌟"},{"year":"२०२३","exam":"सारिणी","score":"९८%","grade":"🌟"},{"year":"२०२४","exam":"सरला","score":"९४%","grade":"⭐"},{"year":"२०२५","exam":"सुगमा","score":"९८%","grade":"🌟"},{"year":"२०२६","exam":"सरसा","score":"९६%","grade":"🌟"}],"photo_placeholder":"प्रमाणपत्राणि उपलब्धि-चित्राणि च","photo_placeholder_sub":"प्रमाणपत्राणि कार्यक्रम-चित्राणि च अत्र दर्शयिष्यन्ते"},"credits":{"section_title":"कृतज्ञता","intro":"कार्तिकेयस्य असाधारणे यात्रायां महापण्डितानाम् अनुग्रहः, आचार्याणां मार्गदर्शनं, प्रेमपूर्णस्य समाजस्य सहयोगश्च अभवत्। सर्वेभ्यः हार्दिकधन्यवादाः:","list":[{"name":"मैसूरु-दत्तपीठम्","role":"स्वर्णपदकम् — भगवद्गीता-पारायणम्"},{"name":"केन्द्र-संस्कृत-विश्वविद्यालयः","role":"संस्कृत-ओलिम्पियाड् — आयोजकाः गुर्तिम्पुश्च"},{"name":"समवेदं शङ्खमुखशर्मा","role":"शिवपद-रचयिता · प्रेरणा · स्मारकचिह्नम्"},{"name":"वद्दिपर्ति पद्मकरः","role":"प्रणवपीठम् · काव्यगुरुः · प्रतियोगिताः"},{"name":"मडुगुल नागफणिशर्मा","role":"पण्डितः · आशीर्वादः · प्रोत्साहनम्"},{"name":"पण्डित ऋषिकेश भट्टर","role":"षष्टिपूर्ति-महोत्सवः · हेलेन्स्बर्ग्-मन्दिरम्"},{"name":"तटवर्ति कल्याणः","role":"अवधानम् — अप्रस्तुतप्रसङ्ग-गौरवम्"},{"name":"चागन्ति कोटेश्वररावः","role":"रामायण-महाभारत-प्रवचनानि"},{"name":"व्योम-लिंग्विस्टिक्स्-लाब्स्","role":"मन्दिरकथाः · संस्कृताभ्यासः"},{"name":"सिडनी-जनरञ्जनी","role":"सांस्कृतिकप्रतियोगिताः-पुरस्काराः"},{"name":"सिडनी-मुरुगन्-मन्दिरम्","role":"पारायण-स्थानम् · आध्यात्मिकसमाजः"},{"name":"सिडनी-अय्यप्प-मन्दिरम्","role":"सौन्दर्यलहरी-पारायणम् · नवरात्रिः"},{"name":"हेलेन्स्बर्ग्-मन्दिरम्","role":"भगवद्गीता-पारायण-स्थानम्"},{"name":"प्रणवपीठम्","role":"मानवकथा · गजेन्द्रमोक्षम् · काव्यप्रतियोगिताः"}]},"events":{"section_title":"कार्यक्रमाः मैलस्तम्भाश्च","events_placeholder":"कार्यक्रम-चित्राणि अत्र दर्शयिष्यन्ते","list":[{"date":"सिडनी · अप्रैल्","title":"शिवपदानि — समवेदं-शङ्खमुखशर्मणः समक्षम्","desc":"महापण्डितस्य सन्दर्शने तत्समक्षं दश शिवपदानि पठितवान्। विशेषं स्मारकचिह्नं प्राप्तवान्।","has_photo":true},{"date":"सिडनी · नवरात्रिः","title":"सौन्दर्यलहरी-पारायणम् — अय्यप्प-मन्दिरम्","desc":"नवरात्रि-पर्वणि सिडनी-अय्यप्प-मन्दिरे सौन्दर्यलहर्याः शतश्लोकानां सम्पूर्णपारायणं कृतवान्।","has_photo":true},{"date":"हेलेन्स्बर्ग्-मन्दिरम्","title":"भगवद्गीता — षष्टिपूर्ति-महोत्सवः","desc":"पण्डित-ऋषिकेश-भट्टर-महोदयस्य षष्टिपूर्ति-महोत्सव-अवसरे सम्पूर्णां भगवद्गीतां पठितवान्।","has_photo":true},{"date":"केन्द्र-संस्कृत-विश्वविद्यालयः","title":"संस्कृत-ओलिम्पियाड् — ऑस्ट्रेलिया-प्रथमः","desc":"राष्ट्रीय-संस्कृत-ओलिम्पियाड्-स्पर्धायाम् ऑस्ट्रेलियादेशे प्रथमस्थानं प्राप्तवान्। पूर्वे वर्षे अखिलभारतीयस्थानं २६६।","has_photo":true},{"date":"मैसूरु-दत्तपीठम्","title":"स्वर्णपदकम् — भगवद्गीता सप्तशतश्लोकाः","desc":"श्रीमद्भगवद्गीतायाः सप्तशतश्लोकान् कण्ठस्थीकृत्य पठित्वा स्वर्णपदकं प्राप्तवान्।","has_photo":true},{"date":"सिडनी · अवधानम्","title":"तटवर्ति-कल्याण-अवधानम्","desc":"प्रतिष्ठित-अवधाने अप्रस्तुतप्रसङ्गपृच्छकरूपेण भागं गृहीतवान्।","has_photo":true},{"date":"प्रणवपीठम्","title":"मानवकथा-गजेन्द्रमोक्षम् — विजेता","desc":"वद्दिपर्ति-पद्मकर-महोदयेन आयोजितयोः प्रतियोगितयोः पुरस्काराः प्राप्ताः।","has_photo":false},{"date":"वयः ~३–४ वर्षाणि","title":"'परभाषालेकुण्डा तेलुगुलो' — विजेता","desc":"त्रि-चतुर्वर्षीयः सन् शुद्ध-तेलुगु-प्रतियोगितायां विजयं प्राप्तवान्।","has_photo":false}]},"parayana":{"section_title":"पारायणम्","intro":"कार्तिकेयः एतानि पवित्राणि पारायणानि नित्यं करोति। प्रत्येकः संस्कृतश्लोकः तिसृषु लिपिषु दर्शितः — इष्टलिपिं चिनुत।","tab_te":"తెలుగు","tab_dev":"देवनागरी","tab_iast":"IAST","stotras":[{"id":"bg","title":"भगवद्गीता · सप्तशतश्लोकाः","te":"యదా యదా హి ధర్మస్య గ్లానిర్భవతి భారత ।\nఅభ్యుత్థానమధర్మస్య తదాత్మానం సృజామ్యహమ్ ॥","dev":"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥","iast":"yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||","attribution":"भगवद्गीता ४.७ — 'यदा धर्मस्य ह्रासः भवति, तदा अहम् अवतरामि।' सप्तशतश्लोकाः कण्ठस्थाः; मैसूरु-दत्तपीठात् स्वर्णपदकम्।"},{"id":"vs","title":"विष्णुसहस्रनाम","te":"విశ్వం విష్ణుర్వషట్కారో భూతభవ్యభవత్ప్రభుః ।\nభూతకృద్భూతభృద్భావో భూతాత్మా భూతభావనః ॥","dev":"विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः ।\nभूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः ॥","iast":"viśvaṁ viṣṇur vaṣaṭkāro bhūtabhavyabhavatprabhuḥ |\nbhūtakṛd bhūtabhṛd bhāvo bhūtātmā bhūtabhāvanaḥ ||","attribution":"प्रथमश्लोकः — सिडनी-मुरुगन्-मन्दिरे नित्यपारायणम्।"},{"id":"ls","title":"ललितासहस्रनाम","te":"శ్రీమాతా శ్రీమహారాజ్ఞీ శ్రీమత్సింహాసనేశ్వరీ ।\nచిదగ్నికుండసంభూతా దేవకార్యసముద్యతా ॥","dev":"श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी ।\nचिदग्निकुण्डसम्भूता देवकार्यसमुद्यता ॥","iast":"śrīmātā śrīmahārājñī śrīmatsinhāsaneśvarī |\ncidagnikuṇḍasambhūtā devakāryasamudyatā ||","attribution":"प्रथमनामानि — सिडनी-मुरुगन्-मन्दिरे नित्यपारायणम्।"},{"id":"sl","title":"सौन्दर्यलहरी · शतश्लोकाः","te":"శివః శక్త్యా యుక్తో యది భవతి శక్తః ప్రభవితుం\nన చేదేవం దేవో న ఖలు కుశలః స్పందితుమపి ।","dev":"शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि ।","iast":"śivaḥ śaktyā yukto yadi bhavati śaktaḥ prabhavituṁ\nna cedevaṁ devo na khalu kuśalaḥ spanditum api |","attribution":"आदिशङ्कराचार्यविरचितः प्रथमश्लोकः — नवरात्रि, सिडनी-अय्यप्प-मन्दिरे।"},{"id":"sg","title":"सङ्कटनाशन-गणेशस्तोत्रम्","te":"ప్రణమ్య శిరసా దేవం గౌరీపుత్రం వినాయకమ్ ।\nభక్తావాసం స్మరేన్నిత్యమాయుఃకామార్థసిద్ధయే ॥","dev":"प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।\nभक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये ॥","iast":"praṇamya śirasā devaṁ gaurīputraṁ vināyakam |\nbhaktāvāsaṁ smaren nityam āyuḥkāmārthasiddhaye ||","attribution":"वद्दिपर्ति-पद्मकर-समवेदं-शङ्खमुखशर्म-मडुगुल-नागफणिशर्मभ्यः स्वहस्तेन लिखित्वा अर्पितम्।"}]},"support":{"section_title":"सहायता स्पान्सर्शिप्च","intro":"कार्तिकेयस्य आध्यात्मिक-विद्यायात्रां प्रोत्साहयितुं धर्मकार्यम् एतत्। भवतां सहायता प्रतियोगितासु भागग्रहणे, कार्यक्रमेषु उपस्थाने, अधिक-भक्ति-विद्यासामग्री-निर्माणे च उपकारकम्।","cards":[{"icon":"🙏","title":"आशीर्वादः प्रोत्साहनञ्च","desc":"आशीर्वादान् प्रोत्साहनवचनानि वा प्रेषयन्तु, तस्य उपलब्धीः स्वसमाजे प्रसारयन्तु च। प्रत्येकं सन्देशः तस्मै स्फूर्तिं ददाति।"},{"icon":"📚","title":"विद्याया सहायता","desc":"संस्कृत-परीक्षा-नामाङ्कनम्, अध्ययनसामग्री, पुस्तकानि, ऑस्ट्रेलिया-भारत-प्रतियोगितासु भागग्रहणं च समर्थयन्तु।"},{"icon":"🎬","title":"सदस्यता प्रसारश्च","desc":"@samskruti.info.1 यूट्यूब्-वाहिन्यां सदस्यतां गृह्णन्तु, तस्य वीडियोः प्रसारयन्तु च — संस्कृत-सनातनधर्म-सौन्दर्यं विश्वे प्रसारयन्तु।"},{"icon":"🤝","title":"कार्यक्रमेषु आमन्त्रयन्तु","desc":"स्वमन्दिरे संस्थायां वा पारायणाय, प्रसङ्गाय, प्रतियोगितायै वा कार्तिकेयम् आमन्त्रयन्तु।"}]},"testimonials":{"section_title":"अभिप्रायाः","list":[{"text":"कार्तिकेयस्य शिवपद-पठनं वास्तवेन अद्भुतम् आसीत्। इतने अल्पवयसि उच्चारणस्पष्टता, भावगाम्भीर्यं, भक्तिश्च दुर्लभं दैवानुग्रहम् अस्ति। एषः सम्प्रदायं प्रकाशयन् अग्रे गच्छतु।","by":"समवेदं शङ्खमुखशर्मा","role":"प्रख्यात-तेलुगु-पण्डितः कविश्च · सिडनी-सन्दर्शनम्"},{"text":"अग्रिमपीढी इत्थं निष्ठया आनन्देन च संस्कृतम् आदत्ते इति हर्षदायकम्। ओलिम्पियाड्-स्पर्धायाम् तस्य प्रदर्शनम् असाधारण-सहज-प्रतिभां शिक्षितम् अभ्यासञ्च प्रतिबिम्बयति।","by":"केन्द्र-संस्कृत-विश्वविद्यालयः","role":"संस्कृत-ओलिम्पियाड् — ऑस्ट्रेलिया-प्रथमः"},{"text":"नवरात्रौ कार्तिकेयस्य सौन्दर्यलहरी-पारायणेन अस्माकं मन्दिरं वास्तवेन पवित्रवातावरणेन परिपूर्णम् अभवत्। दशवर्षीये बालके एतादृशी भक्तिः कण्ठस्थश्च वास्तवेन दैवकृपा एव।","by":"सिडनी-अय्यप्प-मन्दिरम्","role":"नवरात्रि-सौन्दर्यलहरी-पारायणम्"}]},"youtube":{"section_title":"यूट्यूब्-वाहिनी","channel_name":"संस्कृतिः · @samskruti.info.1","channel_sub":"संस्कृतम् · तेलुगु · भक्तिः · पारायणम् · प्रसङ्गाः","channel_url":"https://www.youtube.com/@samskruti.info.1","bharatam_title":"भारतं-लघुप्रसङ्गाः","bharatam_desc":"महाभारतविषये लघुप्रसङ्गानां यूट्यूब्-श्रेणी — सम्पूर्णा प्लेलिस्ट् पश्यतु","bharatam_url":"https://www.youtube.com/watch?v=xB1CT8539J0&list=PL-V59KU-Q6hdZckKaiR-W8U7WNjyCiUiZ","videos":[{"title":"भगवद्गीता-पारायणम्","meta":"सप्तशतश्लोकाः · कार्तिकेयः पीडपर्ति"},{"title":"संस्कृत-स्तोत्राणि","meta":"स्तोत्राणि · सहस्रनामानि · भक्तिगीतानि"},{"title":"भारतं-लघुप्रसङ्गाः","meta":"महाभारत-प्रसङ्गाः · सम्पूर्णश्रेणी"}]},"contact":{"section_title":"सम्पर्कः","intro":"कार्तिकेयम् कार्यक्रमेषु, पारायणाय, प्रतियोगितासु, प्रसङ्गाय वा आमन्त्रयितुम् — आशीर्वादान् विचारांश्च प्रेषयितुम् — अस्मान् लिखन्तु।","location_city":"सिडनी, न्यू-साउथ-वेल्स्","location_country":"ऑस्ट्रेलिया","youtube_label":"यूट्यूब्-वाहिनी","form_name":"भवतः नाम","form_email":"भवतः ईमेल्","form_subject":"विषयः","form_message":"भवतः सन्देशः, आशीर्वादः विचारो वा…","form_submit":"सन्देशं प्रेषयतु ✉","form_thanks":"🙏 धन्यवादाः! वयं शीघ्रं प्रतिवदिष्यामः।","quote_sa":"सर्वे भवन्तु सुखिनः ।","quote_en":"सर्वे सुखिनः भवन्तु।"},"footer":{"sa":"ॐ तत्सत् । श्रीकृष्णार्पणमस्तु ।","iast":"Oṃ tat sat · Śrī Kṛṣṇārpaṇam astu","copy":"© २०२५ कार्तिकेयः पीडपर्ति · सिडनी, ऑस्ट्रेलिया"},"settings":{"title":"व्यवस्थापनम्","theme":"दृश्यम्","theme_light":"☀ प्रकाशः","theme_dark":"☽ तमः","font_size":"अक्षरमापम्","accent":"वर्णः","language":"भाषा"}}};

const LANGS = ["en","te","sa"];
const LANG_META = {
  en: { label:"EN", full:"English", script:"latin" },
  te: { label:"తె", full:"తెలుగు", script:"telugu" },
  sa: { label:"सं", full:"संस्कृतम्", script:"devanagari" }
};

const NAV_KEYS = ["about","profile","credits","events","parayana","support","testimonials","contact","youtube"];

const GOLD = "#b8730a";
const GOLD_L = "#e8a830";
const GOLD_XL = "#faedc8";
const MAR = "#6b1528";
const MAR_L = "#c4405a";

function useTranslation(lang) {
  const T = ALL[lang] || ALL.en;
  const t = (section, key, fallback="") => {
    if (!T[section]) return fallback;
    if (key === undefined) return T[section];
    return T[section][key] ?? fallback;
  };
  return t;
}

function LangPill({ lang, setLang }) {
  return (
    <div style={{display:"flex",border:"1px solid "+GOLD+"44",borderRadius:20,overflow:"hidden",flexShrink:0}}>
      {LANGS.map(l => (
        <button key={l} onClick={() => setLang(l)} style={{
          padding:"4px 10px",fontFamily:"'Cinzel',serif",fontSize:11,letterSpacing:"0.06em",
          cursor:"pointer",border:"none",borderRight: l!=="sa" ? "1px solid "+GOLD+"33" : "none",
          background: lang===l ? GOLD : "transparent",
          color: lang===l ? "#fff" : "#8a6040",
          fontWeight: lang===l ? 700 : 400,
          transition:"all 0.2s"
        }}>{LANG_META[l].label}</button>
      ))}
    </div>
  );
}

function Section({ id, title, children, alt, noTitle }) {
  return (
    <section id={id} style={{
      padding:"60px 0",
      background: alt ? "#fff9ef" : "#faf5eb",
    }}>
      <div style={{maxWidth:1080,margin:"0 auto",padding:"0 2rem"}}>
        {!noTitle && title && <>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(20px,2.5vw,28px)",
            color:"#7a4d06",letterSpacing:"0.03em",marginBottom:8}}>{title}</h2>
          <div style={{width:56,height:3,background:`linear-gradient(90deg,${GOLD},${GOLD_L},transparent)`,
            marginBottom:32,borderRadius:2}}/>
        </>}
        {children}
      </div>
    </section>
  );
}

function AchCard({ icon, title, desc, year, tag }) {
  const tagColors = {
    gold: "#b8730a", olympiad: "#185fa5", parayana: "#6b1528",
    scholar: "#1d5c38", competition: "#c45e10", discourse: "#5a2d7a"
  };
  const accent = tagColors[tag] || GOLD;
  return (
    <div style={{
      background:"#fffbf3",border:"1px solid "+GOLD+"33",borderRadius:12,
      padding:"20px 22px",position:"relative",overflow:"hidden",
      transition:"transform 0.2s,box-shadow 0.2s",cursor:"default",
      borderBottom:`3px solid ${accent}`
    }}
    onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 32px rgba(122,77,6,0.14)"}}
    onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}
    >
      <div style={{fontSize:26,marginBottom:8}}>{icon}</div>
      <div style={{fontFamily:"'Cinzel',serif",fontSize:13.5,color:"#7a4d06",marginBottom:6,lineHeight:1.4}}>{title}</div>
      <div style={{fontSize:13,color:"#6b4820",lineHeight:1.75}}>{desc}</div>
      <div style={{marginTop:10,fontSize:11,color:"#a07850",fontStyle:"italic",
        paddingTop:8,borderTop:"1px solid "+GOLD+"22"}}>{year}</div>
    </div>
  );
}

function ExamTable({ rows, title }) {
  return (
    <div style={{marginBottom:32}}>
      <h3 style={{fontFamily:"'Cinzel',serif",fontSize:15,color:"#7a4d06",marginBottom:12}}>{title}</h3>
      <div style={{borderRadius:10,overflow:"hidden",border:"1px solid "+GOLD+"33"}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
          <thead>
            <tr style={{background:GOLD}}>
              {["Year","Exam","Score",""].map(h => (
                <th key={h} style={{padding:"10px 14px",color:"#fff",fontFamily:"'Cinzel',serif",
                  fontSize:11,letterSpacing:"0.06em",textAlign:"left",fontWeight:600}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i) => (
              <tr key={i} style={{background: i%2===0 ? "#fffbf3" : "#faf5eb"}}>
                <td style={{padding:"10px 14px",fontFamily:"'Cinzel',serif",fontSize:13}}>{r.year}</td>
                <td style={{padding:"10px 14px",color:"#4a2c14"}}>{r.exam}</td>
                <td style={{padding:"10px 14px",fontFamily:"'Cinzel',serif",fontWeight:700,color:GOLD}}>{r.score}</td>
                <td style={{padding:"10px 14px"}}>{r.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PhotoPlaceholder({ label, sub, count=8 }) {
  return (
    <div style={{marginTop:40}}>
      <h3 style={{fontFamily:"'Cinzel',serif",fontSize:15,color:"#7a4d06",marginBottom:16}}>{label}</h3>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:12}}>
        {Array(count).fill(0).map((_,i) => (
          <div key={i} style={{
            aspectRatio:"4/3",border:`2px dashed ${GOLD}55`,borderRadius:10,
            display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
            gap:6,color:GOLD+"88",background:"#faedc8",cursor:"pointer",
            transition:"all 0.2s"
          }}
          onMouseEnter={e=>{e.currentTarget.style.background="#f5d898";e.currentTarget.style.borderColor=GOLD}}
          onMouseLeave={e=>{e.currentTarget.style.background="#faedc8";e.currentTarget.style.borderColor=GOLD+"55"}}
          >
            <span style={{fontSize:28}}>{i<4?"🏆":"📜"}</span>
            <span style={{fontSize:11,fontFamily:"'Cinzel',serif",letterSpacing:"0.04em",textAlign:"center",padding:"0 8px"}}>{sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScriptTabs({ options, active, onChange }) {
  return (
    <div style={{display:"flex",gap:4,marginBottom:10}}>
      {options.map((o,i) => (
        <button key={i} onClick={()=>onChange(i)} style={{
          padding:"3px 10px",borderRadius:20,fontSize:11,fontFamily:"'Cinzel',serif",
          letterSpacing:"0.04em",cursor:"pointer",border:"1px solid",
          borderColor: active===i ? GOLD : GOLD+"44",
          background: active===i ? GOLD : "transparent",
          color: active===i ? "#fff" : "#8a6040",
          fontWeight: active===i ? 700 : 400,
          transition:"all 0.2s"
        }}>{o}</button>
      ))}
    </div>
  );
}

function VerseCard({ stotra, tabs }) {
  const [activeScript, setActiveScript] = useState(0);
  const verse = [stotra.te, stotra.dev, stotra.iast][activeScript];
  const fontFamily = activeScript===0 ? "'Noto Sans Telugu',sans-serif"
    : activeScript===1 ? "'Noto Sans Devanagari',sans-serif"
    : "Georgia,serif";
  return (
    <div style={{background:"#fffbf3",border:"1px solid "+GOLD+"33",borderRadius:12,padding:"22px 20px"}}>
      <h3 style={{fontFamily:"'Cinzel',serif",color:"#7a4d06",fontSize:14.5,marginBottom:10}}>{stotra.title}</h3>
      <ScriptTabs options={tabs} active={activeScript} onChange={setActiveScript}/>
      <div style={{
        fontFamily,fontSize:activeScript===2?13:15,color:MAR,
        lineHeight:activeScript===2?1.9:2.1,marginBottom:10,
        fontStyle:activeScript===2?"italic":"normal",
        whiteSpace:"pre-line"
      }}>{verse}</div>
      <div style={{fontSize:12,color:"#a07850",fontStyle:"italic",
        paddingTop:8,borderTop:"1px solid "+GOLD+"22",lineHeight:1.6}}>
        {stotra.attribution}
      </div>
    </div>
  );
}

function TimelineItem({ item, placeholder }) {
  return (
    <div style={{position:"relative",paddingLeft:28,marginBottom:32}}>
      <div style={{position:"absolute",left:0,top:6,width:12,height:12,borderRadius:"50%",
        background:GOLD,border:"2px solid #faf5eb",boxShadow:`0 0 0 3px ${GOLD}33`}}/>
      <div style={{fontSize:11,color:"#a07850",fontStyle:"italic",marginBottom:3,letterSpacing:"0.04em"}}>{item.date}</div>
      <div style={{fontFamily:"'Cinzel',serif",fontSize:14,color:"#7a4d06",marginBottom:5}}>{item.title}</div>
      <div style={{fontSize:13.5,color:"#6b4820",lineHeight:1.75}}>{item.desc}</div>
      {item.has_photo && (
        <div style={{marginTop:10,height:44,border:`2px dashed ${GOLD}44`,borderRadius:8,
          display:"flex",alignItems:"center",justifyContent:"center",
          fontSize:12,fontFamily:"'Cinzel',serif",letterSpacing:"0.04em",
          color:GOLD+"88",background:"#faedc8"}}>
          📷 {placeholder}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const [activeSection, setActiveSection] = useState("home");
  const t = useTranslation(lang);
  
  const nav = t("nav") || {};
  const hero = t("hero") || {};
  const about = t("about") || {};
  const profile = t("profile") || {};
  const credits = t("credits") || {};
  const events = t("events") || {};
  const parayana = t("parayana") || {};
  const support = t("support") || {};
  const testimonials = t("testimonials") || {};
  const youtube = t("youtube") || {};
  const contact = t("contact") || {};
  const footer = t("footer") || {};
  const settings = t("settings") || {};
  
  const isTE = lang === "te";
  const isSA = lang === "sa";
  const bodyFont = isTE ? "'Noto Sans Telugu',sans-serif" 
    : isSA ? "'Noto Sans Devanagari',sans-serif" 
    : "'Cormorant Garamond',Georgia,serif";
  const bodySize = isTE || isSA ? fontSize + 1 : fontSize;
  
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

  return (
    <div style={{fontFamily:bodyFont,fontSize:bodySize,lineHeight:1.75,background:"#faf5eb",minHeight:"100vh"}}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Noto+Sans+Telugu:wght@300;400;500;600&family=Noto+Sans+Devanagari:wght@300;400;500;600&display=swap"/>
      
      {/* NAV */}
      <nav style={{
        position:"sticky",top:0,zIndex:100,height:64,
        background:"rgba(250,245,235,0.97)",backdropFilter:"blur(12px)",
        borderBottom:"1px solid "+GOLD+"30",
        display:"flex",alignItems:"center",padding:"0 1.25rem",gap:8,
        boxShadow:"0 2px 16px rgba(122,77,6,0.08)"
      }}>
        <button onClick={()=>goTo("home")} style={{display:"flex",alignItems:"center",gap:8,background:"none",border:"none",cursor:"pointer",flexShrink:0}}>
          <div style={{width:40,height:40,borderRadius:"50%",background:`linear-gradient(135deg,${GOLD_XL},#f5d090)`,
            border:`2px solid ${GOLD}`,display:"flex",alignItems:"center",justifyContent:"center",
            fontFamily:"'Noto Sans Devanagari',sans-serif",fontSize:20,color:GOLD,fontWeight:400}}>ॐ</div>
          <div style={{display:"flex",flexDirection:"column",lineHeight:1.2,textAlign:"left"}}>
            <span style={{fontFamily:"'Cinzel Decorative',serif",fontSize:13,fontWeight:700,color:GOLD,letterSpacing:"0.04em"}}>{nav.logo_name||"Samskruti"}</span>
            <span style={{fontSize:10,color:"#a07850",letterSpacing:"0.05em"}}>{nav.logo_tag||"సంస్కృతి • संस्कृति"}</span>
          </div>
        </button>
        
        <div style={{display:"flex",gap:0,marginLeft:"auto",alignItems:"center",overflow:"hidden"}}>
          {NAV_KEYS.map(k => (
            <a key={k} href={"#"+k} onClick={e=>{e.preventDefault();goTo(k)}} style={{
              display:"block",padding:"4px 7px",fontFamily:"'Cinzel',serif",fontSize:10,
              color:"#8a6040",letterSpacing:"0.05em",whiteSpace:"nowrap",textDecoration:"none",
              borderBottom: activeSection===k ? `2px solid ${GOLD}` : "2px solid transparent",
              color: activeSection===k ? GOLD : "#8a6040",
              transition:"color 0.2s"
            }}>{nav[k]||k}</a>
          ))}
        </div>
        
        <div style={{display:"flex",alignItems:"center",gap:6,marginLeft:8,flexShrink:0}}>
          <LangPill lang={lang} setLang={setLang}/>
          <button onClick={()=>setSettingsOpen(!settingsOpen)} style={{
            width:32,height:32,borderRadius:8,border:"1px solid "+GOLD+"44",
            background:"none",cursor:"pointer",fontSize:15,color:"#8a6040",
            display:"flex",alignItems:"center",justifyContent:"center"
          }}>⚙</button>
        </div>
      </nav>
      
      {/* SETTINGS PANEL */}
      {settingsOpen && (
        <div style={{position:"fixed",inset:0,zIndex:200}} onClick={()=>setSettingsOpen(false)}>
          <div style={{position:"absolute",top:64,right:0,width:260,
            background:"#fff9ef",borderLeft:"2px solid "+GOLD+"44",
            padding:"20px 18px",boxShadow:"-4px 0 24px rgba(0,0,0,0.1)",height:"calc(100vh - 64px)",overflowY:"auto"}}
            onClick={e=>e.stopPropagation()}>
            <h3 style={{fontFamily:"'Cinzel',serif",fontSize:14,color:GOLD,marginBottom:20,letterSpacing:"0.05em"}}>⚙ {settings.title||"Settings"}</h3>
            
            <div style={{marginBottom:20}}>
              <label style={{display:"block",fontSize:12,color:"#8a6040",marginBottom:8,fontStyle:"italic"}}>{settings.language||"Language"}</label>
              <div style={{display:"flex",flexDirection:"column",gap:6}}>
                {LANGS.map((l,i) => (
                  <button key={l} onClick={()=>setLang(l)} style={{
                    padding:"8px 12px",border:"1px solid",borderRadius:8,cursor:"pointer",
                    textAlign:"left",fontSize:13,fontFamily:"'Cinzel',serif",
                    borderColor: lang===l ? GOLD : GOLD+"44",
                    background: lang===l ? GOLD : "transparent",
                    color: lang===l ? "#fff" : "#8a6040",
                    fontWeight: lang===l ? 700 : 400,
                    transition:"all 0.2s",
                    display:"flex",alignItems:"center",gap:8
                  }}>
                    <span style={{fontSize:16}}>{["🇦🇺","🇮🇳","🕉"][i]}</span>
                    {LANG_META[l].label} · {LANG_META[l].full}
                  </button>
                ))}
              </div>
            </div>
            
            <div style={{marginBottom:20}}>
              <label style={{display:"block",fontSize:12,color:"#8a6040",marginBottom:8,fontStyle:"italic"}}>{settings.font_size||"Font Size"} — {fontSize}px</label>
              <input type="range" min={14} max={22} value={fontSize} onChange={e=>setFontSize(+e.target.value)} style={{width:"100%",accentColor:GOLD}}/>
            </div>
            
            <div>
              <label style={{display:"block",fontSize:12,color:"#8a6040",marginBottom:8,fontStyle:"italic"}}>{settings.theme||"Theme"}</label>
              <div style={{display:"flex",gap:6}}>
                {["☀ Light","☽ Dark"].map(th=>(
                  <button key={th} style={{flex:1,padding:"6px",border:"1px solid "+GOLD+"44",borderRadius:8,
                    background:th.includes("Light")?GOLD:"transparent",color:th.includes("Light")?"#fff":"#8a6040",
                    cursor:"pointer",fontSize:12,fontFamily:"'Cinzel',serif"}}>{th}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* HERO */}
      <section id="home" style={{
        minHeight:"100vh",display:"flex",alignItems:"center",
        background:"linear-gradient(160deg,#fff9ef 60%,#faedc8 100%)",
        position:"relative",overflow:"hidden",paddingTop:64
      }}>
        <div style={{position:"absolute",inset:0,opacity:0.04,
          backgroundImage:"url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z' fill='%23b8730a'/%3E%3C/svg%3E")"}}/>
        <div style={{maxWidth:1080,margin:"0 auto",padding:"0 2rem",display:"flex",alignItems:"center",gap:60,width:"100%",position:"relative"}}>
          {/* Avatar */}
          <div style={{flexShrink:0,width:260,height:260,borderRadius:"50%",
            border:`4px solid ${GOLD}`,boxShadow:`0 0 0 8px ${GOLD_XL},0 16px 48px rgba(122,77,6,0.2)`,
            overflow:"hidden",background:`linear-gradient(135deg,${GOLD_XL},#f0b040)`,
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg viewBox="0 0 260 260" width="260" height="260" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="bg" cx="50%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#faedc8" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#6b1528" stopOpacity="0.7"/>
                </radialGradient>
              </defs>
              <rect width="260" height="260" fill="url(#bg)"/>
              <g opacity="0.15" transform="translate(130,130)">
                {[0,45,90,135,180,225,270,315].map(a=>(
                  <ellipse key={a} rx="10" ry="38" fill="#b8730a" transform={`rotate(${a}) translate(0,-52)`}/>
                ))}
              </g>
              <ellipse cx="130" cy="82" rx="35" ry="38" fill="rgba(184,115,10,0.9)"/>
              <path d="M96 118 Q96 82 130 78 Q164 82 164 118 L166 210 Q130 226 94 210Z" fill="rgba(184,115,10,0.9)"/>
              <path d="M96 158 Q113 170 130 168 Q147 170 164 158 L166 210 Q130 226 94 210Z" fill="rgba(200,140,30,0.3)"/>
              <path d="M103 146 L118 136 L121 172Z" fill="rgba(230,180,80,0.9)"/>
              <path d="M157 146 L142 136 L139 172Z" fill="rgba(230,180,80,0.9)"/>
              <ellipse cx="130" cy="74" rx="3" ry="6" fill="#c8390a" opacity="0.9"/>
              <circle cx="130" cy="82" r="46" fill="none" stroke="rgba(232,168,48,0.25)" strokeWidth="1.5" strokeDasharray="4 4"/>
              <text x="130" y="248" textAnchor="middle" fontSize="19" fill="rgba(184,115,10,0.5)" fontFamily="serif">ॐ</text>
              {[[32,32],[228,32],[32,212],[228,212],[130,15],[15,130],[245,130]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r={i===4?2.5:1.8} fill="#e8a830" opacity={i===4?0.75:0.5}/>
              ))}
            </svg>
          </div>
          
          <div style={{flex:1}}>
            <p style={{fontFamily:"'Cinzel',serif",fontSize:11,letterSpacing:"0.2em",
              color:MAR,textTransform:"uppercase",marginBottom:10}}>{hero.greeting}</p>
            <h1 style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(28px,4vw,48px)",
              fontWeight:700,color:"#7a4d06",lineHeight:1.1,marginBottom:8}}>{hero.name}</h1>
            <p style={{fontFamily:"'Cinzel',serif",fontSize:14,color:MAR,fontStyle:"italic",marginBottom:18}}>{hero.age_location}</p>
            <p style={{maxWidth:520,color:"#6b4820",fontSize:15,marginBottom:22,lineHeight:1.85}}>{hero.description}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:22}}>
              {(hero.badges||[]).map((b,i)=>(
                <span key={i} style={{padding:"4px 12px",borderRadius:100,
                  border:`1px solid ${GOLD}66`,fontSize:11,color:"#7a4d06",
                  background:GOLD_XL,fontFamily:"'Cinzel',serif",letterSpacing:"0.03em"}}>{b}</span>
              ))}
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
              <button onClick={()=>goTo("profile")} style={{
                padding:"10px 26px",borderRadius:10,background:GOLD,color:"#fff",border:"none",
                fontFamily:"'Cinzel',serif",fontSize:12,letterSpacing:"0.07em",cursor:"pointer",
                boxShadow:`0 2px 12px ${GOLD}55`,transition:"all 0.2s"}}>{hero.btn_achievements||"View Achievements"}</button>
              <a href="https://www.youtube.com/@samskruti.info.1" target="_blank" rel="noopener" style={{
                padding:"10px 26px",borderRadius:10,border:`1.5px solid ${GOLD}88`,color:GOLD,
                fontFamily:"'Cinzel',serif",fontSize:12,letterSpacing:"0.07em",textDecoration:"none",
                transition:"all 0.2s"}}>{hero.btn_youtube||"▶ YouTube"}</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* ABOUT */}
      <Section id="about" title={about.section_title} alt>
        <div style={{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:"3rem",alignItems:"start"}}>
          <div>
            <p style={{fontSize:15,color:"#6b4820",marginBottom:16,lineHeight:1.85}}>{about.para1}</p>
            <p style={{fontSize:14,color:"#6b4820",marginBottom:20,lineHeight:1.85}}>{about.para2}</p>
            <div style={{borderLeft:`3px solid ${GOLD}`,padding:"12px 14px",
              background:`linear-gradient(90deg,${GOLD_XL},transparent)`,borderRadius:"0 10px 10px 0",marginTop:8}}>
              <p style={{fontFamily:"'Noto Sans Devanagari',sans-serif",fontSize:16,color:"#7a4d06",marginBottom:4}}>{about.quote_sa}</p>
              <p style={{fontSize:12,color:"#a07850",fontStyle:"italic",marginBottom:4}}>{about.quote_iast}</p>
              <p style={{fontFamily:"'Noto Sans Telugu',sans-serif",fontSize:14,color:"#6b4820",marginBottom:2}}>{about.quote_te}</p>
              <p style={{fontSize:13,color:"#8a6040",fontStyle:"italic"}}>{about.quote_en}</p>
            </div>
          </div>
          <div>
            {(about.cards||[]).map((c,i)=>(
              <div key={i} style={{border:`1px solid ${GOLD}33`,borderRadius:12,padding:"18px 20px",
                marginBottom:12,background:"#fffbf3",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateX(4px)";e.currentTarget.style.boxShadow=`0 2px 16px rgba(122,77,6,0.1)`}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
                <h4 style={{fontFamily:"'Cinzel',serif",color:"#7a4d06",fontSize:13,marginBottom:8,letterSpacing:"0.05em"}}>{c.title}</h4>
                <p style={{fontSize:13,color:"#6b4820",lineHeight:1.8}}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* PROFILE */}
      <Section id="profile" title={profile.section_title}>
        {/* Journey */}
        <div style={{background:"#fffbf3",border:`1px solid ${GOLD}33`,borderRadius:14,
          padding:"28px 32px",marginBottom:32,borderLeft:`4px solid ${GOLD}`,position:"relative"}}>
          <h3 style={{fontFamily:"'Cinzel',serif",color:"#7a4d06",fontSize:17,marginBottom:14}}>{profile.journey_title}</h3>
          <p style={{fontSize:14,color:"#6b4820",lineHeight:1.95,whiteSpace:"pre-line"}}>{profile.journey}</p>
        </div>
        {/* Exam table */}
        {profile.exam_table && <ExamTable rows={profile.exam_table} title={profile.exam_table_title||"Sanskrit Examinations"}/>}
        {/* Achievement cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:14}}>
          {(profile.achievements||[]).map((a,i)=><AchCard key={i} {...a}/>)}
        </div>
        {/* Photo placeholders */}
        <PhotoPlaceholder label={profile.photo_placeholder||"Certificates & Photos"} sub={profile.photo_placeholder_sub||"Photo will appear here"}/>
      </Section>
      
      {/* CREDITS */}
      <Section id="credits" title={credits.section_title} alt>
        <p style={{fontSize:14,color:"#6b4820",marginBottom:24,fontStyle:"italic"}}>{credits.intro}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:10}}>
          {(credits.list||[]).map((c,i)=>(
            <div key={i} style={{background:"#fffbf3",border:`1px solid ${GOLD}33`,borderRadius:10,
              padding:"12px 14px",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=GOLD+"88";e.currentTarget.style.transform="translateY(-2px)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=GOLD+"33";e.currentTarget.style.transform=""}}>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:13,color:"#7a4d06",marginBottom:3}}>{c.name}</div>
              <div style={{fontSize:12,color:"#a07850",fontStyle:"italic",lineHeight:1.5}}>{c.role}</div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* EVENTS */}
      <Section id="events" title={events.section_title}>
        <div style={{position:"relative",paddingLeft:24}}>
          <div style={{position:"absolute",left:6,top:0,bottom:0,width:2,
            background:`linear-gradient(to bottom,${GOLD},${MAR_L},transparent)`}}/>
          {(events.list||[]).map((item,i)=>(
            <TimelineItem key={i} item={item} placeholder={events.events_placeholder||"Event photo"}/>
          ))}
        </div>
      </Section>
      
      {/* PARAYANA */}
      <Section id="parayana" title={parayana.section_title} alt>
        <p style={{fontSize:14,color:"#6b4820",marginBottom:24,fontStyle:"italic"}}>{parayana.intro}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:14}}>
          {(parayana.stotras||[]).map((s,i)=>(
            <VerseCard key={i} stotra={s} tabs={[parayana.tab_te||"Telugu",parayana.tab_dev||"Devanāgarī",parayana.tab_iast||"IAST"]}/>
          ))}
        </div>
      </Section>
      
      {/* SUPPORT */}
      <Section id="support" title={support.section_title}>
        <p style={{fontSize:14,color:"#6b4820",marginBottom:24}}>{support.intro}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:14}}>
          {(support.cards||[]).map((c,i)=>(
            <div key={i} style={{background:"#fffbf3",border:`1px solid ${GOLD}33`,borderRadius:12,
              padding:"24px",textAlign:"center",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 8px 24px rgba(122,77,6,0.1)`}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
              <div style={{fontSize:32,marginBottom:12}}>{c.icon}</div>
              <h3 style={{fontFamily:"'Cinzel',serif",color:"#7a4d06",fontSize:14.5,marginBottom:10}}>{c.title}</h3>
              <p style={{fontSize:13,color:"#6b4820",lineHeight:1.8}}>{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* TESTIMONIALS */}
      <Section id="testimonials" title={testimonials.section_title} alt>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:14}}>
          {(testimonials.list||[]).map((item,i)=>(
            <div key={i} style={{background:"#fffbf3",border:`1px solid ${GOLD}33`,borderRadius:12,
              padding:"24px",transition:"box-shadow 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow=`0 4px 20px rgba(122,77,6,0.1)`}
              onMouseLeave={e=>e.currentTarget.style.boxShadow=""}>
              <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:60,color:GOLD,
                opacity:0.15,lineHeight:0.75,marginBottom:8}}>"</div>
              <p style={{fontSize:14,color:"#6b4820",fontStyle:"italic",lineHeight:1.85,marginBottom:12}}>{item.text}</p>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:12.5,color:"#7a4d06",marginBottom:2}}>{item.by}</div>
              <div style={{fontSize:11.5,color:"#a07850",fontStyle:"italic"}}>{item.role}</div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* YOUTUBE */}
      <Section id="youtube" title={youtube.section_title}>
        <a href={youtube.channel_url} target="_blank" rel="noopener" style={{
          display:"flex",alignItems:"center",gap:12,background:"#fffbf3",
          border:`1.5px solid ${GOLD}55`,borderRadius:12,padding:"16px 20px",
          textDecoration:"none",color:"inherit",marginBottom:16,transition:"all 0.2s"}}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=GOLD;e.currentTarget.style.transform="translateY(-2px)"}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor=GOLD+"55";e.currentTarget.style.transform=""}}>
          <span style={{fontSize:26,flexShrink:0}}>▶</span>
          <div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:14,color:"#7a4d06",marginBottom:2}}>{youtube.channel_name}</div>
            <div style={{fontSize:12,color:"#a07850"}}>{youtube.channel_sub}</div>
          </div>
          <span style={{marginLeft:"auto",color:GOLD,fontSize:18}}>↗</span>
        </a>
        <a href={youtube.bharatam_url} target="_blank" rel="noopener" style={{
          display:"flex",alignItems:"center",gap:14,
          background:`linear-gradient(135deg,${GOLD_XL},#fffbf3)`,
          border:`2px solid ${GOLD}55`,borderRadius:12,padding:"18px 22px",
          textDecoration:"none",color:"inherit",marginBottom:24,transition:"all 0.2s"}}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=GOLD;e.currentTarget.style.transform="translateY(-3px)"}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor=GOLD+"55";e.currentTarget.style.transform=""}}>
          <span style={{fontSize:34,flexShrink:0}}>📜</span>
          <div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:16,color:"#7a4d06",marginBottom:3}}>{youtube.bharatam_title}</div>
            <div style={{fontSize:13,color:"#6b4820"}}>{youtube.bharatam_desc}</div>
          </div>
          <span style={{marginLeft:"auto",color:GOLD,fontSize:18}}>↗</span>
        </a>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(255px,1fr))",gap:14}}>
          {(youtube.videos||[]).map((v,i)=>(
            <a key={i} href={youtube.channel_url} target="_blank" rel="noopener" style={{
              background:"#fffbf3",border:`1px solid ${GOLD}33`,borderRadius:12,
              overflow:"hidden",textDecoration:"none",color:"inherit",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow=`0 8px 28px rgba(122,77,6,0.14)`}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
              <div style={{aspectRatio:"16/9",background:`linear-gradient(135deg,${MAR},${GOLD})`,
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,color:"rgba(255,255,255,0.85)"}}>▶</div>
              <div style={{padding:"12px 14px"}}>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:13,color:"#2c1a0e",marginBottom:3}}>{v.title}</div>
                <div style={{fontSize:12,color:"#a07850"}}>{v.meta}</div>
              </div>
            </a>
          ))}
        </div>
      </Section>
      
      {/* CONTACT */}
      <Section id="contact" title={contact.section_title} alt>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:"3rem"}}>
          <div>
            <p style={{fontSize:14,color:"#6b4820",marginBottom:20}}>{contact.intro}</p>
            {[
              {icon:"📍",main:contact.location_city,sub:contact.location_country},
              {icon:"▶",main:contact.youtube_label,sub:"@samskruti.info.1",link:"https://www.youtube.com/@samskruti.info.1"}
            ].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:14}}>
                <span style={{color:GOLD,fontSize:17,marginTop:2,flexShrink:0}}>{item.icon}</span>
                <div>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:13,color:"#2c1a0e",marginBottom:2}}>{item.main}</div>
                  {item.link
                    ? <a href={item.link} target="_blank" rel="noopener" style={{fontSize:12.5,color:GOLD,textDecoration:"none"}}>{item.sub}</a>
                    : <div style={{fontSize:12,color:"#a07850"}}>{item.sub}</div>}
                </div>
              </div>
            ))}
            <div style={{borderLeft:`3px solid ${GOLD}`,padding:"10px 14px",
              background:`linear-gradient(90deg,${GOLD_XL},transparent)`,borderRadius:"0 8px 8px 0",marginTop:16}}>
              <p style={{fontFamily:"'Noto Sans Devanagari',sans-serif",fontSize:16,color:"#7a4d06",marginBottom:3}}>{contact.quote_sa}</p>
              <p style={{fontSize:13,color:"#8a6040",fontStyle:"italic"}}>{contact.quote_en}</p>
            </div>
          </div>
          <div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {[
                {id:"fn",type:"text",ph:contact.form_name},
                {id:"fe",type:"email",ph:contact.form_email},
                {id:"fs2",type:"text",ph:contact.form_subject}
              ].map(f=>(
                <input key={f.id} type={f.type} placeholder={f.ph||""} style={{
                  width:"100%",padding:"10px 14px",background:"#fffbf3",
                  border:`1.5px solid ${GOLD}44`,borderRadius:10,
                  fontSize:14,fontFamily:"inherit",color:"#2c1a0e",outline:"none"}}
                  onFocus={e=>e.target.style.borderColor=GOLD}
                  onBlur={e=>e.target.style.borderColor=GOLD+"44"}/>
              ))}
              <textarea placeholder={contact.form_message||""} rows={4} style={{
                width:"100%",padding:"10px 14px",background:"#fffbf3",
                border:`1.5px solid ${GOLD}44`,borderRadius:10,
                fontSize:14,fontFamily:"inherit",color:"#2c1a0e",outline:"none",resize:"vertical"}}
                onFocus={e=>e.target.style.borderColor=GOLD}
                onBlur={e=>e.target.style.borderColor=GOLD+"44"}/>
              <button style={{alignSelf:"flex-start",padding:"10px 24px",borderRadius:10,
                background:GOLD,color:"#fff",border:"none",cursor:"pointer",
                fontFamily:"'Cinzel',serif",fontSize:12,letterSpacing:"0.07em",
                boxShadow:`0 2px 10px ${GOLD}44`}}>{contact.form_submit||"Send ✉"}</button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* FOOTER */}
      <footer style={{background:"#fff9ef",borderTop:`1px solid ${GOLD}33`,textAlign:"center",padding:"28px 16px"}}>
        <p style={{fontFamily:"'Noto Sans Devanagari',sans-serif",fontSize:16,color:"#7a4d06",marginBottom:5}}>{footer.sa}</p>
        <p style={{fontSize:13,fontStyle:"italic",color:"#a07850",marginBottom:8,letterSpacing:"0.04em"}}>{footer.iast}</p>
        <p style={{fontSize:12.5,color:"#c8a878"}}>{footer.copy} · <a href="https://www.youtube.com/@samskruti.info.1" target="_blank" rel="noopener" style={{color:GOLD,textDecoration:"none"}}>YouTube</a></p>
      </footer>
    </div>
  );
}

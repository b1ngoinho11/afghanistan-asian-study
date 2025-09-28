import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * NewsTicker.jsx — a lightweight, accessible, Tailwind-styled running text (marquee) for news headlines.
 *
 * Features
 * - Uses provided mock API response by default (see `mockResponse`).
 * - Real API fetch is included but commented out — just uncomment to go live.
 * - Seamless, infinite horizontal scroll with duplicated content.
 * - Pause on hover / focus; supports reduced-motion users.
 * - Clickable items open in a new tab with rel-safety.
 * - Customizable speed, gap, and refresh interval.
 *
 * Usage
 * <NewsTicker />
 * <NewsTicker speedPxPerSec={60} gapPx={48} fetchIntervalMs={5*60_000} />
 */

// --- Mock response (use this while the real fetch is commented out) ---
const mockResponse = {
  offset: 0,
  number: 10,
  available: 881,
  news: [
    {
      id: 354187740,
      title:
        "Taliban Pressure Blamed For Postponement Of Opposition Meet In Islamabad",
      text: "Afghanistan International: A planned gathering of Afghan anti-Taliban figures in Islamabad has been postponed following strong objections from the group, according to a report by the Pakistani daily The Nation. The newspaper said Taliban Foreign Minister Amir Khan Muttaqi raised concerns with his Pakistani counterpart, Ishaq Dar, during a meeting in Kabul on 20 August. Sources cited by the paper suggested the Taliban regime was displeased that Afghan opposition members had been invited by the Islamabad-based South Asian Strategic Stability Institute, leading to the delay. Click here to read more (external link).\n\nHosting Taliban Opponents: Pakistan’s Final Gamble",
      summary:
        "Afghanistan International: A planned gathering of Afghan anti-Taliban figures in Islamabad has been postponed following strong objections from the group, according to a report by the Pakistani daily The Nation. The newspaper said Taliban Foreign Minister Amir Khan Muttaqi raised concerns with his Pakistani counterpart, Ishaq Dar, during a meeting in Kabul on 20 August.Read More...",
      url: "https://www.aopnews.com/taliban/taliban-pressure-blamed-for-postponement-of-opposition-meet-in-islamabad/",
      image:
        "http://www.aopnews.com/wp-content/uploads/2022/02/muttaqi_small-150x150.jpg",
      video: null,
      publish_date: "2025-08-25 15:22:08",
      author: "admin",
      authors: ["admin"],
      language: "en",
      category: "politics",
      source_country: "AF",
      sentiment: 0.658,
    },
    {
      id: 354187736,
      title: "Afghanistan Beats Tajikistan U-23, 1–0 in Friendly",
      text: "Khaama: The Afghanistan national football team recorded a morale-boosting 1–0 victory over Tajikistan’s U-23 side in a friendly match held in Dushanbe. The match was part of the team’s preparation for the upcoming Central Asia Championship. The team’s first official test in the Central Asia Championship is scheduled against Iran on Friday. Facing one of the region’s strongest footballing nations will serve as a key measure of Afghanistan’s progress. Click here to read more (external link).",
      summary:
        "Khaama: The Afghanistan national football team recorded a morale-boosting 1–0 victory over Tajikistan’s U-23 side in a friendly match held in Dushanbe. The match was part of the team’s preparation for the upcoming Central Asia Championship. The team’s first official test in the Central Asia Championship is scheduled against Iran on Friday. Facing one ofRead More...",
      url: "https://www.aopnews.com/afghan-sports-news/afghanistan-beats-tajikistan-u-23-1-0-in-friendly/",
      image: "http://www.aopnews.com/wp-content/uploads/2015/12/soccerball.jpg",
      video: null,
      publish_date: "2025-08-25 15:06:11",
      author: "admin",
      authors: ["admin"],
      language: "en",
      category: "politics",
      source_country: "AF",
      sentiment: 0.689,
    },
    {
      id: 354187738,
      title: "Taliban Announce Confiscation Of Vast Tracts Of Land In Logar",
      text: "Afghanistan International: The Taliban say they have confiscated more than 1,400 acres of land in Logar province, classifying it as state property. No independent body exists in Afghanistan to hear complaints from citizens who allege the Taliban are forcibly seizing private property under the guise of land reclamation. Click here to read more (external link).",
      summary:
        "Afghanistan International: The Taliban say they have confiscated more than 1,400 acres of land in Logar province, classifying it as state property. No independent body exists in Afghanistan to hear complaints from citizens who allege the Taliban are forcibly seizing private property under the guise of land reclamation. Click here to read more (external link).",
      url: "https://www.aopnews.com/taliban/taliban-announce-confiscation-of-vast-tracts-of-land-in-logar/",
      image: "http://www.aopnews.com/wp-content/uploads/2015/11/logar1.jpg",
      video: null,
      publish_date: "2025-08-25 15:23:54",
      author: "admin",
      authors: ["admin"],
      language: "en",
      source_country: "AF",
      sentiment: 0.205,
    },
    {
      id: 353987258,
      title: "EU pledges €10m to support Afghan children",
      text: "KABUL (Pajhwok): The European Union (EU) has pledged €10 million to the United Nations Children’s Fund (UNICEF) to safeguard Afghan children, particularly those returning from neighbouring countries.\n\nUnder a three-year partnership, UNICEF will provide immediate care and protection for unaccompanied and separated children at Afghanistan’s main border crossings.\n\nThe programme will also promote long-term reintegration across 12 provinces through education, healthcare, nutrition, vocational training and livelihood opportunities.\n\nMore than 180,000 children and families are expected to benefit from family tracing and reunification, interim care, psychosocial support and resilience-building initiatives.\n\nAccording to UNICEF, the sharp rise in returns from Pakistan and Iran has placed unprecedented pressure on Afghanistan’s child protection services. Children travelling alone face heightened risks of violence, exploitation and neglect.\n\n“Through this partnership with UNICEF, we aim to strengthen support for Afghan children on the move. Our contribution forms part of the EU’s broader commitment to migration and forced displacement, ensuring access to opportunities and essential services for displaced people, with a particular focus on children and adolescents,” said Eric Beaume, Head of Cooperation at the EU Delegation to Afghanistan.\n\nImmediate border assistance at Islam Qala, Milak, Spin Boldak and Torkham will be linked to long-term community-based solutions to help families rebuild their lives and mitigate the risks of unsafe migration.\n\n“This new phase of EU support comes at a critical time, when more than two million Afghans – including half a million children – have returned from neighbouring countries this year,” said Dr Tajudeen Oyewale, UNICEF Representative in Afghanistan.\n\n“Every child has the right to be protected, cared for, and given the chance to thrive – regardless of their journey or circumstances. The EU’s long-term partnership with UNICEF has been a lifeline for thousands of Afghan children on the move, including those unaccompanied and separated, ensuring they are not only safe today but also supported to build a brighter future.”\n\nSince 2018, the initiative has provided essential services to tens of thousands of children. In 2024 alone, nearly 14,000 unaccompanied and separated children returning from Iran and Pakistan received assistance, with 9,000 supported directly through the EU–UNICEF partnership.",
      summary:
        "The European Union (EU) has pledged €10 million to the United Nations Children’s Fund (UNICEF) to safeguard Afghan children, particularly those returning from neighbouring countries.",
      url: "https://pajhwok.com/2025/08/25/eu-pledges-e10m-to-support-afghan-children/",
      image:
        "https://pajhwok.com/wp-content/uploads/2025/08/UNICEF-2-1024x576.jpg",
      video: null,
      publish_date: "2025-08-25 05:54:28",
      author: "Ahmad Shah Erfanyar,Kashmir Khan",
      authors: ["Ahmad Shah Erfanyar", "Kashmir Khan"],
      language: "en",
      source_country: "af",
      sentiment: 0.388,
    },
    {
      id: 353987256,
      title: "Returnees’ reintegration needs urgent global aid: Otunbayeva",
      text: "KABUL (Pajhwok): UNAMA head Roza Otunbayeva has stressed urgent international aid for Afghan returnees’ reintegration, saying drought impacts and returnee challenges demand global cooperation and immediate investment in social infrastructure.\n\nThe Ministry of Economy (MoE) said the meeting between Minister Qari Din Mohammad Hanif, Otunbayeva, and Indrika Ratwatte, Deputy UN Special Representative in Afghanistan, focused on UN humanitarian aid, returnee challenges, and wider economic issues.\n\nOtunbayeva praised the High Commission for Returning Refugees and its committees, and assured continued UN assistance. She noted that alongside humanitarian needs, the returnees will be assisted in their resettlement across provinces.\n\nShe added that addressing droughts, climate change, and livelihood challenges required urgent programming and international support.\n\nShe also assured that talks were ongoing with host countries on the voluntary, safe, and dignified return of Afghans from neighboring states.\n\nHanif thanked the international community and urged long-term development aid to create jobs, strengthen household economies, and support infrastructure projects in townships for returnees.\n\nHe said combating food insecurity, reducing poverty and unemployment through coordinated national programs remained his ministry’s top priority, with all resources mobilized to improve Afghans’ living conditions.",
      summary:
        "UNAMA head Roza Otunbayeva has stressed urgent international aid for Afghan returnees’ reintegration, saying drought impacts and returnee challenges demand global cooperation and immediate investment in social infrastructure.",
      url: "https://pajhwok.com/2025/08/25/returnees-reintegration-needs-urgent-global-aid-otunbayeva/",
      image: "https://pajhwok.com/wp-content/uploads/2025/08/Rosa-1024x560.jpg",
      video: null,
      publish_date: "2025-08-25 04:10:44",
      author: "Sher Ahmad Usmani,Suhrab Sarwari",
      authors: ["Sher Ahmad Usmani", "Suhrab Sarwari"],
      language: "en",
      source_country: "af",
      sentiment: 0.717,
    },
    {
      id: 354683218,
      title: "China’s Xi to welcome Putin, Modi in grand show of solidarity",
      text: "President Xi Jinping will gather more than 20 world leaders at a regional security forum in China next week in a powerful show of Global South solidarity in the age of Donald Trump while also helping sanctions-hit Russia pull off another diplomatic coup, Reuters reported.\n\nAside from Russian President Vladimir Putin, leaders from Central Asia, the Middle East, South Asia and Southeast Asia have been invited to the Shanghai Cooperation Organisation (SCO) summit, to be held in the northern port city of Tianjin from August 31 to September 1.\n\nThe summit will feature Indian Prime Minister Narendra Modi’s first visit to China in more than seven years as the two neighbours work on further defusing tensions roiled by deadly border clashes in 2020.\n\nModi last shared the same stage with Xi and Putin at last year’s BRICS summit in Kazan, Russia, even as Western leaders turned their backs on the Russian leader amid the war in Ukraine. Russian embassy officials in New Delhi last week said Moscow hopes trilateral talks with China and India will take place soon.\n\n“Xi will want to use the summit as an opportunity to showcase what a post-American-led international order begins to look like and that all White House efforts since January to counter China, Iran, Russia, and now India have not had the intended effect,” said Eric Olander, editor-in-chief of The China-Global South Project, a research agency.\n\n“Just look at how much BRICS has rattled (U.S. President) Donald Trump, which is precisely what these groups are designed to do.”\n\nThis year’s summit will be the largest since the SCO was founded in 2001, a Chinese foreign ministry official said last week, calling the bloc an “important force in building a new type of international relations”.\n\nThe security-focused bloc, which began as a group of six Eurasian nations, has expanded to 10 permanent members and 16 dialogue and observer countries in recent years. Its remit has also enlarged from security and counter-terrorism to economic and military cooperation, read the report.\n\nAnalysts say expansion is high on the agenda for many countries attending, but agree the bloc has not delivered substantial cooperation outcomes over the years and that China values the optics of Global South solidarity against the United States at a time of erratic policymaking and geopolitical flux.\n\n“What is the precise vision that the SCO represents and its practical implementation are rather fuzzy. It is a platform that has increasing convening power, which helps in narrative projection,” said Manoj Kewalramani, chairperson of the Indo-Pacific Research Programme at the Takshashila Institution thinktank in Bangalore.\n\n“But the SCO’s effectiveness in addressing substantial security issues remains very limited.”\n\nFrictions remain between core members India and Pakistan. The June SCO defence ministers’ meeting was unable to adopt a joint statement after India raised objections, saying it omitted reference to the deadly April 22 attack on Hindu tourists in Indian Kashmir which led to the worst fighting in decades between India and Pakistan.\n\nNew Delhi also refused to join the SCO’s condemnation of Israeli attacks on Iran, a member state, earlier in June, Reuters reported.\n\nBut the recent detente between India and China after five years of heightened border frictions, as well as renewed tariff pressure on New Delhi from the Trump administration, are driving expectations for a positive meeting between Xi and Modi on the sidelines of the summit.\n\n“It’s likely (New Delhi) will swallow their pride and put this year’s SCO problems behind them in a bid to maintain momentum in the détente with China, which is a key Modi priority right now,” said Olander.\n\nIndia’s priorities at the SCO include trade, connectivity, respect for sovereignty and territorial integrity, said Indian foreign ministry official Tanmaya Lal. Modi is also likely to hold bilateral meetings on the sidelines of the summit.\n\nAnalysts expect India and China to announce further incremental border measures such as troop withdrawals, the easing of trade and visa restrictions, cooperation in new fields including climate, and broader government and people-to-people engagement.\n\nDespite the lack of substantive policy announcements expected at the summit, experts warn that the bloc’s appeal to Global South countries should not be underestimated.\n\n“This summit is about optics, really powerful optics,” added Olander.\n\nModi is expected to depart from China after the summit, while Putin will stay on for a World War Two military parade in Beijing later in the week for an unusually long spell outside of Russia.",
      summary:
        "The summit will feature Indian Prime Minister Narendra Modi's first visit to China in more than seven years as the two neighbours work on further defusing tensions roiled by deadly border clashes in 2020.\n\n\nThe post China&#8217;s Xi to welcome Putin, Modi in grand show of solidarity first appeared on Ariana News | Afghanistan News.",
      url: "https://www.ariananews.af/chinas-xi-to-welcome-putin-modi-in-grand-show-of-solidarity/",
      image:
        "https://www.ariananews.af/wp-content/uploads/2025/08/XiJinping-Putin-Modi.jpg",
      video: null,
      publish_date: "2025-08-27 04:49:00",
      author: "Ariana News",
      authors: ["Ariana News"],
      language: "en",
      category: "politics",
      source_country: "af",
      sentiment: 0.262,
    },
    {
      id: 354683216,
      title:
        "Reuters and AP journalists killed in Gaza strike were not ‘a target,’ an Israeli military spokesperson says",
      text: "Israel struck Nasser hospital in the south of the Gaza Strip on Monday, killing at least 20 people, including five journalists who worked for Reuters, the Associated Press, Al Jazeera and others.\n\nCameraman Hussam al-Masri, a Reuters contractor, was killed near a live broadcasting position operated by Reuters on an upper floor just below the roof of the hospital in Khan Younis in an initial strike, Palestinian health officials said.\n\nOfficials at the hospital and witnesses said Israel then struck the site a second time, killing other journalists as well as rescue workers and medics who had rushed to the scene to help.\n\nThe journalists killed included Mariam Abu Dagga, who freelanced for the Associated Press and other outlets, Mohammed Salama, who worked for Qatar-based broadcaster Al Jazeera, Moaz Abu Taha, a freelance journalist who worked with several news organisations including occasionally contributing to Reuters, and Ahmed Abu Aziz.\n\nPhotographer Hatem Khaled, also a Reuters contractor, was wounded.\n\nPrime Minister Benjamin Netanyahu’s office said Israel deeply regretted what he called a “tragic mishap”. Israel valued the work of journalists and medical staff, he said, adding that Israel’s war was with Hamas.\n\nIsrael’s military, the Israel Defense Forces, acknowledged striking the area of Nasser hospital and said the chief of the general staff had ordered an inquiry.\n\nThe IDF “regrets any harm to uninvolved individuals and does not target journalists as such. The IDF acts to mitigate harm to uninvolved individuals as much as possible while maintaining the safety of IDF troops,” it said.\n\nA Reuters spokesperson said in a statement: “We are devastated to learn that cameraman Hussam al-Masri, a contractor for Reuters, was killed this morning in Israeli strikes on Nasser hospital in Khan Younis in Gaza. Moaz Abu Taha, a freelance journalist whose work had been occasionally published by Reuters, was also killed, and photographer Hatem Khaled, a Reuters contractor, was wounded.”\n\n“We are urgently seeking more information and have asked authorities in Gaza and Israel to help us get urgent medical assistance for Hatem,” the spokesperson added.\n\nU.S. President Donald Trump expressed his displeasure when asked for a reaction.\n\n“When did this happen?” he asked a reporter in the White House. “I didn’t know that. Well, I’m not happy about it. I don’t want to see it. At the same time, we have to end that whole nightmare.”\n\nThe AP said it was “shocked and saddened” to learn of the deaths of Abu Dagga and other journalists, adding that Abu Dagga had often based herself at the hospital for coverage, which recently included stories on starving and malnourished children.\n\nIn the Israeli-occupied West Bank, the Palestinian presidency urged the international community, particularly the U.N. Security Council and the United Nations, to provide protection for journalists and hold Israel accountable.\n\nThe Palestinian Journalists Syndicate condemned Israel for the strikes, saying it represented “an open war against free media, with the aim of terrorising journalists and preventing them from fulfilling their professional duty of exposing its crimes to the world”.\n\nThe syndicate said more than 240 Palestinian journalists had been killed by Israeli fire in Gaza since the war started on October 7, 2023.\n\nThe Committee to Protect Journalists, which put the number of journalists and media workers killed since the war began at 197 including 189 Palestinians in Gaza, called for “the international community to hold Israel accountable for its continued unlawful attacks on the press”.\n\nIsraeli military spokesperson Brigadier General Effie Defrin said in a statement late on Monday that the military, in line with international law, was obligated to investigate.\n\n“As always, we will present our findings as transparently as possible,” he said.\n\n“Reporting from an active war zone carries immense risk, especially in a war with a terrorist organization such as Hamas, who cynically hides behind the civilian population,” he said.\n\nIn a separate incident on Monday, Nasser Hospital doctors said Israeli gunfire at a tent encampment in the Mawasi area of Khan Younis had killed local journalist Hassan Dohan and had wounded other people.\n\nTwo weeks ago, Israel killed prominent Al Jazeera correspondent Anas Al-Sharif and four other journalists in a strike. In that attack, Israel acknowledged targeting Sharif and said he worked for the Hamas militant group, which the broadcaster denied.\n\nOn Monday the Reuters live video feed from the hospital, which Masri had been operating, suddenly shut down at the moment of the initial strike.\n\nReuters and other news providers often deliver live video feeds to media outlets worldwide during major news events to show the scene from the ground in real time. Reuters has frequently broadcast a feed from Nasser hospital during the Gaza conflict, and for the past several weeks has been delivering daily feeds from the Nasser hospital position that was hit.\n\nIsrael has barred all foreign journalists from entering the Gaza Strip since the start of the war in 2023. Reporting from the territory throughout the war has been done by Palestinian journalists, many of whom have worked for many years for international media organisations, including wire services such as Reuters and the Associated Press.\n\nIsrael has also separately said it is investigating the death of Issam Abdallah, a Reuters journalist killed in southern Lebanon by Israeli tank fire in October 2023 after the Gaza conflict erupted. Israel has not announced any findings.",
      summary:
        "Israeli forces struck Nasser hospital in the south of the Gaza Strip on Monday, killing at least 20 people including journalists who worked for Reuters, the Associated Press, Al Jazeera and other outlets.\n\n\nThe post Reuters and AP journalists killed in Gaza strike were not &#8216;a target,&#8217; an Israeli military spokesperson says first appeared on Ariana News | Afghanistan News.",
      url: "https://www.ariananews.af/reuters-and-ap-journalists-killed-in-gaza-strike-were-not-a-target-an-israeli-military-spokesperson-says/",
      image:
        "https://www.ariananews.af/wp-content/uploads/2025/08/Journalist-killed-Gaza.jpg",
      video: null,
      publish_date: "2025-08-27 03:55:01",
      author: "Ariana News",
      authors: ["Ariana News"],
      language: "en",
      category: "politics",
      source_country: "af",
      sentiment: -0.514,
    },
    {
      id: 355021404,
      title: "Recent deadly accidents; Public demands, emergency MoI meeting",
      text: "KABUL (Pajhwok): Over the past eight days, three deadly traffic accidents on major highways have left 156 people dead or injured. Citizens are urging the government to take urgent steps to prevent further tragedies.\n\nIn response, the Ministry of Interior (MoI) convened an emergency meeting, where it was decided that, in coordination with the Deputy Minister for Security Affairs, passenger vehicles violating traffic laws will be stopped and Kabul police will take practical measures to arrest offenders.\n\nThe three deadly accidents:\n\nTuesday night (Aug 26): At least 25 people were killed and 27 others injured when a 580-type passenger bus overturned in the Arghandi area of Kabul’s Paghman district.\n\nAugust 19, Herat: A collision between a 580-type passenger bus and a Mazda vehicle left 79 people dead.\n\nAugust 23, Baghlan: In Doshi district, a crash between a 580-type passenger bus and a cargo truck injured 24 people.\n\nPublic outrage on social media:\n\nSaber Sahak: “The responsibility for these deaths rests with the government. The road is too narrow. We didn’t lose this many lives in war, but this road is taking them. The road must be expanded.”\n\nThe Kabul–Kandahar highway has been reconstructed, and work is underway on a second Kabul–Ghazni road.\n\nSadiq Amin: Passenger transport companies should be suspended or forced to implement passenger insurance. He alleged that many bus drivers are “drug addicts” who speed up when asked to slow down.\n\nIssa: “The government should fix travel times between provinces. If a bus covers the distance too quickly, it should be impounded and fined for three months.”\n\nHameeda Beheshti: “Until two-lane roads are built, these accidents will not decrease. Many truck and bus drivers are drug users driving under the influence.”\n\nMohammad Ghaznawi: “The Islamic Emirate must ban large buses until the second Kabul–Herat highway is completed. Passengers should use only minibuses or vans. The 580-bus drivers should be ashamed—they are destroying families’ lives.”\n\nOrangzaib Hamidi: Drivers should face strict medical and professional tests. Addicts must lose their licenses. Licensing should be more rigorous, road monitoring increased, and speed cameras installed. He added: “Why are Afghans so careless with their lives? If it’s not war, it’s road accidents killing us.”\n\nMudassir Yousafzai: “Without medical checks for drivers, nothing will improve. Most are drug addicts.”\n\nBari Noori: “These aren’t real drivers. They ignore all rules, race recklessly, and lack patience. They don’t realize they are responsible for passengers’ lives.”\n\nMoI’s emergency meeting:\n\nMoI spokesman Mufti Abdul Mateen Qani told Pajhwok Afghan News that Wednesday’s emergency meeting focused on preventing traffic accidents.\n\nHe said participants offered recommendations to enhance road safety and public protection. The meeting stressed ongoing coordination between traffic police and public security forces.\n\nIt was resolved that, in coordination with the Deputy Minister for Security Affairs, passenger vehicles violating traffic laws will be stopped, and Kabul police will take firm action against violators.",
      summary:
        "Over the past eight days, three deadly traffic accidents on major highways have left 156 people dead or injured. Citizens are urging the government to take urgent steps to prevent further tragedies.",
      url: "https://pajhwok.com/2025/08/28/recent-deadly-accidents-public-demands-emergency-moi-meeting/",
      image: "https://pajhwok.com/wp-content/uploads/2025/08/x-1024x575.jpg",
      video: null,
      publish_date: "2025-08-28 04:36:34",
      author: "Ahmad Sohaib Hasrat,Hasina",
      authors: ["Ahmad Sohaib Hasrat", "Hasina"],
      language: "en",
      category: "politics",
      source_country: "af",
      sentiment: -0.601,
    },
    {
      id: 355021406,
      title: "Kandahar dairy plants process 120,000 liters of milk daily",
      text: "KANDAHAR CITY (Pajhwok): A dairy processing factory officials in southern Kandahar province say they collect tens of thousands of liters of milk from livestock farmers every day, but in order to further increase the value of livestock farmers’ products, duty on on imported powdered milk should be increased.\n\nKandahar is one of the provinces where people meet their living needs mainly through agriculture and livestock.\n\nNik Mohammad, a resident of Manara area of Arghandab district, who takes his cows’ milk to a dairy processing factory daily, explained that the milk was the only source of income for his family.\n\n“My family looks forward to the money from this milk. Factories in Kandahar have given value to our milk. The economy of many poor people is based on this milk”.\n\nAccording to Bakht Mohammad, a resident of the Jiwalahor area, he has two cows at home and takes the milk to a dairy factory daily.\n\n“This milk is purchased from us at a reasonable price. Before these dairy factories, our milk had no value; because there was a lot of it and people would buy it at very low prices in dairy shops”.\n\n“I take milk to daily the center every morning. I maintain cows and meet other household needs. Previously, I took milk to village shops, which bought it at a very low price, but now I am happy that I earn a lot of money from selling milk”: Amena, a resident of Kalachi area of Dand district, said. She takes milk to the factory daily with her eight-year-old son and makes a living from the money she earns.\n\nHayat Masoom, operations manager of Milko factory, claimed currently they collect 55,000 liters of milk from 6,500 farmers daily against more than 1.5 million afghanis.\n\n“Daily, we collect 55,000 liters of milk, a small part of this milk is also collected from some districts of Helmand, we are trying to increase the amount of milk even more. Currently, our factory has 38 types of dairy products from this milk, products that were previously mostly imported from foreign countries”.\n\nMasoum added that things are not the same now. Earlier, people would buy cows but were unable to see the milk sold. Now, cow milk is very valuable. In fact, many people in Helmand after shunning cultivating opium have bought cows to make a steady profit.\n\n“Some organizations, in coordination with us, have provided cows to poor families, which has yielded very good results. Now these families have a good income from milk”.\n\nMasoom called the import of dried milk a serious problem for farmers, saying dried or powdered milk was still imported into the country in large quantities because its price was lower than fresh milk and many dairy shops used it.\n\nHe emphasized that if the imported milk was banned or taxes on it increased, the milk from farmers’ cows will become even more valuable.\n\n“Currently, 12,000 liters of milk is obtained from large and small cattle farms in the province every day, most of which is processed in dairy factories, Agriculture and Livestock spokesman Mohammad Hanif Haqmal explained.\n\nAccording to Haqmal, the operation of the factories has greatly helped the people, as there has been a demand for milk and all the goods that were previously imported from foreign countries are now produced here in good quality.\n\n“There are currently 650 large and small farms in Kandahar, as well as thousands of families who keep one or two cows. These families make a living from the milk of these cows, and factories play a major role in processing this milk”.\n\nHaqmal claimed that a new dairy factory in Kabul has recently requested to receive fresh milk from Kandahar, and work is currently underway to ensure that the milk can be delivered there efficiently.\n\nAccording to the Agriculture and Livestock Department, two large dairy processing factories, Milko and Maldar, are currently operating in Kandahar, which together process over 90,000 liters of milk per day.",
      summary:
        "A dairy processing factory officials in southern Kandahar province say they collect tens of thousands of liters of milk from livestock farmers every day, but in order to further increase the value of livestock farmers’ products, duty on on imported powdered milk should be increased.",
      url: "https://pajhwok.com/2025/08/28/kandahar-dairy-plants-process-120000-liters-of-milk-daily/",
      image:
        "https://pajhwok.com/wp-content/uploads/2025/08/Milk-Kandahar-1024x603.jpg",
      video: null,
      publish_date: "2025-08-28 04:18:01",
      author: "Amin Samsour,Hasina",
      authors: ["Amin Samsour", "Hasina"],
      language: "en",
      source_country: "af",
      sentiment: 0.068,
    },
    {
      id: 355021402,
      title: "Drone strikes kill 3, injure 7 in Nangarhar, Khost",
      text: "KABUL (Pajhwok): Three children have been killed and seven other people, including women and children, injured in drone strikes in eastern Nangarhar and southeastern Khost provinces, local sources said on Thursday.\n\nIn a statement, the Nangarhar governor’s office said: “Two drone attacks struck the house of a poor civilian named Shahswar in the 28-Wyala area of Shinwari district last night, injuring three children and a woman.”\n\nThree rooms of the house were also destroyed. The statement emphasized that the family had no links with any group and the injured were transferred to hospital are said to be in stable condition.\n\nDeputy Governor Maulvi Azizullah Mustafa expressed sorrow over the incident and instructed health officials to provide proper treatment.\n\nHe stressed that Afghanistan seeks peace and stability, supports good relations with neighboring countries and maintains neutrality in international affairs, warning that such actions could undermine regional stability.\n\nThe statement did not say who carried out the drone strikes in Nangarhar.\n\nMeanwhile, a reliable government source in Khost told Pajhwok: “Last night around 10:00pm, a Pakistani drone bombed the house of Haji Naeem Khan, a civilian, in the Sur Kakh area of Spera district. As a result, three children of the family were killed, while a woman and two men were injured.”",
      summary:
        "Three children have been killed and seven other people, including women and children, injured in drone strikes in eastern Nangarhar and southeastern Khost provinces, local sources said on Thursday.",
      url: "https://pajhwok.com/2025/08/28/drone-strikes-kill-3-injure-7-in-nangarhar-khost/",
      image:
        "https://pajhwok.com/wp-content/uploads/2025/08/Khost-1024x575.jpg",
      video: null,
      publish_date: "2025-08-28 04:58:25",
      author: "Kashmir Khan,Wali Mohammad Shinwari",
      authors: ["Kashmir Khan", "Wali Mohammad Shinwari"],
      language: "en",
      category: "politics",
      source_country: "af",
      sentiment: 0.049,
    },
  ],
};

// Utility: extract hostname for display
function getHost(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "";
  }
}

// Utility: human date (YYYY-MM-DD)
function fmtDate(isoLike) {
  if (!isoLike) return "";
  const d = new Date(isoLike.replace(" ", "T") + "Z");
  if (isNaN(d.getTime())) return "";
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function NewsTicker({
  apiUrl = "https://api.worldnewsapi.com/search-news?source-country=af&language=en&api-key=4049ecb36ab64a3ea53871f7849f8dbe",
  speedPxPerSec = 80, // lower = slower
  gapPx = 32,
  fetchIntervalMs = 0, // set >0 to auto-refresh
  maxItems = 12,
  className = "",
  label = "Latest Afghanistan News",
}) {
  const [items, setItems] = useState([]);
  const prefersReduced = usePrefersReducedMotion();
  const trackWrapRef = useRef(null);

  useEffect(() => {
    let active = true;
    const ctrl = new AbortController();

    const load = async () => {
      try {
        const res = await fetch(apiUrl, { signal: ctrl.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // WorldNewsAPI returns { news: [...] }. Some APIs use { articles: [...] }.
        const list = (data?.news ?? data?.articles ?? []).slice(0, maxItems);

        if (active) setItems(list);
      } catch (e) {
        console.error("NewsTicker fetch error:", e);
        // graceful fallback so the UI still shows something:
        if (active && items.length === 0) {
          setItems((mockResponse.news ?? []).slice(0, maxItems));
        }
      }
    };

    load();

    let id;
    if (fetchIntervalMs > 0) {
      id = setInterval(load, fetchIntervalMs);
    }

    return () => {
      active = false;
      if (id) clearInterval(id);
      ctrl.abort();
    };
  }, [apiUrl, fetchIntervalMs, maxItems]);

  const tickerNodes = useMemo(
    () =>
      items.flatMap((n, i) => {
        const host = getHost(n.url);
        const date = fmtDate(n.publish_date);
        const chip = (
          <a
            key={n.id}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5
                     hover:bg-stone-800/60 focus:bg-stone-800/80 focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-stone-500
                     text-sm sm:text-base"
            aria-label={`Open: ${n.title} (${host})`}
            onMouseDown={(e) => e.currentTarget.blur()}
            onTouchStart={(e) => e.currentTarget.blur()}
            onClick={(e) => e.currentTarget.blur()}
          >
            <span className="text-stone-400 text-xs sm:inline hidden whitespace-nowrap">
              [{date}]&nbsp;
            </span>

            {/* title */}
            <span className="text-stone-200 font-medium whitespace-nowrap max-w-[60ch] truncate">
              {n.title}
            </span>
          </a>
        );

        // subtle separator between chips
        const sep = (
          <span
            key={`sep-${n.id}`}
            aria-hidden
            className="opacity-40 mx-6 sm:mx-8 lg:mx-12 text-lg select-none"
          >
          </span>
        );

        return i < items.length - 1 ? [chip, sep] : [chip];
      }),
    [items]
  );

  // Compute duration from rendered width to keep speed ~ constant
  const [durationSec, setDurationSec] = useState(40);
  useEffect(() => {
    if (prefersReduced) return;
    const wrap = trackWrapRef.current;
    const oneCopy = wrap?.querySelector(".ticker-copy");
    if (!oneCopy) return;
    const contentWidth = oneCopy.scrollWidth;
    const pxPerSec = Math.max(20, speedPxPerSec);
    const seconds = Math.max(12, Math.round(contentWidth / pxPerSec));
    setDurationSec(seconds);
  }, [items, speedPxPerSec, prefersReduced]);

  return (
    <div
      className={`w-full bg-stone-700 text-stone-100 overflow-hidden border border-stone-600 rounded-xl ${className}`}
    >
      <div
        ref={trackWrapRef}
        className={`group relative overflow-hidden py-3 select-none ${
          prefersReduced ? "" : " [--dur:40s]"
        }`}
        style={{ "--dur": `${durationSec}s`, "--gap": `${gapPx}px` }}
        aria-live="polite"
        role="marquee"
      >
        {/* left/right fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-stone-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-stone-900 to-transparent" />

        <div className={prefersReduced ? "" : "animate-ticker ticker-inner"}>
          <span className="ticker-copy">{tickerNodes}</span>
          {!prefersReduced && (
            <span className="ticker-copy inline-flex items-center gap-8">
              {tickerNodes}
            </span>
          )}
        </div>
      </div>

      {/* Inline styles for the marquee animation (unchanged) */}
      <style>{`
            @keyframes ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* shift by exactly one copy */
            }
            .ticker-inner {
            display: inline-flex;
            white-space: nowrap;
            gap: var(--gap, 32px);
            will-change: transform;
            }
            .ticker-copy {
            padding-right: var(--gap, 32px);
            }
            .animate-ticker {
            animation: ticker var(--dur, 40s) linear infinite;
            animation-play-state: running;
            }
            .group:hover .animate-ticker,
            .group:focus-within .animate-ticker { animation-play-state: paused; }
            @media (prefers-reduced-motion: reduce) { .animate-ticker { animation: none; } }
        `}</style>
    </div>
  );
}

// Hook: detect reduced motion preference
function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReduced(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);
  return prefersReduced;
}

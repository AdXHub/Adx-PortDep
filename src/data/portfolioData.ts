import { 
  Project, 
  SignatureFormat, 
  PlatformItem, 
  ServiceItem, 
  MetricStat, 
  Testimonial, 
  TimelineMilestone,
  AdXRuleItem 
} from '../types';

export const BRAND_CONFIG = {
  name: 'AdX',
  tagline: 'ANIME. ABSURDITY. ENTERTAINMENT.',
  motto: 'MORE THAN A GAME',
  grandLine: 'CHASE YOUR GRAND LINE',
  pillars: 'CREATE · INSPIRE · PLAY · BEYOND',
  quadDomain: 'ANIME × AI × CULTURE × COMMUNITY',
  mantra: 'MAKE ANIME CULTURE IMPOSSIBLE TO SCROLL PAST.',
  creatorName: 'Gus (AdX)',
  creatorAlias: 'Gus Chi (AdX)',
  creatorEmail: '[YOUR EMAIL]',
  emailPlaceholder: '[YOUR EMAIL]',
  managementPlaceholder: '[LOCATION / MANAGEMENT PLACEHOLDER]',
  defaultEmailFallback: 'collab@adxcreator.com',
  legalDisclaimer: 'AdX is an independent digital entertainment brand. No anime characters were permanently harmed in the making of this content. Their plot armour may differ.',
  copyrightYear: '2025',
  colors: {
    midnightBlack: '#0B0B12',
    electricPurple: '#7C3AED',
    neonCyan: '#22D3EE',
    vibrantYellow: '#FACC15',
    hotPink: '#EC4899',
    goldFoil: '#F59E0B',
    cleanWhite: '#FFFFFF',
  },
  archetype: {
    primary: 'The Jester (40%)',
    secondary: 'The Creator (25%)',
    superfan: 'Anime Superfan (20%)',
    chaos: 'Controlled Chaos (15%)'
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'why-pick-one-lane',
    title: 'WHY PICK ONE LANE? THE AdX ANTHEM',
    slug: 'why-pick-one-lane',
    thumbnail: 'anthem',
    video: '[OFFICIAL BRAND ANTHEM]',
    category: 'Commercial / Brand Campaign',
    platform: 'Multi-Platform',
    description: 'The definitive creator manifesto. Why choose between anime, sports, tech, and comedy? The moment you shrink your vision, it\'s finished.',
    year: '2025',
    metrics: '8.9M VIEWS · 1.2M LIKES',
    featured: true,
    tag: 'BRAND ANTHEM',
    caseStudy: {
      overview: 'A cinematic brand commercial starring Gus on the wet sunset hardwood court, introducing the AdX philosophy to millions worldwide.',
      concept: '"They told me: Gus, why don\'t you choose one lane? Why pick one thing? ... We created AdX, where every passion becomes one fearless vision. More than a game."',
      creativeDirection: '3D gold foil crown typography, golden lightning dribble VFX, wet court sunset reflections, and the Tokyo stadium confetti celebration.',
      platform: 'YouTube, Instagram Reels & TikTok',
      videoUrl: '[OFFICIAL BRAND ANTHEM]',
      metrics: '8.9M VIEWS · 1.2M LIKES · 210K SHARES',
      behindTheScenes: 'Directed and narrated by Gus. Shot on custom outdoor court during golden hour with anamorphic lenses and dynamic 3D logo particles.',
      keyPunchline: 'The moment you shrink your vision, it\'s finished. Welcome to AdX.'
    }
  },
  {
    id: 'pov-anime-workforce',
    title: 'POV: ANIME FANS IN THE WORKFORCE',
    slug: 'pov-anime-workforce',
    thumbnail: 'workforce',
    video: '[VIRAL SKIT: JOB INTERVIEW]',
    category: 'Comedy Skit',
    platform: 'TikTok',
    description: 'Episode 1: The Job Interview. Gus powers up a full Super Saiyan ki charge in the cubicle while the interviewer facepalms in pure disbelief.',
    year: '2025',
    metrics: '4.8M VIEWS · 620K LIKES',
    featured: true,
    tag: 'VIRAL SKIT #01',
    caseStudy: {
      overview: 'A viral sketch exploring what happens when an anime superfan applies shonen tournament arc logic to an entry-level corporate marketing interview.',
      concept: 'Candidate enters the office, strikes a martial arts power stance, summons golden electric arcs and flying carpet debris, and declares themselves the future Hokage of Account Management.',
      creativeDirection: 'Hyper-dramatic golden ki aura, glowing amber eyes, authentic manga impact sound effects (ドドド), and deadpan comedic pacing.',
      platform: 'TikTok, Instagram Reels & YouTube Shorts',
      videoUrl: '[VIRAL SKIT: JOB INTERVIEW]',
      metrics: '4.8M VIEWS · 620K LIKES · 84K SHARES',
      behindTheScenes: 'Shot in a rented corporate office. The interviewer\'s exhausted facepalm was genuine after the 14th unhinged power-up take.',
      keyPunchline: 'Interviewer: "Sir, powering up your chakra does not fulfill the 3 years of Excel experience requirement."'
    }
  },
  {
    id: 'protagonist-diet',
    title: 'THE PROTAGONIST DIET: HOT SAUCE TRAINING',
    slug: 'protagonist-diet',
    thumbnail: 'hotsauce',
    video: '[COMEDY SKIT: HOT SAUCE]',
    category: 'Anime Comedy',
    platform: 'Instagram Reels',
    description: '"A protagonist never retreats! Bring me milk... the ancestors have voted." Treating mild chicken like the final boss fight.',
    year: '2025',
    metrics: '6.2M VIEWS · 890K LIKES',
    featured: true,
    tag: 'COMEDY HIT',
    caseStudy: {
      overview: 'Gus sweats profusely in his black durag eating chicken at a restaurant table, framing ordinary hot sauce as ancient shonen gravity chamber training.',
      concept: 'The dialogue escalation: "Friend: You can stop. Gus: A protagonist never retreats! Waiter: That\'s our hottest sauce. Gus: EXCELLENT. Customer crying: The ancestors have voted. Bring me milk."',
      creativeDirection: 'Intense macro close-ups on sweating brow, anime heat waves, rapid comedic zooms, and an ending where Gus and the customer meditate on yoga mats.',
      platform: 'Instagram Reels & TikTok',
      videoUrl: '[COMEDY SKIT: HOT SAUCE]',
      metrics: '6.2M VIEWS · 890K LIKES · 115K SHARES',
      behindTheScenes: 'Actual hot sauce was consumed during the shoot. The crying customer\'s tears were 100% authentic.',
      keyPunchline: 'Sir, that was the mild sauce. The ancestors have indeed voted.'
    }
  },
  {
    id: 'nike-gear-5-gus',
    title: 'NIKE x ONE PIECE: GEAR 5 GUS',
    slug: 'nike-gear-5-gus',
    thumbnail: 'gear5',
    video: '[PROJECT VIDEO: GEAR 5 GUS]',
    category: 'Commercial / Brand Campaign',
    platform: 'Multi-Platform',
    description: 'Pattern recognition meets pure joy. Turning Cornell basketball into an official Gear 5 shonen spectacle with custom devil fruit Dunks and lightning dunks.',
    year: '2025',
    metrics: '7.1M VIEWS · 940K LIKES',
    featured: true,
    tag: 'PREMIER CAMPAIGN',
    caseStudy: {
      overview: 'An electrifying creator collaboration combining Nike commercial aesthetics with One Piece Gear 5 lore. Starring Gus on a throne of stacked basketballs before transforming into the cartoon god of basketball.',
      concept: 'What if an elite hooper unlocked the Drums of Liberation? "Pattern recognition is easy when you\'re the one changing the shape of the world." High-flying dunks with rubber limbs and flame basketballs.',
      creativeDirection: 'VFX pipeline blending real basketball skills with anime cloud auras, glowing cyan eyes, 3D devil fruit sneaker modeling, and Nordic rune flaming hoops.',
      platform: 'TikTok, Instagram Reels & YouTube Shorts',
      videoUrl: '[PROJECT VIDEO: GEAR 5 GUS]',
      metrics: '7.1M VIEWS · 940K LIKES · 180K SHARES',
      behindTheScenes: 'Directed and performed by Gus. Custom 3D footwear assets, custom shonen audio Foley, and choreographed reverse dunks with glowing cyber court rings.',
      keyPunchline: 'Pressure reveals the pattern, and this pattern is pure joy! Watch me turn this game into a masterpiece!'
    }
  },
  {
    id: 'anime-logic-court',
    title: 'ANIME LOGIC COURT',
    slug: 'anime-logic-court',
    thumbnail: 'court',
    video: '[PROJECT VIDEO]',
    category: 'Comedy / Commentary',
    platform: 'TikTok',
    description: 'Putting ridiculous anime logic on trial with full courtroom drama, evidence folders, and zero mercy for shonen physics.',
    year: '2025',
    metrics: '[XXM VIEWS] · [XXK SHARES]',
    featured: true,
    tag: 'FLAGSHIP SERIES',
    caseStudy: {
      overview: 'A mock-trial digital courtroom show where absurd anime conventions (like screaming your attack for 45 seconds while the enemy patiently waits) are prosecuted before a jury of exhausted realists.',
      concept: 'Why does running with toast in your mouth guarantee a high school collision? Why does pushing up glasses cause an ominous lens glare? Anime Logic Court takes beloved tropes and cross-examines them under forensic real-world cross-examination.',
      creativeDirection: 'Dual-camera multi-role setup featuring the Prosecuting Attorney, Defense Counsel for Shonen Tropes, and the exasperated Bailiff. Graphic overlays replicate Japanese court visual novels mixed with rapid meme freeze-frames.',
      platform: 'TikTok & YouTube Shorts',
      videoUrl: '[PROJECT VIDEO]',
      metrics: '[XXM VIEWS] · [XX% RETENTION] · [XXK SAVES]',
      behindTheScenes: 'Scripted around fan-submitted "crimes against common sense" from comment threads. Shot with distinct lighting angles for the judge bench and witness stand.',
      keyPunchline: 'Your Honor, exhibit C clearly demonstrates that the protagonist had an internal monologue that lasted three business days.'
    }
  },
  {
    id: 'if-anime-was-real',
    title: 'IF ANIME WAS REAL',
    slug: 'if-anime-was-real',
    thumbnail: 'real-life',
    video: '[PROJECT VIDEO]',
    category: 'Comedy Skit',
    platform: 'YouTube Shorts',
    description: 'Taking anime behaviour and applying real-world consequences, insurance claims, and awkward police reports.',
    year: '2025',
    metrics: '[XXM VIEWS] · [XXK COMMENTS]',
    featured: true,
    tag: 'FAN FAVORITE',
    caseStudy: {
      overview: 'Hyper-dramatic anime rituals transported into everyday mundane situations: buying groceries, parallel parking, and handling a performance review at work.',
      concept: 'Anime characters experience existential gravity while doing normal chores. What happens when your landlord knocks on the door and you attempt to power up to Super Saiyan 3 while trying to pay rent?',
      creativeDirection: 'High-contrast lighting, rapid camera zoom-cuts, internal narrator voiceover echoing existential dread over a $4 iced latte, culminating in an awkward dead-silence punchline.',
      platform: 'YouTube Shorts & Instagram Reels',
      videoUrl: '[PROJECT VIDEO]',
      metrics: '[XXM VIEWS] · [XXK REMIXES] · [XXK SHARES]',
      behindTheScenes: 'Sound design uses genuine cinematic anime risers abruptly cut by the ambient hum of a fluorescent ceiling lamp or microwave beep.',
      keyPunchline: 'Sir, powering up your chakra does not waive the $35 overdraft fee.'
    }
  },
  {
    id: 'the-adx-roast',
    title: 'THE AdX ROAST',
    slug: 'the-adx-roast',
    thumbnail: 'roast',
    video: '[PROJECT VIDEO]',
    category: 'Anime Comedy',
    platform: 'Multi-Platform',
    description: "Nobody's plot armour is safe. A sharp-tongued, loving dissection of legendary characters who should have failed in episode one.",
    year: '2025',
    metrics: '[XXK COMMENTS] · [XXM IMPRESSIONS]',
    featured: true,
    tag: 'CULT HIT',
    caseStudy: {
      overview: 'A roast-style comedy commentary series interrogating the indestructible plot armour, questionable tactical decisions, and unbelievable coincidences saving anime heroes.',
      concept: 'We love these characters, which is why we must respectfully roast their entire genealogy, battle records, and wardrobe choices with laser precision.',
      creativeDirection: 'Fast-paced graphic motion, manga speed lines, punchy subtitle callouts in Vibrant Yellow, and freeze-frame analysis of manga panels.',
      platform: 'TikTok, Reels & YouTube Shorts',
      videoUrl: '[PROJECT VIDEO]',
      metrics: '[XXM VIEWS] · [XXK SHARES] · [XX% ENGAGEMENT]',
      behindTheScenes: 'Every script undergoes the "Three-Chuckle Benchmark" to guarantee an unexpected punchline every 4 seconds.',
      keyPunchline: 'Bro got defeated four times, remembered his elementary school teacher for 12 seconds, and unlocked the power of the universe.'
    }
  },
  {
    id: 'hot-take-speedrun',
    title: 'HOT TAKE SPEEDRUN',
    slug: 'hot-take-speedrun',
    thumbnail: 'speedrun',
    video: '[PROJECT VIDEO]',
    category: 'Commentary',
    platform: 'TikTok',
    description: 'Fast anime opinions delivered in 45-second high-velocity sprints designed to ignite heated debates in the comments.',
    year: '2025',
    metrics: '[XXK COMMENTS] · [XXK SHARES]',
    featured: true,
    tag: 'ENGAGEMENT ENGINE',
    caseStudy: {
      overview: 'A timer on screen, a buzzer ready to strike, and 10 provocative, witty anime verdicts dropped at breakneck speed.',
      concept: 'Internet commentary is often bloated. Hot Take Speedrun cuts straight to the spicy core of seasonal discourse without 15-minute filler intros.',
      creativeDirection: 'Countdown timer UI overlay, glitch transition cues, rapid-fire cuts, dynamic text tracking, and live reaction counter.',
      platform: 'TikTok & YouTube Shorts',
      videoUrl: '[PROJECT VIDEO]',
      metrics: '[XXM VIEWS] · [XXK COMMENT THREADS]',
      behindTheScenes: 'Designed intentionally with "respectful disagreement hooks" that trigger community debates without toxicity.',
      keyPunchline: 'Season 1 was a masterpiece. Season 2 was a tax write-off. Moving on.'
    }
  },
  {
    id: 'anime-job-centre',
    title: 'ANIME JOB CENTRE',
    slug: 'anime-job-centre',
    thumbnail: 'job-centre',
    video: '[PROJECT VIDEO]',
    category: 'Comedy Skit',
    platform: 'Instagram Reels',
    description: 'Legendary anime characters attempt normal 9-to-5 employment. The resume review goes horribly wrong.',
    year: '2025',
    metrics: '[XXM VIEWS] · [XXK SAVES]',
    featured: true,
    tag: 'ORIGINAL FORMAT',
    caseStudy: {
      overview: 'What career options exist for an immortal demon lord or a ninja whose only skill is throwing sharp metal stars? AdX interviews them for standard entry-level corporate jobs.',
      concept: 'Translating bizarre anime skill trees into LinkedIn buzzwords and HR compliance nightmares.',
      creativeDirection: 'Corporate grey cubicle setting clashing with vivid anime energy visual effects, speech bubbles, and freeze-frame resume evaluations.',
      platform: 'Instagram Reels & TikTok',
      videoUrl: '[PROJECT VIDEO]',
      metrics: '[XXM VIEWS] · [XXK SHARES] · [XXK SAVES]',
      behindTheScenes: 'Character voices crafted through comedic vocal modulation and deadpan straight-man delivery.',
      keyPunchline: 'Candidate listed "Sealing ancient evil" under Soft Skills and "Fireball Jutsu" under Microsoft Excel.'
    }
  },
  {
    id: 'comment-chaos',
    title: 'COMMENT CHAOS',
    slug: 'comment-chaos',
    thumbnail: 'community',
    video: '[PROJECT VIDEO]',
    category: 'Community Content',
    platform: 'Multi-Platform',
    description: 'The audience writes the setup in the comments. AdX turns the wildest top prompt into full cinematic chaos within 24 hours.',
    year: '2025',
    metrics: '[XXK AUDIENCE PROMPTS] · [XXM VIEWS]',
    featured: true,
    tag: 'COMMUNITY DRIVEN',
    caseStudy: {
      overview: 'A hyper-collaborative content format turning community interaction into an episodic spectacle where the top comment becomes the plot.',
      concept: 'Fans challenge AdX with unhinged anime dilemmas (e.g., "Explain Death Note using only fast-food menu items").',
      creativeDirection: 'Interactive comment bubble UI pin, sudden manga impact flashes, speedrun delivery, and crowd-sourced joke punchlines.',
      platform: 'TikTok, Instagram Reels & YouTube Community',
      videoUrl: '[PROJECT VIDEO]',
      metrics: '[XXK SUBMISSIONS] · [XXM VIEWS] · [XX% VIRALITY]',
      behindTheScenes: 'Commenters get immortalised as "Executive Chaos Producers" in the video credits badge.',
      keyPunchline: 'I took the potato chip... AND UPGRADED IT TO A LARGE COMBO.'
    }
  }
];

export const SIGNATURE_FORMATS: SignatureFormat[] = [
  {
    id: 'format-01',
    code: '01',
    title: 'ANIME LOGIC COURT',
    tagline: 'Putting ridiculous anime logic on trial.',
    category: 'Comedy / Courtroom Mockery',
    description: 'Formal trials for anime crimes: unreasonable charging times, excessive monologuing mid-air, and protagonists surviving five fatal explosions because they recalled their friends.',
    episodeCountPlaceholder: '[XX] EPISODES PRODUCED',
    status: 'Flagship Show',
    signatureHook: 'Exhibit A: You fell 400 feet and got a band-aid on your cheek.'
  },
  {
    id: 'format-02',
    code: '02',
    title: 'IF ANIME WAS REAL',
    tagline: 'Anime behaviour meets real-world consequences.',
    category: 'Narrative Comedy Skits',
    description: 'Translating shonen intensity into civilian environments: awkward high school orientations, driving tests, HOA meetings, and grocery checkout lanes.',
    episodeCountPlaceholder: '[XX] EPISODES PRODUCED',
    status: 'Weekly Series',
    signatureHook: 'You cannot initiate a tournament arc in the middle of Target.'
  },
  {
    id: 'format-03',
    code: '03',
    title: 'THE AdX ROAST',
    tagline: "Nobody's plot armour is safe.",
    category: 'High-Impact Roasts',
    description: 'A loving but merciless breakdown of fan-favorite heroes, filler arcs, and questionable character backstories that don’t hold up under 10 seconds of scrutiny.',
    episodeCountPlaceholder: '[XX] EPISODES PRODUCED',
    status: 'In Production',
    signatureHook: 'Your tragic villain origin is that your favorite restaurant was closed on a Tuesday.'
  },
  {
    id: 'format-04',
    code: '04',
    title: 'HOT TAKE SPEEDRUN',
    tagline: 'Fast anime opinions designed to start conversations.',
    category: 'Speed Commentary',
    description: '60 seconds of uncensored, razor-sharp anime verdicts. No filler, no fence-sitting, maximum debate ignition in the comment section.',
    episodeCountPlaceholder: '[XX] EPISODES PRODUCED',
    status: 'Weekly Series',
    signatureHook: 'Ranked from "Masterpiece" to "Why did this get greenlit?" in 45 seconds.'
  },
  {
    id: 'format-05',
    code: '05',
    title: 'ANIME JOB CENTRE',
    tagline: 'Anime characters attempt normal employment.',
    category: 'Character Skits',
    description: 'What happens when overpowered characters need healthcare and dental benefits? They interview with skeptical HR directors and fail miserably.',
    episodeCountPlaceholder: '[XX] EPISODES PRODUCED',
    status: 'In Production',
    signatureHook: 'Interview Question: Tell us about a time you solved a conflict without a spirit bomb.'
  },
  {
    id: 'format-06',
    code: '06',
    title: 'COMMENT CHAOS',
    tagline: 'The audience writes the setup. AdX creates the chaos.',
    category: 'Community-Engineered Chaos',
    description: 'The community drops the most unhinged anime hypothetical prompts. AdX executes them with full cinematic production and zero shame.',
    episodeCountPlaceholder: '[XX] EPISODES PRODUCED',
    status: 'Flagship Show',
    signatureHook: 'Challenge accepted. Your prompt has officially derailed my week.'
  }
];

export const ADX_RULES: AdXRuleItem[] = [
  {
    word: 'LAUGH.',
    subtitle: 'The Core Delivery',
    explanation: 'If it doesn’t make the viewer smile, smirk, or lose their composure within 3 seconds, the concept gets scrapped.',
    microExample: 'Instant hook: subversive punchlines that catch tropes off guard.',
    color: '#FACC15'
  },
  {
    word: 'SURPRISE.',
    subtitle: 'The Subversion of Expectation',
    explanation: 'Anime fans anticipate the standard jokes. AdX swerves left right when you expect the right turn.',
    microExample: 'Elevating low-budget tropes into cinematic high-drama comedy.',
    color: '#22D3EE'
  },
  {
    word: 'RELATE.',
    subtitle: 'The Shared Fandom Pain',
    explanation: 'The comedy lands hardest when fans nod and say: “That is painfully true and I have suffered through this arc.”',
    microExample: 'Targeting universal anime fandom experiences that everyone silently thinks.',
    color: '#7C3AED'
  },
  {
    word: 'SHARE.',
    subtitle: 'The Unstoppable Send-Trigger',
    explanation: 'Every piece of content must compel the viewer to immediately drop it into their anime group chat.',
    microExample: '“I need to send this to someone right now.”',
    color: '#EC4899'
  }
];

export const PLATFORMS_DATA: PlatformItem[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    handlePlaceholder: '@AdXChaos',
    followerCountPlaceholder: '[XXK FOLLOWERS]',
    description: 'Fast-paced skits, anime courtroom logic trials, and rapid hot takes designed for the vertical feed.',
    externalLinkPlaceholder: '[TIKTOK URL]',
    iconName: 'Film',
    primaryAction: 'Watch on TikTok'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handlePlaceholder: '@AdX.official',
    followerCountPlaceholder: '[XXK FOLLOWERS]',
    description: 'Reels, behind-the-scenes chaos, manga panel memes, and community polls on stories.',
    externalLinkPlaceholder: '[INSTAGRAM URL]',
    iconName: 'Camera',
    primaryAction: 'Follow on Instagram'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handlePlaceholder: '@AdXEntertainment',
    followerCountPlaceholder: '[XXK SUBSCRIBERS]',
    description: 'Shorts repository, signature show episodes, long-form roasts, and community tab interactions.',
    externalLinkPlaceholder: '[YOUTUBE URL]',
    iconName: 'Tv',
    primaryAction: 'Subscribe on YouTube'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handlePlaceholder: 'AdX Entertainment',
    followerCountPlaceholder: '[XXK FOLLOWERS]',
    description: 'Reels syndication, anime group discussions, and high-share meme segments.',
    externalLinkPlaceholder: '[FACEBOOK URL]',
    iconName: 'Share2',
    primaryAction: 'Follow on Facebook'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handlePlaceholder: 'AdX Brand & Partnerships',
    followerCountPlaceholder: '[XXK CONNECTIONS]',
    description: 'Commercial collaborations, creator economy insights, and entertainment industry partnership updates.',
    externalLinkPlaceholder: '[LINKEDIN URL]',
    iconName: 'Briefcase',
    primaryAction: 'Connect on LinkedIn'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'short-form-video',
    title: 'SHORT-FORM VIDEO',
    tagline: 'Creative concepts and social-first entertainment.',
    description: 'High-retention vertical videos engineered for TikTok, Reels, and YouTube Shorts that blend authentic anime humour with brand objectives.',
    deliverables: ['Custom Concept & Scripting', 'Multi-Angle 4K Production', 'Manga Motion Graphics & Subtitles', 'Sound Design & Royalty-Safe Audio'],
    bestFor: 'Launches, viral brand awareness, and character integrations'
  },
  {
    id: 'ai-assisted-production',
    title: 'AI-ASSISTED CONTENT PRODUCTION',
    tagline: 'Creator-led workflows combining AI tools with human creative direction.',
    description: 'Cutting-edge production pipelines leveraging generative AI for rapid ideation, concept backgrounds, and dynamic storyboarding guided by human artistry.',
    deliverables: ['Custom AI-Powered Backgrounds', 'Rapid Visual Prototyping', 'Experimental Anime Aesthetic Assets', 'Human-Polished Scripting & Voice'],
    bestFor: 'Brands wanting cutting-edge, agile, next-gen digital aesthetics'
  },
  {
    id: 'ugc-brand-content',
    title: 'UGC & BRAND CONTENT',
    tagline: 'Personality-driven promotional content designed for social platforms.',
    description: 'Organic-feeling product placement and entertainment-first storytelling that viewers don’t skip because it’s genuinely funny.',
    deliverables: ['Creator-Led Product Integration', 'Comedy-Driven Native Placement', 'Whitelisted Paid Ads Usage Rights', 'Engagement Response Strategy'],
    bestFor: 'App installs, gaming hardware, beverage, and streetwear brands'
  },
  {
    id: 'creative-direction',
    title: 'CREATIVE DIRECTION',
    tagline: 'Concept development, scripting and visual storytelling.',
    description: 'End-to-end creative strategy for brands and agencies looking to authentically connect with anime and Gen-Z entertainment culture without feeling cringe.',
    deliverables: ['Fandom Culture Consultation', 'Humour & Meme Audit', 'Original Format Creation', 'Campaign Storyboard Blueprints'],
    bestFor: 'Agencies and enterprise brands seeking anime culture fluency'
  },
  {
    id: 'anime-gaming-campaigns',
    title: 'ANIME / GAMING CAMPAIGNS',
    tagline: 'Entertainment campaigns designed for fandom-driven audiences.',
    description: 'Bespoke promotional activations celebrating game updates, anime convention attendance, season premieres, and collector merchandise drops.',
    deliverables: ['Multi-Post Campaign Arcs', 'Interactive Community Prompts', 'Convention Coverage & Vlogs', 'Livestream / Co-Watch Integrations'],
    bestFor: 'Game publishers, streaming platforms, and anime distributors'
  },
  {
    id: 'brand-collaborations',
    title: 'BRAND COLLABORATIONS',
    tagline: 'Creative partnerships where brands naturally become part of the entertainment.',
    description: 'Long-term ambassador partnerships, co-branded original sketches, custom recurring segments, and VIP event appearances.',
    deliverables: ['Series Title Sponsorship', 'Custom Skit IP Integration', 'Cross-Platform Amplification', 'Dedicated Analytics & Insights Report'],
    bestFor: 'Major consumer brands wanting recurring cultural mindshare'
  }
];

export const COMMERCIAL_INDUSTRIES = [
  'Gaming & Esports',
  'Anime & Manga Publishing',
  'Streaming Platforms',
  'Consumer Technology',
  'Creator Tools & Software',
  'Streetwear & Fashion',
  'Collectibles & Merchandise',
  'Conventions & Live Events',
  'Pop Culture Brands',
  'Beverage & Lifestyle'
];

export const METRICS_DATA = [
  {
    id: 'views',
    valuePlaceholder: '[XXM]',
    label: 'TOTAL VIEWS',
    context: 'Across vertical video feeds',
    sublabel: 'High-retention viewership'
  },
  {
    id: 'followers',
    valuePlaceholder: '[XXK]',
    label: 'ENGAGED FOLLOWERS',
    context: 'Active anime community',
    sublabel: 'Dedicated fans'
  },
  {
    id: 'retention',
    valuePlaceholder: '[XX%]',
    label: 'RETENTION RATE',
    context: 'Beating platform benchmarks',
    sublabel: 'Above average'
  },
  {
    id: 'impressions',
    valuePlaceholder: '[XXM]',
    label: 'IMPRESSIONS',
    context: 'Cultural visibility',
    sublabel: 'Viral reach'
  },
  {
    id: 'comments',
    valuePlaceholder: '[XX%]',
    label: 'COMMENT RATE',
    context: 'Debate velocity',
    sublabel: 'High engagement'
  },
  {
    id: 'partnerships',
    valuePlaceholder: '[XX]',
    label: 'BRAND PARTNERSHIPS',
    context: 'Zero filler campaigns',
    sublabel: '100% comedic fit'
  }
];

export const BRAND_PARTNERS = [
  { id: 'bp-1', name: '[BRAND PARTNER 01]', industry: 'Gaming Publisher' },
  { id: 'bp-2', name: '[BRAND PARTNER 02]', industry: 'Streaming Service' },
  { id: 'bp-3', name: '[BRAND PARTNER 03]', industry: 'Anime Distributor' },
  { id: 'bp-4', name: '[BRAND PARTNER 04]', industry: 'Tech & Audio' },
  { id: 'bp-5', name: '[BRAND PARTNER 05]', industry: 'Streetwear Label' },
  { id: 'bp-6', name: '[BRAND PARTNER 06]', industry: 'Collectibles Brand' }
];

export const TESTIMONIAL = {
  quote: "AdX didn't just promote our product — they made it part of the joke. Our audience loved it.",
  author: "[BRAND MARKETING DIRECTOR]",
  role: "Global Head of Entertainment Partnerships"
};

export const TIMELINE_CHAPTERS = [
  {
    id: 'chapter-1',
    chapter: 'CHAPTER 01',
    title: 'THE AWAKENING',
    time: 'ARC 01',
    description: 'Anime fan begins creating content. Realises normal reactions are boring and sets out to create something with real comedic teeth.',
    isFuture: false
  },
  {
    id: 'chapter-2',
    chapter: 'CHAPTER 02',
    title: 'THE LOGIC COURT',
    time: 'ARC 02',
    description: 'The first viral hit. Proving anime logic deserves a jury trial. The courtroom gavels begin banging across the internet.',
    isFuture: false
  },
  {
    id: 'chapter-3',
    chapter: 'CHAPTER 03',
    title: 'CONTROLLED CHAOS',
    time: 'ARC 03',
    description: 'AdX evolves into a recognised comedy voice in anime culture. The formula crystallises: 40% Jester, 25% Creator, 20% Superfan, 15% Chaos.',
    isFuture: false
  },
  {
    id: 'chapter-4',
    chapter: 'CHAPTER 04',
    title: 'ENTERTAINMENT IP',
    time: 'ARC 04',
    description: 'Expanding into recurring formats, character comedy and brand storytelling. A syndicated network of original anime shows.',
    isFuture: false
  },
  {
    id: 'chapter-5',
    chapter: 'NEXT ARC',
    title: '[TO BE CONTINUED]',
    time: 'IN PRODUCTION',
    description: 'Something ridiculous is currently rendering. Major original IP expansions, live show formats, and unhinged brand collaborations.',
    isFuture: true
  }
];

export const PROJECT_TYPE_OPTIONS = [
  'Short-Form Video Campaign (TikTok/Reels/Shorts)',
  'Signature Format Sponsorship (e.g. Anime Logic Court)',
  'Creative Direction & Concept Development',
  'Original Comedy Skit / UGC Product Integration',
  'Anime Convention or Live Event Coverage',
  'Long-Term Brand Ambassador Partnership'
];

export const BUDGET_RANGE_OPTIONS = [
  '$2,500 – $5,000 (Single Video / Skit)',
  '$5,000 – $15,000 (Multi-Video Arc / Campaign)',
  '$15,000 – $35,000 (Series Title Sponsorship)',
  '$35,000+ (Full Season Co-Production / Ambassador)',
  'Custom Scope / Advisory'
];


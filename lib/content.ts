import { IMAGES } from "./constants";

export const quickFacts = [
  { label: "Builder", value: "Caivan Communities" },
  { label: "Home Type", value: "Freehold Townhomes" },
  { label: "Location", value: "Bronte Road & Upper Middle Rd W, Oakville" },
  { label: "Status", value: "Coming Soon — VIP Registration Open" },
  { label: "Fees", value: "No Monthly Condo Fees" },
  { label: "Park Access", value: "Adjacent to Bronte Creek Provincial Park" },
] as const;

export const heroBadges = [
  { icon: "home", text: "Freehold — No Condo Fees" },
  { icon: "school", text: "Top-Ranked Oakville Schools" },
  { icon: "train", text: "Minutes to Bronte GO" },
  { icon: "road", text: "QEW · 403 · 407 Access" },
] as const;

export const overviewStats = [
  {
    value: "350+",
    label: "Acres of Bronte Creek Provincial Park at your doorstep",
  },
  {
    value: "Freehold",
    label: "Townhomes with no monthly condo or maintenance fees",
  },
  {
    value: "VIP Phase",
    label: "Pricing and floor plans available to registered buyers first",
  },
  {
    value: "South Oakville",
    label: "One of the GTA's most supply-constrained family markets",
  },
] as const;

export const galleryImages = [
  {
    src: IMAGES.detachedExterior,
    alt: "Bronte Trails freehold townhome exterior rendering in Oakville by Caivan Communities",
    caption: "Contemporary Townhome Architecture",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    src: IMAGES.detachedPicture2,
    alt: "Modern freehold townhome design at Bronte Trails Oakville pre-construction community",
    caption: "Thoughtful Street-Level Design",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: IMAGES.exteriorCommunity,
    alt: "Bronte Trails Oakville community streetscape with tree-lined freehold townhomes",
    caption: "Tree-Lined Community Streetscape",
    span: "",
    aspect: "aspect-[4/3]",
  },
] as const;

export const distances = [
  { icon: "train", label: "Bronte GO Station", time: "5–7 min drive" },
  { icon: "road", label: "QEW On-Ramp", time: "~4 min" },
  { icon: "road", label: "Highway 403", time: "~7 min" },
  { icon: "road", label: "Highway 407 ETR", time: "~10 min" },
  { icon: "building", label: "Mississauga City Centre", time: "~20 min" },
  { icon: "city", label: "Downtown Toronto", time: "~40 min via GO" },
  {
    icon: "shop",
    label: "Oakville Uptown Core (Walmart, Longo's, LCBO, Canadian Tire)",
    time: "~5 min",
  },
  {
    icon: "dining",
    label: "Bronte Village & Oakville dining",
    time: "5–10 min",
  },
  {
    icon: "hospital",
    label: "Oakville Trafalgar Memorial Hospital",
    time: "~12 min",
  },
  { icon: "education", label: "Sheridan College Trafalgar Campus", time: "~8 min" },
] as const;

export const schools = [
  {
    name: "Thomas A. Blakelock High School",
    type: "Public Secondary | Halton District School Board",
    grades: "Grades 9–12",
    rating: "Fraser Institute Ranking: 8.0/10",
    programs: "English, French Immersion, Advanced Placement",
    location: "1160 Rebecca Street, Oakville",
    distance: "~8 min drive",
    note: "The primary public high school serving southwest Oakville — a significant catchment advantage for families in the Bronte Trails area.",
  },
  {
    name: "St. Ignatius of Loyola Catholic Secondary School",
    type: "Catholic Secondary | Halton Catholic District School Board",
    grades: "Grades 9–12",
    location: "2441 Lakeshore Road West, Oakville",
    distance: "~10 min drive",
    note: "Well-regarded Catholic secondary option for families seeking faith-based education in Halton Region.",
  },
  {
    name: "Gladys Speers Public School",
    type: "Public Elementary | Halton DSB",
    grades: "JK–Grade 8",
    location: "Bronte neighbourhood, Oakville",
    distance: "~5 min drive",
  },
  {
    name: "Eastview Public School",
    type: "Public Elementary | Halton DSB",
    grades: "JK–Grade 8",
    location: "Bronte neighbourhood, Oakville",
    distance: "~6 min drive",
  },
  {
    name: "Brookdale Public School",
    type: "Public Elementary | Halton DSB",
    grades: "JK–Grade 8",
    location: "Bronte neighbourhood, Oakville",
    distance: "~7 min drive",
  },
  {
    name: "St. Dominic Catholic Elementary School",
    type: "Catholic Elementary | Halton CDSB",
    grades: "JK–Grade 8",
    location: "Bronte area, Oakville",
    distance: "~8 min drive",
  },
  {
    name: "St. Nicholas Catholic Elementary School",
    type: "Catholic Elementary | Halton CDSB",
    grades: "JK–Grade 8",
    location: "Bronte area, Oakville",
    distance: "~8 min drive",
  },
  {
    name: "Sheridan College — Trafalgar Campus",
    type: "Post-Secondary Institution",
    grades: "",
    location: "1430 Trafalgar Road, Oakville",
    distance: "~8 min drive",
    note: "One of Ontario's leading applied arts and technology colleges, minutes from Bronte Trails.",
  },
] as const;

export const amenityColumns = [
  {
    title: "Nature & Outdoors",
    items: [
      "Bronte Creek Provincial Park — 350+ acres of trails, camping, and wildlife",
      "Park pool and supervised swimming during summer months",
      "Children's play barn and farm-themed discovery areas",
      "Bronte Waterfront & Harbour for boating and lakeside walks",
      "Coronation Park along Lake Ontario shoreline",
      "Extensive cycling paths connecting to the Greater Toronto Area trail network",
    ],
  },
  {
    title: "Shopping & Dining",
    items: [
      "Oakville Uptown Core — Walmart, Longo's, LCBO, Canadian Tire",
      "South Oakville Centre for everyday retail and services",
      "Bronte Village boutique shops and waterfront cafés",
      "Downtown Oakville restaurants, many recognized in the Michelin Guide",
      "Costco, Home Depot, and big-box retail along the QEW corridor",
      "Farmers markets and seasonal events throughout Halton Region",
    ],
  },
  {
    title: "Recreation & Wellness",
    items: [
      "Deerfield Golf Club — championship course minutes away",
      "Glen Abbey Community Centre — pools, fitness, and programs",
      "Oakville Trafalgar Memorial Hospital for healthcare access",
      "Oakville YMCA — family fitness and aquatics",
      "Community sports leagues, arenas, and tennis courts across South Oakville",
      "Lake Ontario beaches and waterfront parks within a short drive",
    ],
  },
] as const;

export const investmentPoints = [
  {
    title: "South Oakville Supply Constraints",
    body: "South Oakville has limited land available for new residential development. With Bronte Creek Provincial Park to the north and established neighbourhoods surrounding the area, new freehold townhome communities like Bronte Trails are increasingly rare. Scarcity supports long-term value retention.",
  },
  {
    title: "Oakville Livability Premium",
    body: "Oakville consistently ranks among Canada's most desirable municipalities for safety, schools, and quality of life. Buyers across the Greater Toronto Area compete for homes here, creating sustained demand from end-users and investors alike.",
  },
  {
    title: "Freehold vs. Condo-Town Value",
    body: "Unlike stacked townhomes or condo-style developments, Bronte Trails freehold townhomes carry no monthly condo maintenance fees. Over a 25-year mortgage, that difference can represent tens of thousands of dollars in savings — a compelling value proposition for budget-conscious families.",
  },
  {
    title: "Family Rental Demand",
    body: "South Oakville attracts professional families seeking top schools, park access, and commuter convenience. Freehold townhomes near transit and highways tend to lease quickly, offering potential rental income for investors who choose to hold.",
  },
] as const;

export const faqs = [
  {
    q: "What are Bronte Trails townhomes?",
    a: "Bronte Trails townhomes are a new pre-construction freehold townhome community by Caivan Communities at Bronte Road and Upper Middle Road West in Oakville, Ontario. Unlike condo-style townhomes, these are freehold — meaning owners pay no monthly condo or maintenance fees. The development is currently in its VIP registration phase, with pricing and floor plans released to registered buyers before the public launch.",
  },
  {
    q: "Who is building Bronte Trails in Oakville?",
    a: "Caivan Communities (also known as Caivan Homes) is the builder behind Bronte Trails. Based in Ottawa with active projects across the Greater Toronto Area and Eastern Ontario, Caivan is known for precision factory-built construction and communities designed for modern family living. Bronte Trails represents their entry into the South Oakville market along the Bronte Road corridor.",
  },
  {
    q: "Where is Bronte Trails located in Oakville?",
    a: "Bronte Trails is located at the intersection of Bronte Road and Upper Middle Road West in South Oakville, Halton Region, Ontario. The community sits directly adjacent to Bronte Creek Provincial Park (350+ acres) and is approximately 5–7 minutes by car from Bronte GO Station. Major highways including the QEW, Highway 403, and Highway 407 are all within a 10-minute drive.",
  },
  {
    q: "Are Bronte Trails townhomes freehold or condo?",
    a: "Bronte Trails offers freehold townhomes. This is a significant distinction: freehold ownership means there are no monthly condo maintenance fees, no condo corporation governance, and owners hold title to their land. Many newer townhome developments in the GTA are condo-style with ongoing fees — Bronte Trails avoids that structure entirely.",
  },
  {
    q: "What is the price of Bronte Trails townhomes?",
    a: "Official pricing for Bronte Trails has not been publicly released. Caivan Communities typically gates price lists and incentive packages behind VIP registration during the pre-construction phase. Register on this page to receive the price list, floor plans, and any early-bird incentives as soon as they become available.",
  },
  {
    q: "What floor plans are available at Bronte Trails?",
    a: "Detailed floor plans and model specifications will be shared with VIP registrants before the general public. Based on Caivan's portfolio, buyers can expect a range of townhome configurations suited to families and professionals. Register now to secure your place on the priority list for floor plan releases.",
  },
  {
    q: "How do I register for VIP access to Bronte Trails?",
    a: "Complete the registration form on this page with your first name, last name, email, and phone number. VIP registrants receive first access to pricing, floor plans, lot selection opportunities, and any launch incentives. There is no obligation to purchase — registration simply places you on the priority contact list.",
  },
  {
    q: "Is Bronte Trails sold out?",
    a: "No. Bronte Trails is currently in the coming-soon / VIP registration phase. The community has not launched publicly, and homes have not been released for sale. This is the ideal window to register for early access before inventory becomes available to the broader market.",
  },
  {
    q: "What schools are near Bronte Trails Oakville?",
    a: "Families at Bronte Trails have access to some of Oakville's best schools. Thomas A. Blakelock High School (Fraser ranking 8.0/10, 1160 Rebecca Street) serves the area's public secondary students. St. Ignatius of Loyola Catholic Secondary School (2441 Lakeshore Road West) provides a Catholic secondary option. Elementary options include Gladys Speers PS, Eastview PS, Brookdale PS, St. Dominic Catholic Elementary, and St. Nicholas Catholic Elementary. Abbey Park High School (Fraser 9.3/10, top 1% in Ontario) is also within the broader Oakville school landscape.",
  },
  {
    q: "How far is Bronte Trails from Bronte GO Station?",
    a: "Bronte GO Station on the Lakeshore West line is approximately 5–7 minutes by car from Bronte Trails. From Bronte GO, commuters reach Union Station in downtown Toronto in roughly 40 minutes. This makes Bronte Trails practical for professionals who work in Toronto but prefer suburban family living in Oakville.",
  },
  {
    q: "What highways are near Bronte Trails?",
    a: "Bronte Trails offers excellent highway connectivity. The QEW on-ramp is about 4 minutes away, Highway 403 is approximately 7 minutes, and Highway 407 ETR is roughly 10 minutes. This positions residents for convenient commutes to Mississauga City Centre (~20 min), Toronto Pearson Airport, and employment centres across the western GTA.",
  },
  {
    q: "Is Bronte Trails near Bronte Creek Provincial Park?",
    a: "Yes — Bronte Trails is directly adjacent to Bronte Creek Provincial Park, one of Ontario's largest urban-adjacent provincial parks at over 350 acres. Residents enjoy immediate access to hiking and cycling trails, camping facilities, a supervised pool, a children's play barn, and year-round outdoor recreation without leaving their neighbourhood.",
  },
  {
    q: "What amenities are close to Bronte Trails?",
    a: "Beyond the provincial park, Bronte Trails residents are minutes from Oakville Uptown Core (Walmart, Longo's, LCBO, Canadian Tire), South Oakville Centre, Bronte Village dining, Deerfield Golf Club, Glen Abbey Community Centre, Oakville Trafalgar Memorial Hospital, and the Oakville YMCA. Sheridan College's Trafalgar Campus is also nearby for post-secondary education.",
  },
  {
    q: "Are there condo fees at Bronte Trails?",
    a: "No. Bronte Trails townhomes are freehold, which means there are no monthly condo maintenance fees. Owners are responsible for their own property upkeep, but they avoid the recurring charges that condo-town and stacked-town buyers face — often $300–$600+ per month in comparable GTA communities.",
  },
  {
    q: "Is Bronte Trails a good investment?",
    a: "South Oakville is one of the most supply-constrained and high-demand residential markets in the Greater Toronto Area. Freehold townhomes near transit, highways, and top-ranked schools historically hold value well. Limited new land for development, strong family rental demand, and Oakville's reputation for livability all support the investment case — though all real estate carries risk and past performance does not guarantee future results.",
  },
  {
    q: "What is the difference between Bronte Trails and other Oakville townhomes?",
    a: "Bronte Trails distinguishes itself through freehold ownership (no condo fees), its position adjacent to Bronte Creek Provincial Park, and Caivan Communities' builder pedigree. Many competing townhome projects in Oakville are condo-style with ongoing fees or located farther from both nature and transit. Bronte Trails combines park access, Bronte GO proximity, and highway connectivity in a single South Oakville address.",
  },
  {
    q: "When will Bronte Trails launch?",
    a: "An official public launch date has not been announced. The project is in the VIP registration phase, which typically precedes a sales centre opening and public release. Register now to be notified of launch dates, preview events, and allocation opportunities as Caivan Communities moves toward market release.",
  },
  {
    q: "Can real estate brokers register for Bronte Trails?",
    a: "Yes. The registration form includes a broker identification field. Real estate professionals who indicate they are brokers will be contacted through the appropriate channel for brokerage registration, co-op arrangements, and client referral processes as defined by Caivan Communities at launch.",
  },
  {
    q: "What makes Bronte Trails townhomes different from brontetrails.ca?",
    a: "Bronte Trails Towns (brontetrailstowns.ca) is an independent informational site focused on the townhome product angle for the same Caivan Communities development at Bronte Road and Upper Middle Road West. Both sites cover the same pre-construction community, but this property emphasizes freehold townhomes, Oakville school access, and VIP registration for buyers researching the townhome format specifically.",
  },
  {
    q: "Is this website officially affiliated with Caivan Communities?",
    a: "No. www.brontetrailstowns.ca is an independent informational website and is not affiliated with, endorsed by, or operated on behalf of Caivan Communities. All project details should be verified with Caivan's official sales representatives before entering a purchase agreement. Information on this page is provided for research purposes only and may contain errors or omissions (E.&O.E.).",
  },
] as const;

export const overviewCopy = {
  definition:
    "Bronte Trails is a forthcoming collection of freehold townhomes by Caivan Communities at Bronte Road and Upper Middle Road West in South Oakville — where 350 acres of protected parkland meet one of the GTA's most sought-after suburban addresses.",
  paragraphs: [
    "Positioned at the gateway between Bronte Creek Provincial Park and established South Oakville neighbourhoods, Bronte Trails represents a rare opportunity to own a new-construction freehold townhome in a market with limited supply. Caivan Communities brings its precision-built approach to a location that families have coveted for decades — minutes from top-ranked schools, major highways, and the Bronte GO commuter line.",
    "As freehold townhomes, Bronte Trails homes carry no monthly condo maintenance fees. That distinction matters: across the Greater Toronto Area, many newer townhome developments operate under condo corporations with fees that can exceed $400 per month. At Bronte Trails, owners hold full title to their land and structure without that recurring cost — a meaningful advantage over the life of ownership.",
    "The community is currently in its VIP registration phase. Pricing, floor plans, and incentive packages are available to registered buyers before the public launch. For buyers comparing pre-construction townhomes in Oakville, Bronte Trails offers a combination of builder credibility, park-adjacent living, and transit connectivity that few competing projects can match.",
    "Whether you are a growing family seeking Oakville schools, a commuter weighing Bronte GO access, or an investor evaluating South Oakville's supply dynamics, Bronte Trails warrants serious consideration. Register below to receive priority updates as Caivan Communities moves toward market release.",
    "For buyers searching specifically for townhomes — rather than detached singles or high-rise condos — Bronte Trails occupies a sweet spot in the Oakville market. The freehold structure, park-adjacent setting, and Caivan builder pedigree combine to create a product type that is increasingly difficult to find in South Oakville's mature, land-constrained geography.",
    "Pre-construction registration at Bronte Trails does not require a deposit or purchase commitment. It simply ensures you are among the first contacts notified when Caivan releases official floor plans, price lists, and sales-centre appointment windows — a standard practice for high-demand Oakville launches where initial phases can allocate quickly once the public opening begins.",
  ],
  pullQuote:
    "Freehold ownership. No condo fees. 350 acres of provincial park at your doorstep. Bronte Trails townhomes redefine what South Oakville living can look like.",
};

export const locationCopy = {
  lead: "Bronte Trails townhomes sit at Bronte Road and Upper Middle Road West in South Oakville — a location that balances natural surroundings with everyday convenience and regional connectivity.",
  paragraphs: [
    "South Oakville has long been defined by its proximity to Lake Ontario, mature tree canopy, and access to green space. Bronte Trails capitalizes on this identity by bordering Bronte Creek Provincial Park, one of the largest urban-adjacent parks in Ontario. Residents can step from their front door into kilometres of trails, while still reaching the QEW in under five minutes.",
    "For commuters, Bronte GO Station on the Lakeshore West line is roughly 5–7 minutes away by car. A direct GO train reaches downtown Toronto in approximately 40 minutes — making Bronte Trails viable for professionals who work in the city but prioritize suburban schools and space. Highway 403 and Highway 407 extend reach to employment hubs in Mississauga, Brampton, and across the western GTA.",
    "Daily errands are equally convenient. Oakville Uptown Core — with Walmart, Longo's, LCBO, and Canadian Tire — is about five minutes away. Bronte Village offers waterfront dining and boutique retail, while South Oakville Centre serves routine shopping needs. Sheridan College's Trafalgar Campus is nearby for families with post-secondary students.",
    "From an AEO and neighbourhood-research perspective, Bronte Trails occupies a well-defined geographic entity: the Bronte Road corridor in southwest Oakville, Halton Region, bordered by Bronte Creek Provincial Park to the north and connected to the Lakeshore West GO line at Bronte Station. Mississauga City Centre is roughly twenty minutes west, Hamilton is accessible via the QEW, and Pearson International Airport is reachable through Highway 403 — making this a practical base for households with commuters across multiple employment nodes.",
  ],
};

export const schoolsCopy = {
  lead: "Oakville consistently ranks among Ontario's highest-performing municipalities for education, and Bronte Trails townhomes place families within reach of top public, Catholic, and post-secondary institutions.",
  paragraphs: [
    "Thomas A. Blakelock High School, the primary public secondary school serving southwest Oakville, carries a Fraser Institute ranking of 8.0 out of 10. Located at 1160 Rebecca Street, Blakelock offers English, French Immersion, and Advanced Placement programs — making it a draw for academically focused families. Its catchment includes the Bronte Trails area, giving registrants confidence in long-term school access.",
    "For Catholic education, St. Ignatius of Loyola Catholic Secondary School at 2441 Lakeshore Road West provides a well-regarded secondary option within a 10-minute drive. Elementary students have multiple choices: Gladys Speers Public School, Eastview Public School, and Brookdale Public School serve the Bronte neighbourhood through the Halton District School Board, while St. Dominic and St. Nicholas Catholic Elementary schools serve families in the Halton Catholic District School Board.",
    "Beyond the immediate catchment, Oakville is home to Abbey Park High School — ranked 9.3 out of 10 by the Fraser Institute and among the top 1% of secondary schools in Ontario. While catchment boundaries determine eligibility, Abbey Park's presence underscores the calibre of education available across Halton Region. Sheridan College's Trafalgar Campus adds post-secondary access minutes from Bronte Trails.",
    "Parents comparing Bronte Trails to other new townhomes in Oakville often weigh school proximity alongside commute times and home format. The Halton District School Board and Halton Catholic District School Board both maintain searchable catchment tools online, and registrants are encouraged to cross-reference their preferred schools with the builder's sales team once lot and model assignments become available at launch.",
  ],
  disclaimer:
    "School catchment boundaries are determined by school boards and may change. Families should verify current catchment maps with the Halton District School Board and Halton Catholic District School Board before making purchasing decisions. Fraser Institute rankings are one of many factors to consider when evaluating schools.",
};

export const amenitiesCopy = {
  lead: "Living at Bronte Trails townhomes means everyday access to provincial park trails, lakefront recreation, championship golf, and the retail and dining options that make South Oakville one of the GTA's most complete suburban lifestyles.",
  paragraphs: [
    "Bronte Creek Provincial Park is the defining amenity. At more than 350 acres, the park offers hiking and cycling trails, seasonal camping, a supervised swimming pool, and a children's play barn that has delighted generations of Halton families. Unlike communities that advertise park proximity in marketing materials but require a drive, Bronte Trails borders the park directly.",
    "The Bronte waterfront — harbour, marina, and village main street — is minutes away for lakeside dining, boating, and weekend strolls. Coronation Park along Lake Ontario provides additional green space and event venues. Inland, Deerfield Golf Club and Glen Abbey Community Centre serve golfers and fitness-minded residents, while Oakville Trafalgar Memorial Hospital and the Oakville YMCA support health and wellness needs.",
    "Seasonal programming across Halton Region — from farmers markets and waterfront festivals to arena sports and community-centre classes — adds depth to the lifestyle profile for Bronte Trails residents. The Town of Oakville invests heavily in parks, trails, and public facilities, which supports property values and day-to-day satisfaction for families who prioritize recreation alongside home ownership.",
  ],
};

export const caivanCopy = {
  lead: "Caivan Communities is the Ontario builder behind Bronte Trails — known for precision factory-built construction and master-planned communities across the Greater Toronto Area and Ottawa region.",
  paragraphs: [
    "Founded with a focus on quality and efficiency, Caivan Communities (Caivan Homes) has established a growing portfolio of residential developments in Oakville, Brampton, Caledon, Ottawa, and beyond. Their factory-built approach allows for tighter quality control, faster construction timelines, and consistent finishes across every home — advantages that resonate with buyers comparing pre-construction options.",
    "For Bronte Trails specifically, Caivan brings builder credibility to a South Oakville address that has seen limited new freehold townhome supply in recent years. Buyers registering for VIP access can expect the professionalism and communication standards Caivan has demonstrated across prior launches — including gated pricing releases, organized preview events, and structured allocation processes.",
    "It is important to note that this website is an independent informational resource and does not represent Caivan Communities officially. All builder claims should be verified directly with Caivan at the time of purchase. Register on this page to receive updates as the Bronte Trails launch progresses.",
    "Caivan's Bronte Trails townhomes join a builder lineup that has delivered communities across multiple price points and housing formats — experience that matters when evaluating construction quality, warranty enrollment through Tarion, and realistic occupancy timelines for pre-construction buyers in Halton Region.",
  ],
};

export const investmentCopy = {
  lead: "Bronte Trails freehold townhomes sit at the intersection of South Oakville scarcity, family rental demand, and the long-term value proposition of fee-free ownership — factors that matter to both end-users and investors.",
  paragraphs: [
    "South Oakville has limited land available for new residential development. Protected green space, established neighbourhoods, and municipal planning constraints mean that new communities like Bronte Trails are increasingly uncommon. When supply is constrained and demand remains strong — as it has across Oakville for decades — pricing tends to reflect that imbalance.",
    "Oakville's livability metrics reinforce the case. The town consistently ranks among Canada's safest and most desirable municipalities, with top-ranked schools, low crime rates, and extensive cultural and recreational amenities. Buyers from across the GTA compete for homes here, supporting both resale liquidity and rental demand.",
    "The freehold structure adds a financial dimension. Without monthly condo fees, Bronte Trails owners avoid a cost that can total $100,000 or more over a 25-year ownership period in comparable condo-town developments. For investors, freehold townhomes near transit and highways in family-oriented markets like South Oakville have historically attracted stable tenant demand.",
    "Pre-construction registration also offers practical advantages: early buyers often access preferred pricing tiers, broader lot or unit selection, and builder incentives that diminish as inventory sells. While all real estate investments carry risk and past performance does not guarantee future returns, the combination of Oakville's fundamentals and Bronte Trails' product positioning makes this launch worth evaluating carefully.",
  ],
};

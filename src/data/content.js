// ============================================================================
//  CENTRAL CONTENT FILE  —  edit this one file to update the whole portfolio.
//  When Usman sends real Graphic Design images or Marketing case-study data,
//  drop them into the arrays below. No component/layout changes are needed.
// ============================================================================

// ---------------------------------------------------------------------------
//  SERVICES  (Services section — three pillars)
//  filterKey must match a category used in `portfolioItems` so the card's
//  "View Work" button jumps to the Portfolio pre-filtered to that pillar.
// ---------------------------------------------------------------------------
export const services = [
  {
    icon: "🎨",
    title: "Graphic Design",
    blurb:
      "Eye-catching visuals that strengthen your brand and turn viewers into customers.",
    included: [
      "Social Media Design (posts, carousels, stories)",
      "Branding & Identity (logos, color, typography)",
      "Marketing Creatives (banners, flyers, packaging, thumbnails)",
    ],
    filterKey: "design",
  },
  {
    icon: "🎬",
    title: "Video Editing",
    blurb:
      "Clean, cinematic edits and motion graphics that keep viewers watching.",
    included: [
      "Iman Gadzhi–style short & long form",
      "VFX & Motion Graphics",
      "Commercial & advertising edits, color, sound, subtitles",
    ],
    filterKey: "video",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    blurb:
      "Performance-driven advertising that generates measurable business growth.",
    included: [
      "Meta Ads (Facebook & Instagram)",
      "Google Search, Display & Performance Max",
      "Pixel setup, A/B testing & conversion tracking",
    ],
    filterKey: "google-ads",
  },
];

// ---------------------------------------------------------------------------
//  PORTFOLIO ITEMS  (Portfolio section)
//  category: "design" | "video" | "google-ads" | "meta-ads"
//
//  - video    → { category:"video", title, video (YouTube URL), type }
//  - design   → { category:"design", title, image, type }   (placeholder ok)
//  - marketing→ { category:"google-ads" | "meta-ads", title, caseStudy:{...} }
// ---------------------------------------------------------------------------
export const portfolioItems = [
  // --- Video Editing (real, existing work) ---------------------------------
  { category: "video", title: "Intro Video", video: "https://youtu.be/IddEalpBlZc", type: "AE/ME/Topaz" },
  { category: "video", title: "Car Content", video: "https://youtu.be/as1QpLT3T18", type: "AE/ME/Topaz" },
  { category: "video", title: "Short VFX", video: "https://youtu.be/S4VyKzTlkgQ", type: "AE/ME/PS/Topaz" },
  { category: "video", title: "Podcast Reel", video: "https://youtu.be/g4xqJGVXbug", type: "AE/ME/Topaz" },
  { category: "video", title: "Iman Gadzhi Style", video: "https://youtu.be/pEH5u6eveWk", type: "AE/ME/Topaz" },
  { category: "video", title: "Advertise & Commercial", video: "https://youtu.be/dnvSKdifals", type: "AE/ME/Topaz" },
  { category: "video", title: "Time Remap Edit", video: "https://youtu.be/tEnA3VeEt8U", type: "AE/ME/Topaz" },
  { category: "video", title: "Face Quality Edit", video: "https://youtu.be/T6_znLeEqgg", type: "AE/ME/Topaz" },
  { category: "video", title: "Lobby Edit", video: "https://youtu.be/TIdFFnWdkGY", type: "Blender/AE/ME/Topaz" },
  { category: "video", title: "Gameplay Edit", video: "https://youtu.be/jow5oDO83gE", type: "AE/ME/Topaz" },

  // --- Graphic Design (PLACEHOLDERS — replace image + title with real work) -
  { category: "design", title: "Social Media Post", image: "", type: "Photoshop" },
  { category: "design", title: "Brand Identity", image: "", type: "Illustrator" },
  { category: "design", title: "Product Packaging", image: "", type: "Illustrator" },
  { category: "design", title: "Poster / Flyer", image: "", type: "Photoshop" },
  { category: "design", title: "YouTube Thumbnail", image: "", type: "Photoshop" },
  { category: "design", title: "Ad Creative", image: "", type: "Canva" },

  // --- Digital Marketing case studies (PLACEHOLDERS — fill in real numbers) -
  {
    category: "google-ads",
    title: "E-commerce Search Campaign",
    caseStudy: {
      objective: "Drive purchases for an online store",
      creative: "Search + Performance Max with keyword research",
      audience: "High-intent shoppers by search terms",
      budget: "TBD",
      results: "Expected outcome — replace with real ROAS/CPA once live",
    },
  },
  {
    category: "meta-ads",
    title: "Restaurant Awareness Campaign",
    caseStudy: {
      objective: "Increase local reach & bookings",
      creative: "Short-form video + carousel ad creatives",
      audience: "Local diners, interest & lookalike targeting",
      budget: "TBD",
      results: "Expected outcome — replace with real reach/leads once live",
    },
  },
];

// Filter buttons shown above the Portfolio grid. `key` matches item categories.
export const portfolioFilters = [
  { key: "all", label: "All" },
  { key: "design", label: "Graphic Design" },
  { key: "video", label: "Video Editing" },
  { key: "google-ads", label: "Google Ads" },
  { key: "meta-ads", label: "Meta Ads" },
];

// ---------------------------------------------------------------------------
//  SKILLS  (Skills section — grouped columns)
// ---------------------------------------------------------------------------
export const skills = {
  Design: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Canva"],
  Video: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", "Blender", "Topaz"],
  Marketing: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Google Tag Manager", "Search Console"],
};

// Tool-icon strip (kept from the original design). src is under /public.
export const tools = [
  { src: "/after-effects.png", alt: "After Effects" },
  { src: "/premiere.png", alt: "Adobe Premiere Pro" },
  { src: "/Adobe Media Encoder CC.png", alt: "Adobe Media Encoder" },
  { src: "/pngwing.com (20).png", alt: "Blender" },
  { src: "/topaz.svg", alt: "Topaz" },
  { src: "/pngwing.com (21).png", alt: "Adobe Photoshop" },
  { src: "/pngwing.com (22).png", alt: "Canva" },
  { src: "/adobe illustrator.png", alt: "Adobe Illustrator" },
  { src: "/davinci.png", alt: "DaVinci Resolve" },
];

// ---------------------------------------------------------------------------
//  TESTIMONIALS  (PLACEHOLDERS — replace with real client quotes)
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    name: "Client Name",
    role: "Brand / Company",
    quote:
      "Usman delivered creative work that raised our engagement and looked genuinely professional. (Replace with a real testimonial.)",
  },
  {
    name: "Client Name",
    role: "E-commerce Store",
    quote:
      "Our ad campaigns finally started converting after Usman restructured the creatives and targeting. (Replace with a real testimonial.)",
  },
  {
    name: "Client Name",
    role: "Content Creator",
    quote:
      "The edits kept my audience watching to the end. Clean, fast, and on-brand. (Replace with a real testimonial.)",
  },
];

// ---------------------------------------------------------------------------
//  FAQ  (edit freely)
// ---------------------------------------------------------------------------
export const faqs = [
  {
    q: "What services do you offer?",
    a: "Graphic design, video editing, and digital marketing (Google Ads & Meta Ads) — a complete creative and marketing solution under one roof.",
  },
  {
    q: "What's your turnaround time?",
    a: "It depends on scope, but most short-form edits and single design pieces are delivered within a few days. I'll confirm a timeline before starting.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. I work with clients worldwide and optimize content for Meta, TikTok, Instagram, and YouTube.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through the contact section below. We'll discuss your goals, and I'll recommend the right mix of design, video, and advertising.",
  },
];

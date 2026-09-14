export type ProjectCategory = 
  | 'All'
  | 'Comedy / Commentary'
  | 'Comedy Skit'
  | 'Anime Comedy'
  | 'Commentary'
  | 'Community Content'
  | 'Commercial / Brand Campaign';

export interface ProjectCaseStudy {
  overview: string;
  concept: string;
  creativeDirection: string;
  platform: string;
  videoUrl?: string;
  metrics: string;
  behindTheScenes: string;
  keyPunchline?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  video: string;
  category: ProjectCategory;
  platform: 'TikTok' | 'YouTube Shorts' | 'Instagram Reels' | 'Multi-Platform';
  description: string;
  year: string;
  metrics: string;
  featured: boolean;
  tag: string;
  caseStudy: ProjectCaseStudy;
}

export interface SignatureFormat {
  id: string;
  code: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  episodeCountPlaceholder: string;
  status: 'In Production' | 'Weekly Series' | 'Flagship Show';
  signatureHook: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  handlePlaceholder: string;
  followerCountPlaceholder: string;
  description: string;
  externalLinkPlaceholder: string;
  iconName: string;
  primaryAction: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
}

export interface MetricStat {
  id: string;
  valuePlaceholder: string;
  label: string;
  sublabel: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorPlaceholder: string;
  rolePlaceholder: string;
  companyPlaceholder: string;
  tag: string;
}

export interface TimelineMilestone {
  id: string;
  title: string;
  period: string;
  description: string;
  highlight: string;
  status: 'past' | 'present' | 'future';
}

export interface AdXRuleItem {
  word: 'LAUGH.' | 'SURPRISE.' | 'RELATE.' | 'SHARE.';
  subtitle: string;
  explanation: string;
  microExample: string;
  color: string;
}

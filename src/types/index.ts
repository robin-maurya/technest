export interface UserProfile {
  username: string;
  email: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ActivityItem {
  id: number;
  title: string;
  detail: string;
  time: string;
}

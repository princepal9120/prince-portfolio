export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  avatar?: string;
  resume?: string;
  socialLinks: SocialLink[];
}

export const profileData: ProfileData = {
  name: "Prince Pal",
  tagline: "Software Engineer | Full Stack Developer | AI Engineer",
  bio: "Passionate about building scalable apps with cutting-edge technologies that solve real-world problems.",
  email: "princepal9120@gmail.com",
  phone: "+1 234 567 8900",
  location: "Delhi, India",
  avatar: "/profile.jpg",
  resume: "https://drive.google.com/file/d/1tsz1a2Di42xceCP9Sno2QaHIWpa15ZSL/view?usp=drive_link",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/princepal9120",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/prince9120",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/prince_twets",
      icon: "twitter"
    },
    {
      platform: "Email",
      url: "mailto:princepal9120@gmail.com",
      icon: "mail"
    }
  ]
};

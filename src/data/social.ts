import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com",
    Icon: GithubIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: LinkedinIcon,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:m.abdelhamed941@gmail.com",
    Icon: Mail,
  },
] as const;

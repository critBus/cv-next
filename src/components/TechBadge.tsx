import React from "react";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiNeo4J,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiDocker,
  SiCss3,
  SiHtml5,
  SiTensorflow,
  SiKeras,
  SiVuedotjs,
  SiVuetify,
  SiGithub,
  SiPostman,
  SiOpenjdk,
  SiDotnet,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";

type IconMapType = {
  [key: string]: (selected?: boolean, size?: string) => React.ReactNode;
};

const iconMap: IconMapType = {
  JavaScript: (_, size) => (
    <SiJavascript className={`text-[#F7DF1E] ${size}`} />
  ),
  TypeScript: (_, size) => (
    <SiTypescript className={`text-[#3178C6] ${size}`} />
  ),
  React: (_, size) => <SiReact className={`text-[#61DAFB] ${size}`} />,
  "Next.js": (_, size) => <SiNextdotjs className={`text-white ${size}`} />,
  "Node.js": (_, size) => <SiNodedotjs className={`text-[#339933] ${size}`} />,
  Express: (_, size) => <SiExpress className={`text-white ${size}`} />,
  Python: (_, size) => <SiPython className={`text-[#3776AB] ${size}`} />,
  Java: (_, size) => <SiOpenjdk className={`text-[#007396] ${size}`} />,
  "C#": (_, size) => <SiDotnet className={`text-[#512BD4] ${size}`} />,
  Django: (_, size) => <SiDjango className={`text-[#092E20] ${size}`} />,
  "Django Rest Framework": (selected, size) => {
    const sizeMap: Record<
      "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl",
      string
    > = {
      "text-lg": "w-5 h-5",
      "text-xl": "w-6 h-6",
      "text-2xl": "w-7 h-7",
      "text-3xl": "w-8 h-8",
      "text-4xl": "w-10 h-10",
    };
    const sizeClass = size as
      | "text-lg"
      | "text-xl"
      | "text-2xl"
      | "text-3xl"
      | "text-4xl";
    return (
      <div
        className={`relative flex-shrink-0 ${sizeMap[sizeClass || "text-xl"]}`}
      >
        <Image
          src="/Django REST.svg"
          alt="Django REST Framework"
          fill
          className={`object-contain ${selected ? "invert" : "invert"}`}
        />
      </div>
    );
  },
  Flask: (_, size) => {
    const sizeMap: Record<
      "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl",
      string
    > = {
      "text-lg": "w-5 h-5",
      "text-xl": "w-6 h-6",
      "text-2xl": "w-7 h-7",
      "text-3xl": "w-8 h-8",
      "text-4xl": "w-10 h-10",
    };
    const sizeClass = size as
      | "text-lg"
      | "text-xl"
      | "text-2xl"
      | "text-3xl"
      | "text-4xl";
    return (
      <div
        className={`relative flex-shrink-0 ${sizeMap[sizeClass || "text-xl"]}`}
      >
        <Image
          src="/flask.svg"
          alt="Flask"
          fill
          className="object-contain invert"
        />
      </div>
    );
  },
  MongoDB: (_, size) => <SiMongodb className={`text-[#47A248] ${size}`} />,
  PostgreSQL: (_, size) => (
    <SiPostgresql className={`text-[#4169E1] ${size}`} />
  ),
  SQLServer: (_, size) => <DiMsqlServer className={`text-[#CC2927] ${size}`} />,
  MySQL: (_, size) => <SiMysql className={`text-[#4479A1] ${size}`} />,
  Neo4j: (_, size) => <SiNeo4J className={`text-[#4581C3] ${size}`} />,
  "Tailwind CSS": (_, size) => (
    <SiTailwindcss className={`text-[#06B6D4] ${size}`} />
  ),
  Bootstrap: (_, size) => <SiBootstrap className={`text-[#7952B3] ${size}`} />,
  Git: (_, size) => <SiGit className={`text-[#F05032] ${size}`} />,
  Github: (_, size) => <SiGithub className={`text-white ${size}`} />,
  Docker: (_, size) => <SiDocker className={`text-[#2496ED] ${size}`} />,
  Postman: (_, size) => <SiPostman className={`text-[#FF6C37] ${size}`} />,
  CSS: (_, size) => <SiCss3 className={`text-[#1572B6] ${size}`} />,
  HTML: (_, size) => <SiHtml5 className={`text-[#E34F26] ${size}`} />,
  IA: (_, size) => <BiBrain className={`text-[#00A67D] ${size}`} />,
  Keras: (_, size) => <SiKeras className={`text-[#D00000] ${size}`} />,
  TensorFlow: (_, size) => (
    <SiTensorflow className={`text-[#FF6F00] ${size}`} />
  ),
  Vue: (_, size) => <SiVuedotjs className={`text-[#4FC08D] ${size}`} />,
  Vuetify: (_, size) => <SiVuetify className={`text-[#1867C0] ${size}`} />,
  Deepface: (_, size) => <BiBrain className={`text-[#3776AB] ${size}`} />,
};

interface TechBadgeProps {
  tech: string;
  onClick?: () => void;
  selected?: boolean;
  variant?: "default" | "filter" | "compact";
  iconSize?: "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl";
}

const TechBadge: React.FC<TechBadgeProps> = ({
  tech,
  onClick,
  selected = false,
  variant = "default",
  iconSize = "text-xl",
}) => {
  const getIcon = iconMap[tech];

  const baseStyles =
    "flex items-center gap-2 font-medium transition-all transform";
  const variants = {
    default:
      "px-3 py-1.5 bg-blue-900 text-blue-100 rounded-full text-sm hover:scale-105",
    filter: `px-4 py-1.5 rounded-full text-sm ${
      selected
        ? "bg-blue-600 text-white shadow-md"
        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
    }`,
    compact:
      "flex flex-col items-center p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors group",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {getIcon && (
        <span
          className={`flex items-center justify-center ${
            variant === "compact" ? "mb-2" : ""
          }`}
        >
          {getIcon(variant === "filter" && selected, iconSize)}
        </span>
      )}
      <span className={variant === "compact" ? "text-sm text-gray-300" : ""}>
        {tech}
      </span>
    </button>
  );
};

export default TechBadge;

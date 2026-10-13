import Link from "next/link";
import Image from "next/image";

interface ProjectCardOptions {
  name: string;
  logo: string;
  description: string;
  stars: number;
  url: string;
  featured?: boolean;
  subItems?: { name: string; description: string }[];
}

export default function ProjectCard(
  { name, logo, description, stars, url, featured, subItems }: ProjectCardOptions,
) {
  return (
    <article className={`project-card${featured ? " project-featured" : ""}`}>
      <Image className="project-logo" src={logo} alt="" width={32} height={32} />
      <div className="project-details">
        <div className="project-title">
          <h3><Link href={url} target="_blank" rel="noopener noreferrer">{name}</Link></h3>
          {stars > 0 && <span className="project-stars" aria-label={`${stars.toLocaleString("en-US")} GitHub stars`}>⭐ {stars.toLocaleString("en-US")}</span>}
        </div>
        <p>{description}</p>
        {subItems && (
          <ul className="project-modules" aria-label="Freya libraries">
            {subItems.map((subItem) => (
              <li key={subItem.name}>
                <span className="module-name">{subItem.name}</span>
                <span>{subItem.description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

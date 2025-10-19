import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const aboutText = `I bring stories to life through dynamic edits and bold, minimal design. From punchy reels that hook in seconds to brand visuals that stick, I blend narrative flow with clean aesthetics. Let's build work that moves people—fast, clear, and memorable.`;

const skills = [
  "Reels that drive engagement and watch-through",
  "Logo systems with clear brand recall",
  "Event creatives with strong visual hierarchy",
  "Fast turnarounds without compromising quality",
];

const tools = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Photoshop",
  "Illustrator",
  "Figma",
];

export const AboutSection = () => {
  return (
    <section className="w-full bg-transparent py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-2">
            Hello, I'm
          </h2>
          <h3 className="text-6xl font-extrabold text-primary mb-4">
            Naveen Nunna
          </h3>
          <p className="text-xl text-muted-foreground">
            Video Editor & Graphic Designer
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-3xl font-bold text-foreground mb-6">About Me</h4>
          <TextGenerateEffect words={aboutText} className="text-lg" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-2xl font-bold text-foreground mb-6">
              What I Deliver
            </h4>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">▪</span>
                  <span className="text-muted-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-foreground mb-6">
              Tools & Software
            </h4>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-primary/20 rounded-lg text-foreground hover:border-primary transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-primary/20 rounded-lg">
            <h5 className="text-xl font-bold text-primary mb-3">Event Films</h5>
            <p className="text-muted-foreground">
              Cinematic coverage for corporate & tech events.
            </p>
          </div>
          <div className="p-6 border border-primary/20 rounded-lg">
            <h5 className="text-xl font-bold text-primary mb-3">Reels</h5>
            <p className="text-muted-foreground">
              Fast, impactful edits tailored for social.
            </p>
          </div>
          <div className="p-6 border border-primary/20 rounded-lg">
            <h5 className="text-xl font-bold text-primary mb-3">Design</h5>
            <p className="text-muted-foreground">
              Logos, posters & event creatives with clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

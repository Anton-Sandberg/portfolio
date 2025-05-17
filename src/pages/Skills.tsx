import Highlight from "@/components/common/Highlight";
import { SKILLS } from "@/constants/skills";

const Skills = () => (
  <section className="p-6 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {SKILLS.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.title}
            className="rounded-2xl bg-neutral-900 p-4 flex flex-col h-full"
          >
            <div className="flex justify-between mb-4">
              <Highlight>
                <h3 className="text-xl font-extrabold">{skill.title}</h3>
              </Highlight>
              <div className="size-12">
                <Icon />
              </div>
            </div>
            <p className="text-lg">{skill.description}</p>
            <p className="mt-auto text-sm italic pt-6">Lärde mig via: {skill.source}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Skills;

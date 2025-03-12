export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      title: 'UI Frameworks',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Material UI', level: 80 },
        { name: 'Styled Components', level: 85 },
        { name: 'Framer Motion', level: 75 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Webpack', level: 75 },
        { name: 'Jest', level: 70 },
        { name: 'Figma', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-4xl font-bold">SKILLS</h2>
          <div className="w-16 h-1 bg-[#ff6b45] ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#ff6b45] h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

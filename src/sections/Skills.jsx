import ScrollReveal from '../components/ScrollReveal';
import skillsData from '../db/db';
function Skills() {
  return (
    <div>
       <section id="skills" className="min-h-screen bg-base-100 py-16">
      <ScrollReveal>
        <div className="container mx-auto p-8">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillsData.map((section, idx) => (
              <div
                key={idx}
                className="p-6 shadow-lg bg-base-200 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <i className={`${section.icon} text-4xl mr-3`}></i>
                  {section.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {section.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge badge-outline transition-all duration-300 hover:bg-primary hover:text-white cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
    </div>
  )
}

export default Skills
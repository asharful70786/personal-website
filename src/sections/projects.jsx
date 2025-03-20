import React from 'react'

function projectSection() {
  return (
    <div>
       {/* Title and Description */}
       <div className="text-center mt-8">
              <h1 className="text-4xl font-bold text-primary">Welcome to My Portfolio</h1>
              <p className="text-lg mt-4">Showcasing my skills and projects.</p>
            </div>
      <div className="mt-12">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Project 1 */}
                <div className="bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform duration-300 text-center">
                  <h3 className="text-xl font-bold mb-2">Twitter Clone</h3>
                  <p className="text-sm text-gray-600 mb-4">A Twitter-like app built with Node.js & React (Tailwind CSS).</p>
                  <a href="#" className="text-primary font-bold hover:underline">View Project</a>
                </div>

                {/* Project 2 */}
                <div className="bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform duration-300 text-center">
                  <h3 className="text-xl font-bold mb-2">File Management System</h3>
                  <p className="text-sm text-gray-600 mb-4">HTTP server handling file uploads, downloads, & renaming.</p>
                  <a href="#" className="text-primary font-bold hover:underline">View Project</a>
                </div>

                {/* Project 3 */}
                <div className="bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform duration-300 text-center">
                  <h3 className="text-xl font-bold mb-2">Hospital Website</h3>
                  <p className="text-sm text-gray-600 mb-4">A professional hospital website showcasing services.</p>
                  <a href="#" className="text-primary font-bold hover:underline">View Project</a>
                </div>
              </div>
            </div>
    </div>
  )
}

export default projectSection
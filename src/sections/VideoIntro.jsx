import ScrollReveal from '../components/ScrollReveal';
import React from 'react';

function VideoIntro() {
  return (
    <div className="space-y-8 mt-14">
      <section id="home" className="min-h-screen flex items-center justify-center bg-base relative overflow-hidden">
        <ScrollReveal>
          <div className="relative w-full max-w-4xl p-4 shadow-smooth rounded-3xl">

            {/* Welcome Heading */}
            <h1 className="text-4xl font-bold text-primary text-center mb-8">Welcome to My Portfolio</h1>

            {/* Video Container */}
            <div className="flex justify-center mb-12">
              <div className="w-[300px] h-[550px] overflow-hidden rounded-lg shadow-smooth">
                <video 
                  src="/myvideo.mp4.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
             
            </div>

            {/* Projects Section */}
            <div>
  <h1 className="text-3xl font-bold text-primary mb-6 text-center">PROJECTS</h1>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Project 2 */}
        <div className="bg-white shadow-smooth rounded-2xl p-6 hover:scale-105 hover:shadow-glow transition-transform duration-300 text-center">
      <div className="h-40 w-full overflow-hidden rounded-lg mb-4">
        <img 
          src="https://tse3.mm.bing.net/th?id=OIP.n5rnk_DgP0cLOFFfGnYLiwHaE8&pid=Api&P=0&h=180"
          alt="File Management System project preview"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Storage Solution</h3>
      <p className="text-sm text-gray-600 mb-4">Transform your laptop into a powerful server accessible from anywhere with secure CRUD operations over IPv6. Real-time data management, seamless file sharing, and remote accessibility, giving you complete control over your data from any location. </p>
      <a 
        href="https://github.com/asharful70786/GlobalStore_Ip6" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-primary font-bold hover:underline"
      >
        View Project
      </a>
    </div>

    {/* Project 1 */}
    <div className="bg-white shadow-smooth rounded-2xl p-6 hover:scale-105 hover:shadow-glow transition-transform duration-300 text-center">
      <div className="h-40 w-full overflow-hidden rounded-lg mb-4">
        <img 
          src="https://tse2.mm.bing.net/th?id=OIP.2sCQHLnz7YjsueYw8eZkVAHaHa&pid=Api&P=0&h=180"
          alt="Twitter Clone project preview"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Twitter Clone</h3>
      <p className="text-sm text-gray-600 mb-4">Empowering users with the freedom to post anything they like, without centralized control. Prioritizing a user-friendly interface, this platform ensures privacy, transparency, and ownership of content, giving you complete control over your posts</p>
      <a href="#" className="text-primary font-bold hover:underline">View Project</a>
    </div>



    {/* Project 3 */}
    <div className="bg-white shadow-smooth rounded-2xl p-6 hover:scale-105 hover:shadow-glow transition-transform duration-300 text-center">
      <div className="h-40 w-full overflow-hidden rounded-lg mb-4">
        <img 
          src="/CodeSensei.png"
          alt="CodeSensei project preview"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">CodeSensei [On the Way]</h3>
      <p className="text-sm text-gray-600 mb-4">Your personal companion for writing better, more efficient code. Get real-time suggestions, optimize performance, and receive insightful feedback on how to improve your code quality and efficiency</p>
      <a href="#" className="text-primary font-bold hover:underline">View Project</a>
    </div>
  </div>
</div>



          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

export default VideoIntro;

const Projects = () => {
    return (
      <section id="projects" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p className="text-gray-600 mt-4">A brief description of the project goes here.</p>
            <div className="mt-4 flex justify-between">
              <a href="#" className="text-blue-600 hover:underline">View Demo</a>
              <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  
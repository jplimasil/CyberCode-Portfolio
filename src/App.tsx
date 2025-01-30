import React, { useState, useEffect } from 'react';
import { Code2, Terminal, Cpu, Mail, Github, ExternalLink, Monitor, Database, Cloud, Server, Home, User, Briefcase } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-cyber-black min-h-screen text-white">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-cyber-cyan font-bold text-xl">CyberCode</div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', icon: <Home className="w-4 h-4" />, id: 'home' },
                { name: 'Skills', icon: <Terminal className="w-4 h-4" />, id: 'skills' },
                { name: 'About Me', icon: <User className="w-4 h-4" />, id: 'about' },
                { name: 'Projects', icon: <Briefcase className="w-4 h-4" />, id: 'projects' },
                { name: 'Contact', icon: <Mail className="w-4 h-4" />, id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyber-cyan transition-colors relative group"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-cyan transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            {/* Mobile Menu Button - You can expand this for mobile navigation */}
            <button className="md:hidden text-cyber-cyan">
              <Terminal className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/50 to-cyber-black/90"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 neon-text">João Pedro</h1>
          <p className="text-xl text-cyber-cyan typewriter mb-8">Desenvolvedor C# | Criador de Soluções em .NET</p>
          <button className="px-8 py-3 rounded-lg gradient-border group transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-cyber-cyan">
              <Code2 className="w-5 h-5" />
              Explorar Projetos
            </span>
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-cyber-blue/20">
        <h2 className="text-4xl font-bold text-center mb-12 neon-text">Projetos</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="cyber-card rounded-xl p-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-cyber-cyan">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-cyber-purple/20 text-cyber-cyan">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-1 text-cyber-cyan hover:text-cyber-purple transition-colors">
                  <Github className="w-4 h-4" />
                  Código
                </a>
                <a href={project.demo} className="flex items-center gap-1 text-cyber-cyan hover:text-cyber-purple transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Sobre Mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="cyber-card p-8 rounded-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Monitor className="w-8 h-8 text-cyber-cyan" />
                  <div>
                    <h3 className="text-xl font-bold text-cyber-cyan">Desenvolvimento Full Stack</h3>
                    <p className="text-gray-400">Especializado em C# e ecossistema .NET</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Database className="w-8 h-8 text-cyber-cyan" />
                  <div>
                    <h3 className="text-xl font-bold text-cyber-cyan">Arquitetura de Software</h3>
                    <p className="text-gray-400">Design de sistemas escaláveis e seguros</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Cloud className="w-8 h-8 text-cyber-cyan" />
                  <div>
                    <h3 className="text-xl font-bold text-cyber-cyan">Cloud Computing</h3>
                    <p className="text-gray-400">Experiência com Azure e AWS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Server className="w-8 h-8 text-cyber-cyan" />
                  <div>
                    <h3 className="text-xl font-bold text-cyber-cyan">DevOps</h3>
                    <p className="text-gray-400">CI/CD e automação de processos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="cyber-card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyber-cyan mb-4">Trajetória</h3>
                <p className="text-gray-400 leading-relaxed">
                Apaixonado por tecnologia e desenvolvimento de software, venho
                aprimorando minhas habilidades para criar soluções eficientes e seguras.
                Minha jornada inclui desafios em diferentes projetos, sempre buscando inovação
                e crescimento contínuo. Estou em constante aprendizado para oferecer
                o melhor em performance e qualidade.
                </p>
              </div>
              <div className="cyber-card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyber-cyan mb-4">Missão</h3>
                <p className="text-gray-400 leading-relaxed">
                  Meu objetivo é desenvolver software que não apenas resolva problemas, 
                  mas também inspire outros desenvolvedores. Acredito no poder da 
                  tecnologia para transformar ideias em realidade e estou sempre 
                  em busca de novos desafios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden bg-cyber-blue/20">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-cyber-gradient rounded-full opacity-20"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-cyber-cyan mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-cyber-blue/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Contato</h2>
          <form className="space-y-6">
            <div className="cyber-card p-6 rounded-xl">
              <input
                type="text"
                placeholder="Nome"
                className="w-full bg-transparent border-b-2 border-cyber-cyan/30 focus:border-cyber-cyan py-2 outline-none transition-colors"
              />
            </div>
            <div className="cyber-card p-6 rounded-xl">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-cyber-cyan/30 focus:border-cyber-cyan py-2 outline-none transition-colors"
              />
            </div>
            <div className="cyber-card p-6 rounded-xl">
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full bg-transparent border-b-2 border-cyber-cyan/30 focus:border-cyber-cyan py-2 outline-none transition-colors"
              ></textarea>
            </div>
            <button className="w-full px-8 py-3 rounded-lg gradient-border group transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-cyber-cyan">
                <Mail className="w-5 h-5" />
                Enviar Mensagem
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: 'Neon Quest',
    description: 'Um jogo cyberpunk desenvolvido em Unity com C#, apresentando gráficos neon e mecânicas inovadoras.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    tags: ['Unity', 'C#', 'Game Dev'],
    github: '#',
    demo: '#'
  },
  {
    title: 'SecureCloud API',
    description: 'API de segurança em nuvem com autenticação avançada e proteção contra ataques.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tags: ['.NET', 'Azure', 'Security'],
    github: '#',
    demo: '#'
  },
  {
    title: 'TaskMaster',
    description: 'Aplicativo desktop WPF para gerenciamento de tarefas com interface futurista.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['WPF', 'C#', 'MVVM'],
    github: '#',
    demo: '#'
  }
];

const skills = [
  {
    name: 'C#',
    level: 'Avançado',
    icon: <Code2 className="w-12 h-12 text-cyber-cyan" />
  },
  {
    name: '.NET Core',
    level: 'Avançado',
    icon: <Terminal className="w-12 h-12 text-cyber-cyan" />
  },
  {
    name: 'Azure',
    level: 'Intermediário',
    icon: <Cpu className="w-12 h-12 text-cyber-cyan" />
  },
  {
    name: 'DevOps',
    level: 'Intermediário',
    icon: <Terminal className="w-12 h-12 text-cyber-cyan" />
  }
];

export default App;
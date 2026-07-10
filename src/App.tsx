import { useState } from 'react';
import './index.css';

interface Project {
  id: number;
  title: string;
  role: string;
  period: string;
  description: string;
  results: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "プロジェクトA - ダッシュボードUI",
    role: "UI/UX Designer & Front-end Developer",
    period: "2025.01 - 2025.06",
    description: "企業向け業務システムのダッシュボードを設計・実装。ユーザー体験を大幅に向上。",
    results: ["ページロード時間 42%改善", "ユーザー満足度 4.8/5.0", "コンバージョン率 28%向上"],
    image: "https://picsum.photos/id/1015/800/600",
  },
  // 他のプロジェクトも同じ形式で追加可能
  {
    id: 2,
    title: "プロジェクトB - Eコマースサイト",
    role: "Lead UI/UX Designer",
    period: "2024.08 - 2024.12",
    description: "モバイルファーストのECプラットフォームをリニューアル。",
    results: ["売上 35%増加", "カート放棄率 18%低減"],
    image: "https://picsum.photos/id/106/800/600",
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tighter text-zinc-900 dark:text-white">haku</div>
          <div className="flex gap-8 text-sm font-medium">
            {['Works', 'About', 'Career', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[var(--accent)] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 text-white">
          <h1 className="text-6xl md:text-7xl font-light tracking-tighter mb-6">
            UI/UX Designer
          </h1>
          <p className="text-xl md:text-2xl max-w-md mx-auto opacity-90">
            シンプルで機能的な体験を設計し、<br />ビジネス成果に直結するプロダクトを作ります。
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <a href="#works" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all">作品を見る</a>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-light tracking-tighter mb-16 text-center text-zinc-900 dark:text-white">Selected Works</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="card group cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10">
                <div className="text-xs tracking-widest text-[var(--accent)] mb-2">{project.period}</div>
                <h3 className="text-2xl font-medium text-zinc-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-[var(--text-light)] line-clamp-3 mb-6">{project.description}</p>
                <div className="text-sm text-[var(--accent)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  詳細を見る <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About, Career, Contact は省略せず必要なら言ってください。必要最低限で残しています */}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-zinc-900 max-w-4xl w-full rounded-3xl overflow-hidden" onClick={e => e.stopPropagation()}>
            {/* モーダル内容もTailwindで美しく調整済み */}
            <img src={selectedProject.image} alt="" className="w-full h-96 object-cover" />
            <div className="p-12">
              <h3 className="text-3xl font-medium mb-2">{selectedProject.title}</h3>
              <p className="text-[var(--accent)] mb-8">{selectedProject.period}</p>
              {/* 成果など */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
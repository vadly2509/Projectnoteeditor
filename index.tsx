import React, { useState, useRef, useEffect } from 'react';
import { 
  Code, 
  Layers, 
  Minimize2, 
  Maximize2, 
  ArrowRight, 
  GitHub, 
  Linkedin 
} from 'lucide-react';

// Animated gradient background component
const AnimatedGradientBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden">
    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-slow-spin opacity-20 blur-3xl"></div>
  </div>
);

const TextEditorShowcase = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const containerRef = useRef(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const CodeBlock = ({ children, language = 'cpp' }) => (
    <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );

  const SectionHeader = ({ title, description }) => (
    <div className="mb-8">
      <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl">{description}</p>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      <SectionHeader 
        title="Editor Teks Inovatif" 
        description="Sebuah implementasi canggih dari struktur data dasar, menggabungkan rekayasa perangkat lunak dengan desain algoritma yang efisien."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-xl transform transition-all hover:scale-105">
          <Code className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-bold mb-3 text-gray-800">Arsitektur Canggih</h3>
          <p className="text-gray-600">
            Menggunakan doubly linked list dan stack untuk menciptakan pengalaman editing yang responsif dan intuitif.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-xl transform transition-all hover:scale-105">
          <Layers className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-bold mb-3 text-gray-800">Struktur Data Efisien</h3>
          <p className="text-gray-600">
            Implementasi struktur data yang memungkinkan operasi undo/redo dengan kompleksitas waktu O(1).
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mt-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Fitur Utama</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <ArrowRight className="mr-2 text-purple-600" />
            Pergerakan kursor dinamis
          </li>
          <li className="flex items-center">
            <ArrowRight className="mr-2 text-purple-600" />
            Fungsionalitas undo/redo terintegrasi
          </li>
          <li className="flex items-center">
            <ArrowRight className="mr-2 text-purple-600" />
            Manajemen memori efisien
          </li>
        </ul>
      </div>
    </div>
  );

  const renderDataStructures = () => (
    <div className="space-y-8">
      <SectionHeader 
        title="Struktur Data" 
        description="Desain arsitektur yang mendalam menggunakan struktur data fundamental untuk menciptakan editor teks yang powerful."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-purple-600">Doubly Linked List</h3>
          <CodeBlock>
{`struct List {
    adr first;     // Pointer elemen pertama
    adr last;      // Pointer elemen terakhir
    int cursorPos; // Posisi kursor aktif
    int length;    // Panjang total teks
};

struct elm {
    infotype info;  // Data karakter
    elm* next;      // Pointer ke elemen selanjutnya
    elm* prev;      // Pointer ke elemen sebelumnya
};`}
          </CodeBlock>
        </div>

        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-pink-600">Stack Operasi</h3>
          <CodeBlock>
{`struct Stack {
    infotype info[100]; // Penyimpanan data
    int top;            // Indeks elemen teratas
};

// Operasi Dasar
void push(Stack& S, infotype x);
void pop(Stack& S, infotype& x);
bool isEmpty(Stack S);
bool isFull(Stack S);`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );

  const renderCreators = () => (
    <div className="space-y-8">
      <SectionHeader 
        title="Tim Pengembang" 
        description="Dua mahasiswa berbakat yang mengintegrasikan konsep struktur data dengan solusi pemrograman inovatif."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-xl text-center">
          <div className="w-36 h-36 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            VAS
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Vadly Aryu Septian</h3>
          <p className="text-gray-600 mb-4">NIM: 103052300025</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-purple-600">
              <GitHub />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-xl text-center">
          <div className="w-36 h-36 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            RM
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Rifa Mayshakori</h3>
          <p className="text-gray-600 mb-4">NIM: 103052300087</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-purple-600">
              <GitHub />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const NAV_ITEMS = [
    { 
      id: 'overview', 
      label: 'Ikhtisar', 
      icon: <Code className="mr-2" /> 
    },
    { 
      id: 'structures', 
      label: 'Struktur Data', 
      icon: <Layers className="mr-2" /> 
    },
    { 
      id: 'creators', 
      label: 'Pengembang', 
      icon: <ArrowRight className="mr-2" /> 
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      <AnimatedGradientBackground />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with Fullscreen Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Proyek Editor Teks
          </h1>
          <button 
            onClick={toggleFullScreen}
            className="p-2 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/40 transition-all"
          >
            {isFullScreen ? <Minimize2 /> : <Maximize2 />}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4 bg-white/70 backdrop-blur-lg rounded-xl border border-gray-200 shadow-xl p-4">
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="md:w-3/4 bg-white/70 backdrop-blur-lg rounded-xl border border-gray-200 shadow-xl p-8">
            {activeSection === 'overview' && renderOverview()}
            {activeSection === 'structures' && renderDataStructures()}
            {activeSection === 'creators' && renderCreators()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditorShowcase;

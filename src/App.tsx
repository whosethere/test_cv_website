import React from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillBadge } from './components/SkillBadge';

function App() {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'Git', 'REST API', 'SQL'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Section title="O mnie" icon={BookOpen}>
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg">
              Jestem doświadczonym programistą z 8-letnim stażem w tworzeniu aplikacji webowych.
              Specjalizuję się w technologiach JavaScript/TypeScript, React i Node.js.
              Pasjonuję się tworzeniem wydajnych i skalowalnych rozwiązań, które rozwiązują rzeczywiste problemy biznesowe.
            </p>
          </div>
        </Section>

        <Section title="Doświadczenie zawodowe" icon={Briefcase}>
          <div className="space-y-6">
            <ExperienceCard
              title="Senior Frontend Developer"
              company="Firma XYZ Sp. z o.o."
              period="2020 - obecnie"
              responsibilities={[
                'Prowadzenie zespołu 5 programistów',
                'Implementacja nowej architektury aplikacji w React i TypeScript',
                'Optymalizacja wydajności aplikacji'
              ]}
            />
            <ExperienceCard
              title="Frontend Developer"
              company="Firma ABC S.A."
              period="2018 - 2020"
              responsibilities={[
                'Rozwój aplikacji w React.js',
                'Integracja z REST API',
                'Code review i mentoring juniorów'
              ]}
            />
          </div>
        </Section>

        <Section title="Wykształcenie" icon={GraduationCap}>
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-bold text-xl text-gray-800">Informatyka</h3>
                <p className="text-blue-600 font-medium">Politechnika Warszawska</p>
              </div>
              <p className="text-sm text-gray-500 mt-1 md:mt-0">2014 - 2018</p>
            </div>
            <p className="mt-4 text-gray-600">Tytuł: Magister Inżynier</p>
          </div>
        </Section>

        <Section title="Umiejętności" icon={BookOpen} className="mb-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </Section>
      </main>

      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          © {new Date().getFullYear()} Jan Kowalski. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}

export default App;
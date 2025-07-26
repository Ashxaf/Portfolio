import {  BookOpen, Brain, Clock, Handshake, Lightbulb, Mic, Rocket, ShieldCheck } from 'lucide-react';
 import { MotionHighlight } from '@/components/animate-ui/effects/motion-highlight.tsx';
 
const CARDS = [
  {
  value: '1',
  icon: Handshake,
  title: 'Collaboration',
  description: 'Works well in teams, shares ideas openly, and values constructive team feedback.',
},
{
  value: '2',
  icon: Brain,
  title: 'Problem Solving',
  description: 'Analyzes issues logically, thinks critically, and finds clear, effective solutions.',
},
{
  value: '3',
  icon: Mic,
  title: 'Communication',
  description: 'Explains technical concepts clearly in both written and verbal communication formats.',
},
{
  value: '4',
  icon: Clock,
  title: 'Time Management',
  description: 'Manages tasks and deadlines efficiently, prioritizing focus for better productivity.',
},
{
  value: '5',
  icon: Rocket,
  title: 'Adaptability',
  description: 'Quick to learn and adjust to new technologies, tools, or changing project scopes.',
},
{
  value: '6',
  icon: Lightbulb,
  title: 'Creativity',
  description: 'Brings unique ideas to design, UI/UX, and development to enhance user experience.',
},
{
  value: '7',
  icon: ShieldCheck,
  title: 'Accountability',
  description: 'Takes ownership of tasks, meets expectations, and ensures consistent quality output.',
},
{
  value: '8',
  icon: BookOpen,
  title: 'Curiosity',
  description: 'Loves learning, stays updated with trends, and always explores new tech and methods.',
}

];
 
export const MotionHighlightCardsHoverDemo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <MotionHighlight hover className="rounded-xl">
        {CARDS.map((card) => (
          <div key={card.value} data-value={card.value}>
            <div className="p-4 h-48 flex flex-col justify-evenly border rounded-xl">
              <div className="flex items-center justify-around size-10 rounded-lg bg-blue-500/10 mb-2">
                <card.icon className="size-5 text-[#0077b6]" />
              </div>
              <p className="text-base text-[#fdfcdc] font-medium mb-1">{card.title}</p>
              <p className="text-md text-gray-400">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </MotionHighlight>
    </div>
  );
};
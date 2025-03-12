import DemoModal from '@/components/DemoModal';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  notionLink?: string;
}

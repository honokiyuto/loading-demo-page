export type ContentItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
};

export const DEFAULT_INTERVAL_TIME_MS = 3000;

export const setIntervalToLocalStorage = (interval: number) => {
  localStorage.setItem('interval', interval.toString());
};

export const getIntervalFromLocalStorage = () => {
  const interval = localStorage.getItem('interval');
  if (!interval) {
    return DEFAULT_INTERVAL_TIME_MS;
  }
  const intInterval = parseInt(interval);
  if (!intInterval) {
    return DEFAULT_INTERVAL_TIME_MS;
  }
  return intInterval;
};

export const getContentItems = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, getIntervalFromLocalStorage())
  );
  return contentItems;
};

export const contentItems: ContentItem[] = [
  {
    id: 1,
    title: 'Building Modern Web Applications with React',
    description:
      "Learn how to leverage React 18's latest features to create high-performance web applications with improved user experience.",
    category: 'Technology',
    date: '2024-01-15',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    id: 2,
    title: 'Design System Architecture and Implementation',
    description:
      'A comprehensive guide to building and maintaining scalable design systems for consistent UI across your product ecosystem.',
    category: 'Design',
    date: '2024-01-12',
    tags: ['UI', 'UX', 'Design System'],
  },
  {
    id: 3,
    title: 'Writing Safer Code with TypeScript',
    description:
      'Discover advanced TypeScript patterns and techniques to write more robust, type-safe code that reduces bugs in production.',
    category: 'Technology',
    date: '2024-01-10',
    tags: ['TypeScript', 'Type Safety', 'Development'],
  },
  {
    id: 4,
    title: 'Effective User Interface Design Principles',
    description:
      'Master the fundamentals of user-centered interface design with practical approaches to improve usability and accessibility.',
    category: 'Design',
    date: '2024-01-08',
    tags: ['UI', 'Usability', 'Accessibility'],
  },
  {
    id: 5,
    title: 'Mobile-First Responsive Design Strategies',
    description:
      'Learn how to create responsive designs that deliver optimal experiences across all devices with modern CSS techniques.',
    category: 'Technology',
    date: '2024-01-05',
    tags: ['CSS', 'Responsive', 'Mobile'],
  },
  {
    id: 6,
    title: 'Web Performance Optimization Best Practices',
    description:
      "Improve your website's loading speed and user experience with proven optimization techniques and performance monitoring tools.",
    category: 'Technology',
    date: '2024-01-03',
    tags: ['Performance', 'Optimization', 'Core Web Vitals'],
  },
];

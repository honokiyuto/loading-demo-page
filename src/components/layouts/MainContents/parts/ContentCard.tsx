import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ContentItem } from '@/lib/mock-data';

type ContentCardProps = {
  item: ContentItem;
};

export const ContentCard = ({ item }: ContentCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge
            variant="default"
            className="text-blue-500 bg-blue-100 dark:text-blue-300 dark:bg-blue-900"
          >
            {item.category}
          </Badge>
          <span className="text-xs text-gray-500">{item.date}</span>
        </div>
        <CardTitle className="text-lg mb-2 text-gray-900 dark:text-gray-100">
          {item.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-gray-500 dark:text-gray-400"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

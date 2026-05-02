import { Link } from 'react-router-dom';

import { Button, Card, CardContent, CardHeader, CardTitle } from '@/shared/components';

interface TopContentProps {
  readonly viewAllHref: string;
}

export const TopContent = ({ viewAllHref }: TopContentProps) => {
  return (
    <Card className="bg-card/50 h-full border-white/10 backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle id="top-content-title" className="text-xl font-bold">
          Top Performing Content
        </CardTitle>
        <Button asChild variant="ghost" size="sm" className="font-bold">
          <Link to={viewAllHref}>View All</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          { title: 'The Future of Content Management', views: '12.4k', growth: '+24%' },
          { title: 'Designing for the Digital Pulse', views: '8.2k', growth: '+12%' },
          { title: 'Why Performance is the New UI', views: '5.1k', growth: '+8%' },
          { title: 'The Rise of Agentic Coding', views: '4.8k', growth: '+15%' },
        ].map((post, i) => (
          <article
            key={i}
            className="group flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="flex items-center gap-4">
              <div className="bg-muted flex size-10 items-center justify-center rounded-lg text-xs font-bold">
                0{i + 1}
              </div>
              <div>
                <h4 className="group-hover:text-primary text-sm font-semibold transition-colors">
                  {post.title}
                </h4>
                <p className="text-muted-foreground text-xs tracking-tighter uppercase">
                  Last edited 2 days ago
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">{post.views}</p>
              <p className="text-primary text-[10px] font-black">{post.growth}</p>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
};

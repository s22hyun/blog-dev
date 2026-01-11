import type { Post } from '@/types/blog';
import { formatDate } from '@/lib/date';
import Link from 'next/link';

interface TilItemProps {
  post: Post;
  isLast?: boolean;
}

export function TilItem({ post, isLast = false }: TilItemProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="relative flex gap-4 pb-6">
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute left-[19px] top-8 h-full w-px bg-border" />
        )}

        {/* Date circle */}
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-primary transition-transform group-hover:scale-125" />
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <time className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
          {post.title && (
            <h3 className="mt-1 font-medium text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>
          )}
          {post.description && (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

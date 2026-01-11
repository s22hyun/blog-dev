import { getTilPosts } from '@/lib/notion';
import { TilItem } from './TilItem';

export async function TilSection() {
  const tilPosts = await getTilPosts();

  if (tilPosts.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">최근 TIL</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Today I Learned - 매일 배운 것들을 기록합니다
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        {tilPosts.map((post, index) => (
          <TilItem
            key={post.id}
            post={post}
            isLast={index === tilPosts.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

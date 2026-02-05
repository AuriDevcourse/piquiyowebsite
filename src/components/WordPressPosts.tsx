import React, { useState, useEffect } from 'react';

export const WordPressPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using WordPress REST API instead of GraphQL
        const response = await fetch('http://piquiyo.local/wp-json/wp/v2/posts?per_page=6&_embed', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-8 text-red-500">
      Error loading posts: {error}
    </div>
  );

  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No posts found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest from WordPress</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 
                className="text-xl font-semibold mb-2 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div 
                className="text-gray-600 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post._embedded?.author?.[0]?.name}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';

export const WordPressPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with your WordPress GraphQL endpoint
        const response = await fetch('https://2c8a-197-211-51-31.ngrok-free.app/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query GetPosts {
                posts(first: 6) {
                  nodes {
                    title
                    excerpt
                    date
                    slug
                    author {
                      node {
                        name
                      }
                    }
                    featuredImage {
                      node {
                        sourceUrl
                        altText
                      }
                    }
                  }
                }
              }
            `
          })
        });

        const data = await response.json();
        
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        setPosts(data.data.posts.nodes);
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
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {post.featuredImage?.node?.sourceUrl && (
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                {post.title}
              </h3>
              <div 
                className="text-gray-600 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.author?.node?.name}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

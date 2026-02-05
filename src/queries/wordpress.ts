import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
  query GetServices {
    services(first: 100) {
      nodes {
        title
        content
        excerpt
        date
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts(first: 10) {
      nodes {
        title
        content
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
`;

export const GET_PAGES = gql`
  query GetPages {
    pages(first: 100) {
      nodes {
        title
        content
        slug
        date
      }
    }
  }
`;

export const GET_HERO_CONTENT = gql`
  query GetHeroContent {
    pages(where: {name: "home"}) {
      nodes {
        title
        content
        excerpt
      }
    }
  }
`;

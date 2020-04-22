import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import PostPreviewList from '../components/post/post-preview-list'
import GraphQLErrorList from '../components/graphql-error-list'
import Subscribe from '../components/subscribe'
import Hero from '../components/hero'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
          }
          title
          _rawLead
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout template='blog'>
      <SEO title='Blog' />

      <Hero 
        title='Blog'
        headingLevel='h1'
      />

      <Container>
        {postNodes && postNodes.length > 0 && (
          <PostPreviewList nodes={postNodes} />
        )}
      </Container>

      <Subscribe isFeed='true' />
    </Layout>
  )
}

export default BlogPage

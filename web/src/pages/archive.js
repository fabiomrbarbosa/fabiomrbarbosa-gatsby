import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import PostPreviewList from '../components/post/post-preview-list'
import GraphQLErrorList from '../components/graphql-error-list'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ArchivePageQuery {
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
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ArchivePage = props => {
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
    <Layout>
      <SEO title='Archive' />

      <Container containerClass={'hero--module'}>
        <h1 className='heroTitle'>Archive</h1>
      </Container>

      <Container>
        {postNodes && postNodes.length > 0 && (
          <PostPreviewList nodes={postNodes} />
        )}
      </Container>
    </Layout>
  )
}

export default ArchivePage

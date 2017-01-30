import gql from 'graphql-tag'

export const projectsQuery = gql`
  query Projects {
    projects {
      id
      title
    }
  }
`

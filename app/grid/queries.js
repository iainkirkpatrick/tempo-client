import gql from 'graphql-tag'

export const developersQuery = gql`
  query Developrs {
    developers {
      id
      firstName
    }
  }
`

export const projectsQuery = gql`
  query Projects {
    projects {
      id
      title
      developers {
        id
        firstName
      }
    }
  }
`

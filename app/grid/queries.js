import gql from 'graphql-tag'

export const projectsDevelopersQuery = gql`
  query ProjectsDeveloprs {
    projects {
      id
      title
    }
    developers {
      id
      firstName
    }
  }
`

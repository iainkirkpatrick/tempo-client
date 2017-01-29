import { createStructuredSelector } from 'reselect'

import { getProjects } from '../projects/getters'

export const getGridProps = createStructuredSelector({
  projects: getProjects
})

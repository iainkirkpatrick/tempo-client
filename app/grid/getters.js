import { createStructuredSelector } from 'reselect'

import { getDataType } from '../main/getters'
import { getProjects } from '../projects/getters'

export const getGridProps = createStructuredSelector({
  dataType: getDataType,
  projects: getProjects
})

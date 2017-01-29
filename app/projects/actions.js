import { createAction } from 'redux-actions'

export const getProjectsStart = createAction('GET_PROJECTS_START')
export const getProjectsSuccess = createAction('GET_PROJECTS_SUCCESS')
export const getProjectsError = createAction('GET_PROJECTS_ERROR')

export function getProjects (data) {
  return (dispatch) => {
    dispatch(getProjectsStart(data))
    return window.fetch(`http://localhost:3000/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ query: 'query { projects { id title } }' })
    })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res)
      } else {
        return Promise.resolve(res.json())
      }
    })
    .then((payload) => {
      dispatch(getProjectsSuccess(payload))
    })
    .catch((err) => {
      dispatch(getProjectsError(err))
    })
  }
}

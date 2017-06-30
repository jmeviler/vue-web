import rest from 'utils/restUtil'

export const fetchAllTodos = async () => {
  const result = await rest.get('metro/detail', { params: { name: '金科路' } })
  return result
}

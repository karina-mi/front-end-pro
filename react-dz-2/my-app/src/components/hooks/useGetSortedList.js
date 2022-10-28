import {useMemo} from 'react'

const useGetSortedList = (showOnlyCompleted, items, userSorId) => {
  return (
    useMemo(() => {
      const sortList = showOnlyCompleted ? items.filter(item => item.completed) : items

      if (userSorId === 'all') {
        return sortList
      }
      return sortList.filter(item => item.userId === +userSorId)
    }, [items, userSorId, showOnlyCompleted])
  )
}

export default useGetSortedList
import {useMemo} from 'react'
import {ITodo} from "../../types";

const useGetSortedList = (
    showOnlyCompleted: boolean,
    items: ITodo[],
    userSorId: string
): ITodo[] => {
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
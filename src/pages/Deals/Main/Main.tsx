import Filters from '../Filters/Filters'
import { useAppSelector, useDispatchApp } from '../../../store/store'
import { changeFillters, changeVisibleOptionalFilters,  clearFilters,  VisibleOptionalFilters, type DealFilters } from '../../../store/dealsSlice/dealSlice'
import { DealsPage } from '../../../style'

const Main = () => {
  const { filters,visibleOptionalFilters} = useAppSelector((state) => state.deals)
  const dispatch = useDispatchApp()

  const handleChangeFillters = <T extends keyof DealFilters>(
    name: T,
    value: DealFilters[T],
  ) => {
    dispatch(
      changeFillters({  
        ...filters,
        [name]: value,
      }),
    )
  }


  const handleChangeVisibleOptionalFilters = <T extends keyof VisibleOptionalFilters>(
    name: T,
    value: VisibleOptionalFilters[T],
  ) => {
    dispatch(changeVisibleOptionalFilters({ [name]: value }))
  }

  return (
    <DealsPage>
      <Filters
       clearAllFilters={()=>dispatch(clearFilters())}
        visibleOptionalFilters={visibleOptionalFilters}
        filters={filters}
        changeFilters={handleChangeFillters}
        changeVisibleOptionalFilters={handleChangeVisibleOptionalFilters}
      />
    </DealsPage>
  )
}

export default Main

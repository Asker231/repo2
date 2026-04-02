import TextFieldWrapper from '../../../shared/ui/TextFieldWrapper'
import { Button, Checkbox, Input, Modal } from 'antd'
import type { DealFilters,  VisibleOptionalFilters } from '../../../store/dealsSlice/dealSlice'
import {
  FiltersFieldsGrid,
  FiltersFullRow,
  FiltersPanel,
  FiltersSectionTitle,
  FiltersSelectFullWidth,
  FiltersStack,
} from '../../../style'
import Icon, { DeleteOutlined, FilterOutlined } from '@ant-design/icons'
import { useState } from 'react'

type FilterProp = {
  filters: DealFilters
  changeFilters?: (name: keyof DealFilters, value: DealFilters[keyof DealFilters]) => void
  visibleOptionalFilters: VisibleOptionalFilters
  clearAllFilters?:()=>void
  changeVisibleOptionalFilters?: (name: keyof VisibleOptionalFilters, value: VisibleOptionalFilters[keyof VisibleOptionalFilters]) => void
}

const Filters = ({ filters, changeFilters,visibleOptionalFilters,changeVisibleOptionalFilters ,clearAllFilters}: FilterProp) => {
  const[modalOpen,setModalOpen] = useState(false)
  const handleOpenModal = () => {
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const productDictionary = {
    retail: 'Розничный',
    wholesale: 'Оптовый',
    service: 'Сервисный',
    other: 'Другой',
  }
  const productOptions = Object.values(productDictionary).map((el) => ({
    label: el,
    value: el,
  }))

  return (
    <FiltersPanel extra={
      <Button onClick={handleOpenModal}>
        <Icon component={FilterOutlined} />
      </Button>
    } title={<FiltersSectionTitle>Параметры сделки</FiltersSectionTitle>}>
      {
        modalOpen && (
          <Modal open={modalOpen} onCancel={handleCloseModal} title="Параметры сделки" footer={<Button onClick={handleCloseModal}>Готово</Button>}>
             <div>
              <Checkbox checked={visibleOptionalFilters.manager} onChange={(e) => changeVisibleOptionalFilters?.('manager', e.target.checked)}>Менеджер</Checkbox>
              <Checkbox checked={visibleOptionalFilters.product} onChange={(e) => changeVisibleOptionalFilters?.('product', e.target.checked)}>Продукты</Checkbox>
              <Checkbox checked={visibleOptionalFilters.note} onChange={(e) => changeVisibleOptionalFilters?.('note', e.target.checked)}>Комментарий</Checkbox>
             </div>
          </Modal>
        )
      }
      <FiltersStack>
        <FiltersFieldsGrid>
          <TextFieldWrapper label="Код клиента (CNUM)" hint="внутренний идентификатор">
            <Input
              size="large"
              placeholder="Например, C-10294"
              allowClear
              value={filters.cnum}
              onChange={(e) => changeFilters?.('cnum', e.target.value)}
            />
          </TextFieldWrapper>

          <TextFieldWrapper label="Номер сделки" hint="как в учётной системе">
            <Input
              size="large"
              placeholder="SD-0000"
              allowClear
              value={filters.dealNo}
              onChange={(e) => changeFilters?.('dealNo', e.target.value)}
            />
          </TextFieldWrapper>

          {visibleOptionalFilters.manager && (
            <TextFieldWrapper label="Менеджер" hint="ФИО или логин">
            <Input
              size="large"
              placeholder="Иванов И.И."
              allowClear
              value={filters.manager}
              onChange={(e) => changeFilters?.('manager', e.target.value)}
            />
          </TextFieldWrapper>)}

           {visibleOptionalFilters.product && (
            <TextFieldWrapper label="Продукты" hint="несколько значений">
              <FiltersSelectFullWidth
                mode="tags"
                size="large"
                placeholder="Введите и нажмите Enter"
                options={productOptions}
                value={filters.product}
                onChange={(v) => changeFilters?.('product', v)}
                tokenSeparators={[',']}
              />
            </TextFieldWrapper>
          )}
        </FiltersFieldsGrid>

        <FiltersFullRow>
          {visibleOptionalFilters.note && (
            <TextFieldWrapper label="Комментарий" hint="произвольный текст">
            <Input.TextArea
              rows={3}
              showCount
              maxLength={500}
              placeholder="Кратко опишите условия или контекст…"
              value={filters.note}
                onChange={(e) => changeFilters?.('note', e.target.value)}
              />
            </TextFieldWrapper>
          )}
        </FiltersFullRow> 
        <Button type="primary">Создать сделку</Button>
        <Button type="default" onClick={clearAllFilters} icon={<DeleteOutlined />} >Сбросить фильтры</Button>
      </FiltersStack>
    </FiltersPanel>
  )
}

export default Filters

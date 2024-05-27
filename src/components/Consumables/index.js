import { useContext } from 'react'

import ItemList from '../ItemList'
import { CalculatorContext } from '../../contexts/CalculatorContext'

export default function Consumables() {
    const { consumables, selectedConsumables, setSelectedConsumables } = useContext(CalculatorContext)

    return (
        <ItemList
            title="Materiais de Consumo"
            number="04"
            items={consumables}
            selectedItems={selectedConsumables}
            setSelectedItems={setSelectedConsumables}
        />
    )
}

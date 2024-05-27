import { useContext } from 'react'

import ItemList from '../ItemList'
import { CalculatorContext } from '../../contexts/CalculatorContext'

export default function SideDishes() {
    const { sideDishes, selectedSideDishes, setSelectedSideDishes } = useContext(CalculatorContext)

    return (
        <ItemList
            title="Acompanhamentos"
            number="05"
            items={sideDishes}
            selectedItems={selectedSideDishes}
            setSelectedItems={setSelectedSideDishes}
        />
    )
}

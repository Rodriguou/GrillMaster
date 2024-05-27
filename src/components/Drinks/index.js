import { useContext } from 'react'

import ItemList from '../ItemList'
import { CalculatorContext } from '../../contexts/CalculatorContext'

export default function Drinks() {
    const { drinks, selectedDrinks, setSelectedDrinks } = useContext(CalculatorContext)

    const formatLiters = (volume) => {
        if (volume >= 1000) {
            return (volume / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' l'
        } else {
            return volume.toLocaleString('pt-BR') + ' ml'
        }
    }

    return (
        <ItemList
            title="Bebidas"
            number="03"
            items={drinks}
            selectedItems={selectedDrinks}
            setSelectedItems={setSelectedDrinks}
            formatVolume={formatLiters}
        />
    )
}

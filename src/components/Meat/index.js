import { useContext } from 'react'

import ItemList from '../ItemList'
import { CalculatorContext } from '../../contexts/CalculatorContext'
import MeatIcon from '../../../assets/meatIcon'

export default function Meat() {
    const { meats, selectedMeats, setSelectedMeats } = useContext(CalculatorContext)

    const types = [
        { value: 'beef', label: 'Bovina', icon: MeatIcon },
        { value: 'pork', label: 'Suína', icon: MeatIcon },
        { value: 'chicken', label: 'Frango', icon: MeatIcon }
    ]

    return (
        <ItemList
            title="Carnes"
            number="02"
            items={meats}
            selectedItems={selectedMeats}
            setSelectedItems={setSelectedMeats}
            types={types}
        />
    )
}

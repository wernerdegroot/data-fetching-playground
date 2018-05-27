import * as React from 'react'
import { IBerth } from '../state/IBerth'

export interface IFilterProps {
  berths: IBerth[]
  selectedBerths: string[]

  onToggleBerth: (berth: string) => void
}

export const Filter = (props: IFilterProps) => {
  return (
    <div>
      {
        props.berths.map(berth => {
          const isSelected = props.selectedBerths.some(selectedBerth => berth.id === selectedBerth)
          return (
            <label key={berth.id}>
              <input checked={isSelected} type='checkbox' onClick={() => props.onToggleBerth(berth.id)}/>
              {berth.name}
            </label>
          )
        })
      }
    </div>
  )
}
export interface IBerth {
  id: string
  name: string
}

export const berth1: IBerth = {id: '1', name: 'First berth'}
export const berth2: IBerth = {id: '2', name: 'Second berth'}
export const berth3: IBerth = {id: '3', name: 'Third berth'}
export const berth4: IBerth = {id: '4', name: 'Fourth berth'}

export const defaultBerths = [berth1, berth2, berth3, berth4]




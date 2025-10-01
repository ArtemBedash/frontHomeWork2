import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }



export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {

                const sortedUp = [...state].sort((a, b) => a.name.localeCompare(b.name))

                return sortedUp
            }
            if (action.payload === 'down') {

                const sortedDown = [...state].sort((a, b) => b.name.localeCompare(a.name))

                return sortedDown
            }

            return state // need to fix
        }
        case 'check': {

            const newState=  state.filter((user) => user.age >= action.payload )


            return newState // need to fix
        }
        default:
            return state
    }
}

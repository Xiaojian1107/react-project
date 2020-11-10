
let initState = 0

export default function operaCount(preState=initState,action){
    const {type,data} = action
    let newState
    switch (type){
        case 'increment':
            newState = preState + data
            return newState
        case 'decrement':
            newState = preState - data
            return newState
        default:
            return  preState
    }
}
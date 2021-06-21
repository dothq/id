export const useID = (rounds: number = 4) => {
    return [...Array(rounds)].map(i => Math.round((Date.now() + Math.random() * Date.now())).toString(36)).join("")
}
import Test from "../models/test.ts";

export async function getTest() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const res = await data.json()
        return new Test(res)
    } catch (e) {
        console.log(e)
    }
}
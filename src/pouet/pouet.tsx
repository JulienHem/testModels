import {getTest} from "../services/test.service.ts";
import Test from "../models/test.ts";
import {useState} from "react";

export default function Pouet() {

    const [test, setTest] = useState<Test | any>()

    const handleClick = async () => {
        const data = await getTest()
        setTest(data)
    }


    console.log(test, "Test")

    return (
        <div>
            <button onClick={handleClick}>Que des bgs ici</button>
            {
                test ? <>
                        {JSON.stringify(test, null, 2)}
                    </>
                    :
                    null
            }
        </div>
    )
}
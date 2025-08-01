import { createRoot } from "react-dom/client"
const Son = (props: any) => {
    return <div>I am son. My name is {props.name}</div>
}
const Father = (props: any) => {
    return (
        <div>
            I am father. My name is {props.name}
            <Son name={props.sonName} />
        </div>
    )
}
const Granny = (props: any) => {
    return (
        <div>
            I am granny. My name is {props.name}
            <Father name={props.fatherName} sonName={props.sonName} />
        </div>
    )
}
export const Appp = () => {
    return (
        <div>
            <Granny name={"Бабуля"} fatherName={"Батя"} sonName={"Сын"} />
        </div>
    )
}
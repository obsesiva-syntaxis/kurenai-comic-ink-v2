interface VerticalNameEssence {
    name: string;
}

export const VerticalName = ({ name }: VerticalNameEssence) => {
    return (
        <>
        {
            name.split('').map(char => ( <h1>{char}</h1>))
        }
        </>
    )
}

export default VerticalName;
export default function Button({colorName, title, onBam}){
    return (
        <>
            <button type="button" className={`btn ${colorName}`} onClick={onBam}>{title}</button>
        </>
    )
}
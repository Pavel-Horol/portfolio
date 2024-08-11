interface DotsProps {
    rows: number
    columns: number
    gap?: number
}

export const Dots = ({rows, columns, gap=4}: DotsProps) => {
    const rowsArray = Array.from({length: rows}, (_, rowIndex) => (
        <div key={rowIndex} className={`flex gap-${gap}`}>
            {Array.from({length: columns}, (_, colIndex) => (
                <span key={colIndex} className="size-1 rounded-full bg-gray"></span>
            ))}
        </div>
    ))

    return  <div className={`flex flex-col gap-${gap}`}>
        {rowsArray}
    </div>
};
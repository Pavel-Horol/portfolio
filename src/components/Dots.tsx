interface DotsProps {
    rows: number
    columns: number
}

export const Dots = ({rows, columns}: DotsProps) => {
    const rowsArray = Array.from({length: rows}, (_, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
            {Array.from({length: columns}, (_, colIndex) => (
                <span key={colIndex} className="size-1 rounded-full bg-gray"></span>
            ))}
        </div>
    ))

    return  <div className="flex flex-col gap-4">
        {rowsArray}
    </div>
};
const Notify = () => {
    return (
        <>
            <div className="p-1 flex flex-row items-center justify-between bg-black bg-opacity-30 text-opacity-90">
                <h1 className="px-2 text-sm">19:30</h1>
                <div className="px-1 flex flex-row">
                    <i class='bx bx-signal-4'></i>
                    <i class='bx bx-signal-4'></i>
                    <i class='bx bxs-battery-charging'></i>
                </div>
            </div>
        </>
    )
}
export default Notify
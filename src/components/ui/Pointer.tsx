const Pointer = () => {
  return (
      <div className="grid grid-cols-3 grid-rows-3 min-h-[30px] min-w-[30px]">
        <div className="bg-main-red h-[10px] w-[10px] col-start-2 row-start-1"></div>
        <div className="bg-main-red h-[10px] w-[10px] col-start-1 row-start-2"></div>
        <div className="bg-main-red h-[10px] w-[10px] col-start-3 row-start-2"></div>
        <div className="bg-main-red h-[10px] w-[10px] col-start-2 row-start-3"></div>
      </div>
  )
}

export default Pointer

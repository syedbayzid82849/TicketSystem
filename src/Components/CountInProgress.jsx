
function CountInProgress() {
  return (
    <section className="container mx-auto m-20 flex justify-c gap-2">
      <div
        className="relative flex-1 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-md font-bold text-sm cursor-pointer"
      >
        {/* left image */}
        <img
          src="/src/assets/vector1.png"
          alt="decorative circle"
          className="absolute"
        />
        {/* right image */}
        <img
          src="/src/assets/vector1.png"
          alt="decorative circle"
          className="absolute right-0 scale-x-[-1]"
        />
        <div className="mx-10 my-17">
          <h3 className="text-2xl flex justify-center">In Progress</h3>
          <h1 className="text-6xl flex justify-center ">0</h1>

        </div>
      </div>
      <div
        className="relative flex-1 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-white rounded-md font-bold text-sm cursor-pointer"
      >
        {/* left image */}
        <img
          src="/src/assets/vector1.png"
          alt="decorative circle"
          className="absolute"
        />
        {/* right image */}
        <img
          src="/src/assets/vector1.png"
          alt="decorative circle"
          className="absolute right-0 scale-x-[-1]"
        />
        <div className="mx-10 my-17">
          <h3 className="text-2xl flex justify-center">Resolved</h3>
          <h1 className="text-6xl flex justify-center ">0</h1>

        </div>
      </div>
    </section>
  )
}
export default CountInProgress;

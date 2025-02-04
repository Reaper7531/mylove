import PropTypes from "prop-types"
const AdminFormComponent = ({handleChange,createNote}) => {
  return (
    <div className="w-full md:w-1/2 h-72 flex flex-col items-center gap-3  bg-pink-400 rounded-2xl">
    <h1 className="self-center mt-5 text-xl font-mono uppercase text-white font-semibold">
      Create Note
    </h1>
    <input
      placeholder="Name..."
      onChange={handleChange}
      className="bg-white w-64 focus:outline-0 p-1 rounded-lg"
      type="text"
      name="name"
      id=""
    />
    <input
      placeholder="Note..."
      onChange={handleChange}
      className="bg-white w-64 focus:outline-0 p-1 rounded-lg"
      type="text"
      name="note"
      id=""
    />
    <input
      placeholder="Image Link..."
      onChange={handleChange}
      className="bg-white w-64 focus:outline-0 p-1 rounded-lg"
      type="text"
      name="img"
      id=""
    />
    <button
      onClick={createNote}
      className="text-white font-mono p-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-100"
    >
      Create Note
    </button>
  </div>
  )
}

export default AdminFormComponent

AdminFormComponent.propTypes={
handleChange:PropTypes.func.isRequired,
createNote:PropTypes.func.isRequired
}
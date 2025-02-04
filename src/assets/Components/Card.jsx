import PropTypes from "prop-types"
function Card({name,img,note,color}) {
  return (
    <div className={`flex h-80 w-72  flex-col rounded-2xl border border-pink-800 shadow-xl  ${color?color:'bg-white'} card`}>
      <div className="flex h-1/4 bg-black rounded-t-2xl justify-between">
        <div className="flex h-full w-1/4 items-center justify-center ">
          <img className="w-12 h-12 object-cover object-center rounded-full" src={img} alt="" />
        </div>
        <div className="flex h-full w-3/4 items-center justify-center">
          <h1 className=" text-xl font-bold text-pink-400 card-font">- {name}</h1>
        </div>
      </div>
      <div className="flex h-3/4 justify-center  items-end">
        <p className="w-[90%] h-[90%]  overflow-y-scroll text-black">
          {note}
        </p>
      </div>
    </div>
  
  )
}

export default Card

Card.propTypes={
  name:PropTypes.string,
  img:PropTypes.string,
  note:PropTypes.string,
  color:PropTypes.string,
}



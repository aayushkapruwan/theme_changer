export default function Card() {
  return (
    <div className="relative ease-in-out h-[300px] group w-[240px] overflow-hidden rounded-3xl dark:bg-amber-100 bg-slate-400 hover:shadow-xl transition duration-300 hover:shadow-black/60 shadow-lg">
      <div className="">
        <img
          src="https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg"
          className="w-full h-48 object-cover"
          alt="Nature photography"
        />
      </div>
      <div className="mt-3 ml-3 text-[13px] font-bold text-gray-700">
        <p>1 day ago</p>
      </div>
      <div className="mt-1 group-hover:text-blue-700 ml-3 text-[14px] font-bold text-black">
        <p>Most Popular Nature Photography</p>
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-gray-600">posted by ayush</p>
          <div className="flex gap-3">
            <i className="fa-brands fa-gratipay text-red-500"></i>
            <i className="fa-solid fa-message text-blue-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

const Body=({dark})=>{
return (
   <div className=" container mx-auto px-6 md:py-24 lg:py-28 xl:py-32 ">
 <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
 {/* <div className="flex-1 space-y-6 lg-space-y-7">
 <div className="space-y-4 lg:space-y-7">
    <div className="flex items-center ">
<span>NEW</span>
</div>
 </div>
 </div> */}
 <div className="absolute top-4 left-2">
    <span>NEW</span>
 </div>
 </div>
   </div>
)
}
export default Body;
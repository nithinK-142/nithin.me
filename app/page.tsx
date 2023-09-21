export default function Home() {
  return (
//     <main className="container max-w-6xl flex flex-col justify-between ">
//       <section className="container py-5 my-5">
//   <div className="flex flex-wrap justify-center items-center hero-sec">
//     <div className="col-md-7 col-10 lg:hidden block pb-4">
//       <img src="/user.png" alt="Nithin K" className="avatar w-full" />
//     </div>
//     <div className="lg:col-6 col-12 px-3 text-lg-left text-center">
//       <h1 className="pb-2">NITHIN</h1>
//       <p className="m-0">
//         Developer, Programmer
//         <br /> &amp; Tech Enthusiast
//       </p>
//       <div className="pt-5">
//         <a className="custom-button px-4 py-2" target="_blank" rel="noreferrer" href="https://www.fiverr.com/nithin_webdev?up_rollout=true">
//           Hire Me
//         </a>
//       </div>
//     </div>
//     <div className="lg:col-6 lg:block hidden">
//       <img src="/user.png" alt="Nithin K" className="avatar w-10" />
//     </div>
//   </div>
// </section>

//     </main>

  <section className="py-5 my-5">
    <div className="flex">
      <div className="w-1/2 pb-4 bg-slate-500 flex justify-center">
        <img src="/user.png" alt="Nithin K" className="avatar w-3/5" />
      </div>
      <div className="w-1/2 px-3 bg-yellow-700">
        <h1 className="pb-2">NITHIN</h1>
        <p className="m-0">
          Developer, Programmer
          <br /> &amp; Tech Enthusiast
        </p>
        <div className="pt-5">
          <a
            className="px-4 py-2 custom-button"
            target="_blank"
            rel="noreferrer"
            href="https://www.fiverr.com/nithin_webdev?up_rollout=true"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  </section>


  );
}



import React from "react";

function PortfolioSection() {
  return (
    <div id="portfolio" className="mt-40">
      {/* <motion.h2
        className="text-center text-5xl font-extrabold mb-16 max-[425px]:text-3xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        My Portfolio
      </motion.h2> */}
      {/* <div className="flex flex-wrap max-[850px]:flex-col max-[850px]:items-center">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div> */}
      <h1 className="text-6xl text-white font-bold max-[1150px]:text-5xl max-[950px]:text-4xl max-[850px]:text-5xl max-[425px]:text-4xl max-[375px]:text-3xl">Why Us?</h1>
      <br />
        <h2 className="font-bold">Specialization &amp; Customization</h2>



        <p id="my-desc"
          className="leading-7 mb-24 max-[1150px]:mb-10 max-[950px]:text-sm max-[950px]:leading-6 max-[850px]:text-base max-[850px]:leading-7 max-[375px]:text-sm max-[375px]:leading-6">We specialize in Executive Search, BPO/KPO, and Industrial Relations Consulting, allowing us to offer a focused and tailored approach to meet the specific needs of our clients. We take the time to understand each client’s unique challenges and goals, and then work closely with them to develop customized solutions that deliver results.</p>



        <h2 className="font-bold">Experience</h2>



        <p id="my-desc"
          className="leading-7 mb-24 max-[1150px]:mb-10 max-[950px]:text-sm max-[950px]:leading-6 max-[850px]:text-base max-[850px]:leading-7 max-[375px]:text-sm max-[375px]:leading-6">Our founders have extensive experience working with some of the finest MNCs and National Companies, which gives us valuable insights and expertise that we bring to every project. Our track record of delivering solid results at the top and bottom line speaks for itself, and our clients trust us to deliver excellence every time.</p>



        <h2 className="font-bold">Network</h2>



        <p id="my-desc"
          className="leading-7 mb-24 max-[1150px]:mb-10 max-[950px]:text-sm max-[950px]:leading-6 max-[850px]:text-base max-[850px]:leading-7 max-[375px]:text-sm max-[375px]:leading-6">Our extensive network across MENAP gives us access to a wide range of talented professionals, even those who may not be actively seeking new opportunities. This means that we can bring in the right resources to meet our client’s needs, whether it’s for executive search or other HR services.</p>



        <h2 className="font-bold">Better Screening</h2>



        <p id="my-desc"
          className="leading-7 mb-24 max-[1150px]:mb-10 max-[950px]:text-sm max-[950px]:leading-6 max-[850px]:text-base max-[850px]:leading-7 max-[375px]:text-sm max-[375px]:leading-6">Our AI-fueled screening methodologies are groundbreaking and allow us to recommend better candidates, saving you time and money.</p>





        {/* <figure class="wp-block-image size-large"><img fetchpriority="high" decoding="async" width="1024" height="576" src="https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-1024x576.png" alt="" class="wp-image-419" srcset="https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-1024x576.png 1024w, https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-300x169.png 300w, https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-768x432.png 768w, https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-1536x864.png 1536w, https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1.png 1920w" sizes="(max-width: 1024px) 100vw, 1024px"></figure> */}
    </div>
  );
}

export default PortfolioSection;

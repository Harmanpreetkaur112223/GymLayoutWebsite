import React from 'react'

function About() {
  return (
    <>
    <div className="cards w-full minh-screen p-3 mt-4 ">
      <div className="row1 flex items-center justify-between gap-4">
      <div className="left p-8 h-full w-1/2 object-cover">
        <img src="/images/Card1.jpg" className='h-1/2 w-full rounded-md object-cover hover:scale-105 hover:shadow-md' alt="" />
      </div>
      <div className="right p-16 h-full w-1/2  flex items-center justify-center ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium in. Velit nam adipisci eius illum, veniam nemo recusandae?<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse perferendis quos omnis ut possimus dolorem obcaecati accusamus? Tempore eaque ex veniam molestiae. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consequuntur asperiores.
      </div>

      </div>
      <div className="row2 flex items-center justify-between">
        <div className="right p-16 h-full w-1/2  flex items-center justify-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam quas reprehenderit. Tenetur, saepe praesentium. Sint temporibus explicabo dolorem quisquam exercitationem ad! Delectus non nihil perferendis itaque maxime optio expedita amet accusamus natus eaque.
        </div>
        <div className="left  p-8 h-full w-1/2 object-cover">
        <img src="/images/Card2.jpg" className='h-1/2 w-5/4 rounded-md object-cover hover:scale-105' alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default About
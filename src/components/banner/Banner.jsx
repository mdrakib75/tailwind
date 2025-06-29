import React from 'react'
import Container from '../Container'
const Banner = () => {
  return (
     <div className='bg-[url(../../../public/banner.png)] py-[70px] lg:py-[200px] bg-no-repeat bg-center bg-cover relative z-[1] after:absolute after:left-0 after:top-0 after:content-[""] after:h-[100%] after:w-full after:bg-[rgba(27,26,26,0.5)] after:z-[-1]'>
      <Container>
       <h2 className='lg:text-[64px] px-10 lg:px-0 text-white font-bold lg:w-[842px] font-pops'>
        We exist since 1975 on the oil and gas industry.
        </h2>
        <div className="lg:text-[16px] text-[12px] font-semibold font-pops lg:mt-[31px] mt-7 ml-10 lg:ml-0">
          <a href="#" className='bg-red-600 text-white py-2 px-4 lg:py-[13px] lg:px-[42px]'>LEARN MORE</a>
        </div>
      </Container>
      </div>
  )
}

export default Banner
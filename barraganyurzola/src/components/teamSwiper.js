import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TeamCard  from "./teamCard.js"
import noImage from '../images/86d.jpg';
import '../styles/teamSwiper.css'
import Yura from '../images/YuranisTovar.jpeg';
import Pedro from '../images/PedroVelilla2.jpeg';
// import required modules
import { Pagination, Navigation } from "swiper";

 class TeamSwiper  extends React.Component  {
    render(){
    return (
    <>
      <Swiper 
       breakpoints={{
        // when window width is >= 640px

        320: {

          slidesPerView: 1,
        },
        760: {

          slidesPerView: 2,
        },
        890: {

          slidesPerView: 3,
        },

        1225: {

          slidesPerView: 3,
        },
      }} 
        // slidesPerView={3}
        spaceBetween={30}
        // slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="teamSwiper"
      >
        <SwiperSlide className="teamSwiperSlide">
        <TeamCard
          img={noImage}
          name={"Rocio Mendoza"}
        role ={"Administradora de empresas"}
         
         > </TeamCard>
       
        </SwiperSlide>

        <SwiperSlide className="teamSwiperSlide">
        <TeamCard
          img={noImage}
          name={"Greys Menco"}
        role ={"Contadora Publica"}
         
         > </TeamCard>
        </SwiperSlide>
        <SwiperSlide className="teamSwiperSlide">
        <TeamCard
          img={noImage}
          name={"Jesús Barragán"}
        role ={"Contador Publico"}
         
         > </TeamCard>
        </SwiperSlide>
        <SwiperSlide>
        <TeamCard
          img={noImage}
          name={"nombre 4"}
        role ={"Role 4"}
         
         > </TeamCard>
        </SwiperSlide >
        <SwiperSlide className="teamSwiperSlide">
        <TeamCard
          img={noImage}
          name={"nombre 5"}
        role ={"Role 5"}
         
         > </TeamCard>
        </SwiperSlide>
 
      </Swiper>
      </>
  );
    }
}
export default TeamSwiper;
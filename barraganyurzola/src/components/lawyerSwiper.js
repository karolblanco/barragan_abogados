import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LawyerCard  from "../components/lawyerCard.js"
import '../styles/lawyerSwiper.css'
import noImage from '../images/noImage.jpg';
import Pedro from '../images/PedroVelilla2.jpeg';
import Yura from '../images/YuranisTovar.jpeg';
import Cindy from '../images/CindyUrzola.jpeg';
import Carolina from '../images/CarolinaUrzola.jpeg';
import Daniela from '../images/DanielaLora.jpeg';






// import required modules
import { Pagination, Navigation } from "swiper";

 class lawyerSwiper  extends React.Component  {
    render(){
    return (
    <>
      <Swiper
       breakpoints={{
        // when window width is >= 640px

        320: {

          slidesPerView: 2,
        },
        890: {

          slidesPerView: 3,
        },

        1225: {

          slidesPerView: 3,
        },
      }} 
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <LawyerCard
          lawyerImg={Pedro}
          cardLawyerName={"Pedro Velilla Ordosgoitia "}
          cardLawyerRole ={"Abogado especialista en Derecho Administrativo y Contencioso Administrativo."}
          cardLawyerDescription={""}
         > </LawyerCard>
       
        </SwiperSlide>

        <SwiperSlide className="">
        <LawyerCard
          lawyerImg={Yura}
          cardLawyerName={"Yuranis Tovar Barragán"}
          cardLawyerRole ={"Abogada candidata a Especialista en Derecho Procesal"}
          cardLawyerDescription={""}
         > </LawyerCard>
        </SwiperSlide>
        <SwiperSlide>
        <LawyerCard
          lawyerImg={Cindy}
          cardLawyerName={"Cindy Urzola Tirado"}
          cardLawyerRole ={"Abogada egresada de la corporación universitaria del caribe CECAR."}
          cardLawyerDescription={""}
         > </LawyerCard>
        </SwiperSlide>
        <SwiperSlide>
        <LawyerCard
          lawyerImg={Carolina}
          cardLawyerName={"Carolina Urzola Tirado"}
          cardLawyerRole ={"Aspirante al título de abogada de la corporación universitaria del caribe CECAR"}
          cardLawyerDescription={""}
         > </LawyerCard>
        </SwiperSlide>
        <SwiperSlide>
        <LawyerCard
          lawyerImg={Daniela}
          cardLawyerName={"Daniela Lora"}
          cardLawyerRole ={"Aspirante al título de abogada de la corporación universitaria Antonio José de Sucre CORPOSUCRE"}
          cardLawyerDescription={""}
         > </LawyerCard>
        </SwiperSlide>
      </Swiper>
      </>
  );
    }
}
export default lawyerSwiper;
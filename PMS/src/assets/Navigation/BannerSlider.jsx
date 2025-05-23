import React, { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'images/Delhi_Gate.jpg',
  'images/DelhiFort.jpg',
  'images/Mumbai_Gate.jpg',
  'images/QutubMinar.jpg',
  'images/south-temple.jpg',
  'images/TajHotel.jpg',
  'images/TajMahal.jpg',
  'images/Travel.jpg',
  'images/varanasiGhat.jpg',
];

const BannerSlider = () => {
  const progressRef = useRef(null);
  const bottomProgressRef = useRef(null);

  const onAutoplayTimeLeft = (_, __, progress) => {
    const width = `${(1 - progress) * 100}%`;
    if (progressRef.current) progressRef.current.style.width = width;
    if (bottomProgressRef.current) bottomProgressRef.current.style.width = width;
  };

  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <SlideContent>
              <BannerImg src={img} alt={`Banner ${index}`} />
              <ProgressOverlay>
                <InnerProgressBar ref={progressRef} />
              </ProgressOverlay>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
      <BottomProgressWrapper>
        <BottomProgressBar ref={bottomProgressRef} />
      </BottomProgressWrapper>
    </SliderContainer>
  );
};

export default BannerSlider;

const SliderContainer = styled.div`
  width: 100%;
  margin-top: 5px;
  overflow: hidden;
`;

const SlideContent = styled.div`
  position: relative;
  height: 400px;
  width: 100%;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProgressOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 480px) {
    height: 3px;
  }
`;

const InnerProgressBar = styled.div`
  height: 100%;
  background: #8000ff;
  width: 0;
  transition: width 0.3s;
`;

const BottomProgressWrapper = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    height: 3px;
  }
`;

const BottomProgressBar = styled.div`
  height: 100%;
  background: #8000ff;
  width: 0;
  transition: width 0.3s;
`;


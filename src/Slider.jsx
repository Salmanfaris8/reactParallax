import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [carouselDom, setCarouselDom] = useState(null);
  const [sliderDom, setSliderDom] = useState(null);
  const [thumbnailBorderDom, setThumbnailBorderDom] = useState(null);
  const [thumbnailItemsDom, setThumbnailItemsDom] = useState([]);
  const [runNextAuto, setRunNextAuto] = useState(null);

  const timeRunning = 2000;
  const timeAutoNext = 9000;

  useEffect(() => {
    const carouselEl = document.querySelector('.carousel');
    const sliderEl = carouselEl?.querySelector('.carousel .list');
    const thumbnailEl = document.querySelector('.carousel .thumbnail');
    const thumbnailItems = thumbnailEl?.querySelectorAll('.item');
    
    setCarouselDom(carouselEl);
    setSliderDom(sliderEl);
    setThumbnailBorderDom(thumbnailEl);
    setThumbnailItemsDom(thumbnailItems);

    if (thumbnailItems && thumbnailItems.length > 0) {
      thumbnailEl.appendChild(thumbnailItems[0]);
    }

    setRunNextAuto(
      setTimeout(() => {
        document.getElementById('next').click();
      }, timeAutoNext)
    );

    return () => clearTimeout(runNextAuto);

  }, []);

  const showSlider = (type) => {
    const sliderItems = sliderDom?.querySelectorAll('.carousel .list .item');
    const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
      sliderDom?.appendChild(sliderItems[0]);
      thumbnailBorderDom?.appendChild(thumbnailItems[0]);
      carouselDom?.classList.add('next');
    } else {
      sliderDom?.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderDom?.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselDom?.classList.add('prev');
    }

    setTimeout(() => {
      carouselDom?.classList.remove('next');
      carouselDom?.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    setRunNextAuto(
      setTimeout(() => {
        document.getElementById('next').click();
      }, timeAutoNext)
    );
  };

  const nextDom = () => showSlider('next');
  const prevDom = () => showSlider('prev');



  return (
    <>
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src="https://images.hdqwalls.com/download/call-of-duty-modern-warfare-2019-4k-cb-1920x1080.jpg" alt="Call of Duty: Modern Warfare"/>
            <div className="content">
              <div className="title">Call of Duty: Modern Warfare</div>
              <div className="topic">2019</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus voluptas dolorum qui quam earum sint suscipit! Nostrum recusandae beatae, facere odio molestiae quae magni blanditiis, eius labore officiis maxime.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://staticg.sportskeeda.com/editor/2021/11/a1c6c-16360722802738-1920.jpg" alt="Call of Duty: Vanguard"/>
            <div className="content">
              <div className="title">Call of Duty: Vanguard</div>
              <div className="topic">2021</div>
              <div className="des">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et amet, a natus accusantium quae, eaque recusandae harum vitae impedit exercitationem sit illum quisquam repudiandae vel tempora officia voluptatibus laudantium blanditiis?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/home/reveal/new-era/new_era-mw2.jpg" alt="Call of Duty: Modern Warfare II"/>
            <div className="content">
              <div className="title">Call of Duty: Modern Warfare II</div>
              <div className="topic">2022</div>
              <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nobis nam accusantium modi eaque aperiam quia sit vel obcaecati assumenda cumque tempore ab, eligendi, impedit nostrum illo cum mollitia error!
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://blog.playstation.com/tachyon/2023/08/85647505a2fd87137be48370f5c8b7a9b41e1a4c-scaled.jpeg" alt="Call of Duty: MW III"/>
            <div className="content">
              <div className="title">Call of Duty: MW III</div>
              <div className="topic">2023</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, exercitationem ut? Consectetur aut cupiditate quidem, perferendis laboriosam rem earum unde illo. Perferendis, corrupti fugiat provident velit facilis consequatur mollitia veniam.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src="https://assets1.ignimgs.com/2019/05/30/call-of-duty-modern-warfare---button-01-1559237615728.jpg" alt="Modern Warfare"/>
          </div>
          <div className="item">
            <img src="https://c.clc2l.com/t/C/a/Call-of-Duty-Vanguard-Hq9VM0.jpg" alt="Vanguard"/>
          </div>
          <div className="item">
            <img src="https://media.sirusgaming.com/wp-content/uploads/2022/05/call-of-duty-modern-warfare-ii-01-1.jpg" alt="Modern Warfare II"/>
          </div>
          <div className="item">
            <img src="https://static.hub.game/e/eK2sloTg5t1Sri4MErTWRQ.jpeg" alt="MW III"/>
          </div>
        </div>
        <div className="arrows">
          <button onClick={prevDom} id="prev"><i className="fa-solid fa-arrow-left"></i></button>
          <button onClick={nextDom} id="next"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </>
  );
};

export default Slider;

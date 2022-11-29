import styles from './Carousel.module.css'

import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const items = [
    {
        src: 'http://3.bp.blogspot.com/-hlV27Em-qXc/Vct_S5Odi4I/AAAAAAAAA2s/gIPpci44Y8Y/s1600/Milford_sound_sunrise___New_Zealand_2560x1600.jpg',
        altText: 'Momentos inesquecíveis',
        caption: 'Momentos inesquecíveis',
        key: 1,
    },
    {
        src: 'http://2.bp.blogspot.com/-QN3KWlLrTmI/Vc92HCuSM1I/AAAAAAAAA3A/mrOEvclrVjE/s1600/Corner_of_paradise_2880x1800.jpg',
        altText: 'Lugares Perfeitos',
        caption: 'Lugares Perfeitos',
        key: 2,
    },
    {
        src: 'http://4.bp.blogspot.com/-z_iYdo3TKbk/VUF6Kq12eqI/AAAAAAAAAyk/a2vo1QavXoA/s1600/landscapes_China_Great_Wall_of_China_1680x1050.jpg',
        altText: 'Time to Travel',
        caption: 'Time to Travel',
        key: 3,
    },
];

function Carrossel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className={styles.custom_tag}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

export default Carrossel;
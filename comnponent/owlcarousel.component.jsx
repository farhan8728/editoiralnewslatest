import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MyComponent() {
    const options = {
      items: 3,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
    };
  
    return (
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
      </OwlCarousel>
    );
}



export default MyComponent;
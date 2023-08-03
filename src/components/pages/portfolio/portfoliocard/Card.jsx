import { Button, Container } from "reactstrap";
import "./card.css";

const Card = ({ data }) => {
  return (
    <>
      <Container>
        <div className="card__box">
          {data.map((item, index) => (
            <div key={index} className="card__item" data-aos="fade-right">
              <img src={item.image} alt="" />
              {item.name}
              <div className="card__btn d-flex justify-content-start gap-4">
                <Button>
                  <a href={item.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </Button>

                <Button>
                  <a href={item.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Card;

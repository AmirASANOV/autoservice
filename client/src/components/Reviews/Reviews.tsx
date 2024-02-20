import React from "react";
import s from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.reviewsClients}>Отзывы наших клиентов</h1>
      <div className={s.container}>
        <div className={s.item}>
          <div className={s.person}>
            <img className={s.photo} src="/reviews/Ellipse 1.png" alt="" />
            <h1 className={s.name}>Андрей Л.</h1>
          </div>
          <div className={s.review}>
            <p className={s.text}>
              Отличный АВТОСЕРВИС!Ремзона выложена белым кафелем, все рабочие
              места чистые и прибранные, квалифицированные мастера приёмщики,
              граммотные механики, ремонт по факту найденной первопричины, а не
              конечной замены, отличная зона ожидания с кофеавтоматом,
              телевизором и массой автолитературы. Ремонт выполнили качественно
              и честно проверенно независимой диагностикой по окончанию работ.
              Честный Автосервис!!!
            </p>
            <div className={s.starsSection}>
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
            </div>
          </div>
        </div>

        <div className={s.item}>
          <div className={s.person}>
            <img className={s.photo} src="/reviews/Ellipse 2.png" alt="" />
            <h1 className={s.name}>Виктор И.</h1>
          </div>
          <div className={s.review}>
            <p className={s.text}>
              Один приезжал, делал диагностику машины. Сделали всё достаточно
              быстро, я на время особо не смотрел. Мастера выявили, какие есть
              неисправности в машине и озвучили мне их. Предоставили документы,
              отчёт по диагностике, чек. Относились все вежливо и культурно.
              Приёмщик производит положительное впечатление. Скоро опять поеду
              на СТО.
            </p>
            <div className={s.starsSection}>
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
            </div>
          </div>
        </div>

        <div className={s.item}>
          <div className={s.person}>
            <img className={s.photo} src="/reviews/Ellipse 3.png" alt="" />
            <h1 className={s.name}>Марина О.</h1>
          </div>
          <div className={s.review}>
            <p className={s.text}>
              Мы приобретали здесь весной шины и диски, а зимой только шины.
              Здесь же на месте и переобули авто. Мастера замечательные, услуги
              оказывают быстро, хорошо относятся к клиенту. Оборудование на
              внешний вид в хорошем состоянии. Ассортимент и выбор товара
              большой, стоимость нормальная. Специалисты все расскажут и
              подскажут. В комнате ожидания чисто, есть автомат, где мы взяли
              какао. Мы выбрали данный сервис, так как он подходит нам по
              месторасположению.
            </p>
            <div className={s.starsSection}>
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
              <img className={s.start} src="/reviews/Star 1.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

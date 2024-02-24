import React from "react";
import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock";
import RowBlock from "../Standart/RowBlock/RowBlock";
import Button from "../Standart/Button/Button";
import H2 from "../Standart/H2/H2";
import Text from "../Standart/Text/Text";
import EventBlock from "../Blocks/EventBlock/EventBlock";
import MessageBlock from "../Blocks/MessageBlock/MessageBlock";

import backgroundMainImg from "../../assets/backgroundMainImg.webp";
import logo from "../../assets/герб.png";
import teaName from "../../assets/ДЕНЬ ГОРНОГО ЧАЯ.png";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import mainBlockLineImg from "../../assets/mainBlockLineImg.png";
import chatBackground from "../../assets/chatBackground.webp";
import tea_logo_img from "../../assets/tea-logo-img.png";
import Chat from "../Blocks/Chat/Chat";

function Main_Page({ children, ...props }) {

  return (
    <>
      <main>
        <CenterBlock
          width={"100%"}
          height={"50vh"}
          background={backgroundMainImg}
          gap={"70px"}
        >
          <ColumnBlock width={"900px"} gap={"50px"} justifyContent={"center"}>
            <CenterBlock>
              <img
                src={logo}
                alt=""
                style={{ width: "186px" }}
                className="logoImg"
              />
            </CenterBlock>
            <CenterBlock>
              <img
                src={teaName}
                alt=""
                style={{ width: "669px" }}
                className="logoText"
              />
            </CenterBlock>
          </ColumnBlock>
        </CenterBlock>

        <img
          src={mainBlockLineImg}
          alt=""
          width={"100%"}
          style={{ marginTop: "-81px", zIndex: "9999" }}
          className="bottomImgLine"
        />

        <Chat />

        <CenterBlock width={"100%"} id="programm">
          <ColumnBlock width={"var(--blockWidth)"} gap={"80px"}>
            <H2>ПРОГРАММА МЕРОПРИЯТИЯ</H2>
            <ColumnBlock>
              <RowBlock>
                <EventBlock
                  button={"Станция 5 очередь канатной дороги(Кафе Привал)"}
                  title={"10:00 - 15:00"}
                  body={"Дегустация горного чая.  Детская анимационная программа. Авторский сет от диджея Mr.As - 'Танцевальный склон'"}
                  color={"#fff"}
                  background_color={"#007030"}
                  link={'https://yandex.ru/maps/-/CDBpiU0D'}
                  split={'split'}
                />
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"10:00 - 15:00"}
                  body={"Дегустация горного чая. Детская анимационная программа"}
                  color={"#000"}
                  background_color={"#fff"}
                  bottomImg={"true"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                  split={'split'}
                />
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"16:00"}
                  body={
                    "Официальное открытие туристского информационного центра п.Домбай"
                  }
                  color={"#fff"}
                  background_color={"#E02010"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
              </RowBlock>
              <RowBlock>
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"16:15"}
                  body={
                    "Мастер-класс по вышиванию войлока"
                  }
                  color={"#000"}
                  background_color={"#fff"}
                  bottomImg={"true"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"16:15"}
                  body={
                    "Мастер-класс по национальным танцам"
                  }
                  color={"#fff"}
                  background_color={"#0090D0"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"17:15"}
                  body={"Мастер класс по приготовлению шорпы"}
                  color={"#000"}
                  background_color={"#fff"}
                  bottomImg={"true"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
              </RowBlock>
              <RowBlock>
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"17:45"}
                  body={"Викторина с призами"}
                  color={"#fff"}
                  background_color={"#E02010"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"18:15"}
                  body={"Дегустация национальной кухни"}
                  color={"#000"}
                  background_color={"#fff"}
                  bottomImg={"true"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"18:30 - 20:00"}
                  body={"Вечерная развлекательная программа "}
                  color={"#fff"}
                  background_color={"#007030"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
              </RowBlock>
              <RowBlock>
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"20:00"}
                  body={"Свободный микрофон"}
                  color={"#000"}
                  background_color={"#fff"}
                  bottomImg={"true"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
                <EventBlock
                  button={"Станция ТИЦ"}
                  title={"20:00"}
                  body={"Турнир по PS5"}
                  color={"#fff"}
                  background_color={"#0090D0"}
                  link={'https://yandex.ru/maps/-/CDBlq4kR'}
                />
                <EventBlock
                  img={tea_logo_img}
                  color={"#000"}
                  background_color={"#fff"}
                  bottomImg={"true"}
                />
              </RowBlock>
            </ColumnBlock>
          </ColumnBlock>
        </CenterBlock>



        <CenterBlock id="chat">
          <ColumnBlock
            width={"var(--blockWidth)"}
            gap={"80px"}
            background={chatBackground}
            padding={"20px"}
            borderRadius={"30px"}
          >
            <CenterBlock gap={"50px"}>
              <H2 color={"#fff"}>ИНТЕРАКТИВНЫЙ ЧАТ</H2>
              <ColumnBlock>
                <Text color={"#fff"} width={"650px"}>
                  Здесь вы можете написать сообщение, которое отобразиться на
                  главном экране мероприятия.
                </Text>
                <Text color={"#fff"} width={"650px"}>
                  Сообщения отправляются с интервалом в 5 минут.
                </Text>
              </ColumnBlock>

              <MessageBlock />
            </CenterBlock>
          </ColumnBlock>
        </CenterBlock>

        <img
          src={mainBlockLineImg}
          alt=""
          width={"100%"}
          style={{ marginTop: "0px", transform: "rotate(180deg)" }}
          className="bottomImgLine"
        />
      </main>
    </>
  );
}

export default Main_Page;

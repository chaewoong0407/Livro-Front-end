import React, { useState } from "react";
import "./MainLibrary.scss";
import ApplyBook from 'assets/icons/ApplyBook.png';
import MyPage from 'assets/icons/MyPage.png';
import SearchBook from 'assets/icons/SearchBook.png';
import CardArrow from 'assets/icons/CardArrow.png';
import NewLibrary from "../NewLibrary";

const MainLibrary = () => {
  const [isModal, setIsModal] = useState(false);
  console.log(isModal);

  const middleContents = [
    {
      name: '도서 검색',
      link: '',
      contents: '내가 찾는 도서의 유무와 도서관 내 위치를 검색을 통해 확인할 수 있어요.',
      icon: ApplyBook,
    },

    {
      name: '신간 도서 신청',
      link: '',
      contents: '교내 도서관에 없는 도서를 신청하고 승인 여부를 확인할 수 있어요.',
      icon: SearchBook,
      onClick: () => setIsModal(!isModal),
    },

    {
      name: '마이페이지',
      link: '',
      contents: '내가 대출한 책의 대출일자와 연체 여부 등을 빠르게 확인할 수 있어요.',
      icon: MyPage,
    },
  ]

  return (
    <div className="MainLibrary">
      {
        isModal && <NewLibrary isModal={isModal} setIsModal={setIsModal} />
      }
      <div className="MainLibrary-Top">
        <div className="MainLibrary-Top-Title">도서 확인</div>
        <div>찾고 있거나 이미 내가 대출한 도서, 또는 보고 싶은 도서를<br /> 쉽고 빠르게 신청하고 확인하세요</div>
      </div>

      <div className="MainLibrary-Contents">
        {
          middleContents.map((content, index) => {
            const { name, link, onClick, contents, icon } = content;

            return (
              <div className="MainLibrary-Contents-Card" key={index}>
                <img className="MainLibrary-Contents-Card-Arrow" src={CardArrow} alt ="arrow" />
                <img src ={icon} alt ="icon" />
                <div className="MainLibrary-Contents-Card-Contents">
                  <div className="MainLibrary-Contents-Card-Contents-Title">{name}</div>
                  <div className="MainLibrary-Contents-Card-Contents-SubTitle">{contents}</div>
                </div>
                <button className="MainLibrary-Contents-Card-Button" onClick={onClick && onClick}>확인하기</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default MainLibrary;

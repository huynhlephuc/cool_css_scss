import React from 'react'

const ShowLetter = () => {
  return (
    <div className="message">
        <div className="box">
            <input type="checkbox" id="message"></input>
            <div className="content">
                <img alt="" src="https://anhdephd.vn/wp-content/uploads/2022/06/anh-cho-cute-anh-cho-chibi-3.jpg" />
                <div className="title">Cúc yêu dấu</div>
                <div className="des">
                Anh yêu em nhiều lắm á
                </div><div className="des">
                  Nên là đừng buồn nữa nhé
                </div>
                <label className="" htmlFor="message">Love you!!</label>
            </div>
            <label htmlFor="message" className="designBox"></label>
        </div>
    </div>
  )
}

export default ShowLetter
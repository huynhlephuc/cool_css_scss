import React from 'react'

const ShowLetter = () => {
  return (
    <div className="message">
        <div className="box">
            <input type="checkbox" id="message"></input>
            <div className="content">
                <img alt="" src="https://anhdephd.vn/wp-content/uploads/2022/06/anh-cho-cute-anh-cho-chibi-3.jpg" />
                <div className="title">My lovely Cúc</div>
                <div className="des">
                  Cúc dễ thương lắm đó Cúc có biết không nè, nên là Cúc phải cười nhiều vô, không thôi là xấu á. Hôm nào Cúc muốn thì tui qua chở Cúc đi ăn nha. Cúc muốn đi đâu cũng được. 
                  <p>Iu Cúc nhất luôn </p>
                  <p>Kí tên: Phúc nè :3</p>
                </div>
                <label className="" htmlFor="message">Close</label>
            </div>
            <label htmlFor="message" className="designBox"></label>
        </div>
    </div>
  )
}

export default ShowLetter
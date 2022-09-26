import React from 'react';

export const SlideCheckbox = () => {
  return (
    <div className="form">
        <input type="checkbox" name="" id="one" />
        <label htmlFor="one">
            <div className="check"></div>
            <div className="status" data-yes="ĐÃ" data-no="CHƯA">CHƯA</div>
            <div className="content">CHẤP NHẬN</div>
        </label>
    </div>
  )
}

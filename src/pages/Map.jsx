import React from 'react';
import DefaultLayout from '../layouts/Default';
import { useNavigate } from 'react-router-dom';

function AddCollection() {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="w-full">
        <div className="flex justify-around my-4">
          <div>지도</div>
        </div>
      </div>
      {/* 지도보기 버튼 */}
      <button
        onClick={() => navigate('/')}
        className="absolute px-4 py-2 transform -translate-x-1/2 bg-gray-300 rounded-full bottom-[100px] left-1/2">
        목록으로 보기
      </button>
    </DefaultLayout>
  );
}

export default AddCollection;

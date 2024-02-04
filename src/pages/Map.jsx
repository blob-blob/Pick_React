import { useEffect, useRef } from 'react';
import DefaultLayout from '../layouts/Default';
import { useNavigate } from 'react-router-dom';

const { naver } = window;

// window.addEventListener(
//   'mousewheel',
//   function () {
//     // 이벤트 핸들러의 코드
//     console.log('mousewheel');
//   },
//   { passive: true },
// );
function AddCollection() {
  const navigate = useNavigate();
  const mapElement = useRef(null);

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <DefaultLayout>
      <div className="w-full">
        <div className="flex justify-around my-4">
          <div ref={mapElement} style={{ minHeight: '400px' }} />
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

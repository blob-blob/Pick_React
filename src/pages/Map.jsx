import { useEffect } from 'react';
import DefaultLayout from '../layouts/Default';
import { useNavigate } from 'react-router-dom';

const { naver } = window;

function AddCollection() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!naver || !naver.maps) return;
    console.log('naver map', naver.maps);
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769);
    console.log('naver location', location);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };

    const map = new naver.maps.Map('map', mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <DefaultLayout>
      <div className="w-full">
        <div className="flex justify-around my-4">
          <div id="map" style={{ width: '100vh', height: '100vh' }} />
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

import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="text-black ">
      <div className="pt-16 pl-2">
        <div className="text-h2">장소를 찾는 새로운 방법</div>
        <div className="flex text-h2">
          <div className="italic font-bold text-purple">Pick!</div>
          <p>에 오신걸 환영합니다.</p>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8">
        <img src="../src/assets/firstImage.png" alt="첫 번째 이미지" />
      </div>
      <div className="fixed w-full text-center bottom-8">
        <button
          className="w-full text-white bg-black border-none cursor-pointer "
          style={{ width: 'calc(100% - 3rem)' }}
          onClick={() => navigate('/')}>
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Welcome;

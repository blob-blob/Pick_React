import React from 'react';
import TungLayout from '../layouts/Tung';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function AddCollection() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const categories = [
    { label: '카페', value: 'cafe' },
    { label: '도서관', value: 'library' },
    // 다른 카테고리 추가...
  ];

  return (
    <TungLayout>
      <div className="w-full ">
        <div className="flex items-center justify-between my-2">
          <div className="text-xl font-bold">컬렉션 장소 추가</div>
          <Button icon="pi pi-times" aria-label="Close" onClick={() => navigate.goBack()} />
        </div>
        <div className="mt-10 mb-2">
          <label htmlFor="place">장소명을 입력해주세요.</label>
          <InputText id="place" placeholder="장소명을 입력해주세요." className="w-full p-2" />
        </div>
        <Button label="주소 검색하기" className="p-2 my-2 w-fit" size="small" />
        <Dropdown
          value={null}
          options={categories}
          onChange={e => console.log(e.value)}
          placeholder="장소의 카테고리를 선택해 주세요"
          className="w-full p-2 my-2"
        />
        <div className="my-4">
          <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
          <label htmlFor="binary" className="ml-2 p-checkbox-label">
            이미지를 공개할게요
          </label>
        </div>
        <div className="my-4">
          {/* 이미지 선택 구현 부분은 프로젝트 요구 사항에 따라 다를 수 있으므로 여기서는 생략합니다. */}
        </div>
      </div>
      <div className="fixed w-full bottom-8 text-title-3">
        <Button
          label="장소 등록하기"
          className="w-full p-2 text-white bg-black min-h-10 "
          size="large"
          style={{ width: 'calc(100% - 2rem)' }}
        />
      </div>
    </TungLayout>
  );
}

export default AddCollection;

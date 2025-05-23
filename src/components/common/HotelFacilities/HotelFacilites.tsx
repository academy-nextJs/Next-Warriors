import { MyChip } from '../Buttons/Chip-btn';
import Facilities from './Facilities';

const FacilityData = [
  { label: 'تعداد اتاق', text: '۴ خواب' },
  { label: 'گرمایش', text: 'شوفاژ' },
  { label: 'سرمایش', text: 'کولر' },
  { label: 'بالکن', text: 'دارد' },
  { label: 'اجاق گاز', text: 'دارد' },
  { label: 'پارکینگ', text: 'دارد' },
  { label: 'آسانسور', text: 'دارد' },
  { label: ' حمام', text: 'دارد' },
  { label: 'نوع نما', text: 'رومی' },
  { label: 'سن بنا', text: 'نوساز' },
  { label: ' اوپن', text: 'سنگی' },
  { label: 'خط تلفن', text: 'دارد' },
];

const HotelFacilites = () => {
  return (
    <div className="w-full md:w-1/2 flex gap-4 flex-col">
      <MyChip className="border-1 text-primaryPurple border-primaryPurple  dark:bg-black dark:text-primaryPurple bg-white">
        امکانات هتل
      </MyChip>
      <Facilities FacilityData={FacilityData} />
    </div>
  );
};

export default HotelFacilites;

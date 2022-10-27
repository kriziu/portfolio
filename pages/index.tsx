import SubHeader from '@/common/components/SubHeader';
import CustomMouse from '@/modules/customMouse';
import Header from '@/modules/header';

export default function HomePage() {
  return (
    <>
      <CustomMouse />

      <div className="h-px min-h-[100%] w-full">
        <Header />
        <SubHeader />
      </div>
    </>
  );
}

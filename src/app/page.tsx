import  Content  from '../components/Content';
import Image from "next/image";
import data from '../../data'

export default function Home() {
  return (
    <main className="relative z-10 pb-[30px]">
      <div className="container mx-auto my-0">
        <Content data={data} />
      </div>

      <Image className="back-image z-0" src={"/Vector2.png"} alt={"back image"} width={210} height={368} />
    </main>
  );
}

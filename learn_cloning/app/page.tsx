import Hero from '@/components/Hero';
import Navbar from '../components/Navbar'
import Carousel from '@/components/Carousel';
import Pitch from '@/components/Pitch';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col w-full max-w-[1521px] overflow-clip items-center min-h-screen  bg-neutral-950 font-inter ">
        <Navbar />
        <Hero />
        <Carousel />
        <Pitch />
        <div className='w-full px-3 lg:px-16 lg:gap-12 grid grid-cols-1 lg:grid-cols-2'>
          <Card title='GRAND OPERA HOUSE' description='Bringing Oliver’s world-famous art and stories to life through vibrant design and creative content.' imageUrl='https://eyekiller.s3-assets.com/work/featured-image/_1582x1582_crop_center-center_none/33652/Grand-Opera-House-Featured-Image.webp' />
          <div className="mt-6 lg:mt-42">
            <Card title='Arts Council of Northern Ireland' description='Advancing accessibility and engagement with intuitive design, inclusivity, and innovation.' imageUrl='https://eyekiller.s3-assets.com/work/featured-image/_1582x1582_crop_center-center_none/34258/Arts-Council-of-NI-Featured-Image_2025-03-27-114234_gffy.webp' />
          </div>
        </div>
        <div className='p-3 w-full mt-8'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

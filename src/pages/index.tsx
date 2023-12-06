import { getDoctors, getPackages } from "../components/utils/wordpress";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { BookNow } from "@/components/BookNow";
import { OurSpecilaities } from "@/components/OurSpecilaities";
import { OurDoctors } from "@/components/OurDoctors";
import { OurPackages } from "@/components/OurPackages";
import { TDoctors, TPackages } from "@/components/types/types";

interface HomePageProps {
  doctors: TDoctors[];
  packages: TPackages[];
}

export default function Home({ doctors, packages }: HomePageProps) {
  return (
    <div>
      <div className="bg-primary">
        <MaxWidthWrapper>
          <div className="flex flex-col flex-1  py-5">
            <ImageSlider />
          </div>
        </MaxWidthWrapper>
      </div>
      <BookNow />
      <OurSpecilaities />
      <OurDoctors doctors={doctors} />
      <OurPackages packages={packages}/>
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  const doctors = await getDoctors();
  const packages = await getPackages();

  return {
    props: {
      doctors,
      packages
    },
    revalidate: 10,
  };
}

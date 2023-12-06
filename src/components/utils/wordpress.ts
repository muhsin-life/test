const BASE_URL = "https://ikigaimedicalcentre.com/wp-json/wp/v2";

export async function getDoctors() {
  const doctorsRes = await fetch(BASE_URL + "/our-doctors?_embed");
  const doctors = await doctorsRes.json();
  return doctors;
}

export async function getPackages() {
  const packagesRes = await fetch(BASE_URL + "/packages?_embed");
  const packages = await packagesRes.json();
  return packages;
}

// export async function getDoctor(slug: string) {
//   const doctors = await getDoctors();
//   const doctorArray = doctors.filter((doctor: any) => doctor.slug == slug);
//   const post = doctorArray.length > 0 ? doctorArray[0] : null;
//   return post;
// }

// export async function getSlugs(type: string) {
//   let elements = [];
//   switch (type) {
//     case "posts":
//       elements = await getDoctors();
//       break;
//   }
//   const elementsIds = elements.map((element: any) => {
//     return {
//       params: {
//         slug: element.slug,
//       },
//     };
//   });
//   return elementsIds;
// }

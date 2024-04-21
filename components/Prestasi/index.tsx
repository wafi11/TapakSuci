import Image from "next/image";
import Link from "next/link";
import React from "react";

const Prestasi = () => {
  return (
    <>
      <div className="min-h-screen bg-prestasi1 bg-fixed flex justify-center items-center bg-no-repeat bg-cover bg-center">
        <h1 className="text-white font-bold text-6xl text-center">Prestasi </h1>
      </div>
      <div className="w-full  bg-[#F6F5F2] h-full pb-2 ">
        <div className="container grid md:grid-cols-2    justify-center items-center  lg:text-center gap-4 lg:gap-11 py-5">
          <div className="text-left justify-b">
            <Link
              href={
                "https://www.umko.ac.id/2021/10/25/tak-banyak-diberitakan-alhamdulillah-tapak-suci-juara-umum-pencak-silat-pon-xx/"
              }
              className="uppercase text-4xl ">
              JUARA UMUM PON XX di Papua
            </Link>
            <p className="py-4">
              Pekan Olahraga Nasional (PON) XX di Papua berakhir Jumat 15
              Oktober 2021 dengan menempatkan Propinsi Jawa Barat sebagai juara
              umum, disusul DKI Jakarta pada peringkat ke-2, Jawa Timur pada
              peringkat ke-3 dan tuan rumah Papua di peringkat ke-4. Perjuangan
              para atlet Tapak Suci luar biasa, sehingga final perolehan medali
              untuk cabang olah raga pencak silat, atlet Tapak Suci berhasil
              memboyong 4 emas, 3 perak, dan 12 perunggu.
            </p>
          </div>
          <Image
            src="https://media.suara.com/pictures/653x366/2021/10/12/49363-iqbal-candra.webp"
            height={1000}
            width={1000}
            alt="../"
            className="object-cover max-h-30 w-full bg-center"
          />
        </div>
      </div>
      <div className="min-h-screen bg-prestasi2 flex justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center">
        <h1 className="text-white font-bold text-6xl">Prestasi </h1>
      </div>
      <div className="w-full  bg-[#F6F5F2] h-full pb-2 ">
        <div className="container grid md:grid-cols-2    justify-center items-center  lg:text-center gap-4 lg:gap-11 py-5">
          <div className="text-left justify-b">
            <Link
              href={
                "https://www.umko.ac.id/2021/10/25/tak-banyak-diberitakan-alhamdulillah-tapak-suci-juara-umum-pencak-silat-pon-xx/"
              }
              className="uppercase text-4xl ">
              JUARA UMUM The 19th World Pencak Silat Championship 2022
            </Link>
            <p className="py-4">
              Ketua PP TSPM, Afnan Hadikusumo menuturkan kado berupa medali
              prestasi dari Atlet TSPM yang berhasil mengukir juara di kejuaraan
              internasional ini patut disyukuri. Tidak hanya itu, pada The 19th
              World Pencak Silat Championship 2022 di Malaysia yang berlangsung
              25-31 Juli 2022, sumbangan medali yang diberikan oleh Atlet TSPM
              membawa Indonesia menjadi juara umum. Dalam kejuaran tersebut,
              Indonesia berhasil mengumpulkan sebanyak 11 medali emas, 9 medali
              perak, dan 8 medali perunggu. Dari total perolehan tersebut, Atlet
              Pencak Silat TSPM menyumbang 1 medali emas atas nama Bayu
              Lesamana, 3 medali perak atas nama Nia Larasati, Iqbal Chandra. P,
              Fransiska Sandra, serta 2 perunggu atas nama Eko Febrianto dan
              Dinda Nuraidha.
            </p>
          </div>
          <Image
            src="https://zonanews.id/wp-content/uploads/2022/08/IPSI-Kudus.jpg"
            height={1000}
            width={1000}
            alt="../"
            className="object-cover max-h-30 w-full"
          />
        </div>
      </div>
      <div className="min-h-screen bg-prestasi3 flex justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center">
        <h1 className="text-white font-bold text-6xl">Prestasi </h1>
      </div>
      <div className="w-full  bg-[#F6F5F2] h-full ">
        <div className="container grid md:grid-cols-2    justify-center items-center  lg:text-center gap-4 lg:gap-11 py-5">
          <div className="text-left justify-b">
            <Link
              href={
                "https://www.umko.ac.id/2021/10/25/tak-banyak-diberitakan-alhamdulillah-tapak-suci-juara-umum-pencak-silat-pon-xx/"
              }
              className="uppercase text-4xl ">
              TAPAK SUCI SUKSES MENJADI PENYUMBANG EMAS TERBANYAK TIMANS PENCAK
              SILAT INDONESIA
            </Link>
            <p className="py-4">
              Perhelatan Sea Games 2023 telah berakhir,Indonesia behasil finish
              di tempat ketiga pada Sea Games yang digelar di kamboja ini.
              Indonesia berhasil mendulang 81 emas,80 perak ,dan 109 perunggu.
              Pencak Silat menjadi Cabang Olahraga Penyumbang Medali Emas
              Terbayak ,yakni dengan perolehan 9 emas,6 perak, dan 1 Perunggu.
              Menurut informasi yang TIM PWMJATENG dapatkan,terdapat 4 atlet dan
              3 official,dengan perolehan 2 emas,2 perak.
            </p>
          </div>
          <Image
            src="https://akcdn.detik.net.id/visual/2023/05/10/iqbal-raih-emas-pencak-silat-nomor-tanding-class-f-2_169.jpeg?w=650"
            height={1000}
            width={1000}
            alt="../"
            className="object-cover max-h-30 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Prestasi;

{
  /* <Link
            href={
              "https://muhammadiyah.or.id/2022/08/milad-ke-59-tapak-suci-mendapat-kado-medali-dari-atletnya-pada-kejuaraan-internasional/"
            }
            className="uppercase text-2xl underline">
            JUARA UMUM The 19th World Pencak Silat Championship 2022
          </Link>
          <Link
            href={
              "https://pwmjateng.com/sukses-jadi-cabor-penyumbang-emas-terbanyak-ada-tapak-suci-di-balik-kegemilangan-timnas-pencak-silat-indonesia/"
            }
            className="uppercase text-2xl underline">
            Penyumbang Medali terbanyak Pada Sea Games 2023
          </Link> */
}

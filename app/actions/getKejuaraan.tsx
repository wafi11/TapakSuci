export interface KejuaraanProps {
  userId?: string;
  startDate?: string;
  endDate?: string;
  category?: string;
  nama?: string;
  lokasi?: string;
}

export default async function getKejuaraan(params: KejuaraanProps) {
  try {
    const { userId, startDate, endDate, lokasi, category, nama } = params;
    let query: any = [];
    if (userId) {
      query.userId = userId;
    }
    if (startDate && endDate) {
      query.NOT = {
        kejuaraan: {
          OR: [
            {
              endDate: { gte: startDate },
              startDate: { lte: endDate },
            },
            {
              startDate: { lte: startDate },
              endDate: { gte: endDate },
            },
          ],
        },
      };
    }
    if (category) {
      query.category = category;
    }
    if (lokasi) {
      query.lokasi = lokasi;
    }
    if (nama) {
      query.nama = nama;
    }
    const kejuaraans = await prisma?.kejuaraan.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const SafeKejuaraan = kejuaraans?.map((juara) => ({
      ...juara,
      createdAt: juara.createdAt.toISOString(),
      startDate: juara.startDate.toISOString(),
      endDate: juara.endDate.toISOString(),
    }));
    return SafeKejuaraan;
  } catch (err) {
    console.log("errr");
  }
}

import prisma from "@/app/libs/prismDb";

interface Iparams {
  kejuaraansId?: string;
}

export default async function getKejuaraanId(params: Iparams) {
  try {
    const { kejuaraansId } = params;
    const kejuaraan = await prisma.kejuaraan.findUnique({
      where: {
        id: kejuaraansId,
      },
      include: {
        user: true,
      },
    });
    if (!kejuaraan) {
      return null;
    }
    return {
      ...kejuaraan,
      createdAt: kejuaraan.createdAt.toString,
      user: {
        ...kejuaraan.user,
        createdAt: kejuaraan.user.createdAt.toString(),
        updatedAt: kejuaraan.user.updatedAt.toString(),
        emailVerified: kejuaraan.user.emailVerified?.toString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}

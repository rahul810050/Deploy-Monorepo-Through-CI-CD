import prisma from "@repo/db/client";
export default async function Home() {
  const res = await prisma.user.findFirst();
  return (
    <div>
      <h1>Hello World</h1>
      <p>{res?.id}</p>
      <p>{res?.username}</p>
      <p>{res?.password}</p>
    </div>
  );
}

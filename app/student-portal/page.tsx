import StudentPortal from "@/modules/studentportal/StudentPortal";

export default function StudentPortalPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return <StudentPortal page={searchParams?.page} />;
}

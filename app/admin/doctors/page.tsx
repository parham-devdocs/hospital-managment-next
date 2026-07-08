import Header from "@/app/shared/components/header";
import DoctorsTable from "../../features/admin/doctors";
import { BriefcaseMedical } from "lucide-react";
import { getDoctors } from "@/app/features/admin/doctors/services";
import { PageProps } from "../../shared/types";
import PaginationComp from "@/app/shared/components/pagination/pagination";

const page = async ({ searchParams }: PageProps) => {
  // Get page from URL query string
  const resolvedSearchParams = await searchParams;
  const currentPage = resolvedSearchParams?.page
    ? parseInt(resolvedSearchParams.page.toString(), 10)
    : 1;

  // Fetch doctors with pagination
  const {
    data: doctors,
    error,
    count,
    totalPages,
  } = await getDoctors(currentPage);

  // Render content based on state
  const renderContent = () => {
    // Loading state
    if (!doctors && !error) {
      return (
        <div className="flex h-full w-full items-center justify-center p-8">
          <div className="text-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
            <p className="mt-2 text-sm text-muted-foreground">
              Loading doctors...
            </p>
          </div>
        </div>
      );
    }

    // Error state
    if (error) {
      return (
        <div className="flex h-full w-full items-center justify-center p-8">
          <div className="text-center text-red-500">
            <p className="font-semibold">Error loading doctors</p>
            <p className="text-sm">{(error as any).message}</p>
          </div>
        </div>
      );
    }

    // No doctors found
    if (!doctors || doctors.length === 0) {
      return (
        <div className="flex h-full w-full items-center justify-center p-8">
          <div className="text-center text-muted-foreground">
            <p>No doctors found</p>
          </div>
        </div>
      );
    }

    // Data state - show table and pagination
    return (
      <>
        <DoctorsTable doctors={doctors} />
        {totalPages > 1 && (
          <PaginationComp pageCount={totalPages} activePage={currentPage} />
        )}
      </>
    );
  };

  return (
    <div className="w-full h-3/4 px-10 py-4 space-y-3.5">
      <Header
        title="List Of Doctors"
        subtitle={`${count || 0} doctors found`}
        icon={<BriefcaseMedical />}
      />
      {renderContent()}
    </div>
  );
};

export default page;

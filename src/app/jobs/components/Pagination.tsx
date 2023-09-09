import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { jobItemsPerPageAtom, totalJobsAtom } from "./JobSection";

export default function Pagination() {
  const router = useRouter();
  const [jobItemsPerPage] = useAtom(jobItemsPerPageAtom);
  const [totalJobs] = useAtom(totalJobsAtom);

  const jobsPerPage = jobItemsPerPage;

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  let pageNums = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNums.push(i);
  }

  function handleNext() {
    if (currentPage + 1 > totalPages) return;

    const newPage = currentPage + 1;

    params.delete("page");
    params.append("page", String(newPage));
    router.push(`/jobs?` + params.toString());
  }

  function handlePrev() {
    if (currentPage - 1 <= 0) return;

    const newPage = currentPage - 1;

    params.delete("page");
    params.append("page", String(newPage));
    router.push(`/jobs?` + params.toString());
  }

  return (
    <div className="w-full mt-1 mb-10 bg-opacity-60 flex items-center bg-primary-lighter rounded-md">
      <button
        onClick={handlePrev}
        className="duration-100 bg-primary-lighter rounded-md px-5 py-3 hover:bg-primary-lightest"
      >
        Prev
      </button>

      <ul className="w-full flex items-center justify-evenly text-accent-light">
        {pageNums.map((pageNum) => {
          if (pageNum == currentPage)
            return <PageNumber key={pageNum} isActive={true} pageNumber={pageNum} />;
          return <PageNumber key={pageNum} pageNumber={pageNum} />;
        })}
      </ul>

      <button
        onClick={handleNext}
        className="duration-100 bg-primary-lighter rounded-md px-5 py-3 hover:bg-primary-lightest"
      >
        Next
      </button>
    </div>
  );
}

function PageNumber({ isActive, pageNumber }: { isActive?: boolean; pageNumber: number }) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  params.delete("page");
  params.append("page", String(pageNumber));
  const newUrlParams = params.toString();

  return (
    <li className={isActive ? "text-secondary font-medium" : ""}>
      {isActive ? pageNumber : <Link href={`/jobs?` + newUrlParams}>{pageNumber}</Link>}
    </li>
  );
}

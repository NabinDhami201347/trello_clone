import { Suspense } from "react";

import { BoardList } from "@/components/organization/board-list";
import { Info } from "@/components/organization/info";
import { Separator } from "@/components/ui/separator";

const OrganizationIdPage = () => {
  return (
    <div className="w-full mb-20 ">
      <Info isPro={false} />
      <Separator />

      <div className="px-2 md:px-4 my-10">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;

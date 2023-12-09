import { Suspense } from "react";

import { ActivityList } from "@/components/activity/activity-list";
import { Separator } from "@/components/ui/separator";
import { Info } from "@/components/organization/info";

const ActivityPage = async () => {
  return (
    <div className="w-full">
      <Info isPro={false} />
      <Separator className="my-2" />

      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
